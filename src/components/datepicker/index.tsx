"use client";

import * as React from "react";
import { Controller, Control } from "react-hook-form";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

interface FormDatePickerProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({
  name,
  control,
  label,
  placeholder = "Select date",
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const value = field.value ? new Date(field.value) : undefined;
        const [month, setMonth] = React.useState<Date | undefined>(value);

        return (
          <div className="flex flex-col gap-2 w-full">
            {label && (
              <Label htmlFor={name} className="px-1">
                {label}
              </Label>
            )}
            <div className="relative flex gap-2">
              <Input
                id={name}
                value={value ? formatDate(value) : ""}
                placeholder={placeholder}
                className="bg-background pr-10 focus-visible:ring-1 focus-visible:ring-fixnix-lightpurple"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  if (!isNaN(date.getTime())) {
                    field.onChange(date.toISOString());
                    setMonth(date);
                  } else {
                    field.onChange("");
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }}
                readOnly // prevent invalid manual typing if you want
              />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2 focus:ring-0"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={value}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(date) => {
                      if (date) {
                        field.onChange(date.toISOString());
                      }
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {error && (
              <p className="text-sm text-red-500 px-1">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};
