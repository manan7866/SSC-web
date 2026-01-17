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
const WellnessSlides = [
  {
    subTitle: "Harmony for Mind, Body, Soul",
    title: " Sacred Essentials for Inner<br/> Peace & Healing",
    text: " Discover handcrafted wellness tools, meditation aids, and spiritual remedies<br/> inspired by Kashmiri Sufi traditions for balance and tranquility.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Spiritual Healing, Timeless Sufi Wisdom",
    title: " Elevate Your Wellness Through Sufi Practices",
    text: "Explore meditation essentials, natural healing remedies, and holistic well-being<br/> inspired by the sacred wisdom of Sufi spirituality.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Relax, Reflect, Rejuvenate, Renew, Restore",
    title: "Sacred Healing for<br/> a Tranquil Life",
    text: " From herbal infusions to meditation cushions, embrace wellness products<br/> that nurture the soul and promote mindful living.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Nourish Your Soul, Heal Your Being",
    title: "Experience Sufi-Inspired<br/> Meditation & Wellness",
    text: "Enhance your daily spiritual practice with meditation tools, aromatic healing<br/> oils, and mindful essentials crafted with devotion.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Stillness, Divine Healing Energy",
    title: "Journey to Serenity &<br/> Spiritual Wellness",
    text: "Immerse yourself in holistic healing with our carefully curated collection<br/> of Sufi-inspired meditation, relaxation, and self-care essentials.",
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
        const res = await getProducts("MEDITATION", {
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
      <Banner slides={WellnessSlides} />

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              WELLNESS & MEDITATION
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Handwoven reed mats, crafted from grass and rice straws, are used
              in Kashmir for prayer, meditation, and sacred rituals like
              ablution. Sufi healing candles, scented with saffron, lavender,
              and rose, promote peace and purification. Khewa tea blends
              saffron, herbs, and spices for spiritual clarity, while Kashmiri
              gemstones like lapis lazuli and rose quartz offer healing and
              divine connection.
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
                <ProductGrid products={products} category="MEDITATION"/>
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
