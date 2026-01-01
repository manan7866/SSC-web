import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
const HeritageSlides = [
  {
    subTitle: "Rooted in Tradition, Evolving Forward",
    title: " Unveiling the Essence of<br/> Kashmiri Sufism",
    text: "Explore the rich heritage of Kashmiri Sufism, where timeless wisdom meets modern<br/> understanding, preserving identity, spirituality, and cultural harmony.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Timeless Wisdom, Eternal Connection, Now",
    title: "Honoring Kashmir’s Sufi<br/> Legacy & Spirit",
    text: "Step into the mystical past of Kashmiri Sufism, where tradition, devotion,<br/> and enlightenment shape our collective spiritual journey forward.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Ancient Teachings, Modern Spiritual Awakening",
    title: "Echoes of Sufi Wisdom<br/> in Kashmir",
    text: "Reconnect with the soul of Kashmiri Sufism, blending sacred teachings,<br/> cultural depth, and spiritual enlightenment for a harmonious future.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Wisdom, Peace, Identity, Sufism, Kashmir",
    title: "Preserving the Spirit of<br/> Sufi Heritage",
    text: " Discover the heart of Kashmiri Sufism, where love, devotion,<br/> and sacred traditions guide seekers on their path to enlightenment.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Past and Future in Harmony",
    title: "Kashmiri Sufi Heritage –<br/> A Living Legacy",
    text: "Embrace the living traditions of Kashmiri Sufism, a journey of faith,<br/> resilience, and wisdom woven into the region’s cultural fabric.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        headTitle="Our Team"
        wrapperCls="team-page-wrapper"
      >
        <Banner slides={HeritageSlides}/>
        <section className="relative block py-[80px] md:py-[100px] lg:py-[120px] z-[1]">
          <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] bottom-0 mb-0 sm:bg-white md:bg-white lg:bg-white xl:bg-fixnix-lightpurple 2xl:bg-fixnix-lightpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center z-[-1]"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
                <div className="relative block">
                  <div className="mb-7">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    Our Heritage 
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    The Soul of Kashmiri Sufism
                    </h2>
                  </div>
                  <p className="text-base md:text-lg font-bold text-fixnix-darkpurple leading-[28px]">
                  A Legacy Rooted in Wisdom, Love, and Knowledge
                  </p>
                  <p className="mt-4 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3">
                  Kashmir has long been known as Pir Waer, the Valley of Saints. It is a land where Sufism flourished, shaping the spiritual, cultural, and intellectual fabric of the region. The Sufi Science Center (SSC) is dedicated to reviving this timeless wisdom, ensuring that the teachings of our ancestors continue to guide the new generation in an age of science and technology.
                  </p>
                  <p className="mt-1 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3">
                  Our heritage is a harmonious fusion of faith and reason, where Sufi mystics explored the mysteries of the universe, human consciousness, and the divine order. Today, we stand at the crossroads of ancient insight and modern discovery, ready to bridge the past with the future.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 pl-0 lg:pl-12 relative">
              <div className="relative block rounded-lg overflow-hidden">
              <Image
                src="/assets/images/services/heritage.png"
                alt="Heritage"
                width={800}
                height={500}
                className="w-full h-[500px] rounded-lg object-cover"
              />
</div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center">
              {/* Left Section */}
              <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden relative group">
                    <Image
                      src="/assets/images/services/traditions.png"
                      alt="Core services"
                      layout="responsive"
                      width={500}
                      height={400}
                      className="w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
                <div className="relative">
                  <div className="text-left mb-8">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    The Kashmiri Sufi Tradition 
                      <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 mb-3 leading-snug sm:leading-tight">
                    A Beacon of Enlightenment
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700">
                    For centuries, Kashmiri Sufism has been a living philosophy, a tradition of spiritual awakening, selfless service, and the pursuit of higher knowledge. It has influenced every aspect of life, from language, poetry, and art to science, medicine, and ethics. Some of the greatest luminaries in our history have laid the foundation for a holistic worldview, combining spirituality and intellect.
                    </p>
                    <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-3 -mb-6  leading-snug sm:leading-tight">
                    The Mystics Who Defined Our Path
                    </h2>
                  </div>
                  <ul className="space-y-5 sm:space-y-6 lg:space-y-9">
                    {/* List Item 1 */}
                    <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Sheikh Noor-ud-Din Noorani (Nund Rishi) 
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        The founder of the Rishi order, who emphasized simplicity, humility, and a deep connection with nature
                        </p>
                      </div>
                    </li>

                    {/* List Item 2 */}
                    <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Lalleshwari (Lal Ded) 
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        A poetess-mystic whose verses expressed the oneness of existence and the inner journey toward enlightenment
                        </p>
                      </div>
                    </li>
                    <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Mir Sayyid Ali Hamadani  
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        The Persian Sufi who brought Islam to Kashmir, integrating spiritual wisdom with trade, art, and governance.
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/*Team Top End*/}

        {/* Experience One Start */}
        <section className=" text-left-mobile relative block bg-fixnix-darkpurple py-[120px] z-[1]">
          <div
            className="absolute top-[20px] bottom-[20px] left-0 right-0 bg-no-repeat bg-center bg-cover z-[-1]"
            style={{
              backgroundImage:
                "url(assets/images/shapes/experience-one-shape-1.png)",
            }}
          ></div>
          <div className="container mx-auto">
            {/* Section Title */}
            <div className="text-center mb-[57px]">
              <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
              A Legacy of Scientific Inquiry and Innovation
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2
                className="mt-[14px]  text-left  text-white text-[14px] sm:text-[32px] md:text-[24px] lg:text-[22px] xl:text-[22px] 2xl:text-text-[22px] leading-[32px] sm:leading-[40px] md:leading-[30px] font-semibold
"
              >
                Sufi traditions in Kashmir have never been at odds with scientific exploration. Our heritage is filled with intellectual pursuits that align with modern advancements in quantum physics, neuroscience, artificial intelligence, and cosmology.
              </h2>
            </div>

            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {/* Experience One Single */}
              <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-500 hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
                <div className="relative block">
                  <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-500 transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                    <i className="icon-service"></i>
                  </span>
                </div>
                <div className="ml-[20px] sm:ml-[20px]">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                    <Link
                      href="services-details"
                      className="text-fixnix-lightpurple transition-all duration-500 group-hover:text-white"
                    >
                      Sufi Approach to Consciousness 
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                  Understanding the self, the universe, and the divine mirrors today’s research in quantum mechanics and cognitive science.
                  </p>
                </div>
              </div>

              {/* Experience Two Single */}
              <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-500 hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
                <div className="relative block">
                  <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-500 transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                    <i className="icon-service"></i>
                    <i className="icon-management"></i>
                  </span>
                </div>
                <div className="ml-[20px] sm:ml-[20px]">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                    <Link
                      href="team"
                      className="text-fixnix-lightpurple transition-all duration-500 group-hover:text-white"
                    >
                      	Sacred Geometry in Islamic Art 
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                  The intricate mathematical precision in Kashmiri art and architecture reflects the hidden patterns of nature.
                  </p>
                </div>
              </div>

              {/* Experience Three Single */}
              <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-500 hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
                <div className="relative block">
                  <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-500 transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                    <i className="icon-headphones"></i>
                  </span>
                </div>
                <div className="ml-[20px] sm:ml-[20px]">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                    <Link
                      href="contact"
                      className="text-fixnix-lightpurple transition-all duration-500 group-hover:text-white"
                    >
                      Healing Sciences and Herbal Medicine 
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                  The Rishis of Kashmir practiced herbal medicine which resonate with modern holistic healing techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 py-12 md:py-16 lg:py-20 xl:py-32 2xl:py-48 bg-gray-100">
      <div className="max-w-5xl mx-auto text-left">
        <span className="relative inline-block text-left text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase">
          Preserving Our Past, Innovating for the Future
          <span className="absolute top-2 left-[-50px] w-10 sm:w-12 h-[2px] bg-fixnix-lightpurple"></span>
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          At the Sufi Science Center, we are committed to:
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Feature One */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
          <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
          <h3 className="mt-4 text-lg font-semibold">
            Revitalizing Kashmiri Sufi Wisdom through education, in-depth research, immersive experiences, and cultural storytelling.
          </h3>
        </div>

        {/* Feature Two */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
        <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
          <h3 className="mt-4 text-lg font-semibold">
            Exploring Sufism through Science by analyzing its alignment with modern technological advancements.
          </h3>
        </div>

        {/* Feature Three */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
        <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
          <h3 className="mt-4 text-lg font-semibold">
          Connecting Young Minds with the philosophy of Kashmiri saints, the frontiers of knowledge, innovation, wisdom, and spirituality.
          </h3>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 text-left">
        <h2 className="text-xl font-semibold">
          Our mission is to not just look back at our heritage but to carry it forward with new energy and vision.
        </h2>
      </div>
    </section>
      <section className="relative block py-[30px] z-[1]">
                <div
                  className="absolute inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/core-services-bg.jpg)",
                  }}
                ></div>
                {/*Experience One End*/}
                <div className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center">
                      {/* Left Section */}
                      <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
                        <div className="relative">
                          <div className="rounded-lg overflow-hidden relative group">
                            <Image
                              src="/assets/images/services/identity.png"
                              alt="Core services"
                              layout="responsive"
                              width={500}
                              height={300}
                              className="w-full h-[400px] transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
                          </div>
                        </div>
                      </div>
      
                      {/* Right Section */}
                      <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
                        <div className="relative">
                          <div className="text-left mb-8">
                            <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                            Our Identity 
                              <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                            </span>
                            <h2 className="text-4xl sm:text-3xl md:text-2xl font-bold mt-4 mb-2 leading-snug sm:leading-tight">
                            The Soul of the Sufi Science Center 
                            </h2>
                            <h3 className="text-3xl sm:text-xl md:text-xl font-bold mb-6 leading-snug sm:leading-tight uppercase">A New Age of Kashmiri Sufism</h3>
                            <p className="text-base sm:text-lg text-gray-700">
                            The Sufi Science Center (SSC) is more than just an institution, it is a movement, a revolution, and a bridge between Kashmir’s spiritual heritage and the limitless frontiers of science and knowledge. Our identity is deeply rooted in the teachings of Kashmiri Sufi mystics, yet we stand firmly in the present, embracing modern advancements in science, technology, and philosophy.
                            </p>
                            <p className="text-base sm:text-lg mt-5 text-gray-700">
                            We are the seekers, the dreamers, and the innovators, the new generation of Sufis, scholars, and scientists who carry the legacy of Mir Sayyid Ali Hamadani, Sheikh Noor-ud-Din Noorani, Lalleshwari, Momin Saeb, Soch Kraal Seab, Raheem Seab Sopori, Rahman Dar Saeb, Mahmood Gami, Rasol Mir, Naem e Saeb, Shamas Fakir, Wahab Khaar, Ahamad Batwari, Waz e Mehmood, Lasa Khan Fida, Samad Mir, Ahad Zargar, Rajab Hamid and Lala Aragami into the future. Our journey is guided by wisdom, love, and a relentless pursuit of truth.
                            </p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative block py-[120px] -mb-80 ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      Who We Are
                      </h2>
                      <p>
                      At SSC, we embrace a dual identity one that reflects the timeless spirituality of Sufism and the progressive spirit of scientific discovery.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 uppercase right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                Who We Are
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      Keepers of Kashmiri Sufi Legacy
                      </h4>
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                          •	We honor and preserve the teachings of Kashmiri Sufi saints, poets, and thinkers.<br/>
                          •	We explore the mystical wisdom embedded in Sufi poetry, ethics, and philosophy.<br/>
                          •	We safeguard Kashmir’s cultural heritage by making it accessible to future generations.

                          </p>
                          
                          
                        </div>
                      </li>
                      
                      
                      
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      Innovators of Spiritual-Scientific Thought
                      </h4>
                      
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                        •	We merge Sufi metaphysics with quantum science, neuroscience, and AI.<br/>
                        •	We seek answers to the universe’s greatest mysteries—from the nature of consciousness to the interconnectivity of all existence.<br/>
                        •	We push boundaries, asking: Can Sufi thought enhance AI ethics? Does the poetry of Rumi and Lalla predict modern theories of time and space?


                          </p>
                      
                          
                        </div>
                      </li>
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      A Global Community of Seekers
                      </h4>
                      
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                        •	We are Kashmiris and beyond—an inclusive network of scientists, philosophers, poets, and visionaries working together.<br/>
                        •	We connect minds across generations—young and old, traditional and modern, mystical and analytical.<br/>
                        •	We believe wisdom has no boundaries, and the quest for knowledge unites all seekers.

                          </p>
                        
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
             
            </div>
             </div> 
              
          </div>
        </section>
        <section className="relative block py-[120px] -mb-80 ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      What We Stand For
                      </h2>
                      <p>
                      At Sufi Science Center, our core identity is built upon six foundational pillars:
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 uppercase right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                What We Stand For
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                       Spiritual Wisdom
                      </h4>
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                          We embrace the timeless insights of Sufism, fostering inner awakening, self-discovery, and a deep connection with the universe.

                          </p>
                          
                          
                        </div>
                      </li>
                      
                      
                      
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                       Scientific Exploration
                      </h4>
                      
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                        We believe science and spirituality are not opposites but allies, working together to decode the secrets of existence.

                          </p>
                      
                          
                        </div>
                      </li>
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                       Innovation & Inquiry
                      </h4>
                      
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                        We encourage open-mindedness, curiosity, and fearless questioning, just as Sufi mystics challenged conventional thought.

                          </p>
                          
                          
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                       Conscious Evolution
                      </h4>
                      
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                        We explore the science of consciousness, energy, and metaphysics, uncovering the hidden dimensions of human potential.

                          </p>
                      
                          
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                       Cultural Revival
                      </h4>
                      
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                        We protect Kashmir’s rich spiritual traditions, storytelling, and poetic heritage, ensuring their relevance in the modern world.

                          </p>
                      
                          
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                       Unity & Inclusion
                      </h4>
                      
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
                        We are open to all seekers, embracing diverse perspectives, interfaith dialogue, and universal brotherhood.

                          </p>
                      
                          
                        </div>
                      </li>
                      
                     
                    </ul>
                  </div>
                </div>
             
            </div>
             </div> 
              
          </div>
        </section>
        <section className="relative bg-fixnix-lightpurple py-24 text-left-mobile">
        <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
        <div className="container">
          <div className="text-left mb-12">
            <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-bold  uppercase z-[1]">
            A Movement for the Future
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
              
            </span>
            
            <p className="text-[var(--fixnix-white)] mt-2">
            Our heritage is alive within us. It is written in our poetry, sung in our mystic verses, and echoed in the rhythm of our traditions. As the new generation, it is our responsibility to protect it, explore it, and evolve with it. Our identity is not confined to history books or ancient texts, it is alive within us, in the way we think, explore, and dream. The Sufi Science Center is the future of Kashmiri Sufism, where the mystical and the scientific walk hand in hand.
If you feel the call, if you are curious about the unknown, if you wish to bridge the wisdom of the past with the discoveries of tomorrow, you are one of us.

            </p>
            
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
            Join the Sufi Science Center in this journey of rediscovery—where the past illuminates the future, and wisdom meets innovation.
            </h2>
          </div>
          
        </div>
        
    </section>


        
        {/* Team One End */}
      </Layout>
    </>
  );
}
