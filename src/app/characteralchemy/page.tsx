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
  { text: "Bridging Classical Sufi Ethics with Character Development" },
  { text: "Providing a Systematic Approach to Spiritual Refinement" },
  { text: "Understanding the Science Behind Virtue & Consciousness" },
  { text: "Developing Actionable Strategies for Living an Aligned, Ethical Life" },
];
const alchemySlides = [
  {
    subTitle: "Refining the Spirit Within",
    title: "Transforming Through<br/> Inner Alchemy ",
    text: "Character alchemy helps seekers purify and transform their inner being,<br/> revealing their divine essence.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Becoming the Higher Self",
    title: "Spiritual Transformation <br/>Through Alchemy",
    text: "Character alchemy guides seekers through inner change, <br/>refining the soul and awakening divine potential.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Purification of the Soul",
    title: "Unlocking the Power <br/>of Alchemy",
    text: "By practicing character alchemy, seekers transform their <br/>inner being and awaken to spiritual truth.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Rebirth Through Inner Change",
    title: "The Sacred Art of <br/>Character Alchemy",
    text: "Through character alchemy, seekers refine their inner nature,<br/> aligning with higher spiritual truths.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Spiritual Refinement Unveiled ",
    title: "The Path of<br/> Inner Alchemy  ",
    text: " Character alchemy helps seekers dissolve the ego and<br/> awaken the hidden divinity within.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Transcendent Ethics",
    image: "assets/images/blog/ethics.png",
  },
  {
    title: "Divine Engineering",
    image: "assets/images/blog/engineering.png",
  },
  {
    title: "Sacred Embodiment",
    image: "assets/images/blog/embodiment.png",
  },
  {
    title: "Virtue Cultivation",
    image: "assets/images/blog/virtue.png",
  },
  {
    title: "Justice Mechanics",
    image: "assets/images/blog/justice.png",
  },
  {
    title: "Compassionate Action",
    image: "assets/images/blog/compassion.png",
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
        <Banner slides={alchemySlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Character Alchemy
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Character Alchemy is the science of inner transformation, refining the raw materials of the self into higher states of virtue, wisdom, and divine embodiment. Rooted in Sufi ethical philosophy and advanced spiritual psychology, this framework merges inner refinement with sacred engineering, guiding seekers through the systematic process of spiritual self-mastery
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this study presents a structured path for developing transcendent ethics, cultivating virtue, and embodying divine justice in action.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/alchemy.png"
                  alt="Repair Services"
                  width={350}  // Adjust width as per design requirements
                  height={350} // Adjust height as per design requirements
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
