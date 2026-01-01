import Image from "next/image";
import { Heart, Star, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

type AudioProduct = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  tags: string[];
  isWished: boolean;
  duration: string;
  artist: string;
  previewUrl: string;
};

type AudioCardProps = {
  product: AudioProduct;
};

const AudioCard: React.FC<AudioCardProps> = ({ product }) => {
  // State to handle the "wish" toggle and audio playback
  const [isWished, setIsWished] = useState(product.isWished);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleWishlistToggle = () => {
    setIsWished(!isWished);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        {/* Image with Play Button and Zoom Effect on Hover */}
        <div className="group relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all transform hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </button>
          </div>
          
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-1">{product.artist}</p>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
         
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-fixnix-darkpurple">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link 
          href="/audiodetails"
          className="px-4 py-2 bg-fixnix-lightpurple text-white rounded-lg hover:bg-fixnix-darkpurple transition-colors duration-300"
        >
          View Details
        </Link>
      </div>

      {/* Hidden audio element for preview */}
      <audio ref={audioRef} src={product.previewUrl} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default AudioCard;
