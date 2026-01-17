import { Inter } from "next/font/google";

// Using a more compatible Google font to avoid build-time fetch issues
export const nunitoSans = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fixnix-font",
  display: "swap",
});

export const saira = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fixnix-font-two",
  display: "swap",
});
