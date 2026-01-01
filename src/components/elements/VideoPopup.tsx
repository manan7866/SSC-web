"use client"; // Ensure this component is rendered on the client-side

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ModalVideo to ensure it's only loaded on the client side
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

// Define types for the props
interface VideoPopupProps {
  style?: 0 | 1 | 2 | 3 | 4 | 5; // Restrict style to specific values
  text?: string; // Optional text for style 2
}

export default function VideoPopup({ style, text }: VideoPopupProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Video button styles based on 'style' prop */}
      {!style && (
        <a
          onClick={() => setOpen(true)}
          className="overlay-link lightbox-image video-fancybox ripple"
        >
          <span className="play-icon flaticon-play" />
        </a>
      )}

      {style === 1 && (
        <div className="video-btn">
          <a
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple"
          >
            <span className="play-icon flaticon-play" />
          </a>
        </div>
      )}

      {style === 2 && (
        <div className="video-btn">
          <a
            onClick={() => setOpen(true)}
            className="overlay-link lightbox-image video-fancybox ripple"
          >
            <span className="play-icon flaticon-play" />
          </a>
          <h6>{text || "Latest Program Video"}</h6>
        </div>
      )}

      {style === 3 && (
        <div className="video-btn">
          <a onClick={() => setOpen(true)} className="lightbox-image">
            <i className="customicon-play-button" />
            <span className="border-animation border-1" />
            <span className="border-animation border-2" />
            <span className="border-animation border-3" />
          </a>
        </div>
      )}

      {style === 4 && (
        <div className="video-btn">
          <a onClick={() => setOpen(true)} className="lightbox-image">
            <img src="/assets/images-4/icons/video-btn-1.png" alt="Play" />
          </a>
        </div>
      )}

      {style === 5 && (
        <a
          onClick={() => setOpen(true)}
          className="video-btn overlay-link lightbox-image video-fancybox ripple"
        >
          <span className="fas fa-play" />
        </a>
      )}

      {/* Modal for displaying YouTube video */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vfhzo499OeA"
        onClose={() => setOpen(false)}
        allowFullScreen={true} // Add missing props
        ratio="16:9" // Add ratio for video
        animationSpeed={1} // Add animation speed
        classNames={{
          modalVideoEffect: "modal-video-effect",
          modalVideo: "modal-video",
          modalVideoClose: "modal-video-close",
          modalVideoBody: "modal-video-body",
          modalVideoInner: "modal-video-inner",
          modalVideoIframeWrap: "modal-video-movie-wrap",
          modalVideoCloseBtn: "modal-video-close-btn",
        }} // Set classNames as a valid string
        aria={{
          openMessage: "Video player opened", // Set openMessage for accessibility
          dismissBtnMessage: "Close video player", // Set dismissBtnMessage for accessibility
        }}
        youtube={{
          autoplay: 1, // Enable autoplay
          loop: 1, // Enable loop
          controls: 1, // Show controls
          modestbranding: 1, // Minimal branding
          rel: 0, // Disable related videos
        }}
      />
    </>
  );
}
