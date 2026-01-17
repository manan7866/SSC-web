"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyAccount, resendOTP } from "@/hooks/authServices";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";

export default function OTP() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emailFromParams = searchParams.get("email") || "";
  const flowType = searchParams.get("flow") || "verification";

  const [email, setEmail] = useState(emailFromParams);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    if (emailFromParams) {
      setEmail(emailFromParams);
    }
  }, [emailFromParams]);

  const handleVerify = async () => {
    if (!email || !otp) {
      setError("Please enter both email and OTP");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (flowType === "password-reset") {
        setSuccess("OTP verified! Redirecting to set new password...");
        setTimeout(() => {
          router.push(`/new-password?email=${encodeURIComponent(email)}`);
        }, 1500);
      } else {
        try {
          const response = await verifyAccount(email, otp);
          if (response.data?.accessToken && response.data?.refreshToken) {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            toast.success("Account verified", {
              position: "top-center",
              richColors: true,
            });
            setSuccess(
              "Account verified successfully! Redirecting to login..."
            );
            setTimeout(() => {
              router.push("/login");
            }, 1500);
          }
        } catch (error) {
          setError("Verification failed. Please try again.");
          throw error;
        }
      }
    } catch (err: any) {
      toast.error("Account verified", {
        position: "top-center",
        richColors: true,
      });
      setError(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError("Please enter your email first");
      return;
    }
    setResendMessage("");
    setError("");
    setResendDisabled(true);

    try {
      await resendOTP(email);
      setResendMessage("OTP has been resent to your email.");
    } catch (err: any) {
      setError(err.message || "Failed to resend OTP");
    }

    setTimeout(() => {
      setResendDisabled(false);
      setResendMessage("");
    }, 10000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
          {flowType === "password-reset"
            ? "Password Reset OTP"
            : "Account Verification OTP"}
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          {flowType === "password-reset"
            ? "We've sent a 6-digit OTP to your email for password reset"
            : "We've sent a 6-digit OTP to your email for account verification"}
        </p>

        <div className="space-y-4 mt-4">
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
            required
          />

          {/* OTP Input (shadcn InputOTP) */}
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(val) => {
                setOtp(val);
                setError("");
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}

          <button
            onClick={handleVerify}
            className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition disabled:opacity-50"
            disabled={loading || !email || otp.length !== 6}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <div className="flex justify-between items-center text-sm">
            <button
              onClick={handleResend}
              disabled={resendDisabled}
              className={`${
                resendDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-fixnix-darkpurple hover:underline"
              } font-medium transition`}
            >
              {resendDisabled ? "Wait 10s..." : "Resend OTP"}
            </button>
            <button
              onClick={() => router.back()}
              className="text-fixnix-darkpurple hover:underline font-medium"
            >
              Go Back
            </button>
          </div>

          {resendMessage && (
            <p className="text-green-600 text-sm text-center">
              {resendMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
