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
  { text: "Activating Higher Sensory Awareness for Growth"  },
  { text: " Developing Inner Perception & Metaphysical Senses"  },
  { text: "Physical Sensory Experience with Spiritual Dimensions" },
  { text: " Enhancing the Understanding of Sufi Mystical Phenomena"},
];
const gatewaysSlides = [
  {
    subTitle: "Doors to Higher Awareness ",
    title: "Opening the Gates<br/> of Perception ",
    text: "Perceptual gateways offer seekers access to hidden dimensions of truth,<br/> awareness, and spiritual insight.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Awakening Through Sacred Portals",
    title: "Discovering the Path to<br/> Inner Visiont",
    text: "Perceptual gateways expand awareness, connecting seekers to spiritual<br/> truth and higher dimensions of consciousness.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Unlocking Inner Sight ",
    title: "The Path to <br/>Spiritual Perception",
    text: "Perceptual gateways reveal hidden dimensions of existence, <br/>helping seekers find clarity and deeper understanding.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Keys to Mystical Vision",
    title: "Discovering the Power<br/> of Perception",
    text: "By unlocking perceptual gateways, seekers expand their spiritual<br/> awareness and connect to higher truths.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Portals to Spiritual Awareness",
    title: "Opening the Mind’s <br />Hidden Doors",
    text: " Perceptual gateways allow seekers to transcend physical limitations<br/> and access higher realms of consciousness. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Subtle Development",
    image: "assets/images/blog/subtle.png",
  },
  {
    title: "Inner Sight",
    image: "assets/images/blog/sight.png",
  },
  {
    title: "Spiritual Hearing",
    image: "assets/images/blog/hearing.png",
  },
  {
    title: "Divine Taste",
    image: "assets/images/blog/taste.png",
  },
  {
    title: "Sacred Touch",
    image: "assets/images/blog/touch.png",
  },
  {
    title: "Transcendent Smell",
    image: "assets/images/blog/smell.png",
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
        <Banner slides={gatewaysSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Perceptual Gateways
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Perceptual Gateways explores the expanded dimensions of human perception, transcending the limitations of the physical senses to access higher awareness and spiritual cognition. Rooted in Sufi teachings on the refinement of perception, this framework maps the subtle faculties through which one experiences inner reality, divine communication, and sacred resonance.

                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this study provides a structured approach to awakening latent senses, training seekers to refine perception, deepen spiritual sensitivity, and attune to divine frequencies.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                    
                    <Image
                      src="/assets/images/resources/gateways.png"
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
