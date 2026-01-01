"use client";

import Layout from "@/components/layout/Layout";
import React, { useCallback, useEffect, useState } from "react";
import VendorStepperForm from "./Form";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/s-card";
import Link from "next/link";
import {
  getVendorLoginStepsData,
  VendorData,
} from "@/hooks/vendorRegistration";
import { VendorFormValues } from "./Schema";
import { CheckCircle2, LoaderCircle, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

const VendorRegistration = () => {
  const [vendorData, setVendorData] = useState<VendorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const fetchVendorData = useCallback(async () => {
    setIsEditing(false)
    try {
      setLoading(true);
      const data = await getVendorLoginStepsData();
      setVendorData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVendorData();
  }, []);

  return (
    <Layout
      footerStyle={1}
      headerStyle={2}
      breadcrumbTitle="Vendor Registration"
    >
      <div className="max-w-6xl w-full mx-auto py-10 px-4">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">
                      {vendorData?.isCompleted
                        ? "Request submitted"
                        : isEditing
                        ? "Edit request details"
                        : `Start your journey`}
                    </h1>
                    <p className="text-balance text-muted-foreground">
                      Vendor Registration
                    </p>
                  </div>

                  {/* ✅ Show loading or form */}
                  {loading ? (
                    <div className="flex justify-center items-center py-20">
                      <LoaderCircle className="h-5 w-5 animate-spin text-fixnix-lightpurple" />
                    </div>
                  ) : vendorData?.isCompleted && !isEditing ? (
                    // ✅ Completed State
                    <div className="flex flex-col items-center gap-4 py-10">
                      <CheckCircle2 className="h-12 w-12 text-green-500" />
                      <p className="text-lg font-medium text-center">
                        Your vendor registration has been submitted successfully
                        🎉
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2"
                      >
                        <Pencil className="h-4 w-4" />
                        Edit Information
                      </Button>
                    </div>
                  ) : (
                    // ✅ Form
                    <VendorStepperForm
                      successCallback={fetchVendorData}
                      defaultValues={vendorData! as VendorFormValues}
                    />
                  )}
                </div>
              </div>

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
            <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorRegistration;
