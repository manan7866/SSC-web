"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { register as registerApi } from "@/hooks/authServices";
import { FormInput } from "@/components/form-input";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/s-card";
import { RegisterFormInputs, registerSchema } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";

export default function Register() {
  const methods = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: RegisterFormInputs) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await registerApi(data.name, data.email, data.password);
      setSuccess(
        "Registration successful! Please check your email for the OTP."
      );

      // Redirect to OTP page with email parameter
      toast.success("Account created", {
        position: "top-center",
        richColors: true,
      });
      setTimeout(() => {
        router.push(
          `/otp?email=${encodeURIComponent(data.email)}&flow=verification`
        );
      }, 1500);
    } catch (err: any) {
      toast.error(err.message || "Registration failed", {
        position: "top-center",
        richColors: true,
      });
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
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
                  <form
                    className="min-h-[500px] relative"
                    onSubmit={methods.handleSubmit(onSubmit)}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-fixnix-lightpurple flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                      <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
                    </div>

                    <div className="space-y-6">
                      <div className="grid gap-2">
                        <FormInput
                          label="Full Name"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                        />
                      </div>

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
                          placeholder="Create a strong password"
                        />
                        <p className="text-xs text-gray-500 mt-1">Use at least 8 characters with a mix of letters, numbers & symbols</p>
                      </div>

                      {error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                          {error}
                        </div>
                      )}

                      {success && (
                        <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                          {success}
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
                            Creating account...
                          </div>
                        ) : (
                          "Create Account"
                        )}
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div
                          id="google-btn"
                          className="flex justify-center"
                        ></div>
                      </div>

                      <div className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                          href="/login"
                          className="font-semibold text-fixnix-lightpurple hover:text-fixnix-darkpurple transition-colors"
                        >
                          Sign in
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </FormProvider>

              <div className="relative hidden md:block bg-gradient-to-br from-fixnix-darkpurple to-fixnix-lightpurple">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Join Our Community</h2>
                    <p className="opacity-90 mb-4">Embark on a transformative journey of spiritual growth and inner discovery</p>
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
