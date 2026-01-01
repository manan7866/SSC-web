"use client";
import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";
import Image from "next/image";
import Link from "next/link";
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
  | { type: "featureList"; items: { text: string }[] }
  | { type: "richText"; content: string }
  | {
      type: "cardGrid";
      cards: { title: string; text?: string; image?: string; href?: string }[];
    }
  | { type: "sectionHeader"; tagline?: string; title: string; html?: string }
  | {
      type: "imageTextSplit";
      tagline?: string;
      html: string;
      image: string;
      imageAlt?: string;
      imageWidth?: number;
      imageHeight?: number;
      imagePosition?: "left" | "right";
    };

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

  if (block.type === "featureList") {
    return <Features title="Why This Matters?" features={block.items} />;
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

  if (block.type === "imageTextSplit") {
    const content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-11 items-center">
        <div>
          <div className="text-left">
            {block.tagline && (
              <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                {block.tagline}
                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
            )}
          </div>
          <div
            className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden w-full max-w-[350px] h-[350px] bg-fixnix-lightpurple mx-auto">
            <Image
              src={block.image}
              alt={block.imageAlt || "image"}
              width={block.imageWidth || 350}
              height={block.imageHeight || 350}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );

    return block.imagePosition === "left" ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-11 items-center">
        <div className="order-2 md:order-1">
          <div className="text-left">
            {block.tagline && (
              <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                {block.tagline}
                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
            )}
          </div>
          <div
            className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </div>
        <div className="relative order-1 md:order-2">
          <div className="rounded-lg overflow-hidden w-full max-w-[350px] h-[350px] bg-fixnix-lightpurple mx-auto">
            <Image
              src={block.image}
              alt={block.imageAlt || "image"}
              width={block.imageWidth || 350}
              height={block.imageHeight || 350}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    ) : (
      content
    );
  }

  if (block.type === "cardGrid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {block.cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              {card.image && (
                <Image
                  src={card.image.startsWith("/") ? card.image : card.image}
                  alt={card.title}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                <Link href={card.href || "#"} className="text-white text-2xl">
                  View Details
                </Link>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl text-center font-semibold text-fixnix-darkpurple mb-3">
                <Link
                  href={card.href || "#"}
                  className="text-fixnix-darkpurple hover:text-fixnix-lightpurple transition-colors"
                >
                  {card.title}
                </Link>
              </h3>
              {card.text && (
                <p className="text-sm text-gray-600 text-center mb-3 italic">
                  {card.text}
                </p>
              )}
              <div className="flex justify-center">
                <Link
                  href={card.href || "#"}
                  className="inline-block bg-fixnix-lightpurple text-white hover:bg-fixnix-darkpurple px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  Unveil Insights
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "richText") {
    return (
      <div
        className="prose max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    );
  }

  return null;
}

export default function ExplorerPage() {
  const pathname = usePathname();
  const [data, setData] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    const slug = parts[1];

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const content = await contentServices.getContent("explorer", slug);
        setData(content);
      } catch (e: any) {
        console.error("Error fetching explorer data:", e);
        setError(e.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchData();
    }
  }, [pathname]);

  if (loading) {
    return (
      <Layout headerStyle={2} footerStyle={1}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fixnix-lightpurple mx-auto mb-4"></div>
            <p className="text-gray-600">Loading explorer content...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout headerStyle={2} footerStyle={1}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">Error Loading Content</div>
            <p className="text-gray-600">{error || "Content not found"}</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Find the heroSlider block once
  const heroSliderBlock = data.blocks.find((b: any) => b.type === "heroSlider");
  const sectionHeaderBlocks =
    data.blocks?.filter((b: any) => b.type === "sectionHeader") || [];
  const sidebarBlocks =
    data.blocks?.filter((b: any) => b.type === "sidebar") || [];
  const mainContentBlocks =
    data.blocks?.filter(
      (b: any) =>
        b.type === "featureList" ||
        b.type === "imageTextSplit" ||
        b.type === "richText" ||
        b.type === "cardGrid"
    ) || [];

  // Debug information (remove in production)
  const debugInfo = {
    totalBlocks: data.blocks?.length || 0,
    blockTypes: data.blocks?.map((b: any) => b.type) || [],
    heroSlider: !!heroSliderBlock,
    sectionHeaders: sectionHeaderBlocks.length,
    sidebars: sidebarBlocks.length,
    mainContent: mainContentBlocks.length,
  };

  return (
    <Layout headerStyle={2} footerStyle={1}>
      {/* Render hero slider first if provided */}
      {heroSliderBlock && <BlockRenderer block={heroSliderBlock} />}

      {/* Section headers */}
      {sectionHeaderBlocks.length > 0 && (
        <section className="team-top text-left-mobile">
          <div className="container mx-auto px-4 text-left-mobile">
            {sectionHeaderBlocks.map((b: Block, i: number) => (
              <BlockRenderer key={`header-${i}`} block={b} />
            ))}
          </div>
        </section>
      )}

      {/* Main content with sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar column - only show if sidebar blocks exist */}
            {sidebarBlocks.length > 0 && (
              <div className="md:col-span-1 space-y-6">
                {sidebarBlocks.map((b: Block, i: number) => (
                  <BlockRenderer key={`sidebar-${i}`} block={b} />
                ))}
              </div>
            )}

            {/* Main content column - adjust span based on sidebar presence */}
            <div
              className={`${
                sidebarBlocks.length > 0 ? "md:col-span-3" : "md:col-span-4"
              }`}
            >
              {mainContentBlocks.length > 0 ? (
                mainContentBlocks.map((b: Block, i: number) => (
                  <div key={`main-${i}`} className="mb-8">
                    <BlockRenderer block={b} />
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No content blocks found for this explorer page.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
