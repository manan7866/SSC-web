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
  { text: "Bridging Sufi Energy Sciences & Modern Biophysics" },
  { text: "Understanding the Connection Between Energy & Spirituality" },
  { text: "Exploring Consciousness Beyond the Brain in Cells" },
  { text: "Techniques for Energy Optimization & Spiritual Vitality" },
];
const energeticSlides = [
  {
    subTitle: "Building the Framework of Spirit  ",
    title: "Exploring the Energy<br/> of Creation",
    text: "Energetic architectures reveal the hidden structure of energy behind<br/> existence, guiding seekers toward spiritual balance.  ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Structures of Energy ",
    title: "Understanding the<br/> Architecture of Spirit",
    text: "Through energetic architectures, seekers uncover the patterns of<br/> energy shaping existence and spiritual harmony. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Designing the Spirit’s Blueprint",
    title: "Exploring the Sacred <br/>Energy Grid",
    text: "Energetic architectures provide seekers with a map to understanding<br/> the spiritual design of existence.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Energy as Divine Structure",
    title: "Tapping Into the Power <br/>of Creation ",
    text: " Understanding energetic architectures helps seekers align with the<br/> hidden energy frameworks of existence.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "The Sacred Design of Energy",
    title: "Awakening Through Energetic<br/> Structures ",
    text: "Energetic architectures reveal the spiritual patterns behind existence,<br/> guiding seekers toward deeper truth. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Circulation Systems",
    image: "assets/images/blog/circulation.png",
  },
  {
    title: "Force Amplification",
    image: "assets/images/blog/force.png",
  },
  {
    title: "Purification Science",
    image: "assets/images/blog/purfication.png",
  },
  {
    title: "Spiritual Nutrition",
    image: "assets/images/blog/nutrition.png",
  },
  {
    title: "Cellular Consciousness",
    image: "assets/images/blog/cellular.png",
  },
  {
    title: "Bioenergetic Fields",
    image: "assets/images/blog/bionenergy.png",
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
        <Banner slides={energeticSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Energetic Architectures 
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Energetic Architectures explores the hidden structures that regulate life force, consciousness, and vitality within the human body and beyond. Rooted in Sufi traditions of spiritual physiology and modern bioenergetic sciences, this framework examines how energy circulates, amplifies, and transforms through purification, nutrition, and field harmonization.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this study merges ancient wisdom with scientific inquiry, offering seekers a functional model for enhancing energy flow, optimizing health, and elevating spiritual consciousness.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/architecture.png"
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
