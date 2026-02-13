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
import ServicesSection from "./ServicesSection";
import { LoaderCircle, Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "@/lib/apiClient";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import PaymentMethodList from "@/components/stripe-payment/PaymentMethodsList";
import AvatarUpload from "./AvatarUpload";

const profileSchema = z.object({
  fullName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().optional(),
  phone: z.string().nonempty("Phone number is required"),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});
type ProfileEditFields = z.infer<typeof profileSchema>;
export default function ProfileContent() {
  const [updateLoading, setUpdateLoading] = useState(false);
  const authContext = useAuth(); // Move hook call to top level

  const [authData, setAuthData] = useState<{ user: any; loading: boolean; fetchUserProfile: (() => Promise<void>) | null }>({
    user: authContext.user || null,
    loading: authContext.loading || false,
    fetchUserProfile: authContext.fetchUserProfile || null
  });

  useEffect(() => {
    // Update auth data when authContext changes
    setAuthData({
      user: authContext.user || null,
      loading: authContext.loading || false,
      fetchUserProfile: authContext.fetchUserProfile || null
    });
  }, [authContext.user, authContext.loading, authContext.fetchUserProfile]);

  const { user, loading } = authData;
  const fetchUserProfile = authData.fetchUserProfile;

  const methods = useForm<ProfileEditFields>({
    defaultValues: user ?? {},
    resolver: zodResolver(profileSchema),
    mode: "onSubmit",
  });

  const handleSubmit = async (values: ProfileEditFields) => {
    try {
      setUpdateLoading(true);
      // Only send editable fields to the backend
      const profileData = {
        fullName: values.fullName,
        lastName: values.lastName,
        phone: values.phone,
        address: values.address,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
        country: values.country,
      };
      
      const res = await apiClient.patch("/user/profile", profileData);
      if (fetchUserProfile) {
        await fetchUserProfile();
      }
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
      methods.reset({
        fullName: user.fullName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        zipCode: user.zipCode || "",
        country: user.country || "",
      });
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
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="personal" className="focus-visible:ring-0">
          Personal
        </TabsTrigger>
        <TabsTrigger value="banking" className="focus-visible:ring-0">
          Payment methods
        </TabsTrigger>
        <TabsTrigger value="services" className=" focus-visible:ring-0">
          Services
        </TabsTrigger>
      </TabsList>

      {/* Personal Information */}
      <TabsContent value="personal" className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <AvatarUpload />
          </div>
          <div className="md:col-span-2">
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
                      <div className="space-y-2">
                        <FormInput
                          name="address"
                          label="Address"
                          defaultValue={user?.address || ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <FormInput
                          name="city"
                          label="City"
                          defaultValue={user?.city || ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <FormInput
                          name="state"
                          label="State"
                          defaultValue={user?.state || ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <FormInput
                          name="zipCode"
                          label="ZIP Code"
                          defaultValue={user?.zipCode || ""}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <FormInput
                          name="country"
                          label="Country"
                          defaultValue={user?.country || ""}
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
          </div>
        </div>
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

      {/* Services Section */}
      <TabsContent value="services" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-fixnix-lightpurple">
              Your Services & Forms
            </CardTitle>
            <CardDescription>
              View and manage your submitted forms and services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ServicesSection />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
