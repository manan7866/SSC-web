"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Script from "next/script";
import { loadStripe } from "@stripe/stripe-js";
import { config } from "@/lib/config";
import { Button } from "../ui/button";
import { CreditCardIcon, LoaderCircle } from "lucide-react";
import StripePaymentMethod from "../stripe-payment/StripeAddPaymentMethod";
import { createSetupIntent } from "@/hooks/stripeServices";
import toast from "react-hot-toast";
import PaymentMethodList from "../stripe-payment/PaymentMethodsList";

type PaymentGateway = "paypal" | "paystack";

export type PaymentButtonsProps = {
  amount: number;
  currency?: string; // e.g. "USD"
  description?: string;
  payerEmail?: string;
  onSuccess?: (gateway: PaymentGateway, payload: unknown) => void;
  onError?: (gateway: PaymentGateway, error: unknown) => void;
  className?: string;
};

declare global {
  interface Window {
    paypal?: any;
    PaystackPop?: any;
  }
}

export default function PaymentButtons(props: PaymentButtonsProps) {
  const {
    amount,
    currency = "USD",
    description = "Payment",
    payerEmail,
    onSuccess,
    onError,
    className,
  } = props;

  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPayPalReady, setIsPayPalReady] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [openStripeModal, setOpenStripeModal] = useState(false);
  const [stripeLoading, setStripeLoading] = useState(false);

  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as
    | string
    | undefined;
  const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as
    | string
    | undefined;

  const formattedAmount = useMemo(() => amount.toFixed(2), [amount]);

  // Initialize PayPal buttons when script ready
  useEffect(() => {
    if (!paypalClientId) return; // no client id provided
    if (!isPayPalReady) return;
    if (!window.paypal || !paypalContainerRef.current) return;

    // Clear any previous render
    paypalContainerRef.current.innerHTML = "";

    try {
      window.paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
          },
          createOrder: (_data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  description,
                  amount: { value: formattedAmount, currency_code: currency },
                },
              ],
            });
          },
          onApprove: async (_data: any, actions: any) => {
            try {
              const details = await actions.order.capture();
              onSuccess?.("paypal", details);
            } catch (err) {
              onError?.("paypal", err);
            }
          },
          onError: (err: any) => onError?.("paypal", err),
        })
        .render(paypalContainerRef.current);
    } catch (err) {
      onError?.("paypal", err);
    }
  }, [
    currency,
    description,
    formattedAmount,
    isPayPalReady,
    onError,
    onSuccess,
    paypalClientId,
  ]);

  const handlePaystack = useCallback(() => {
    if (!paystackPublicKey) {
      onError?.(
        "paystack",
        new Error("Missing NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY")
      );
      return;
    }
    if (!window.PaystackPop) {
      onError?.("paystack", new Error("Paystack script not loaded"));
      return;
    }

    try {
      const handler = window.PaystackPop.setup({
        key: paystackPublicKey,
        email: payerEmail || "customer@example.com",
        amount: Math.round(amount * 100), // in kobo/cents equivalent
        currency,
        callback: function (response: unknown) {
          onSuccess?.("paystack", response);
        },
        onClose: function () {
          // no-op
        },
      });
      handler.openIframe();
    } catch (err) {
      onError?.("paystack", err);
    }
  }, [amount, currency, onError, onSuccess, paystackPublicKey, payerEmail]);

  const stripeSetupIntent = async () => {
    try {
      setStripeLoading(true);
      const res = await createSetupIntent();
      const client_secret = res.data.client_secret;
      console.log("<><><> client secret", client_secret);

      setClientSecret(client_secret);
      setOpenStripeModal(true);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setStripeLoading(false);
    }
  };

  return (
    <div className={className}>
      {/* stripe */}
      <PaymentMethodList />
      {/* {clientSecret && (
        <StripePaymentMethod
          show={openStripeModal}
          setShow={setOpenStripeModal}
          clientSecret={clientSecret}
        />
      )} */}
      {/* PayPal */}
      {paypalClientId && (
        <>
          <Script
            src={`https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
              paypalClientId
            )}&currency=${encodeURIComponent(currency)}`}
            strategy="afterInteractive"
            onReady={() => setIsPayPalReady(true)}
            onError={(e) => onError?.("paypal", e)}
          />
          <div ref={paypalContainerRef} />
        </>
      )}

      {/* Paystack */}
      {paystackPublicKey && (
        <>
          <Script
            src="https://js.paystack.co/v1/inline.js"
            strategy="afterInteractive"
          />
          <button
            type="button"
            onClick={handlePaystack}
            className="mt-4 w-full bg-black text-white py-3 rounded-md hover:opacity-90"
          >
            Pay with Paystack
          </button>
        </>
      )}

      {/* {!paypalClientId && !paystackPublicKey && (
        <p className="text-sm text-red-600">
          No payment gateways configured. Add NEXT_PUBLIC_PAYPAL_CLIENT_ID or
          NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY to your environment.
        </p>
      )} */}
    </div>
  );
}
