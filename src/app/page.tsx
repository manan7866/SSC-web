import Layout from "../components/layout/Layout";
import Image from "next/image";
import Banner from "../components/sections/home3/Banner";
import Services from "../components/sections/home3/Services";
import Blog from "../components/sections/home3/Blog";
import Testimonial from "../components/sections/home3/Testimonial";
import SufiSciences from "../components/sections/home3/SufiSciences";
import Link from "next/link";
import Welcome from "../components/sections/home3/Welcome";

import Process from "../components/sections/home3/Process";
import GiftShop from "../components/sections/home3/GiftShop";
import SupportUs from "../components/sections/home3/SupportUs";
import Contact from "../components/sections/home3/Contact";
import Funfact from "../components/sections/home3/Funfacts";

const features = [
  { text: "Rooted in Kashmiri Sufi Wisdom"  },
  { text: "Driven by Sacred Scientific Inquiry" },
  { text: "Empowering  Growth & Learning" },
  { text: "Uniting  Culture & Community" },
];
const HomeSlides = [
  {
    subTitle: "Science Meets Spirit in Kashmir",
    title: "The Soulful Science of<br/> Sufi Wisdom  ",
    text: "Bridging sacred traditions with inquiry, the Sufi Science Center unites ancient<br/> mysticism and scientific exploration for spiritual clarity and growth.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Explore, Reflect, Realize, Transform, Transcend  ",
    title: "Journey Into Kashmir’s<br/> Inner Mystical Cosmos  ",
    text: "Delve into the cosmos within, where Kashmiri Sufi teachings meet transformative sciences<br/> to elevate human consciousness and cultural understanding. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Seek Truth Through Sufi Lens ",
    title: "Mystical Knowledge, Rooted<br/> in Kashmir  ",
    text: "Unearth the depth of Sufi sciences, merging Kashmir’s rich mystical traditions<br/> with contemporary insights into the soul and self.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Tradition, Inquiry, Faith, Light, Kashmir ",
    title: "Where Sufi Paths Meet<br/> Modern Questions  ",
    text: "Explore sacred pathways of Kashmiri Sufism enriched with intellectual rigor,<br/> fostering harmony between inner truth and outer discovery.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Illuminate the Mind, Awaken Spirit ",
    title: "Sufi Science Center:<br/> A Sacred Revival  ",
    text: "Experience a renaissance of Kashmiri spiritual knowledge, uniting<br/> metaphysics, mysticism, and modern consciousness through the lens of Sufism.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner slides={HomeSlides}/>
        
      <section className="relative py-[120px] pb-[90px]">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <div className="relative text-center p-10 bg-white shadow-lg rounded-xl">
            
            <div className="absolute top-0 left-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tl-xl rounded-br-xl text-sm font-medium z-20 inline-block">
              We Are
            </div>

            {/* Number inside a circle */}
            <div className="flex justify-center mx-auto items-center w-14 h-14 text-2xl text-white bg-[var(--fixnix-lightpuple)] rounded-full transition-all duration-500 hover:bg-[var(--fixnix-darkpurple)]">
              {index + 1} {/* Display numbers */}
            </div>

            {/* Feature Text */}
            <h3 className="mt-4 text-[17px] font-semibold leading-[30px] text-[var(--fixnix-darkpurple)] transition-all duration-500 hover:text-[var(--fixnix-lightpuple)]">
              {feature.text}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        
        <section className="relative block py-16 md:py-24 lg:py-30 overflow-hidden z-10">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10 animate-float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap -mx-4">
            {/* Left Column - Image Section */}
            <div className="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
              <div className="relative block mr-0 lg:mr-20">
                <div
                  className="relative block overflow-hidden rounded-lg z-10 group wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <Image
                  src="/assets/images/resources/nextgeneration.webp"
                  alt="image"
                  className="w-full rounded-lg transition-all duration-500 delay-200 group-hover:scale-110"
                  width={500}
                  height={300}
                  priority={false}
                  loading="lazy"
                />
                  <div className="absolute bottom-0 left-0 right-0  bg-fixnix-lightpurple p-6 sm:p-8 md:p-10 lg:p-12 rounded-bl-lg rounded-tr-lg z-10">
                    <p className="text-base sm:text-lg font-semibold text-white uppercase pb-2 sm:pb-4">Our goal :</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight sm:leading-normal md:leading-10">
                      "Grow your mind. Fuel your soul.
                      Let the light find you."
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative ml-3 block">
                <div className="text-left  mb-6 sm:mb-8">
                <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                The Next Generation Sufi Way Forward
            <span className="absolute top-[6px] left-[-50px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            
          </span>
                  <h2 className="font-bold mt-2 sm:mt-3 text-2xl sm:text-3xl text-fixnix-darkpurple">
                    Welcome to the Sufi Science Center
                  </h2>
                  <h2 className="font-semibold text-xl sm:text-2xl text-fixnix-darkpurple">
                    A Harmony of Knowledge and Inner Peace
                  </h2>
                </div>
                <p className="mb-8 sm:mb-10 md:mb-8 text-sm sm:text-base md:text-lg">
                  Step into a world where Kashmiri Sufi wisdom meets the pulse of modern discovery.
                  Here, your mind expands, your soul deepens, and your journey begins.
                  
                  Whether you're seeking truth, exploring purpose, or simply curious,
                  this is your space to grow, reflect, and awaken.
                  
                  We blend timeless mysticism, conscious learning, and sacred science to inspire a new way forward, one that's rooted in unity, upliftment, and inner transformation.
                </p>

                {/* Feature Points */}
                <ul className="list-none space-y-2 sm:space-y-4 md:space-y-5">
                  {/* Point 1 */}
                  <li>
                    <div className="flex items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 bg-white rounded-l-full shadow-lg group relative overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="absolute inset-0 bg-fixnix-lightpurple rounded-l-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                      <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-fixnix-lightpurple rounded-full text-xl sm:text-2xl md:text-3xl text-white group-hover:bg-white group-hover:text-purple-400 transition-all duration-500 delay-100 transform group-hover:scale-90">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="relative ml-3 sm:ml-4 md:ml-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-fixnix-darkpurple group-hover:text-fixnix-darkpurple transition-colors duration-500">
                          Begin Your Journey
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1 sm:pt-2 group-hover:text-white transition-colors duration-500">
                          Start exploring your inner and outer path
                        </p>
                      </div>
                    </div>
                  </li>
                  
                  {/* Point 2 */}
                  <li>
                    <div className="flex items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 bg-white rounded-l-full shadow-lg group relative overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="absolute inset-0 bg-fixnix-lightpurple rounded-l-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                      <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-fixnix-lightpurple rounded-full text-xl sm:text-2xl md:text-3xl text-white group-hover:bg-white group-hover:text-white transition-all duration-500 delay-100 transform group-hover:scale-90">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="relative ml-3 sm:ml-4 md:ml-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-fixnix-darkpurple group-hover:text-fixnix-darkpurple transition-colors duration-500">
                          Explore Sacred Knowledge
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1 sm:pt-2 group-hover:text-white transition-colors duration-500">
                          Dive into teachings, science & soulwork
                        </p>
                      </div>
                    </div>
                  </li>
                  
                  {/* Point 3 */}
                  <li>
                    <div className="flex items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 bg-white rounded-l-full shadow-lg group relative overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="absolute inset-0 bg-fixnix-lightpurple rounded-l-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                      <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-fixnix-lightpurple rounded-full text-xl sm:text-2xl md:text-3xl text-white group-hover:bg-white group-hover:text-purple-400 transition-all duration-500 delay-100 transform group-hover:scale-90">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="relative ml-3 sm:ml-4 md:ml-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-fixnix-darkpurple group-hover:text-fixnix-darkpurple transition-colors duration-500">
                          Join the Movement
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1 sm:pt-2 group-hover:text-white transition-colors duration-500">
                          Be part of a conscious, global community
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Services />
        <Welcome />
        <Funfact />
        
        <SufiSciences/>
        <Blog />
        <Process />
        <GiftShop/>
        <SupportUs/>
        <Contact />
        
      </Layout>
    </>
  );
}
