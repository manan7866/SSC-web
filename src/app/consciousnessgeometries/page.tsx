"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";

const featuresData = [
  { text: "Bridging Quantum Science with Sufi Consciousness Studies" },
  { text: " Awareness through Geometric & Multi-Dimensional Models" },
  { text: "Exploring Non-Locality, Perception, & Nature of Reality" },
  { text: "Developing Practical Applications for Conscious Evolution" },
];
const geometrySlides = [
  {
    subTitle: "Sacred Shapes of Awareness",
    title: "Mapping the Geometry of Consciousness",
    text: "Consciousness geometries reveal the hidden order of mind and <br/>spirit, unlocking deeper dimensions of awareness.  ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Aligning with Sacred Symmetry",
    title: "The Hidden Architecture<br/> of Awareness",
    text: "Through sacred geometry, seekers align their consciousness <br/>with the divine order of existence.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Paths of Geometric Awakening",
    title: "Understanding the Shape<br/> of Mind",
    text: "Consciousness geometries help seekers decode the sacred structures behind <br/>thought, awareness, and spiritual awakening.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Harmonizing the Mind’s Blueprint",
    title: "Sacred Geometry of <br/>Consciousness ",
    text: "By aligning thought with geometric patterns, seekers unlock deeper states<br/> of clarity, insight, and spiritual harmony.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Unfolding the Patterns of Awareness",
    title: "Sacred Codes of Thought<br/> and Spirit ",
    text: " Consciousness geometries map the journey toward spiritual awakening,<br/> revealing the hidden patterns of the mind.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Awareness Cartography",
    image: "assets/images/blog/awareness.png",
  },
  {
    title: "Quantum Integration",
    image: "assets/images/blog/quantum.png",
  },
  {
    title: "Non-Local Studies",
    image: "assets/images/blog/nonlocal.png",
  },
  {
    title: "Dimensional Perception",
    image: "assets/images/blog/dimensional.png",
  },
  {
    title: "Temporal Folding",
    image: "assets/images/blog/temporal.png",
  },
  {
    title: "Field Navigation",
    image: "assets/images/blog/field.png",
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
        <Banner slides={geometrySlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-48 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Consciousness Geometries
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Consciousness Geometries is an exploration of the structural, spatial, and vibrational nature of awareness. Rooted in Sufi metaphysics and contemporary quantum theories, this framework examines how consciousness interacts with dimensions, time, and non-locality through geometric and field-based models.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this study presents a structured approach to mapping the unseen architectures of consciousness, integrating sacred geometry, quantum mechanics, and multi-dimensional perception to uncover the hidden mechanics of awareness and reality formation.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image 
                  src="/assets/images/resources/geometries.png" 
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
