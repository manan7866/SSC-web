import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string().nonempty("Email is required")
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().nonempty("Password is required"),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
