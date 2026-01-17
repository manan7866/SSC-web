"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyBillingDetails, BillingFormValues } from "./Schema"; // ✅ new schema
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";
import { updateBilling } from "@/hooks/cart";
import { toast } from "sonner";

const BillingForm = () => {
  const [loading, setLoading] = useState(false);
  const methods = useForm<BillingFormValues>({
    resolver: zodResolver(verifyBillingDetails),
    defaultValues: {
      country: "4", // default USA
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: BillingFormValues) => {
    setLoading(true);
    try {
      const res = await updateBilling(data);
      console.log(res.data);
      toast.success("Thanks for your order we'll get back to you soon");
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast.error("Error processing request");
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        className="space-y-4 bg-white p-6 rounded-xl shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold text-fixnix-darkpurple mb-6">
          Billing Address
        </h2>

        {/* Country */}
        {/* Full Name */}
        <FormInput name="fullName" label="Full Name" />

        {/* Email */}
        <FormInput name="email" label="Email Address" type="email" />

        {/* Address */}
        <FormInput name="address" label="Street Address" />

        {/* ZIP & Country side by side */}
        {/* <div className="grid grid-cols-2 gap-4"> */}
        <FormInput name="zip" label="ZIP Code" />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <select
            {...methods.register("country")}
            className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
          >
            <option value="">Select a country</option>
            <option value="1">Canada</option>
            <option value="2">England</option>
            <option value="3">Australia</option>
            <option value="4">USA</option>
          </select>
        </div>
        {/* </div> */}

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg shadow-lg bg-fixnix-lightpurple"
        >
          {loading ? "Saving..." : "Save Billing Info"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default BillingForm;
