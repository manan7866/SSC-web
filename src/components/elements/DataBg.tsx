import { useEffect } from "react";

export default function DataBg() {
  useEffect(() => {
    // Query elements with the 'data-bg' attribute
    const elements = document.querySelectorAll(
      "[data-bg]",
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      const bgUrl = element.getAttribute("data-bg");
      if (bgUrl) {
        element.style.backgroundImage = `url(${bgUrl})`;
      }
    });
  }, []);

  return <></>;
}
