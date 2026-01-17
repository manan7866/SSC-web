export default function ProductDetailsSkeleton() {
  return (
    <div className="container mx-auto p-4 md:p-6 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Images */}
        <div>
          {/* Big Image */}
          <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4" />

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-4">
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-200 rounded-md" />

          {/* Short Description */}
          <div className="h-4 w-full bg-gray-200 rounded-md" />
          <div className="h-4 w-5/6 bg-gray-200 rounded-md" />

          {/* Reviews */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-24 bg-gray-200 rounded-md" />
            <div className="h-4 w-12 bg-gray-200 rounded-md" />
          </div>

          {/* Price */}
          <div className="h-6 w-32 bg-gray-200 rounded-md" />

          {/* Delivery Time */}
          <div className="h-4 w-40 bg-gray-200 rounded-md" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="h-10 w-full sm:w-32 bg-gray-200 rounded-lg" />
            <div className="h-10 w-full sm:w-32 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
