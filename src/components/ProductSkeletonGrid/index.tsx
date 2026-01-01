"use client";

interface ProductSkeletonProps {
  count?: number; // how many skeletons to show
}

export default function ProductSkeletonGrid({ count = 6 }: ProductSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="border rounded-xl p-4 bg-white shadow-sm animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-4" />

          {/* Title */}
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />

          {/* Description */}
          <div className="h-3 bg-gray-200 rounded w-full mb-2" />
          <div className="h-3 bg-gray-200 rounded w-5/6 mb-4" />

          {/* Rating */}
          <div className="flex space-x-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-5 bg-gray-200 rounded w-16" />
            <div className="h-4 bg-gray-200 rounded w-12" />
          </div>

          {/* Button */}
          <div className="h-9 bg-gray-200 rounded-lg w-full" />
        </div>
      ))}
    </div>
  );
}
