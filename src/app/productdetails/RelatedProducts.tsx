"use client";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";
import ProductGrid from "@/components/shop/ProductGrid";
import { getProducts } from "@/hooks/shopServices";
import React, { useEffect, useState } from "react";

const RelatedProducts = ({ category }: { category: string }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  // 🔥 Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await getProducts(category, {
          page: 1,
          limit: 6,
        });

        setProducts(res.data.products || []); // adjust if backend returns differently
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <div className="w-full">
      {/* Related Products */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-8">
            You May Also Like
          </h2>
          {loading ? (
            <ProductSkeletonGrid count={6} />
          ) : (
            <ProductGrid products={products} category={category} />
          )}
        </div>
      </div>

      {/* Recently Viewed */}
      {/* <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-8">
            Recently Viewed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 2).map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/product-details/${product.id}`}>
                  <div className="relative overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-fixnix-darkpurple mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <RatingStars rating={product.rating} />
                      <span className="text-sm text-fixnix-gray">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-fixnix-lightpurple">
                        ${product.price.toFixed(2)}
                      </span>
                      <button className="text-fixnix-gray hover:text-red-500">
                        <FaRegHeart />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RelatedProducts;
