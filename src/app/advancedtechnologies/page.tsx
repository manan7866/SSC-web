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
  { text: "Bridging Sufi Mysticism with Quantum Physics & Energy Science" },
  { text: "Exploring the Hidden Technologies of Consciousness & Creation" },
  { text: "Understanding the Mechanics of Energy, Resonance & Light Activation" },
  { text: "Developing Functional Tools for Self-Realization & Transcendence" },
];
const technologySlides = [
  {
    subTitle: "Merging Spirit with Innovation ",
    title: " Unlocking the Sacred Power<br/> of Technology",
    text: "Advanced technologies bridge the gap between spiritual wisdom and modern innovation, <br/>guiding seekers toward enlightenment.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Technology as a Path to Awakening ",
    title: "Harnessing Modern Tools for<br/> Spiritual Growth",
    text: "Through advanced technologies, seekers gain new insights into ancient<br/> spiritual truths and universal order.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Innovation in Service of Spirit ",
    title: "Aligning Modern Tools with Spiritual Wisdom ",
    text: "Advanced technologies provide seekers with the means to explore spiritual truth through modern innovation.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Tech Meets Transcendence ",
    title: "Modern Solutions for<br/> Eternal Questions",
    text: "By integrating advanced technologies, seekers uncover deeper<br/> spiritual insights and universal harmony.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Tools for Spiritual Evolution ",
    title: "Expanding Consciousness<br/> Through Innovation   ",
    text: "Advanced technologies empower seekers to explore spiritual <br/>dimensions and unlock hidden truths ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Energy Systems",
    image: "assets/images/blog/energy.png",
  },
  {
    title: "Luminous Activation",
    image: "assets/images/blog/luminous.png",
  },
  {
    title: "Energy Crystallography",
    image: "assets/images/blog/crystallography.png",
  },
  {
    title: "Vibrational Science",
    image: "assets/images/blog/vibrational.png",
  },
  {
    title: "Particle Physics",
    image: "assets/images/blog/particle.png",
  },
  {
    title: "Symmetry Patterning",
    image: "assets/images/blog/symmetry.png",
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
        <Banner slides={technologySlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Advanced Technologies
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Advanced Technologies explores the frontiers of energy systems, vibrational science, and the deeper physics governing reality, merging Sufi metaphysical insights with cutting-edge scientific thought. This framework investigates the structure of energy, the properties of matter, and the technologies embedded within consciousness and natural law that facilitate activation, resonance, and transformation.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this structured study merges classical wisdom with emerging paradigms, offering seekers a functional understanding of luminous energy systems, high-frequency states, and the mechanics of transcending barriers within physical and metaphysical domains.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/technology.png"
                  alt="Repair Services"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px]"
                  priority
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
