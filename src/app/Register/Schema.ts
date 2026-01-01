import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(2, { message: "Name must be at list 2 characters long" }),
  email: z
    .string()
    .nonempty("Email is required")
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;
