"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormLabel } from "@/components/ui/form";
import { Clock, Truck } from "lucide-react"; // Import icons

interface ShippingService {
  type: string;
  name: string;
  shippingCost: number;
  selectedShippingService: string;
  estimatedDeliveryDays: number;
  description: string;
}

export default function ShippingOptions({
  shippingServices,
}: {
  shippingServices: ShippingService[];
}) {
  const { setValue } = useFormContext();
  const [selectedService, setSelectedService] = useState<string>("");

  const handleSelectService = (service: ShippingService) => {
    setSelectedService(service.type);
    setValue("shippingCost", service.shippingCost);
    setValue("selectedShippingService", service.selectedShippingService);
    setValue("estimatedDeliveryDays", service.estimatedDeliveryDays);
  };

  useEffect(() => {
    if (shippingServices.length > 0) {
      handleSelectService(shippingServices[0]);
    }
  }, [shippingServices]);

  return (
    <div className="w-full">
      <FormLabel className="mb-4 text-lg font-semibold block">Shipping Method</FormLabel>
      <RadioGroup
        value={selectedService}
        onValueChange={(type) =>
          handleSelectService(shippingServices.find((s) => s.type === type)!)
        }
        className="w-full space-y-3"
      >
        {shippingServices.map((service, index) => (
          <Label
            key={index}
            htmlFor={service.type}
            className="cursor-pointer block w-full"
          >
            <div
              className={`relative rounded-lg border-2 transition-all duration-200 ${
                selectedService === service.type
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-gray-200 hover:border-primary/50"
              } p-4`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <RadioGroupItem id={service.type} value={service.type} />
                  </div>
                  <div>
                    <p className="font-medium text-base">{service.name}</p>
                    <div className="flex items-center space-x-2 mt-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">
                        {service.estimatedDeliveryDays}{" "}
                        {service.estimatedDeliveryDays > 1 ? "business days" : "day"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-lg">
                    ${service.shippingCost.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
