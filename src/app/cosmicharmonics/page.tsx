"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";

const featuresData = [
  { text: " Bridging Science & Astrophysical Exploration" },
  { text: "  Understanding the Vibrational Nature of Reality" },
  { text: "Aligning Human Consciousness with Universal Harmonics" },
  { text: "Exploring How Light, Sound & Time Shape Spiritual Evolution" },
];
const cosmicSlides = [
  {
    subTitle: "Aligning with the Music of the Spheres",
    title: "Discovering the<br/> Harmony of Existence ",
    text: "Cosmic harmonics reveal the sacred vibrations of existence,<br/> guiding seekers toward unity with the universe.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Vibration of the Divine ",
    title: "Tuning into Cosmic<br/> Frequencies ",
    text: "Through cosmic harmonics, seekers align their spirit with the sacred<br/> vibrations of the universe and divine order. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Rhythms of the Cosmos",
    title: "Finding Unity <br/>Through Vibration ",
    text: "Cosmic harmonics reveal the hidden order of existence, <br/>guiding seekers to resonate with universal truth.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "The Sound of Creation",
    title: " Tuning into the<br/> Universe’s Pulse",
    text: "By understanding cosmic harmonics, seekers discover the <br/>sacred soundscape of existence and spiritual awakening.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Resonating with Universal Truth",
    title: "Awakening Through Cosmic<br/> Vibration ",
    text: "Cosmic harmonics help seekers connect with the sacred rhythms of the universe,<br/> finding harmony and enlightenment.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Celestial Navigation",
    image: "assets/images/blog/celestrial.png",
  },
  {
    title: "Sacred Time",
    image: "assets/images/blog/time.png",
  },
  {
    title: "Quantum Entanglement",
    image: "assets/images/blog/entanglement.png",
  },
  {
    title: "Divine Light",
    image: "assets/images/blog/light.png",
  },
  {
    title: "Vibrational Cosmology",
    image: "assets/images/blog/vibration.png",
  },
  {
    title: "Stellar Wisdom",
    image: "assets/images/blog/stellar.png",
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
        <Banner slides={cosmicSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Cosmic Harmonics 
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Cosmic Harmonics explores the universal rhythms, celestial patterns, and vibrational structures that shape existence. Rooted in Sufi wisdom and advanced scientific inquiry, this framework examines how the cosmos functions as a divine symphony, where light, sound, and resonance govern creation, consciousness, and reality itself.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this structured study reveals the hidden frequencies that align matter, energy, and consciousness, offering seekers a scientific and spiritual roadmap to navigating cosmic harmony.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image 
                  src="/assets/images/resources/cosmic.png" 
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
