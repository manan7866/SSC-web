import { Saira, Nunito_Sans } from "next/font/google";

// Using Google fonts with preconnect in head to avoid build-time fetch issues
export const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--fixnix-font",
  display: "swap",
});

export const saira = Saira({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fixnix-font-two",
  display: "swap",
});
