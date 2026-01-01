import { Saira, Nunito_Sans } from "next/font/google";

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
