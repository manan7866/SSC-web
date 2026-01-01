"use client"
import { useState, useEffect, useRef, RefObject } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaPause, FaDownload, FaLock, FaInfoCircle, FaHeadphones, FaHeart, FaRegHeart, FaShareAlt, FaFacebook, FaWhatsapp, FaPinterest, FaClock, FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// Types
interface AudioTrack {
  id: number;
  title: string;
  artist: string;
  duration: string;
  genre: string;
  plays: number;
  description: string;
  coverImage: string;
  releaseYear: number;
  accessType: 'free' | 'member' | 'paid';
  price?: number;
  audioRef: RefObject<HTMLAudioElement>;
  previewUrl?: string;
}

interface AudioPlayerProps {
  track: AudioTrack;
  isPlaying: boolean;
  onPlayPause: () => void;
}

interface AudioSpectrumProps {
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: AudioTrack;
  countdown: number;
}

// Helper component for audio spectrum visualization
const AudioSpectrum = ({ isPlaying, audioRef }: AudioSpectrumProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    let audioContext: AudioContext | undefined;
    let analyser: AnalyserNode | undefined;
    let source: MediaElementAudioSourceNode | undefined;

    if (audioRef.current && isPlaying) {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyserRef.current = analyser;
      analyser.fftSize = 256;
      
      const bufferLength = analyser.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);
      
      source = audioContext.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      
      renderFrame();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [isPlaying, audioRef]);

  const renderFrame = () => {
    if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return;
    
    animationRef.current = requestAnimationFrame(renderFrame);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    
    ctx.clearRect(0, 0, width, height);
    
    const barWidth = width / dataArrayRef.current.length * 2.5;
    let barHeight;
    let x = 0;
    
    for (let i = 0; i < dataArrayRef.current.length; i++) {
      barHeight = dataArrayRef.current[i] / 2;
      
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#7B68EE');
      gradient.addColorStop(1, '#4A2C82');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x, height - barHeight, barWidth, barHeight);
      
      x += barWidth + 1;
    }
  };

  return (
    <div className="w-full bg-gray-100 rounded-lg overflow-hidden">
      <canvas 
        ref={canvasRef} 
        width="800" 
        height="80" 
        className="w-full h-20"
      />
    </div>
  );
};

// Toast Component
const Toast = ({ message, type }: { message: string; type: 'success' | 'error' | 'info' }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`px-6 py-3 rounded-lg shadow-lg flex items-center ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
      } text-white`}>
        {type === 'success' && <FaCheckCircle className="mr-2" />}
        {type === 'error' && <FaInfoCircle className="mr-2" />}
        {type === 'info' && <FaInfoCircle className="mr-2" />}
        {message}
      </div>
    </div>
  );
};

// Login Modal Component
const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-fixnix-lightpurple">Become a Member</h2>
        <p className="text-gray-600 mb-6">
          Join our Sufi Sound Circle to access the complete collection of sacred songs and chants.
        </p>
        <div className="space-y-4">
          <button
            onClick={onLogin}
            className="w-full bg-fixnix-lightpurple text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Sign In with Email
          </button>
          <Link
            href="/membership"
            className="w-full bg-white border-2 border-fixnix-lightpurple text-fixnix-lightpurple py-3 px-6 rounded-lg font-medium hover:bg-fixnix-lightpurple/5 transition-colors flex items-center justify-center"
          >
            View Membership Plans
          </Link>
          <button 
            onClick={onClose}
            className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Terms Modal Component
const TermsModal = ({ isOpen, onClose, onAccept }: TermsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Terms of Use – Sacred Audio Content</h2>
        <div className="prose prose-sm">
          <p className="mb-4">By downloading this purchased audio content, you agree to:</p>
          <ol className="list-decimal pl-4 space-y-2 mb-6">
            <li>Use the content for personal, spiritual practice only</li>
            <li>Not share, redistribute, or publicly broadcast the audio</li>
            <li>Respect the sacred nature of these recordings</li>
            <li>Accept that downloads are tied to your purchase</li>
            <li>Understand that violations may result in access revocation</li>
          </ol>
        </div>
        <div className="space-y-4 mt-6">
          <button
            onClick={onAccept}
            className="w-full bg-fixnix-lightpurple text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            I Accept These Terms
          </button>
          <button
            onClick={onClose}
            className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Download Modal Component
const DownloadModal = ({ isOpen, onClose, track, countdown }: DownloadModalProps) => {
  const [timeLeft, setTimeLeft] = useState(countdown);
  
  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <FaDownload className="mx-auto text-4xl text-fixnix-lightpurple mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your Download is Ready</h2>
          <p className="text-gray-600 mb-6">
            Your purchased audio will be available for download for:
          </p>
          <div className="text-3xl font-bold text-fixnix-lightpurple mb-6">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <p className="text-sm text-gray-500 mb-6">
            This download is for your personal use only. Please do not share.
          </p>
        </div>
        <div className="space-y-4">
          <button
            onClick={onClose}
            className="w-full bg-fixnix-lightpurple text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <FaCheckCircle className="mr-2" /> Download Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AudioDetails() {
  // State for audio details
  const [track] = useState<AudioTrack>({
    id: 1,
    title: "Sacred Chants of Peace",
    artist: "Sufi Masters Ensemble",
    duration: "15:30",
    genre: "Sacred Chants",
    plays: 12450,
    description: "Experience the transformative power of these ancient Sufi chants, carefully preserved and presented in their authentic form. This recording captures the essence of spiritual devotion and inner peace.",
    coverImage: "/images/sacred-chants-cover.jpg",
    releaseYear: 2023,
    accessType: 'paid',
    price: 9.99,
    audioRef: useRef<HTMLAudioElement>(null),
    previewUrl: "/audio/preview.mp3"
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [countdown, setCountdown] = useState(15 * 60);
  const [showToast, setShowToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [activeTab, setActiveTab] = useState("description");
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  // Handle play/pause
  const handlePlayPause = () => {
    if (track.audioRef.current) {
      if (isPlaying) {
        track.audioRef.current.pause();
      } else {
        track.audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setShowToast({
      message: "Sacred audio added to your cart",
      type: 'success'
    });
    setTimeout(() => {
      setShowAddedToCart(false);
      window.location.href = "/cart";
    }, 1500);
  };

  // Handle buy now
  const handleBuyNow = () => {
    // Add to cart and redirect to checkout
    window.location.href = "/checkout";
  };

  // Handle download after purchase
  const handleDownload = () => {
    if (!hasPurchased) {
      return;
    }
    setShowTermsModal(true);
  };

  // Handle terms acceptance
  const handleTermsAccept = () => {
    setShowTermsModal(false);
    setShowDownloadModal(true);
    setShowToast({
      message: "Your sacred audio is ready for your personal journey.",
      type: 'success'
    });
  };

  // Clear toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Sacred Audio Details">
      <div className="container mx-auto px-4 py-10">
        {/* Main Audio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Audio Preview Section */}
          <div className="relative">
            <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
              <div className="relative h-96">
                <Image
              src={track.coverImage} 
              alt={track.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex items-center justify-center">
                  <button 
                    onClick={handlePlayPause}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all transform hover:scale-105"
                  >
                    {isPlaying ? (
                      <FaPause className="text-4xl" />
                    ) : (
                      <FaPlay className="text-4xl ml-2" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Message */}
            <div className="bg-fixnix-lightpurple/5 border border-fixnix-lightpurple/10 rounded-lg p-4">
              <p className="text-sm text-fixnix-lightpurple flex items-center">
                <FaInfoCircle className="mr-2" />
                Listen to a sacred snippet. Purchase to access the full audio.
              </p>
            </div>
          </div>

          {/* Audio Info Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{track.title}</h1>
            <p className="text-gray-600 mb-4">By {track.artist}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center text-gray-600">
                <FaHeadphones className="mr-2" />
                {track.plays.toLocaleString()} plays
              </span>
              <span className="flex items-center text-gray-600">
                <FaClock className="mr-2" />
                {track.duration}
              </span>
        </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="text-3xl font-bold text-fixnix-lightpurple">
                ${track.price}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                One-time purchase, lifetime access
              </p>
            </div>

            {/* Purchase/Download Section */}
            <div className="space-y-4 mb-8">
              {!hasPurchased ? (
                <div className="space-y-3">
                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-fixnix-lightpurple text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    Download Now
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-white border-2 border-fixnix-lightpurple text-fixnix-lightpurple py-3 px-6 rounded-lg font-medium hover:bg-fixnix-lightpurple/5 transition-colors flex items-center justify-center"
                  >
                    Add to Cart
                  </button>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <FaLock className="text-fixnix-lightpurple" />
                    Secure payment
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleDownload}
                  className="w-full bg-fixnix-lightpurple text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <FaDownload className="mr-2" /> Download Full Audio
                </button>
              )}
            </div>

            {/* Added to Cart Toast */}
            {showAddedToCart && (
              <div className="fixed top-4 right-4 bg-green-50 border-l-4 border-green-500 p-4 shadow-lg rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-800">
                      Added to cart successfully
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Share this sacred audio:</span>
              <div className="flex gap-4">
                <Link href="#" className=" text-fixnix-darkpurple hover:opacity-80">
                  <FaFacebook size={20} />
                </Link>
                <Link href="#" className=" text-fixnix-darkpurple hover:opacity-80">
                  <FaWhatsapp size={20} />
                </Link>
                <Link href="#" className=" text-fixnix-darkpurple hover:opacity-80">
                  <FaPinterest size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <div className="flex -mb-px">
              {["description", "terms"].map((tab) => (
                <button
                  key={tab}
                  className={`py-4 px-6 text-center border-b-2 font-medium ${
                    activeTab === tab
                      ? "border-fixnix-lightpurple text-fixnix-lightpurple"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">About this Sacred Recording</h2>
          <p className="text-gray-600 mb-6">{track.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Spiritual Context</h3>
                  <p className="text-gray-600">
                    This recording is part of our sacred collection, carefully preserved to maintain
                    the authentic spiritual essence of the Sufi tradition.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    By downloading this sacred audio content, you agree to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Use the content for personal, spiritual practice only</li>
                    <li>Not share, redistribute, or publicly broadcast the audio</li>
                    <li>Respect the sacred nature of these recordings</li>
                    <li>Accept that downloads are tied to your account and device</li>
                    <li>Understand that violations may result in account suspension</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showTermsModal && (
        <TermsModal
          isOpen={showTermsModal}
          onClose={() => setShowTermsModal(false)}
          onAccept={handleTermsAccept}
        />
      )}

      {showDownloadModal && (
        <DownloadModal
          isOpen={showDownloadModal}
          onClose={() => setShowDownloadModal(false)}
          track={track}
          countdown={countdown}
        />
      )}

      {/* Toast Messages */}
      {showToast && (
        <Toast message={showToast.message} type={showToast.type} />
      )}

      {/* Audio Element */}
      <audio ref={track.audioRef} src={track.previewUrl} />
    </Layout>
  );
}
      