// components/form-input.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormMessage } from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

export function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  min,
  max,
  ...props
}: FormInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [parent] = useAutoAnimate<HTMLDivElement>();
  const [showPassword, setShowPassword] = useState(false);
  const fieldError = errors[name]?.message as string | undefined;

  const isPassword = type === "password";
  return (
    <div className="space-y-1" ref={parent}>
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input
              id={name}
              type={isPassword && showPassword ? "text" : type}
              placeholder={placeholder || label}
              className="focus-visible:ring-1 focus-visible:ring-fixnix-lightpurple pr-10"
              {...field}
              minLength={min}
              maxLength={max}
              {...props}
            />
          )}
        />

        {isPassword && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-2 cursor-pointer px-2 flex items-center text-gray-500 hover:text-fixnix-lightpurple focus-visible:ring-0"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </span>
        )}
      </div>

      {fieldError && <FormMessage>{fieldError}</FormMessage>}
    </div>
  );
}
