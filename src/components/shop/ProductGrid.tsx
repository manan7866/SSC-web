"use client";
import ProductCard from "@/components/sections/home3/ProductCard";
import { PackageXIcon } from "lucide-react";

interface Props {
  products: any[];
  category: string;
}

export default function ProductGrid({ products, category }: Props) {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <PackageXIcon className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-fixnix-darkpurple">
          No products found
        </h3>
        <p className="text-sm text-gray-500">
          Try adjusting your filters or check back later.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} category={category} />
      ))}
    </div>
  );
}
