"use client";

import {
  createSetupIntent,
  getPAymentMethods,
  setDefaultPaymentMethod, // 👈 you'll need this API in your backend
  GetPaymentMethodsResponse,
} from "@/hooks/stripeServices";
import { useEffect, useState } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa6";
import { CreditCardIcon, LoaderCircle, Trash2Icon } from "lucide-react";
import StripePaymentMethod from "./StripeAddPaymentMethod";
import { toast } from "sonner";
import { Button } from "../ui/button";
import apiClient from "@/lib/apiClient";

export default function PaymentMethodList() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [openStripeModal, setOpenStripeModal] = useState(false);
  const [stripeLoading, setStripeLoading] = useState(false);
  const [paymentMethods, setPaymentMethods] =
    useState<GetPaymentMethodsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [defaultMethodId, setDefaultMethodId] = useState<string | null>(null);

  useEffect(() => {
    fetchPaymentMethodsItems();
  }, []);

  const fetchPaymentMethodsItems = async () => {
    try {
      setLoading(true);
      const res = await getPAymentMethods();
      setPaymentMethods(res);
      setDefaultMethodId(res.data.defaultMethodId || null);
    } catch (err) {
      console.error("Error fetching payment methods:", err);
      setError("Failed to load payment methods");
    } finally {
      setLoading(false);
    }
  };

  const stripeSetupIntent = async () => {
    try {
      setStripeLoading(true);
      const res = await createSetupIntent();
      const client_secret = res.data.client_secret;

      setClientSecret(client_secret);
      setOpenStripeModal(true);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setStripeLoading(false);
    }
  };

  const handleDefaultChange = async (methodId: string) => {
    try {
      setDefaultMethodId(methodId);
      await setDefaultPaymentMethod(methodId); // 👈 call backend to update Stripe
      toast.success("Default payment method updated!");
    } catch (error) {
      toast.error("Failed to update default method");
    }
  };

  if (loading) {
    return (
      <div className="space-y-3 max-w-[95%] mx-auto">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 border rounded-2xl shadow-sm animate-pulse"
          >
            {/* Left side: brand + info */}
            <div className="flex items-center gap-3">
              {/* Fake radio */}
              <div className="h-4 w-4 rounded-full border bg-gray-200" />

              {/* Fake brand icon */}
              <div className="h-6 w-10 bg-gray-200 rounded" />

              {/* Fake text */}
              <div className="space-y-2">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-3 w-32 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Fake delete button */}
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      {paymentMethods?.data.paymentMethods.map((method) => {
        const isMastercard = method.card.brand === "mastercard";
        const isVisa = method.card.brand === "visa";

        return (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {/* Left side: brand + info */}
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="defaultPayment"
                checked={defaultMethodId === method.id}
                onChange={() => handleDefaultChange(method.id)}
              />
              <div className="text-2xl text-primary">
                {isMastercard && <FaCcMastercard />}
                {isVisa && <FaCcVisa />}
              </div>
              <div>
                <p className="font-medium">
                  {method.card.brand.toUpperCase()} •••• {method.card.last4}
                  {defaultMethodId === method.id && (
                    <span className="ml-2 text-xs text-green-600 font-semibold">
                      (Default)
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500">
                  Billing address: {method.billing_details.name},{" "}
                  {method.billing_details.address?.line1},{" "}
                  {method.billing_details.address?.city},{" "}
                  {method.billing_details.address?.country}
                </p>
              </div>
            </div>
            <DeletePaymentMethodButton
              paymentMethodId={method.id}
              callbck={fetchPaymentMethodsItems}
            />
          </div>
        );
      })}

      {clientSecret && (
        <StripePaymentMethod
          show={openStripeModal}
          setShow={setOpenStripeModal}
          clientSecret={clientSecret}
          successCallback={fetchPaymentMethodsItems}
        />
      )}

      {/* Add new card */}
      <div
        className="flex items-center gap-3 p-4 border-dashed border-2 rounded-2xl cursor-pointer hover:bg-gray-50 transition"
        onClick={stripeSetupIntent}
      >
        {stripeLoading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <>
            <CreditCardIcon className="w-5 h-5 " />
            <span className="font-medium text-gray-700">
              Add new payment method
            </span>
          </>
        )}
      </div>
    </div>
  );
}

const DeletePaymentMethodButton = ({
  paymentMethodId,
  callbck,
}: {
  paymentMethodId: string;
  callbck: () => void;
}) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const deleteMethod = async () => {
    try {
      setDeleteLoading(true);
      const res = await apiClient.delete("/stripe/delete-payment-method", {
        data: { paymentMethodId },
      });
      if (res.data) {
        toast.success(res.data.message || "Payment method deleted");
        callbck();
      }
    } catch (error) {
      toast.error(
        (error instanceof Error && error.message) ||
          "Error deleting payment method"
      );
    } finally {
      setDeleteLoading(false);
    }
  };
  return (
    <Button
      variant="ghost"
      className="hover:shadow-md group"
      size="icon"
      onClick={deleteMethod}
    >
      {deleteLoading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Trash2Icon className="text-destructive group-hover:rotate-12 group-hover:scale-105 transition-all duration-75 ease-linear" />
      )}
    </Button>
  );
};
