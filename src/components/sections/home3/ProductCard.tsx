import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  images?: string[]; // updated to match backend
  coverImage?: string | null;
  overviewImages?: string[];
  description: string;
  price: number;
  oldPrice?: number | null;
  rating?: number; // optional if backend doesn’t send
  tags?: string[];
  isWished?: boolean;
};

type ProductCardProps = {
  product: Product;
  category: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, category }) => {
  const [isWished, setIsWished] = useState(product.isWished || false);

  const handleWishlistToggle = () => {
    setIsWished(!isWished);
  };

  // Pick first image, validate URL
  const firstImage = product.images
    ? product.images?.[0]
    : product.coverImage
    ? product.coverImage
    : product.overviewImages
    ? product.overviewImages[0]
    : "/assets/images/loader.png";
  const displayImage =
    firstImage && firstImage.startsWith("http")
      ? firstImage
      : "/assets/images/loader.png";

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <div className="group relative overflow-hidden">
          <Image
            src={displayImage}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2 text-ellipsis">{product.description}</p>

        {/* Rating */}
        {product.rating !== undefined && (
          <div className="flex items-center space-x-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < (product.rating || 0)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* Price */}
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
          href={`/productdetails/${category}/${product.id}`} // dynamic details page
          className="px-4 py-2 bg-fixnix-lightpurple text-white rounded-lg hover:bg-fixnix-darkpurple transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
