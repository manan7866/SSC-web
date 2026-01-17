// components/form-checkbox.tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormMessage } from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";

interface FormCheckboxProps {
  name: string;
  label: string;
  error?: string;
}

export function FormCheckbox({ name, label, error }: FormCheckboxProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const fieldError = errors[name]?.message as string | undefined;
  return (
    <>
      <div className="flex items-center space-x-3">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
              ref={field.ref}
            />
          )}
        />
        <Label htmlFor={name} className="text-sm font-medium leading-none">
          {label}
        </Label>
      </div>
      {fieldError && <FormMessage>{fieldError}</FormMessage>}
    </>
  );
}
