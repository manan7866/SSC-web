"use client";

import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  LinkAuthenticationElement,
  Elements,
  AddressElement,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import { config } from "@/lib/config";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
const stripePromise = loadStripe(config.STRIPE_PUBLIC_KEY!);

interface Props {
  clientSecret: string;
  successCallback: () => void;
}

const DonationPayment: React.FC<Props> = ({
  clientSecret,
  successCallback,
}) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: clientSecret,
      }}
    >
      <StripePaymentElementForm
        successCallback={successCallback}
        clientSecret={clientSecret}
      />
    </Elements>
  );
};

const StripePaymentElementForm: React.FC<Props> = ({
  clientSecret,
  successCallback,
}) => {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe is not initialized.");
      toast.error("Stripe is not initialized.");
      setLoading(false);
      return;
    }

    try {
      // Validate form first
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || "Validation failed.");
        toast.error(submitError.message || "Validation failed.");
        setLoading(false);
        return;
      }

      // Confirm Setup Intent
      const result = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: window.location.href,
        },
        redirect: "if_required",
      });

      if (result?.error) {
        setError(result.error.message || "Failed to set up payment method.");
        toast.error(result.error.message || "Failed to set up payment method.");
        setLoading(false);
        return;
      }

      if (result?.paymentIntent) {
        setSuccess(true);
        toast.success("Thanks for your donation 🎉");
        successCallback();
        router.push("/");

      }
    } catch (err) {
      setError("An unexpected error occurred.");
      toast.error("An unexpected error occurred.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LinkAuthenticationElement />
      <AddressElement
        options={{
          mode: "billing",
          // allowedCountries: ["US", "CA", "GB", "AU"], // ✅ restrict if needed
          fields: {
            phone: "always", // force phone required
          },
        }}
      />
      <PaymentElement />
      {stripe && (
        <Button
          disabled={loading || !stripe}
          // loading={loading}
          id="submit"
          type="submit"
          className="ml-auto mt-3 block bg-fixnix-lightpurple"
        >
          Conform payment
        </Button>
      )}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </form>
  );
};

export default DonationPayment;
