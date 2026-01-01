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
  const methods = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });
  const { login, googleLogin, loading: authLoading } = useAuth();
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
    <div className="max-w-6xl w-full mx-auto py-10 sm:px-4 px-2 relative">
      <div className={cn("flex flex-col gap-6")}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <FormProvider {...methods}>
              <div className="max-sm:p-2 sm:p-6 md:p-8 relative">
                {googleLoginLoading && (
                  <div className="absolute top-0 left-0 w-full h-full bg-slate-50/25 flex items-center justify-center z-50">
                    <LoaderCircle
                      className="animate-spin text-fixnix-lightpurple"
                      size={60}
                    />
                  </div>
                )}
                <form
                  className=" min-h-[550px] max-h-max relative"
                  onSubmit={methods.handleSubmit(onSubmit)}
                >
                  <Button
                    variant={"link"}
                    type="button"
                    onClick={() => router.push("/")}
                    className="mb-4 text-fixnix-darkpurple hover:underline text-sm absolute top-2 left-2"
                  >
                    ← Back
                  </Button>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Welcome back</h1>
                      <p className="text-balance text-muted-foreground">
                        Login to SSC
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <FormInput label="Email" type="email" name="email" />
                    </div>
                    <div className="grid gap-2">
                      <FormInput
                        label="Password"
                        type="password"
                        name="password"
                      />
                      <div className="flex items-center">
                        <Link
                          href="/forget-password"
                          className="ml-auto text-sm underline-offset-2 hover:underline"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                    <Button
                      disabled={loading}
                      type="submit"
                      className="w-full bg-fixnix-lightpurple"
                    >
                      {loading ? (
                        <LoaderCircle className="animate-spin h-5 w-5" />
                      ) : (
                        "Login"
                      )}
                    </Button>
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                      <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {/* <Button variant="outline" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="sr-only">Login with Google</span>
                    </Button> */}
                      <div
                        id="google-btn"
                        className="flex justify-center col-span-3"
                      ></div>
                    </div>
                    <div className="text-center text-sm">
                      Don&apos;t have an account?{" "}
                      <Link
                        href="/Register"
                        className="underline underline-offset-4"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </FormProvider>

            <div className="relative hidden bg-muted md:block">
              <Image
                src="/assets/images/resources/matrices.png"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                width={600}
                height={600}
              />
            </div>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          By clicking continue, you agree to our{" "}
          <Link href="/terms-of-use">Terms of Service</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="bg-white p-6 rounded-lg shadow-md w-96">
    //     {/* Back Button */}
    //     <button
    //       type="button"
    //       onClick={() => router.back()}
    //       className="mb-4 text-fixnix-darkpurple hover:underline text-sm"
    //     >
    //       ← Back
    //     </button>

    //     <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
    //       Login to SSC
    //     </h2>

    //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
    //       {/* Email */}
    //       <label className="relative block">
    //         <input
    //           {...register("email", {
    //             required: "Email is required",
    //             pattern: {
    //               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //               message: "Invalid email address"
    //             }
    //           })}
    //           type="email"
    //           placeholder=" "
    //           className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
    //         />
    //         <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
    //           Email
    //         </span>
    //       </label>
    //       {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

    //       {/* Password */}
    //       <label className="relative block">
    //         <input
    //           {...register("password", {
    //             required: "Password is required",
    //             minLength: { value: 6, message: "Password must be at least 6 characters" },
    //           })}
    //           type="password"
    //           placeholder=" "
    //           className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
    //         />
    //         <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
    //           Password
    //         </span>
    //       </label>
    //       {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

    //       {/* Forgot Password */}
    //       <div className="text-right">
    //         <Link href="/forget-password" className="text-sm text-fixnix-darkpurple hover:underline">
    //           Forgot Password?
    //         </Link>
    //       </div>

    //       {/* Error Messages */}
    //       {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    //       {googleError && <p className="text-red-500 text-sm text-center">{googleError}</p>}
    //       {successMessage && <p className="text-green-600 text-sm text-center">{successMessage}</p>}

    //       {/* Submit */}
    //       <button
    //         type="submit"
    //         className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition-colors duration-200 disabled:opacity-50"
    //         disabled={authLoading}
    //       >
    //         {authLoading ? "Logging in..." : "Login"}
    //       </button>
    //     </form>

    //     <p className="text-center mt-4 text-sm">
    //       Don't have an account?{" "}
    //       <Link href="/Register" className="text-fixnix-darkpurple font-bold">
    //         Register
    //       </Link>
    //     </p>

    //     {/* Google Login */}
    //     <div className="mt-4">
    //       <p className="text-center text-gray-600 mb-2">Or </p>
    //       <div id="google-btn" className="flex justify-center"></div>
    //     </div>
    //   </div>
    // </div>
  );
}
