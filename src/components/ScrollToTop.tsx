"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react"; // optional icon

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <Button
          className="fixed bottom-4 right-4 z-50 rounded-full p-3 shadow-lg text-white bg-fixnix-lightpurple hover:bg-fixnix-darkpurple"
          onClick={scrollToTop}
          variant="secondary"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </>
  );
}
