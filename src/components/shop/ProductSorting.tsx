"use client";
import React from "react";

interface Props {
  productsPerPage: number;
  setProductsPerPage: (val: number) => void;
  sortOption: string;
  setSortOption: (val: string) => void;
}

export default function ProductSorting({
  productsPerPage,
  setProductsPerPage,
  sortOption,
  setSortOption,
}: Props) {
  return (
    <div className="flex items-center space-x-4">
      <select
        className="p-2 border bg-gray-100 rounded-lg"
        value={productsPerPage}
        onChange={(e) => setProductsPerPage(Number(e.target.value))}
      >
        <option value={12}>Show 12</option>
        <option value={24}>Show 24</option>
        <option value={48}>Show 48</option>
      </select>

      <select
        className="p-2 border bg-gray-100 rounded-lg"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="bestselling">Bestselling</option>
        <option value="top-rated">Top Rated</option>
      </select>
    </div>
  );
}
