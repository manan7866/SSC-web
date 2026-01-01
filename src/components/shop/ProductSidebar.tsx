"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

interface Props {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function ProductSidebar({ searchQuery, setSearchQuery }: Props) {
  const pathname = usePathname();
  const categories = [
    { name: "Accessories", href: "/jewelry&accessories#products" },
    { name: "Decoration", href: "/wall&artdecor#products" },
    { name: "Fashion", href: "/fashion&apparel#products" },
    { name: "Home & Living", href: "/home&living#products" },
    { name: "Meditation", href: "/wellness&meditation#products" },
    { name: "Music", href: "/audiospectrums#products" },
    { name: "Digital Books", href: "/digitalbooks#products" },
  ];

  const [inputValue, setInputValue] = useState(searchQuery);

  // 🔥 debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, setSearchQuery]);

  return (
    <div className="p-4 border rounded-lg bg-gray-100 shadow-sm sticky top-0">
      {/* Search input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 
                     focus:ring-2 focus:ring-fixnix-lightpurple focus:outline-none 
                     shadow-sm text-sm"
        />
        {inputValue && (
          <button
            type="button"
            onClick={() => setInputValue("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <h3 className="font-semibold mb-2">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat, i) => (
          <li key={i}>
            <Link
              scroll={false}
              href={cat.href}
              className={cn(
                "block text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple",
                pathname === cat.href &&
                  "underline underline-offset-2 text-fixnix-darkpurple"
              )}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
