"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";

const featuresData = [
  { text: "Bridging Ancient Knowledge with Modern Inquiry"  },
  { text: "A Structured Path for Seekers, Thinkers & Practitioners" },
  { text: "Integrating Mysticism with Scientific Exploration" },
  { text: "Practical Applications for Consciousness & Transformation" },
];
const MatricesSlides = [
  {
    subTitle: "Blueprint of Spiritual Design",
    title: "Discovering the Core <br/>of Existence",
    text: " Foundational matrices reveal the hidden patterns of creation, guiding seekers <br/>toward the universal truth and spiritual balance.  ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Patterns of Divine Order ",
    title: "Unlocking the Mysteries<br/> of Creation",
    text: "Foundational matrices provide a map to understanding existence through<br/> spiritual codes and sacred geometric alignments.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Decoding the Sacred Patterns",
    title: " Exploring the Core<br/> of Reality",
    text: "Spiritual matrices offer insight into the architecture of<br/> existence, connecting seekers with the hidden order of life.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Keys to Spiritual Frameworks  ",
    title: "Mapping the Divine<br/> Blueprints ",
    text: "Foundational matrices serve as spiritual keys to understanding<br/> creation and unlocking higher states of consciousness.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Understanding Life’s Sacred Grid",
    title: "  Foundational Insights <br/>into Creation",
    text: "The foundational matrices reflect the sacred structure of existence,<br/> guiding seekers to the heart of divine truth.  ",
    buttonText: "Join Now",
    buttonLink: "/",
  },
];
const blogs = [
  {
    title: "Spiritual Foundations",
    image: "assets/images/blog/spiritual.png",
  },
  {
    title: "Mystical Cosmology",
    image: "assets/images/blog/cosmology.png",
  },
  {
    title: "Divine Numerology",
    image: "assets/images/blog/numerology.png",
  },
  {
    title: "Attribute Studies",
    image: "assets/images/blog/attributes.png",
  },
  {
    title: "Soul Psychology",
    image: "assets/images/blog/psycology.png",
  },
  {
    title: "Unity Laboratory",
    image: "assets/images/blog/unity.png",
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: number) => {
    // Type the key parameter as a number
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: isActive.key, // Include the key when updating the state
      });
    } else {
      setIsActive({
        status: true,
        key, // Make sure to pass the key value when updating
      });
    }
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        {/*Core Services Start*/}
        <Banner slides={MatricesSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Foundational Matrices
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  The Foundational Matrices serve as a structured framework for exploring the intersection of mysticism, science, and consciousness. Rooted in classical Sufi knowledge yet adapted for the modern seeker, this study unveils the hidden order of existence through mathematical, cosmological, and psychological dimensions.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this structured approach provides seekers with a scientific yet experiential path to understanding divine reality, soul dynamics, and cosmic harmony.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                    src="/assets/images/resources/matrices.png"
                    alt="Repair Services"
                    width={350}
                    height={350}
                    className="w-[350px] h-[350px]"
                  />
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Counter Section */}
          </section>
          <Features title="Why This Matters?" features={featuresData} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
  <div
    key={index}
    className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
  >
    <div className="relative">
      <Image
  src={`/${blog.image}`}
  alt={blog.title}
  width={400}
  height={240}
  className="w-full h-60 object-cover"
/>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
        <Link href="/details" className="text-white text-2xl">
          View Details
        </Link>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl text-center font-semibold text-fixnix-darkpurple mb-3">
        <Link
          href="/details"
          className="text-fixnix-darkpurple hover:text-fixnix-lightpurple"
        >
          {blog.title}
        </Link>
      </h3>
      <div className="flex justify-center">
        <Link
          href="/details"
          className="inline-block bg-fixnix-lightpurple text-white hover:bg-fixnix-darkpurple px-2 py-1 rounded-md"
        >
          Unveil Insights
        </Link>
      </div>
    </div>
  </div>
))}

</div>

          
        </div>
      </div>
        

        {/*Services One End*/}
      </Layout>
    </>
  );
}
