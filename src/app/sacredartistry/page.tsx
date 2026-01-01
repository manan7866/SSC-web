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
  { text: "Bridging Sufi Aesthetics with Metaphysical Science" },
  { text: "Understanding the Art in Transmission & Transformation" },
  { text: "Exploring the Vibrational Effects of Sacred Design" },
  { text: "Developing Art as a Tool for Divine Connection " },
];
const artistrySlides = [
  {
    subTitle: "Crafting the Divine Expression",
    title: "Art as a Sacred Path ",
    text: "Sacred artistry reveals the spiritual power of creative expression,<br/> guiding seekers toward divine truth. ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Creativity as Spiritual Devotion ",
    title: "Expressing the Sacred<br/> Through Art  ",
    text: " Sacred artistry reflects the divine order, helping seekers align <br/>with higher truth through creativity.   ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "The Divine in Creative Form  ",
    title: "Unlocking the Power<br/> of Sacred Art",
    text: "Sacred artistry provides seekers with a path to<br/> spiritual truth through creative expression.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Spiritual Truth Through Creativity ",
    title: "Crafting the Divine ",
    text: "Sacred artistry allows seekers to express spiritual truth and<br/> align with divine creativity.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Creativity as a Sacred Act  ",
    title: "Discovering the Power <br/>of Art  ",
    text: " Through sacred artistry, seekers connect with<br/> divine truth and spiritual expression.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Geometric Harmonics",
    image: "assets/images/blog/geometric.png",
  },
  {
    title: "Illuminated Calligraphy",
    image: "assets/images/blog/calligraphy.png",
  },
  {
    title: "Movement Practices",
    image: "assets/images/blog/movement.png",
  },
  {
    title: "Wisdom Poetry",
    image: "assets/images/blog/poetry.png",
  },
  {
    title: "Acoustical Engineering",
    image: "assets/images/blog/acoustics.png",
  },
  {
    title: "Symbolic Expression",
    image: "assets/images/blog/symbolic.png",
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  
  loop: true,

  
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
        <Banner slides={artistrySlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Sacred Artistry
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Sacred Artistry explores the spiritual dimensions of creative expression, where art serves as a vessel for divine harmony, metaphysical insight, and transcendent beauty. Rooted in Sufi aesthetics, geometry, and sound sciences, this framework examines how art becomes a bridge between the seen and unseen, a channel for wisdom, and a medium for spiritual refinement.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this study merges artistic mastery with sacred intention, offering seekers a structured understanding of how geometry, movement, sound, and symbolic representation convey divine realities.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/sacred.png"
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
