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

const FashionSlides = [
  {
    subTitle: "Elegance Woven with Spiritual Essence",
    title: " Timeless Sufi-Inspired<br/> Fashion & Apparel",
    text: " Discover handcrafted clothing inspired by Kashmiri Sufi traditions, blending heritage,<br/> artistry, and spirituality into every stitch.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Wear the Spirit of Tradition",
    title: " Sufi-Inspired Attire<br/> for Every Occasion",
    text: "Explore exquisite garments infused with cultural symbolism and crafted with<br/> devotion, reflecting the grace of Kashmiri Sufi heritage.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Artistry, Culture, Spirituality in Fashion",
    title: " Handcrafted Apparel Rooted<br/> in Kashmiri Tradition",
    text: "  Adorn yourself with beautifully designed garments that embody the <br/>elegance, wisdom, and cultural depth of Kashmiri Sufi traditions.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Fashion That Reflects Inner Harmony",
    title: "Experience the Beauty<br/> of Sufi Elegance",
    text: "From flowing robes to intricate patterns, embrace a fashion line that<br/> fuses spirituality, tradition, and contemporary style.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Graceful Attire, Inspired by Spirituality",
    title: "Traditional Textiles with<br/> a Sacred Touch",
    text: "Adorn yourself with beautifully designed garments that embody the elegance, <br/>wisdom, and cultural depth of Kashmiri Sufi traditions.",
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
        const res = await getProducts("FASHION", {
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
      <Banner slides={FashionSlides} />

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              FASHION & APPAREL
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Kashmiri woolen robes, handwoven with local wool, offer
              traditional spiritual wear, while Pashmina shawls provide divine
              softness and warmth. Embroidered tunics and elegant jackets
              showcase intricate Kashmiri embroidery, blending tradition with
              artistry. For meditation, Sufi whirling skirts are handmade for
              dervishes, reflecting Kashmir’s craftsmanship and spiritual
              essence in every stitch.
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
              />
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
                <ProductGrid products={products} category="FASHION" />
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
