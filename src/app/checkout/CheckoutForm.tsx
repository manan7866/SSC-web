"use client";

import React, { FC, use, useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormValues } from "./Schema";
import { FormInput } from "@/components/form-input"; // ✅ use the one you made
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { checkoutSubmit } from "@/hooks/cart";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import { config } from "@/lib/config";
import apiClient from "@/lib/apiClient";
import ShippingOptions from "./ShippingServices";
import { useDebounceCallback } from "@/hooks/use-debounce-callback";
const stripePromise = loadStripe(config.STRIPE_PUBLIC_KEY!);
interface Props {
  onSuccess: (value: boolean) => void;
  subTotal: string;
}

const CheckoutForm: FC<Props> = ({ onSuccess, subTotal }) => {
  const [loading, setLoading] = useState(false);
  const [isZipChanging, setIsZipChanging] = useState(false);
  const [shippingRatesLoading, setShippingRatesLoading] = useState(false);
  const [shippingRates, setShippingRates] = useState([]);
  const [shippingCostError, setShippingCostError] = useState<string | null>(
    null
  );
  const [shippingCost, setShippingCost] = useState(0);

  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { country: "us" },
    mode: "all",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: CheckoutFormValues) => {
    console.log(data);

    setLoading(true);
    try {
      const res = await checkoutSubmit(data);
      const { clientSecret, paymentIntentStatus, order } = res.data;

      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to initialize");

      // ✅ Case 1: Payment already succeeded (rare, but possible)
      if (paymentIntentStatus === "succeeded") {
        toast.success("Payment confirmed! Your order has been placed.");
        onSuccess(true);
        return;
      }

      // ⚠️ Case 2: Requires authentication (3DSecure / OTP)
      if (paymentIntentStatus === "requires_action") {
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret
        );

        if (error) {
          toast.error(
            error.message || "Authentication failed. Please try again."
          );
          onSuccess(false);
          return;
        }

        if (paymentIntent?.status === "succeeded") {
          toast.success("Payment confirmed! Your order has been placed.");
          onSuccess(true);
        } else {
          toast.error("Payment not completed. Please try again.");
          onSuccess(false);
        }
        return;
      }

      // ⏳ Case 3: Pending (normal flow) — wait for webhook to update order
      toast.info("Your order is created and pending payment confirmation.");
      onSuccess(true);
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast.error(err.response?.data?.message || "Error processing request");
      onSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const calculateShippingCost = useCallback(
    async (country: string, zip: string) => {
      try {
        methods.setValue("shippingCost", 0);
        methods.setValue("selectedShippingService", "");
        methods.setValue("estimatedDeliveryDays", null);
        setShippingCostError(null);
        setShippingRatesLoading(true);
        const res = await apiClient.post("/vendor/shipping/calculate", {
          destination: {
            country,
            zipCode: zip,
          },
        });
        const result = await res.data.data;
        setShippingRates(result.deliveryOptions);
      } catch (error: any) {
        setShippingCostError(
          error.response.data.message || "Error calculating shipping cost"
        );
      } finally {
        setShippingRatesLoading(false);
      }
    },
    []
  );
  const debouncedSearch = useDebounceCallback(calculateShippingCost, 500);
  useEffect(() => {
    const country = methods.getValues("country");
    const zip = methods.getValues("zip");
    if (country && zip && zip.length >= 4) {
      calculateShippingCost(country, zip);
    }
  }, [methods.watch("country"), calculateShippingCost]);

  const selectedShippingCost = methods.watch("shippingCost");

  useEffect(() => {
    if (selectedShippingCost !== undefined) {
      setShippingCost(methods.getValues("shippingCost"));
    }
  }, [selectedShippingCost]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-fixnix-darkpurple mb-6">
        Shipping Details
      </h2>

      <FormProvider {...methods}>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Country Select */}
          <div>
            <select
              defaultValue={"usa"}
              {...methods.register("country")}
              className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
            >
              <option value="">Select a country</option>
              <option value="ca">Canada</option>
              <option value="uk">UK</option>
              <option value="au">Australia</option>
              <option value="us">USA</option>
            </select>
          </div>

          {/* First & Last Name */}
          <FormInput name="fullName" label="Full Name" />
          {/* <FormInput name="lastName" label="Last Name" /> */}
          {/* Email */}
          <FormInput name="email" label="Email Address" type="email" />
          <FormInput name="phone" label="Phone" type="tel" />
          {/* Address */}
          <FormInput name="shippingAddress" label="Address" />
          {/* <FormInput
            name="apartment"
            label="Apartment, suite, unit (optional)"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput name="city" label="City" />
            <FormInput name="state" label="State" />
          </div> */}

          {/* ZIP & Phone */}
          <FormInput
            name="zip"
            label="ZIP Code"
            type="number"
            onChange={(e) => {
              methods.setValue("zip", e.target.value);
              debouncedSearch(methods.getValues("country"), e.target.value);
            }}
            min={4}
            max={5}
          />
          {shippingRatesLoading ? (
            <div className="text-center text-gray-500">Calculating...</div>
          ) : shippingCostError ? (
            <div className="text-center text-red-500">{shippingCostError}</div>
          ) : shippingRates.length === 0 ? (
            <div className="text-center text-gray-500">
              Change address and ZIP code to see options
            </div>
          ) : (
            <ShippingOptions shippingServices={shippingRates} />
          )}

          {/* Submit */}
          <div className="relative w-full">
            <Button
              type="submit"
              disabled={
                loading || shippingCostError !== null || shippingRatesLoading
              }
              className="w-full rounded-lg shadow-lg overflow-hidden relative bg-fixnix-lightpurple"
            >
              <span className="relative z-10">
                {loading
                  ? "Processing..."
                  : `Confirm Order $${(Number(subTotal) + Number(shippingCost || 0)).toFixed(2)}`}
              </span>
              <motion.span
                className="absolute top-0 left-0 h-full w-full pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                  width: "60%",
                  opacity: 0.7,
                  filter: "blur(1px)",
                }}
              />
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutForm;
