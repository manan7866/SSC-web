"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";

const featuresData = [
  { text: "Bridging Sufi Mysticism & Scientific Inquiry into Oneness" },
  { text: "Exploring the Hidden Science of Divine Order & Multiplicity" },
  { text: "The Mechanics of Separation & Reunification" },
  { text: " Developing Practical Techniques for Unity Consciousness" },
];
const ScienceSlides = [
  {
    subTitle: "Merging Spirit and Existence",
    title: "Exploring the Science<br/> of Oneness",
    text: "Unity sciences reveal the sacred connection between all existence,<br/> guiding seekers toward wholeness and harmony.  ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Paths to Sacred Unity ",
    title: "Understanding the Oneness <br/>of Creation ",
    text: "Through unity sciences, seekers uncover the hidden bonds connecting all<br/> of existence and spiritual truth. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Oneness Through Sacred Knowledge ",
    title: " Unlocking the Science<br/> of Unity ",
    text: "Unity sciences provide seekers with insight into the interconnectedness<br/> of existence and spiritual harmony.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Merging with the Whole ",
    title: "Spiritual Truth <br/>Through Unity",
    text: "Unity sciences guide seekers toward the realization of<br/> Oneness with creation and spiritual awakening. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Awakening to Universal Connection ",
    title: "Discovering the Science<br/> of Unity  ",
    text: " By understanding unity sciences, seekers align with <br/>the sacred interconnectedness of existence.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Multiplicity Studies",
    image: "assets/images/blog/multiplicity.png",
  },
  {
    title: "Oneness Dynamics",
    image: "assets/images/blog/oneness.png",
  },
  {
    title: "Names Manifestation",
    image: "assets/images/blog/names.png",
  },
  {
    title: "Separation Mechanics",
    image: "assets/images/blog/separation.png",
  },
  {
    title: "Unity Technology",
    image: "assets/images/blog/unitytechnology.png",
  },
  {
    title: "Divine Expression",
    image: "assets/images/blog/expression.png",
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
        <Banner slides={ScienceSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Unity Sciences
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Unity Sciences explores the principles that govern oneness, multiplicity, and divine manifestation. Rooted in Sufi metaphysics, sacred geometry, and advanced ontological studies, this framework analyzes how existence emerges from unity, unfolds into multiplicity, and ultimately returns to its singular source.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this structured study bridges classical mystical thought with contemporary scientific models, revealing the hidden mechanics of unity, separation, and divine manifestation.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                    src="/assets/images/resources/unity.png"
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
