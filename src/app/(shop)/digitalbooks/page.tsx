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

const BooksSlides = [
  {
    subTitle: "Sacred Texts, Anytime, Anywhere",
    title: "Discover Sufi Wisdom <br/>in Digital Books",
    text: " Access an extensive collection of Sufi literature, manuscripts, and teachings <br/>in digital format, bringing centuries of wisdom to your fingertips.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Timeless Knowledge in Digital Form",
    title: "A Treasure of Sufi<br/> Literature Online",
    text: "Explore rare and contemporary Sufi texts, offering deep insights into<br/> spirituality, philosophy, and the mystical traditions of Kashmiri Sufism.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Read, Reflect, Learn, Grow, Transform",
    title: " The Gateway to Sufi<br/> Knowledge Online",
    text: "Enhance your spiritual journey with a curated selection of digital books, <br/>bridging Sufi heritage with modern understanding.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Wisdom Preserved, Digitally Accessible",
    title: " Unlock the Mystical <br/>World of Sufism",
    text: "Explore centuries of Sufi philosophy, poetry, and teachings in a vast digital<br/> library designed for seekers of truth and enlightenment.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "A Digital Library of Enlightenment",
    title: "Sufi Teachings at<br/> Your Fingertips",
    text: " Dive into a rich collection of sacred Sufi writings, available in<br/> digital format for convenient access and lifelong learning.",
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
        const res = await getProducts("DIGITAL_BOOK", {
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
      <Banner slides={BooksSlides} />

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              Our Books Collection
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Our collection includes a wide range of Sufi texts, written by
              spiritual luminaries and scholars whose teachings have shaped the
              spiritual landscape of Kashmir and beyond. These digital books
              offer insights into subjects such as the nature of reality, the
              soul’s journey and the science of divine love. Whether you are a
              novice or a seasoned seeker, these books will guide you on your
              path to spiritual enlightenment.
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
                <ProductGrid products={products} category="DIGITAL_BOOK" />
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
