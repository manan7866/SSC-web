"use client"; // Ensure this component is rendered on the client-side

import { useState, useEffect } from "react";

// Define types for the props
interface VideoPopupProps {
  style?: 0 | 1 | 2 | 3 | 4 | 5; // Restrict style to specific values
  text?: string; // Optional text for style 2
}

export default function VideoPopup({ style, text }: VideoPopupProps) {
  const [isOpen, setOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Video button styles based on 'style' prop */}
      {!style && (
        <a
          onClick={() => setOpen(true)}
          className="overlay-link lightbox-image video-fancybox ripple cursor-pointer"
        >
          <span className="play-icon flaticon-play" />
        </a>
      )}

      {style === 1 && (
        <div className="video-btn">
          <a
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple cursor-pointer"
          >
            <span className="play-icon flaticon-play" />
          </a>
        </div>
      )}

      {style === 2 && (
        <div className="video-btn">
          <a
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple cursor-pointer"
          >
            <span className="play-icon flaticon-play" />
          </a>
          <h6>{text || "Latest Program Video"}</h6>
        </div>
      )}

      {style === 3 && (
        <div className="video-btn">
          <a onClick={() => setOpen(true)} className="lightbox-image cursor-pointer">
            <i className="customicon-play-button" />
            <span className="border-animation border-1" />
            <span className="border-animation border-2" />
            <span className="border-animation border-3" />
          </a>
        </div>
      )}

      {style === 4 && (
        <div className="video-btn">
          <a onClick={() => setOpen(true)} className="lightbox-image cursor-pointer">
            <img src="/assets/images-4/icons/video-btn-1.png" alt="Play" />
          </a>
        </div>
      )}

      {style === 5 && (
        <a
          onClick={() => setOpen(true)}
          className="video-btn overlay-link lightbox-image video-fancybox ripple cursor-pointer"
        >
          <span className="fas fa-play" />
        </a>
      )}

      {/* Custom YouTube Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <i className="fas fa-times"></i>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/vfhzo499OeA?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
