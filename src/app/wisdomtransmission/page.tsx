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
  { text: "Preserving the Integrity of Sacred Knowledge " },
  { text: "Understanding the  Spiritual Transmission & Activation" },
  { text: "Bridging Historical Lineages with Modern Seekers" },
  { text: " Ensuring the Practical Application of Transmitted Wisdom" },
];
const wisdomSlides = [
  {
    subTitle: "Passing the Flame of Truth",
    title: "Unfolding the <br/>Sacred Teachings",
    text: "Wisdom transmission connects seekers with ancient teachings,<br/> guiding them toward spiritual awakening.  ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Knowledge from the Ancients  ",
    title: " Receiving the <br/>Gift of Wisdom ",
    text: "Through wisdom transmission, seekers receive sacred knowledge,<br/> connecting them to timeless truths.   ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Knowledge Unfolded  ",
    title: "The Flow of <br/>Eternal Truth  ",
    text: "Wisdom transmission provides seekers with the insight to<br/> align with spiritual truth and divine order.   ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Awakening Through Sacred Teachings ",
    title: " Receiving the Light<br/> of Wisdom",
    text: "Through wisdom transmission, seekers connect with the<br/> sacred lineage of spiritual knowledge. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Spiritual Inheritance Unfolded  ",
    title: "Receiving the Keys <br/>of Knowledge ",
    text: " Wisdom transmission helps seekers align with the spiritual truth passed down through sacred traditions. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Knowledge Preservation",
    image: "assets/images/blog/preservation.png",
  },
  {
    title: "Silsila Dynamics",
    image: "assets/images/blog/silsila.png",
  },
  {
    title: "Lineage Integration",
    image: "assets/images/blog/lineage.png",
  },
  {
    title: "Prophetic Inheritance",
    image: "assets/images/blog/inheritance.png",
  },
  {
    title: "Sacred Embodiment",
    image: "assets/images/blog/sacredembodiment.png",
  },
  {
    title: "Community Dynamics",
    image: "assets/images/blog/community.png",
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
        <Banner slides={wisdomSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Wisdom Transmission
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Wisdom Transmission explores the science of preserving, transferring, and embodying sacred knowledge across time, space, and consciousness. Rooted in Sufi traditions of lineage, silsila (spiritual chain), and prophetic inheritance, this framework examines how divine wisdom is safeguarded, transmitted, and actualized in individuals and communities.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this structured study merges historical preservation with metaphysical transmission, offering seekers insights into how wisdom is passed, activated, and lived through sacred tradition.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/wisdom.png"
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
