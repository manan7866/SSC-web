import { z } from "zod";

export const checkoutSchema = z.object({
  country: z.string().min(1, "Country is required"),
  fullName: z.string().min(2, "First name is required"),
  shippingAddress: z.string().min(5, "Street address is required"),
  //   apartment: z.string().optional(),
  //   city: z.string().min(2, "City is required"),
  //   state: z.string().min(2, "State is required"),
  zip: z.string().min(4, "ZIP code is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  shippingCost: z.number().min(0),
  selectedShippingService: z
    .string()
    .min(1, "Please select a shipping service"),
  estimatedDeliveryDays: z.number().optional().nullable(),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export const verifyBillingDetails = z.object({
  email: z
    .string({ message: "Email is required!!" })
    .min(1, { message: "Email is required!!" })
    .email({ message: "Invalid email format. e.g: john.doe@example.com" }),
  fullName: z
    .string({ message: "fullName is required!!" })
    .min(1, { message: "fullName is required!!" }),
  address: z.string({ message: "Must be valid address" }),
  zip: z.string({ message: "Must be valid Zip" }),
  country: z.string({ message: "Must be valid Country" }).optional(),
});

export type BillingFormValues = z.infer<typeof verifyBillingDetails>;
