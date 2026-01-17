"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { createDonation, type DonationPayload } from "@/hooks/donation";
import PaymentButtons from "@/components/payments/PaymentButtons";
import DonationPayment from "./PaymentElement";
import { toast } from "sonner";

export default function DonationForm() {
  const router = useRouter();

  // ---- State Definitions ----
  const [amount, setAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<string>("");
  const [donationPool, setDonationPool] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Personal Info typed explicitly
  const [personalInfo, setPersonalInfo] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // ---- Donation Options ----
  const donationOptions = ["$10", "$20", "$50", "$100", "Custom Amount"];
  const donationPools = [
    {
      label: "Donate to the Sufi Science Center",
      value: "SUFI_SCIENCE_CENTER",
    },
    { label: "Sponsor a Sufi Scholar or Student", value: "SPONSOR_SCHOLAR" },
    {
      label: "Contribute to the Preservation of Sacred Art and Craft",
      value: "PRESERVE_ART_AND_CRAFT",
    },
    { label: "Sponsor Sacred Events and Gatherings", value: "SPONSOR_EVENTS" },
  ];

  // Map donation types to backend enum values
  const donationTypeMap: { [key: string]: string } = {
    "One-Time": "ONE_TIME",
    Monthly: "MONTHLY",
    GeneralDonations: "GENERAL_DONATIONS",
    SponsorshipDonations: "SPONSORSHIP_DONATIONS",
    PatronMembershipContributions: "PATRON_MEMBERSHIP_CONTRIBUTIONS",
    "Educational&ScholarshipDonations": "EDUCATIONAL_SCHOLARSHIP_DONATIONS",
    "Legacy&PlannedGiving": "LEGACY_PLANNED_GIVING",
    Recurring: "RECURRING",
  };

  // ---- Handlers ----
  const handlePoolChange = (poolLabel: string) => {
    setDonationPool((prev: string[]) =>
      prev.includes(poolLabel)
        ? prev.filter((item) => item !== poolLabel)
        : [...prev, poolLabel]
    );
  };

  const handlePersonalInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleDonationTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDonationType(e.target.value);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const validateForm = () => {
    if (!amount && !customAmount) {
      setError("Please select or enter a donation amount");
      return false;
    }
    if (!donationType) {
      setError("Please select a donation type");
      return false;
    }
    if (donationPool.length === 0) {
      setError("Please select at least one donation pool");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Get the final amount (either selected or custom)
      const finalAmount =
        amount === "Custom Amount" ? customAmount : amount.replace("$", "");

      // Map donation pools to backend enum values
      const mappedPools = donationPool.map((pool) => {
        const poolOption = donationPools.find((p) => p.label === pool);
        return poolOption ? poolOption.value : pool;
      });

      const payload: DonationPayload = {
        amount: finalAmount,
        pool: mappedPools,
        type: donationTypeMap[donationType] || donationType,
      };

      const res = await createDonation(payload);
      setClientSecret(res.data.client_secret);
      toast.success("Payment setup created please continue your payment");
      // setSuccess("Thank you! Please complete payment below.");

      // Reset form after successful submission
      // setTimeout(() => {

      //   setSuccess("");
      // }, 3000);
    } catch (err: any) {
      console.error("Error creating donation:", err);
      toast.error(err.message || "Something went wrong");
      setError("Failed to process donation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Product Details">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={() => router.back()}
          className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-gray-100 px-4 py-2 rounded"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg my-4 rounded-xl">
        <h1 className="text-3xl font-bold text-left text-fixnix-lightpurple mb-6">
          Make a Donation
        </h1>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        {!clientSecret ? (
          <form onSubmit={handleSubmit}>
            {/* Donation Amount Section */}
            <div className="mb-4">
              <label className="block text-fixnix-lightpurple text-xl font-bold">
                Donation Amount
              </label>
              <div className="mt-2 space-y-2">
                {donationOptions.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="amount"
                      value={option}
                      onChange={handleAmountChange}
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
                {amount === "Custom Amount" && (
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    className="w-full p-2 border rounded mt-2"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                )}
              </div>
            </div>

            {/* Donation Type Section */}
            <div className="mb-4">
              <label className="block text-fixnix-lightpurple text-xl font-bold">
                Donation Type
              </label>
              <select
                className="w-full p-2 border rounded mt-2"
                value={donationType}
                onChange={handleDonationTypeChange}
              >
                <option value="">Choose a Donation Type</option>
                <option value="One-Time">One-Time</option>
                <option value="Monthly">Monthly</option>
                <option value="GeneralDonations">General Donations</option>
                <option value="SponsorshipDonations">
                  Sponsorship Donations
                </option>
                <option value="PatronMembershipContributions">
                  Patron Membership Contributions
                </option>
                <option value="Educational&ScholarshipDonations">
                  Educational & Scholarship Donations
                </option>
                <option value="Legacy&PlannedGiving">
                  Legacy & Planned Giving
                </option>
                <option value="Recurring">Recurring</option>
              </select>
            </div>

            {/* Donation Pool Section */}
            <div className="mb-4">
              <label className="block text-fixnix-lightpurple text-xl font-bold">
                Donation Pool
              </label>
              <div className="mt-2 space-y-2">
                {donationPools.map((pool) => (
                  <label
                    key={pool.value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      value={pool.label}
                      checked={donationPool.includes(pool.label)}
                      onChange={() => handlePoolChange(pool.label)}
                      className="w-4 h-4"
                    />
                    <span>{pool.label}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Personal Information Section */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-fixnix-lightpurple text-white p-3 rounded-lg font-semibold hover:bg-fixnix-darkpurple transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Confirm Details"}
            </button>

            {/* Render payment buttons when form is valid and not loading */}
            {success && (
              <div className="mt-4">
                <PaymentButtons
                  amount={Number(
                    (amount === "Custom Amount"
                      ? customAmount
                      : amount.replace("$", "")) || "0"
                  )}
                  currency="USD"
                  description={`Donation - ${donationType || "One-Time"}`}
                  payerEmail={personalInfo.email}
                  onSuccess={() => alert("Donation payment successful")}
                  onError={(_g, e) =>
                    alert("Payment error: " + ((e as any)?.message || e))
                  }
                />
              </div>
            )}
          </form>
        ) : null}
        {clientSecret ? (
          <DonationPayment
            clientSecret={clientSecret}
            successCallback={() => {
              setAmount("");
              setCustomAmount("");
              setDonationType("");
              setDonationPool([]);
              setPersonalInfo({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                country: "",
              });
              setClientSecret(null);
            }}
          />
        ) : null}
      </div>
    </Layout>
  );
}
