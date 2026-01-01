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

const HomeSlides = [
  {
    subTitle: "Sacred Living, Inspired by Tradition",
    title: "Transform Your Space<br/> with Spiritual Elegance",
    text: "  Bring peace and harmony to your home with handcrafted décor,<br/> inspired by Kashmiri Sufi artistry and timeless traditions.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: " Graceful Living, Sufi-Inspired Serenity",
    title: " Elevate Your Home with<br/> Spiritual Touch",
    text: "Explore soulful home essentials, from sacred décor to handcrafted furnishings,<br/> designed to create an atmosphere of peace and mindfulness.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Tradition, Beauty, Comfort, Harmony, Spirit",
    title: "Artisanal Homeware for<br/> Sacred Living",
    text: " Infuse your home with warmth, culture, and spiritual elegance<br/> through handcrafted Kashmiri Sufi-inspired home and living collections.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Handcrafted Beauty for Inspired Living",
    title: "Timeless Kashmiri Craft<br/> for Your Home",
    text: "Discover home essentials enriched with heritage, designed to enhance your <br/>space with beauty, authenticity, and soulful energy.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Artistry for Every Home",
    title: "Create a Sanctuary of<br/> Spiritual Comfort",
    text: " Our collection blends sacred craftsmanship with functionality, offering timeless<br/> home décor and essentials inspired by Kashmiri Sufi traditions.",
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
        const res = await getProducts("HOME_LIVING", {
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
      <Banner slides={HomeSlides} />

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              HOME & LIVING
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Kashmiri wall hangings feature tapestries adorned with spiritual
              symbols, Sufi poetry, and sacred images, adding a divine touch to
              spaces. Handcrafted ceramic sacred offering bowls are designed for
              ritual use, while traditional brass lamps illuminate prayers and
              meditation. Complementing these are exquisite ceramic tea sets,
              crafted for ceremonial tea drinking, reflecting Kashmir’s rich
              artisanal heritage.
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
                <ProductGrid products={products} category="HOME_LIVING"/>
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
