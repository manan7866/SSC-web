"use client";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home3/Banner";
import Breadcrumb from "@/components/sections/home3/Breadcrumb";
import ProductSidebar from "@/components/shop/ProductSidebar";
import ProductSorting from "@/components/shop/ProductSorting";
import ProductGrid from "@/components/shop/ProductGrid";
import Pagination from "@/components/shop/Pagination";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getProducts } from "@/hooks/shopServices";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";

const JewelrySlides = [
  {
    subTitle: "Elegance Rooted in Spiritual Tradition",
    title: "Timeless Sufi-Inspired<br/> Jewelry & Accessories",
    text: " Adorn yourself with handcrafted jewelry and accessories inspired by Kashmiri Sufi<br/> artistry, blending tradition, beauty, and spiritual significance.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: " Wear the Essence of Spiritual Beauty",
    title: "Handcrafted Adornments <br/>with Mystical Meaning",
    text: "Explore unique Sufi-inspired jewelry and accessories that carry the<br/> essence of devotion, wisdom, and artistic heritage from Kashmir.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Symbols in Every Design",
    title: "Jewelry That Reflects <br/>Your Inner Light",
    text: "Discover intricately designed jewelry infused with spiritual symbolism, celebrating the harmony<br/> between craftsmanship and Kashmiri Sufi traditions.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Crafted with Devotion, Worn with Grace",
    title: "Spiritual Elegance in<br/> Every Detail",
    text: "Our collection of Kashmiri Sufi-inspired accessories brings divine beauty<br/> and soulful artistry to your personal style and presence.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Adornment Inspired by Divine Wisdom",
    title: "Unique Jewelry for the <br/>Soulful Seeker",
    text: " Each piece tells a story—wear jewelry that embodies love, devotion,<br/> and the timeless artistry of Kashmiri Sufi traditions.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // 🔥 Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await getProducts("ACCESSORIES", {
          page: currentPage,
          limit: productsPerPage,
          sort: sortOption,
          search: searchQuery,
        });

        setProducts(res.data.products || []); // adjust if backend returns differently
        setTotal(res.data.pagination.total || 0);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [currentPage, productsPerPage, sortOption, searchQuery]);

  const totalPages = Math.ceil(total / productsPerPage);

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={JewelrySlides} />

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              Jewelry & Accessories
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Kashmiri jewelry showcases exquisite craftsmanship, featuring
              Silver Prayer Beads (Tasbeeh) made with local silver and
              semi-precious stones. The collection includes Lapis Lazuli
              Pendants carved with sacred Sufi symbols and Handcrafted Rings
              engraved with divine patterns, blending mysticism and tradition.
              Each piece reflects Kashmir’s rich cultural legacy, merging
              artistry with profound spiritual meaning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <ProductSidebar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />{" "}
            </div>

            {/* Products */}
            <div className="md:col-span-3" id="products">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <p>
                  Showing {(currentPage - 1) * productsPerPage + 1}–
                  {Math.min(currentPage * productsPerPage, total)} of {total}{" "}
                  results
                </p>
                <ProductSorting
                  productsPerPage={productsPerPage}
                  setProductsPerPage={setProductsPerPage}
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                />
              </div>

              {loading ? (
                <ProductSkeletonGrid count={6} />
              ) : (
                <ProductGrid products={products} category="ACCESSORIES"/>
              )}

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
