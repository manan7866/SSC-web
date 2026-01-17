import type { Metadata } from "next";
import { Roboto, Source_Code_Pro } from "next/font/google";
// s
import "../styles/fixnix.css";
import { AuthProvider } from "@/context/AuthContext";
import NextjsTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import ScrollToTopButton from "@/components/ScrollToTop";

// Define fonts with their respective CSS variables
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Add specific weights if needed
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "700"], // Add specific weights if needed
});

export const metadata: Metadata = {
  title: "Sufi Science Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </head>
      <body
        className={`${roboto.variable} ${sourceCodePro.variable} antialiased`}
      >
        <ScrollToTopButton />
        <NextjsTopLoader color="#ffffff" />
        <Toaster position="top-center" richColors />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
