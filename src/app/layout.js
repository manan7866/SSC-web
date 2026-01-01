import "react-modal-video/css/modal-video.css";
import "../styles/fixnix.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { saira, nunitoSans } from "../lib/font"; // Relative path
// If you have configured path aliases

export const metadata = {
  title: "SSC-Kashmir Chapter",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${saira.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
