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
    <div className="max-w-6xl w-full mx-auto py-10 px-4">
      <div className={cn("flex flex-col gap-6")}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <FormProvider {...methods}>
              <div className="max-sm:p-2 sm:p-6 md:p-8">
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
                      <h1 className="text-2xl font-bold">Register</h1>
                    </div>
                    <div className="grid gap-2">
                      <FormInput label="Full Name" type="text" name="name" />
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
                        "Register"
                      )}
                    </Button>
                    {/* <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div> */}
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
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="underline underline-offset-4"
                      >
                        Login
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
          <Link href="#">Terms of Service</Link> and{" "}
          <Link href="#">Privacy Policy</Link>.
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
    //       Register SSC
    //     </h2>

    //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
    //       {/* Full Name Field */}
    //       <label className="relative block">
    //         <input
    //           {...register("name", {
    //             required: "Full name is required",
    //             minLength: { value: 3, message: "Full name must be at least 3 characters" }
    //           })}
    //           type="text"
    //           placeholder=" "
    //           className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
    //         />
    //         <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
    //           Full Name
    //         </span>
    //       </label>
    //       {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

    //       {/* Email Field */}
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

    //       {/* Password Field */}
    //       <label className="relative block">
    //         <input
    //           {...register("password", {
    //             required: "Password is required",
    //             minLength: { value: 6, message: "Password must be at least 6 characters" },
    //             maxLength: { value: 50, message: "Password must be less than 50 characters" }
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

    //       {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    //       {success && <p className="text-green-600 text-sm text-center">{success}</p>}

    //       {/* Submit Button */}
    //       <button
    //         type="submit"
    //         className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition disabled:opacity-50"
    //         disabled={loading}
    //       >
    //         {loading ? "Processing..." : "Register"}
    //       </button>
    //     </form>

    //     <p className="text-center mt-4 text-sm">
    //       Already have an account?{" "}
    //       <Link href="/login" className="text-fixnix-darkpurple font-bold">
    //         Login
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
}
