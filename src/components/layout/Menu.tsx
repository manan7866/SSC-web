import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useNavigation } from "@/hooks/useNavigation";

// Predefined fallback data in case server fetch fails
const PREDEFINED_EXPLORER_ROUTES = [
  { slug: "foundationalmatrices", title: "Foundational Matrices", path: "prod/explorer/foundationalmatrices/v1.json" },
  { slug: "ecologicalintelligence", title: "Ecological Intelligence", path: "prod/explorer/ecologicalintelligence/v1.json" },
  { slug: "consciousnessgeometries", title: "Consciousness Geometries", path: "prod/explorer/consciousnessgeometries/v1.json" },
  { slug: "perceptualgateways", title: "Perceptual Gateways", path: "prod/explorer/perceptualgateways/v1.json" },
  { slug: "realityframeworks", title: "Reality Frameworks", path: "prod/explorer/realityframeworks/v1.json" },
  { slug: "cosmicharmonics", title: "Cosmic Harmonics", path: "prod/explorer/cosmicharmonics/v1.json" },
  { slug: "energeticarchitectures", title: "Energetic Architectures", path: "prod/explorer/energeticarchitectures/v1.json" },
  { slug: "characteralchemy", title: "Character Alchemy", path: "prod/explorer/characteralchemy/v1.json" },
  { slug: "unitysciences", title: "Unity Sciences", path: "prod/explorer/unitysciences/v1.json" },
  { slug: "healingmysteries", title: "Healing Mysteries", path: "prod/explorer/healingmysteries/v1.json" },
  { slug: "wisdomtransmission", title: "Wisdom Transmission", path: "prod/explorer/wisdomtransmission/v1.json" },
  { slug: "sacredartistry", title: "Sacred Artistry", path: "prod/explorer/sacredartistry/v1.json" },
  { slug: "advancedtechnologies", title: "Advanced Technologies", path: "prod/explorer/advancedtechnologies/v1.json" }
];

const PREDEFINED_ACADEMY_ROUTES = [
  { slug: "dialogseries", title: "Dialog Series", path: "prod/academy/dialogseries/v1.json" },
  { slug: "hardtalk", title: "Hard Talk Series", path: "prod/academy/hardtalk/v1.json" },
  { slug: "sacredprofessions", title: "Sufi Professions", path: "prod/academy/sacredprofessions/v1.json" },
  { slug: "inspiringinterview", title: "Inspiring Interviews", path: "prod/academy/inspiringinterview/v1.json" }
];

export default function Menu() {
  const { explorerRoutes, academyRoutes, loading, error } = useNavigation();

  // Use predefined fallback data if the hook returns empty arrays after loading
  const safeExplorerRoutes = (!loading && explorerRoutes.length === 0) ? PREDEFINED_EXPLORER_ROUTES : explorerRoutes;
  const safeAcademyRoutes = (!loading && academyRoutes.length === 0) ? PREDEFINED_ACADEMY_ROUTES : academyRoutes;

  // Debug logging
  // console.log("Menu component - explorerRoutes length:", safeExplorerRoutes?.length || 0);
  // console.log("Menu component - academyRoutes length:", safeAcademyRoutes?.length || 0);
  // console.log("Menu component - loading state:", loading);
  // console.log("Menu component - error state:", error);
  
  return (
    <>
      <ul className="main-menu__list  items-center lg:pl-[20px] xl:pl-[40px]  2xl:pl-[60px]  hidden lg:flex  lg:space-x-[25px] xl:space-x-[30px]  2xl:space-x-[55px]  ">
        {/* HOME */}
        <li className="dropdown megamenu relative group">
          <Link
            href="/"
            className="text-fixnix-darkpurple text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
          >
            HOME
          </Link>

          {/* Megamenu */}
          {/* <ul className="absolute left-0 hidden h-80 -mt-2 space-y-4 group-hover:block bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpurple">
            <li>
              <section className="-mt-[31px] -mb-[31px]">
                <div className="container">
                  <div className="p-[40px] w-[500px] h-[700px] bg-white shadow-lg rounded-b-lg">
                    <div className="grid grid-cols-2 gap-[42px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                      {[1, 2, 3, 4].map((page) => (
                        <div key={page} className="col-span-1">
                          <div>
                            <div className="relative bg-fixnix-lightpurple overflow-hidden">
                              <Link
                                href={`/Index-${page === 4 ? "dark" : page}`}
                                aria-label={`View Home Page ${page}`}
                              >
                                <Image
                                  src={`/assets/images/home-showcase/home-showcase-1-${page}.jpg`}
                                  alt={`Home Page ${page}`}
                                  width={600}
                                  height={700}
                                  className="w-full transition-transform duration-500 ease-in-out transform scale-100"
                                />
                              </Link>
                              <div className="absolute inset-0 flex justify-center items-center transform scale-y-0 opacity-0 invisible transition-all duration-500 ease-in-out">
                                <Link
                                  href={`/Index-${page === 4 ? "dark" : page}`}
                                  aria-label={`View Home Page ${page}`}
                                >
                                  <span className="p-[15px] text-center w-[150px]">
                                    View Page {page}
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <h3 className="home-showcase__title mt-[17px] text-center text-[16px] font-bold text-fixnix-darkpurple">
                              Home Page {page}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </li>
          </ul> */}
        </li>
        
        {/* About Us */}
        <li className="relative group">
          <Link
            href="#"
            className="text-fixnix-darkpurple text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
          >
            DISCOVER SSC
          </Link>
          <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
            <li className="mb-2">
              <Link
                href="/heritage&identity"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Our Heritage & Identity
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/kashmirisufilegacy"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Kashmiri Sufi Legacy
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/purpose&direction"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Purpose & Direction
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/work&practices"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Our Work & Practices
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/exploringkashmirisufism"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Exploring Kashmiri Sufism
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/ourFounder"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Our Founder
              </Link>
            </li>
          </ul>
        </li>
        {/* Teachings Dropdown */}
        <li className="relative group">
          <Link
            href="#"
            className="text-fixnix-darkpurple text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
          >
            YOUR JOURNEY
          </Link>
          <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
            <li className="mb-2">
              <Link
                href="/beginyourjourney"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Begin Your Journey
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/corelearningpaths"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Core Learning Paths
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/growth&development"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Growth & Development
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/leadership&teaching"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Leadership & Teaching
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/submissionportal"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Abstract Submission Portal
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/resources&support"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Resources & Support
              </Link>
            </li>
          </ul>
        </li>

        {/* Programs & Events Dropdown */}
        <li className="relative group">
          <Link
            href="#"
            className="text-fixnix-darkpurple text-[15px] lg:text-[10px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
          >
            SUFI SCIENCE EXPLORER
          </Link>
          <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpurple hidden group-hover:block">
            {loading ? (
              <li className="mb-2 p-4 text-center text-gray-500">Loading...</li>
            ) : (
              safeExplorerRoutes.map((route) => (
                <li key={route.slug} className="mb-2">
                  <Link
                    href={`/explore/${route.slug}`}
                    className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                  >
                    {route.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </li>

        {/* Knowledge Hub Dropdown */}
        <li className="relative group">
          <Link
            href="#"
            className="text-fixnix-darkpurple text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
          >
            DIGITAL ACADEMY
          </Link>
          <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpurple hidden group-hover:block">
            {loading ? (
              <li className="mb-2 p-4 text-center text-gray-500">Loading...</li>
            ) : (
              safeAcademyRoutes.map((route) => (
                <li key={route.slug} className="mb-2">
                  <Link
                    href={`/academy/${route.slug}`}
                    className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                  >
                    {route.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </li>

        

        {/* Support Us Dropdown */}
        <li className="relative group">
          <Link
            href="#"
            className="text-fixnix-darkpurple text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
          >
            SUPPORT US
          </Link>
          <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] rounded-e-md overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
            <li className="mb-2">
              <Link
                href="/waystogive"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Ways to Give
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/volunteerwithus"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Volunteer With Us
              </Link>
            </li>

            <li className="mb-2">
              <Link
                href="/collaboration"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Collaborations
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/#contact"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </li>
        {/* Sufi Gifts Dropdown */}
        <li className="  membership-btn">
          <Link
            href="#"
            className="text-white font-bold text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] hover:text-fixnix-darkpurple"
          >
            SACRED GIFT SHOP
          </Link>
          <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
            <li className="mb-2">
              <Link
                href="/wall&artdecor#products"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Art & Wall Decor
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/jewelry&accessories#products"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Jewelry & Accessories
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/home&living#products"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Home & Living
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/fashion&apparel#products"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Fashion & Apparel
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/wellness&meditation#products"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Wellness & Meditation
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/digitalbooks#products"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Digital Books
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/audiospectrums#products"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Audio Spectrum
              </Link>
            </li>
          </ul>
        </li>
        <Link
          href="#"
          className="text-xl px-2 sm:text-md md:text-2xl text-fixnix-lightpurple transition-all duration-500 ease-in-out hover:text-fixnix-darkpurple"
        >
          <i className="fas fa-shopping-cart"></i>
        </Link>

        <Link
          href="/library"
          className="text-xl px-2 sm:text-md md:text-2xl text-fixnix-lightpurple transition-all duration-500 ease-in-out hover:text-fixnix-darkpurple"
        >
          <i className="fas fa-book-reader"></i>
        </Link>

       

        {/* Additional Dropdowns */}
        {/* Add other dropdown menus like "YOUR JOURNEY", "SUFI SCIENCE EXPLORER", "LEARNING CENTER", "SACRED GIFT SHOP", etc. here similarly */}
      </ul>
    </>
  );
}
