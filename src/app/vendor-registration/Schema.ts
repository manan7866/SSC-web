// lib/schemas/vendorSchema.ts
import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const MAX_FILE_SIZE = 5_000_000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const phoneSchema = z
  .string()
  .regex(
    /^\+?[1-9]\d{1,14}$/,
    "Invalid phone number format. Must be in E.164 format (e.g., +14155552671)"
  );
export const vendorRegistrationSchema = z.object({
  fullName: z
    .string({ message: "fullName is required!!" })
    .min(1, { message: "fullName is required!!" })
    .min(3, {
      message: "Full name must be at least 3 characters long. e.g: John Doe",
    })
    .max(50, {
      message: "Full name can be at most 50 characters long. e.g: John Doe",
    })
    .regex(/^[a-zA-Z ]{3,20}$/, {
      message: "Full name can only contain letters and spaces. e.g: John Doe",
    }),
  email: z
    .string({ message: "email is required!!" })
    .min(1, { message: "email is required!!" })
    .min(3, { message: "email must be at least 3 characters long." })
    .max(150, { message: "email can be at most 150 characters long." })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  businessName: z
    .string()
    .min(2, { message: "Business name is required (min 2 characters)" }),
  businessType: z.string().nonempty("Business type is required"),
  businessLegalStructure: z
    .string()
    .nonempty("Business legal structure is required"),
  einNumber: z.string().optional().nullable(),
  tinNumber: z.string().optional().nullable(),
  contactPerson: z
    .string()
    .min(2, { message: "Contact person name is required (min 2 characters)" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .refine((val) => val.startsWith("+"), {
      message: "Phone number must start with +country code",
    })
    .refine(
      (val) => {
        const phoneNumber = parsePhoneNumberFromString(val);
        return phoneNumber !== undefined;
      },
      {
        message: "Phone number format is invalid",
      }
    )
    .refine(
      (val) => {
        const phoneNumber = parsePhoneNumberFromString(val);
        return phoneNumber ? phoneNumber.isValid() : false;
      },
      {
        message: "Phone number is not a valid",
      }
    ),
  bankName: z
    .string()
    .min(2, { message: "Bank name is required (min 2 characters)" }),
  accountNumber: z
    .string()
    .min(5, { message: "Account number must be at least 5 digits" }),
  routingNumber: z
    .string()
    .min(5, { message: "Routing number must be at least 5 digits" }),
  bankAddress: z
    .string()
    .min(5, { message: "Bank address must be at least 5 characters" }),
  signatoryName: z
    .string()
    .min(2, { message: "Signatory name is required (min 2 characters)" }),
  signatureDate: z.string().min(1, { message: "Signature date is required" }),
  vendoraccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms & conditions" }),
  }),
  vendorNic: z
    .any()
    .transform((val) => {
      if (!val || val.length === 0) return undefined;
      if (val instanceof FileList) return val[0];
      if (Array.isArray(val) && val[0] instanceof File) return val[0];
      if (val instanceof File) return val;
      return undefined;
    })
    .refine((file) => file !== undefined, {
      message: "You must upload a valid NIC / Driving Licence / Passport file",
    })
    .refine(
      (file) => file && file.size <= MAX_FILE_SIZE,
      "Max image size is 5MB."
    )
    .refine(
      (file) => file && ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  // vendorNic: z
  //   .any()
  //   .transform((val) => {
  //     // Normalize to a single File
  //     if (val instanceof FileList) return val[0];
  //     if (Array.isArray(val) && val.length > 0 && val[0] instanceof File)
  //       return val[0];
  //     return val;
  //   })
  //   .refine((file) => {
  //     if (!file) return true; // optional
  //     return file.size <= MAX_FILE_SIZE;
  //   }, "Max image size is 5MB.")
  //   .refine((file) => {
  //     if (!file) return true;
  //     return ACCEPTED_IMAGE_TYPES.includes(file.type);
  //   }, "Only .jpg, .jpeg, .png and .webp formats are supported.")
  //   .optional(),
});

export type VendorFormValues = z.infer<typeof vendorRegistrationSchema>;
