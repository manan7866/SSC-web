"use client";
import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/sections/home3/Banner";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { contentServices, type ContentItem } from "@/hooks/contentServices";

type Slide = {
  subTitle?: string;
  title: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
};

type Block =
  | { type: "heroSlider"; slides: Slide[] }
  | { type: "sectionHeader"; tagline?: string; title: string; html?: string }
  | {
      type: "sidebar";
      searchPlaceholder?: string;
      categories: { label: string; href: string; active?: boolean }[];
    }
  | { type: "listToolbar"; showingText?: string; sortOptions?: string[] }
  | {
      type: "cardGrid";
      cards: { title: string; text?: string; image?: string; href?: string }[];
    }
  | { type: "richText"; content: string };

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "heroSlider") {
    // Add safety check for slides
    if (
      !block.slides ||
      !Array.isArray(block.slides) ||
      block.slides.length === 0
    ) {
      console.error("HeroSlider block missing or invalid slides:", block);
      return (
        <div className="p-4 text-center text-red-500">
          Error: HeroSlider block is missing slides data
        </div>
      );
    }

    return <Banner slides={block.slides as any} />;
  }
  if (block.type === "sectionHeader") {
    return (
      <div className="text-center sm:text-left relative block mt-[40px] mb-[49px] z-[1]">
        {/* Section Tagline */}
        {block.tagline && (
          <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            {block.tagline}
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
        )}
        <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">
          {block.title}
        </h2>
        {/* Section Text */}
        {block.html && (
          <p className="pt-[10px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
            <span dangerouslySetInnerHTML={{ __html: block.html }} />
          </p>
        )}
      </div>
    );
  }
  if (block.type === "sidebar") {
    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-lg bg-fixnix-lightpurple shadow-sm relative">
          <input
            type="text"
            placeholder={block.searchPlaceholder || "Search"}
            className="w-full p-2 pr-10 border rounded-lg bg-fixnix-lightpurple"
          />
          <i className="fa fa-search absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-100"></i>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {block.categories.map((c, idx) => (
              <li key={idx} className={c.active ? "font-bold" : undefined}>
                <Link
                  href={c.href}
                  className={
                    c.active
                      ? "hover:text-fixnix-darkpurple"
                      : "text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                  }
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (block.type === "listToolbar") {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
        <p>{block.showingText || "Showing results"}</p>
        <select className="p-2 border bg-gray-100 rounded-lg">
          {(block.sortOptions || ["Sort by popular", "Sort by Ratings"]).map(
            (opt, idx) => (
              <option key={idx} className="hover:bg-fixnix-lightpurple">
                {opt}
              </option>
            )
          )}
        </select>
      </div>
    );
  }
  if (block.type === "cardGrid") {
    return (
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {block.cards.map((card, index) => (
          <div
            key={index}
            className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative group">
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
                <Link href={card.href || "#"}>
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-xl font-semibold mt-2 text-white">
                <Link href={card.href || "#"} className="text-white">
                  {card.title}
                </Link>
              </h3>
              {card.text && (
                <p className="text-sm text-gray-100 mt-2 italic">{card.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "richText")
    return (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    );
  return null;
}

export default function AcademyPage() {
  const pathname = usePathname();
  const [data, setData] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);

  const parts = pathname.split("/").filter(Boolean);
  const slug = parts[1];
  useEffect(() => {
    async function fetchData() {
      try {
        const content = await contentServices.getContent("academy", slug);

        setData(content);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchData();
  }, [pathname]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!data) return <div className="p-8">Not found</div>;

  // Find the heroSlider block once
  const heroSliderBlock = data.blocks.find((b: any) => b.type === "heroSlider");

  return (
    <Layout headerStyle={2} footerStyle={1}>
      {/* Render hero slider first if provided */}
      {heroSliderBlock && <BlockRenderer block={heroSliderBlock} />}

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4 text-left-mobile">
          {/* Section header, if present */}
          {data.blocks
            .filter((b: any) => b.type === "sectionHeader")
            .map((b: Block, i: number) => (
              <BlockRenderer key={`header-${i}`} block={b} />
            ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar column */}
            <div className="lg:col-span-1 space-y-6">
              {data.blocks
                .filter((b: any) => b.type === "sidebar")
                .map((b: Block, i: number) => (
                  <>
                    <BlockRenderer key={`sidebar-${i}`} block={b} />
                    {/* {slug === "dialogseries" ? ( */}
                      <div className="space-y-6">
                        <div className="p-6 border rounded-2xl bg-gradient-to-br from-white via-fixnix-lightpurple/10 to-white shadow-xl relative overflow-hidden">
                          {/* decorative blur circle */}
                          <div className="absolute -top-8 -right-8 w-44 h-44 bg-fixnix-lightpurple/10 rounded-full filter blur-3xl pointer-events-none" />
                          <div className="flex items-start gap-4 lg:flex-col">
                            {/* Icon circle */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fixnix-lightpurple flex items-center justify-center text-white text-lg shadow">
                              {/* microphone icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                                aria-hidden="true"
                              >
                                <path d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3z" />
                                <path d="M19 11a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 10-2 0 7 7 0 006 6.92V21a1 1 0 102 0v-3.08A7 7 0 0019 11z" />
                              </svg>
                            </div>

                            <div className="flex-1">
                              <h3 className="font-semibold mb-1 text-fixnix-darkpurple text-lg">
                                Speak Your Sufi Truth
                              </h3>
                              <p className="text-sm text-gray-600 mb-2">
                                Let your work and wisdom inspire others.
                              </p>
                              <p className="text-sm text-gray-500 mb-4">
                                Join our interview series and share how Sufism
                                shapes your world.
                              </p>
                              <p className="text-sm text-gray-500 mb-4">
                                Your journey
                                deserves to be heard.
                              </p>

                              {/* Animated link */}
                              <Link
                                href={"/interviewform"}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-fixnix-lightpurple bg-fixnix-lightpurple/10 group hover:bg-fixnix-lightpurple hover:text-white transition-colors duration-300 shadow-sm"
                                aria-label="Apply for Interview"
                              >
                                <span>Schedule Now</span>
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                  {/* arrow icon */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 12h14M13 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/* // ) : null} */}
                  </>
                ))}
            </div>

            {/* Main content column */}
            <div className="md:col-span-3">
              {data.blocks
                .filter((b: any) => b.type === "listToolbar")
                .map((b: Block, i: number) => (
                  <BlockRenderer key={`toolbar-${i}`} block={b} />
                ))}

              {data.blocks
                .filter(
                  (b: any) => b.type === "richText" || b.type === "cardGrid"
                )
                .map((b: Block, i: number) => (
                  <BlockRenderer key={`main-${i}`} block={b} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
