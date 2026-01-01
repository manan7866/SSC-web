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
  { text: "Bridging Environmental Science with Spiritual Wisdom"  },
  { text: " Exploring Divine Patterns within Natural Systems" },
  { text: " Developing Ethical & Sustainable Approaches to Ecology"  },
  { text: " Fostering Awareness of Humanity’s Role in Creation Stewardship" },
];
const ecologySlides = [
  {
    subTitle: "Wisdom of the Natural World",
    title: "Aligning with <br/>Nature’s Harmony",
    text: "Ecological intelligence reveals the sacred balance<br/> between humanity and nature, promoting spiritual and environmental harmony.  ",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Ecology Unfolded",
    title: "Finding Spiritual Truth <br/>in Nature ",
    text: " Understanding the sacred patterns of nature helps seekers find <br/>harmony, peace, and a deeper connection with creation.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Living in Sacred Balance",
    title: "Nature’s Wisdom and<br/> Spiritual Growth ",
    text: "Ecological intelligence teaches how to live in harmony with<br/> the earth, guided by spiritual balance and natural rhythms.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Nature as a Spiritual Teacher",
    title: " Learning from the Language<br/> of Nature",
    text: "Nature’s design mirrors spiritual truths, guiding seekers to live<br/> in harmony with the rhythms of existence.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Awakening Through Nature’s Wisdom ",
    title: "Sacred Balance of<br/> Life and Spirit ",
    text: "By aligning with ecological intelligence, seekers unlock the<br/> hidden spiritual codes embedded in the natural world.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const blogs = [
  {
    title: "Sacred Ecology",
    image: "assets/images/blog/ecology.png",
  },
  {
    title: "Divine Balance",
    image: "assets/images/blog/balance.png",
  },
  {
    title: "Creation Stewardship",
    image: "assets/images/blog/stewardship.png",
  },
  {
    title: "Natural Communication",
    image: "assets/images/blog/communication.png",
  },
  {
    title: "Ecosystem Mapping",
    image: "assets/images/blog/mapping.png",
  },
  {
    title: "Earth Resonance",
    image: "assets/images/blog/resonance.png",
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
        <Banner slides={ecologySlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Ecological Intelligence
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  Ecological Intelligence is the sacred science of living in harmony with creation, integrating spiritual consciousness, environmental ethics, and divine stewardship. Rooted in Sufi cosmology, this framework explores the interconnectedness of nature, humanity, and divine order, guiding seekers toward a holistic and ethical engagement with the natural world.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Center, under the Sufi Science Explorer Module, this study presents a structured approach to understanding ecology as a spiritual discipline, offering deep insights into divine patterns within nature, sustainability through sacred balance, and the role of humans as stewards of creation.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                  <Image
                  src="/assets/images/resources/intelligence.png"
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
