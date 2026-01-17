"use client";
import { useEffect, useState } from "react";
import Counter from "./Counter";

interface CounterUpProps {
  end: number;
}

export default function CounterUp({ end }: CounterUpProps) {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("count-text");
    if (elements.length > 0) {
      const element = elements[0] as HTMLElement;
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  // Debounce the scroll handler for better performance
  const debounce = (fn: () => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  };

  const debouncedHandleScroll = debounce(handleScroll, 50);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", debouncedHandleScroll);

    // Perform initial check if the element is in the viewport
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  return (
    <span className="count-text">
      {inViewport && <Counter end={end || 0} duration={20} />}
    </span>
  );
}
