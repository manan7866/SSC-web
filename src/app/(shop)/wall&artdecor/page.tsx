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

const ArtSlides = [
  {
    subTitle: "Art That Reflects Spiritual Beauty",
    title: "Elevate Your Space <br/>with Sufi Art",
    text: "Discover handcrafted art and wall décor inspired by Kashmiri Sufi traditions, <br/>bringing peace, beauty, and spiritual essence to your home.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Expressions in Every Stroke",
    title: "Transform Your Home<br/> with Divine Art",
    text: "Explore intricate Sufi-inspired wall décor, calligraphy, and artwork designed to<br/> inspire tranquility, reflection, and cultural appreciation.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Artistry Rooted in Sufi Tradition",
    title: "Mystical Wall Décor <br/>for Inspired Spaces",
    text: "Handcrafted with love, our Kashmiri Sufi art pieces tell stories of <br/>devotion, harmony, and timeless spiritual wisdom.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Spiritual Art to Inspire You",
    title: "Sacred Masterpieces for<br/> Every Wall",
    text: "Decorate with soulful Sufi art, blending traditional craftsmanship with <br/>divine inspiration to create an atmosphere of peace and serenity.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Decor That Speaks to the Soul",
    title: "Experience the Beauty of Kashmiri Art",
    text: "Bring timeless Sufi aesthetics into your home with unique wall décor<br/> inspired by faith, devotion, and artistic mastery.",
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
        const res = await getProducts("DECORATION", {
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
      <Banner slides={ArtSlides} />

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center sm:text-left mt-[40px] mb-[10px]">
            <span className="relative inline-block text-[18px] text-fixnix-lightpurple font-semibold uppercase">
              Art & Wall Decor
            </span>
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base lg:text-lg leading-[1.8]">
              Kashmiri Sufi Calligraphy and Sacred Geometric Art reflect
              Kashmir’s spiritual heritage...
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
                <ProductGrid products={products} category="DECORATION"/>
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
