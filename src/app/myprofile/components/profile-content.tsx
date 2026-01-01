import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/s-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/s-tabs";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";
import ProductsTab from "./Myproducts";
import { LoaderCircle, Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "@/lib/apiClient";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import PaymentMethodList from "@/components/stripe-payment/PaymentMethodsList";

const profileSchema = z.object({
  fullName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().optional(),
  phone: z.string().nonempty("Phone number is required"),
});
type ProfileEditFields = z.infer<typeof profileSchema>;
export default function ProfileContent() {
  const [updateLoading, setUpdateLoading] = useState(false);
  const { user, loading, fetchUserProfile } = useAuth();

  const methods = useForm<ProfileEditFields>({
    defaultValues: user ?? {},
    resolver: zodResolver(profileSchema),
    mode: "onSubmit",
  });

  const handleSubmit = async (values: ProfileEditFields) => {
    try {
      setUpdateLoading(true);
      const res = await apiClient.patch("/user/profile", {
        ...values,
      });
      fetchUserProfile();
      toast.success(res.data.message || "Profile updated");
    } catch (error) {
      toast.error("Error updating profile");
      console.log(error);
    } finally {
      setUpdateLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      methods.reset(user);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center mt-5">
        <LoaderCircle className="animate-spin text-fixnix-lightpurple w-[50px] h-[50px]" />
      </div>
    );
  }
  return (
    <Tabs defaultValue="personal" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="personal" className="focus-visible:ring-0">
          Personal
        </TabsTrigger>
        <TabsTrigger value="banking" className="focus-visible:ring-0">
          Payment methods
        </TabsTrigger>
        <TabsTrigger value="products" className=" focus-visible:ring-0">
          My Products
        </TabsTrigger>
      </TabsList>

      {/* Personal Information */}
      <TabsContent value="personal" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-fixnix-lightpurple">
              Personal Information
            </CardTitle>
            <CardDescription>
              Update your personal details and profile information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <FormInput
                      name="fullName"
                      label="First Name"
                      defaultValue={user?.fullName}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormInput
                      name="lastName"
                      label="Last Name"
                      defaultValue={user?.lastName}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormInput
                      name="email"
                      type="email"
                      label="Email"
                      readOnly
                      value={user?.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormInput
                      name="phone"
                      label="Phone"
                      type="tel"
                      defaultValue={user?.phone}
                    />
                  </div>
                </div>
                <Button
                  className="bg-fixnix-lightpurple mt-2 block ml-auto"
                  type="submit"
                >
                  {updateLoading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Update"
                  )}
                </Button>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </TabsContent>
      {/* payment methods */}
      <TabsContent value="banking" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-fixnix-lightpurple">
              Payment Methods
            </CardTitle>
            <CardDescription>Update your payment details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <PaymentMethodList />
            {/* <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <FormInput
                      name="fullName"
                      label="First Name"
                      defaultValue={user?.fullName}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormInput
                      name="lastName"
                      label="Last Name"
                      defaultValue={user?.lastName}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormInput
                      name="email"
                      type="email"
                      label="Email"
                      readOnly
                      value={user?.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormInput
                      name="phone"
                      label="Phone"
                      type="tel"
                      defaultValue={user?.phone}
                    />
                  </div>
                </div>
                <Button
                  className="bg-fixnix-lightpurple mt-2 block ml-auto"
                  type="submit"
                >
                  {updateLoading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Update"
                  )}
                </Button>
              </form>
            </FormProvider> */}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Notification Settings */}
      <ProductsTab />
    </Tabs>
  );
}
