"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { resendOTP } from "@/hooks/authServices";
import { Card, CardContent } from "@/components/ui/s-card";
import { cn } from "@/lib/utils";
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LoginFormInputs, loginSchema } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { config } from "@/lib/config";

export default function Login() {
  const authContext = useAuth(); // Move hook call to top level
  const methods = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const [authData, setAuthData] = useState<{ login: ((email: string, password: string) => Promise<void>) | null; googleLogin: ((email: string, fullName: string) => Promise<void>) | null; authLoading: boolean }>({
    login: authContext.login || null,
    googleLogin: authContext.googleLogin || null,
    authLoading: authContext.loading || false
  });

  useEffect(() => {
    // Update auth data when authContext changes
    setAuthData({
      login: authContext.login || null,
      googleLogin: authContext.googleLogin || null,
      authLoading: authContext.loading || false
    });
  }, [authContext.login, authContext.googleLogin, authContext.loading]);

  const { login, googleLogin } = authData;
  const authLoading = authData.authLoading;
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);
  const [error, setError] = useState<string | React.ReactElement | null>(null);
  const [googleError, setGoogleError] = useState<string | null>(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    setError(null);
    setGoogleError(null);
    setSuccessMessage(null);

    if (!login) {
      setError("Authentication system is not available");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      await login(data.email, data.password);
      const returnUrl = localStorage.getItem("returnUrl") || "/";
      localStorage.removeItem("returnUrl");
      toast.success("Authorization success", {
        position: "top-center",
        richColors: true,
      });
      router.push(returnUrl);
    } catch (err: any) {
      toast.error(err.message || "Authorization failed", {
        position: "top-center",
        richColors: true,
      });
      // Check if this is a verification error
      if (
        err.message &&
        err.message.includes("Please verify your email address first")
      ) {
        setError(
          <div className="text-center">
            <p className="text-amber-600 mb-2">{err.message}</p>
            <p className="text-sm text-gray-600 mb-2">
              Didn't receive the email?{" "}
              <button
                type="button"
                onClick={() => handleResendOTP(data.email)}
                disabled={resendLoading}
                className="text-fixnix-darkpurple hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resendLoading ? "Sending..." : "Resend verification email"}
              </button>
            </p>
            <p className="text-sm text-gray-600">
              Or{" "}
              <Link
                href={`/otp?email=${encodeURIComponent(data.email)}`}
                className="text-fixnix-darkpurple hover:underline font-medium"
              >
                go to verification page
              </Link>
            </p>
          </div>
        );
      } else {
        setError(err.message || "Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Auth Initialization
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      (window as any).google.accounts.id.initialize({
        client_id: config.GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });
      (window as any).google.accounts.id.renderButton(
        document.getElementById("google-btn"),
        { theme: "outline", size: "large", width: 350 }
      );
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleResponse = async (response: any) => {
    if (!googleLogin) {
      setGoogleError("Authentication system is not available");
      setGoogleLoginLoading(false);
      return;
    }

    try {
      setGoogleLoginLoading(true);
      setGoogleError(null);
      const user = decodeJwt(response.credential);
      await googleLogin(user.email, user.name);
      router.push("/");
    } catch (err: any) {
      setGoogleError(err.message || "Google login failed");
    } finally {
      setGoogleLoginLoading(false);
    }
  };

  const handleResendOTP = async (email: string) => {
    try {
      setResendLoading(true);
      setError(null);
      setSuccessMessage(null);
      await resendOTP(email);
      setSuccessMessage(
        "Verification email sent successfully! Please check your inbox."
      );
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to resend OTP. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  const decodeJwt = (token: string) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      throw new Error("Invalid Google token");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-fixnix-lightpurple/5 via-white to-fixnix-darkpurple/5 py-12 px-4 sm:px-6">
      <div className="max-w-4xl w-full">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden shadow-2xl rounded-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0 md:grid md:grid-cols-2">
              <FormProvider {...methods}>
                <div className="p-8 md:p-10 lg:p-12">
                  {googleLoginLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex items-center justify-center z-50 rounded-2xl">
                      <LoaderCircle
                        className="animate-spin text-fixnix-lightpurple"
                        size={60}
                      />
                    </div>
                  )}
                  <form
                    className="min-h-[500px] relative"
                    onSubmit={methods.handleSubmit(onSubmit)}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-fixnix-lightpurple flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
                    </div>

                    <div className="space-y-6">
                      <div className="grid gap-2">
                        <FormInput
                          label="Email Address"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="grid gap-2">
                        <FormInput
                          label="Password"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="remember"
                              className="h-4 w-4 text-fixnix-lightpurple focus:ring-fixnix-lightpurple border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                              Remember me
                            </label>
                          </div>
                          <Link
                            href="/forget-password"
                            className="text-sm font-medium text-fixnix-lightpurple hover:text-fixnix-darkpurple transition-colors"
                          >
                            Forgot password?
                          </Link>
                        </div>
                      </div>

                      {error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                          {typeof error === 'string' ? error : 'An error occurred'}
                        </div>
                      )}

                      {successMessage && (
                        <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                          {successMessage}
                        </div>
                      )}

                      <Button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple hover:from-fixnix-darkpurple hover:to-fixnix-lightpurple text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <LoaderCircle className="animate-spin h-5 w-5" />
                            Signing in...
                          </div>
                        ) : (
                          "Sign In"
                        )}
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div
                          id="google-btn"
                          className="flex justify-center"
                        ></div>
                      </div>

                      <div className="text-center text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <Link
                          href="/Register"
                          className="font-semibold text-fixnix-lightpurple hover:text-fixnix-darkpurple transition-colors"
                        >
                          Sign up
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </FormProvider>

              <div className="relative hidden md:block bg-gradient-to-br from-fixnix-lightpurple to-fixnix-darkpurple">
                <div className="absolute inset-0 bg-black/20"></div>
                <Image
                  src="/assets/images/resources/matrices.png"
                  alt="Spiritual Journey"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-sm">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Begin Your Spiritual Journey</h2>
                    <p className="opacity-90 mb-4">Join our community of seekers exploring the harmony of knowledge and inner peace</p>
                    <div className="flex justify-center gap-2 text-yellow-300">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Sufi Science Center. All rights reserved.{' '}
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/terms-of-use" className="hover:text-fixnix-lightpurple transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-fixnix-lightpurple transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/security" className="hover:text-fixnix-lightpurple transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
