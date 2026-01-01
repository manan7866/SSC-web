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
  { text: " Bridging Sufi Healing Traditions & Modern Science"  },
  { text: "Exploring the Role of Energy, Mind & Spirit in Well-Being" },
  { text: "Understanding Biofield Mechanics & Healing Sciences" },
  { text: "Developing Practical Tools for Self-Healing & Spiritual Vitality" },
];
const healingSlides = [
  {
    subTitle: "Unveiling the Secrets of Healing ",
    title: "Sacred Paths to<br/> Wholeness ",
    text: "Healing mysteries guide seekers toward spiritual and physical<br/> restoration through sacred knowledge. ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Wisdom of Healing  ",
    title: " Unlocking the Body’s <br/>Divine Power",
    text: "Through healing mysteries, seekers awaken their inner capacity for<br/> spiritual and physical restoration.    ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Healing Through Spiritual Wisdom  ",
    title: "Restoring Harmony <br/>and Balance ",
    text: "Healing mysteries offer insight into the sacred connection<br/> between mind, body, and spirit. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "The Path to Wholeness  ",
    title: "Unlocking Sacred <br/>Healing Codes  ",
    text: "By understanding healing mysteries, seekers find the key to<br/> restoring balance and spiritual health.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Spiritual Restoration Revealed",
    title: "The Sacred Art of <br/>Healing ",
    text: "Healing mysteries provide seekers with the tools to restore<br/> body and soul through sacred knowledge. ",
    buttonText: "Join Now",
    buttonLink: "/",
  },
];
const blogs = [
  {
    title: "Prophetic Medicine",
    image: "assets/images/blog/prophetic.png",
  },
  {
    title: "Interdimensional Protocols",
    image: "assets/images/blog/interdimensional.png",
  },
  {
    title: "Biofield Measurement",
    image: "assets/images/blog/biofield.png",
  },
  {
    title: "Epigenetic Influence",
    image: "assets/images/blog/epigentic.png",
  },
  {
    title: "Heart Intelligence",
    image: "assets/images/blog/heart.png",
  },
  {
    title: "Regenerative Wisdom",
    image: "assets/images/blog/regenerative.png",
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
        <Banner slides={healingSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Healing Mysteries
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Healing Mysteries explores the hidden sciences of health, regeneration, and spiritual well-being, integrating Prophetic medicine, bioenergetics, and interdimensional healing protocols. Rooted in Sufi healing traditions and modern scientific advancements, this framework examines the interplay between consciousness, biology, and vibrational medicine.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this structured study merges sacred knowledge with emerging health sciences, offering seekers a deeper understanding of healing mechanisms across physical, energetic, and consciousness-based dimensions.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/healing.png"
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
