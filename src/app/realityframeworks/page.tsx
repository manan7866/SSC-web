"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";

const featuresData = [
  { text: " Bridging Advanced Science with Sufi Thought" },
  { text: "  Exploring the Mechanics of Perception & Reality" },
  { text: "The Role of Energy, Information & Consciousness" },
  { text: "Providing a Practical Framework for Higher Awareness" },
];
const realitySlides = [
  {
    subTitle: "Building the Foundations of Truth ",
    title: "Exploring the Structure<br/> of Reality ",
    text: "Reality frameworks reveal the hidden design behind existence,<br/> helping seekers align with spiritual order.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Frameworks of Existence ",
    title: "Mapping the Truth of Reality ",
    text: "Reality frameworks offer seekers a guide to understanding the<br/> hidden structure of the universe and existence.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Unlocking the Codes of Reality ",
    title: "The Blueprint of<br/> Existence ",
    text: "By exploring reality frameworks, seekers uncover the hidden laws<br/> guiding existence and spiritual balance.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Discovering the Architecture of Being",
    title: "Reality’s Sacred Blueprint",
    text: "Reality frameworks provide the map to understanding existence,<br/> guiding seekers to align with cosmic truth.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Truth in the Structure of Life ",
    title: "Decoding the <br/>Sacred Framework",
    text: "Reality frameworks reveal the hidden structure of existence,<br/> allowing seekers to align with divine order.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Quantum Dynamics",
    image: "assets/images/blog/quantumdynamics.png",
  },
  {
    title: "Holographic Science",
    image: "assets/images/blog/holographic.png",
  },
  {
    title: "Multiversal Exploration",
    image: "assets/images/blog/multiversal.png",
  },
  {
    title: "Information Mysticism",
    image: "assets/images/blog/information.png",
  },
  {
    title: "Electromagnetic Spirituality",
    image: "assets/images/blog/electromagnetic.png",
  },
  {
    title: "Gravitational Mysteries",
    image: "assets/images/blog/gravity.png",
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
        <Banner slides={realitySlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Reality Frameworks
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Reality Frameworks is a deep exploration into the hidden structures governing existence, blending classical Sufi metaphysics with modern scientific paradigms. This framework examines how reality is shaped, perceived, and influenced through the interplay of quantum mechanics, holographic principles, and multidimensional fields.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this structured study bridges spiritual wisdom with frontier sciences, offering seekers a comprehensive understanding of reality as a dynamic, interconnected system.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/reality.png"
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
