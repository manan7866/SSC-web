import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
const KashmiriSlides = [
  {
    subTitle: "Unveiling the Soul of Kashmir",
    title: "Exploring the Depths of <br/>Sufi Wisdom",
    text: "Kashmiri Sufism blends love, devotion, and spiritual insight, guiding seekers toward harmony,<br/> enlightenment, and a deeper understanding of existence.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sufi Heart, Kashmiri Spirit, Eternal Wisdom",
    title: "Discover the Essence of Sufi Mysticism",
    text: "Rooted in poetry, music, and devotion, Kashmiri Sufism embodies a timeless journey toward <br/>divine love, inner peace, and self-discovery.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Love, Devotion, Reflection, Wisdom, Truth",
    title: "Tracing the Spiritual <br/>Path of Kashmir",
    text: "Kashmiri Sufism is a legacy of spiritual depth, promoting unity, self-awareness, and enlightenment<br/> through sacred teachings and timeless traditions.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Kashmir’s Soul, Sufi’s Eternal Light",
    title: "The Mystical Heritage of<br/> Kashmiri Sufis",
    text: "Journey through the poetic, philosophical, and spiritual dimensions of Kashmiri Sufism, <br/>where divine love and wisdom shape the seeker’s path.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Ancient Teachings, Timeless Spiritual Awakening",
    title: "Unraveling the Beauty of<br/> Sufi Thought",
    text: "Understanding Kashmiri Sufism means embracing a philosophy of love, surrender, <br/>and divine connection, guiding humanity toward truth and unity.",
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
        <Banner slides={KashmiriSlides}/>
        {/*Team Top Start*/}
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
                                              src="/assets/images/services/kashmiri.png"
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
                                            Understanding Kashmiri Sufism
                                              <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                                            </span>
                                            <h2 className="text-4xl sm:text-3xl md:text-2xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
                                            The Path of Mystical Wisdom and Knowledge
                                            </h2>
                                            <h3 className="text-3xl sm:text-xl md:text-xl font-semibold mb-6 leading-snug sm:leading-tight uppercase">A Unique Blend of Spirituality and Intellectual Inquiry</h3>
                                            <p className="text-base sm:text-lg text-gray-700">
                                            Kashmiri Sufism is more than just a spiritual tradition; it is a way of life, a philosophy of unity, love, and knowledge. Rooted in the teachings of mystics, poets, and sages, it embodies a deep understanding of the divine, human consciousness, and the interconnectedness of all existence.
                                            </p>
                                            <p className="text-base sm:text-lg mt-5 text-gray-700">
                                            At the Sufi Science Center (SSC), we delve into the essence of Kashmiri Sufism, exploring its historical significance, philosophical depth, and scientific relevance in today’s world. Our goal is to bridge the wisdom of the past with the questions of the present, offering seekers a profound yet practical understanding of this rich tradition.
                                            </p>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section className="relative block py-[120px] pb-[10px]">
                  <div className="container mx-auto px-4">
                    <div className="relative block mb-[52px]">
                      <div className="flex items-center">
                        <div className="w-full lg:w-8/12">
                          <div className="relative block">
                            <div className="text-left">
                             
                               <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 -mb-4 leading-snug sm:leading-tight">
                               The Foundations of Kashmiri Sufism
                              </h2> 
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative  block pb-[12px]   ">
                      
                      <div className="mb-[42px] ">
                     
                        <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                        <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                        Our Purpose
                        </div>
                          <div className=" pt-[123px] px-10 relative ">
                            
                            
                            <ul className="space-y-[17px] pb-[17px]">
                              <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                                <div>
                                  <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                                  1. The Essence of Sufism
                                  </h5>
                                  <p>
                                  Sufism is the inner dimension of Islam, focusing on the soul’s journey toward the Divine. In Kashmir, this journey took on a distinct form, blending Persian Sufi influences with indigenous spiritual traditions, leading to a uniquely mystical, poetic, and intellectual movement.<br/>
                                  Kashmiri Sufism emphasizes:<br/>
                                 <span className="font-bold"> •	 Divine Love </span> Seeking closeness to God through devotion and service.<br/>
                                 <span className="font-bold"> •	 Unity of Being </span> The belief that all existence is interconnected and a reflection of the Divine.<br/>
                                 <span className="font-bold"> •	 Self-Realization </span> The journey inward to discover the truth of one’s soul.<br/>
                                 <span className="font-bold"> •	 Service to Humanity </span> A life of compassion, humility, and ethical action.<br/>

        
                                  </p>
                                  
                                </div>
                              </li>
                              <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                                <div>
                                  <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                                  2. The Rishi-Sufi Tradition – Kashmir’s Spiritual Identity
                                  </h5>
                                  <p>
                                  Unlike other Sufi traditions, Kashmiri Sufism developed a unique fusion with the indigenous Rishi movement, leading to a philosophy that valued simplicity, self-discipline, and love for nature.<br/>
                                  Some key figures include:<br/>

                                 <span className="font-bold"> •		Sheikh Noor-ud-Din Noorani (Nund Rishi)  </span> The founder of the Rishi movement, who taught spiritual self-sufficiency and harmony with nature.<br/>
                                 <span className="font-bold"> •	Lalleshwari (Lal Ded)  </span> A mystic poetess whose verses transcend religious boundaries, speaking of divine realization and inner enlightenment.<br/>
                                 <span className="font-bold">•	Mir Sayyid Ali Hamadani (Shah-e-Hamadan) </span> The Persian Sufi who introduced Islamic ethics, art, and craftsmanship to Kashmir, shaping its spiritual and economic landscape.<br/>
                                 <span className="font-bold"> These saints did not preach rigid doctrines but lived by example, showing that the path to the Divine is through love, self-awareness, and righteous action. </span> <br/>

        
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
                <section className="relative block pb-[12px]">
                  <div className="container mx-auto px-4">
                    <div className="relative block mb-[52px]">
                      <div className="flex items-center">
                        <div className="w-full lg:w-8/12">
                          <div className="relative block">
                            <div className="text-left">
                             
                               <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                               Key Concepts in Kashmiri Sufi Thought
                             
                              </h2> 
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative  block pb-[12px]  ">
                      
                      <div className="mb-[52px] ">
                     
                        <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                        <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                        Our Direction 
                        </div>
                          <div className=" pt-[123px] px-10 relative ">
                            
                            <ul className="space-y-[17px] pb-[17px]">
                              <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                                <div>
                                  <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                                  1. Wahdat-al-Wujud (Unity of Existence)
                                  </h5>
                                  <p>
                                  Kashmiri Sufis embraced Ibn Arabi’s philosophy of "Oneness of Being", which teaches that all existence is a manifestation of the Divine. This concept finds parallels in:<br/>
                                 <span className="font-bold"> •	Quantum physics,</span> which suggests that all matter is interconnected.<br/>
                                 <span className="font-bold"> •	Neuroscience,</span> which studies how consciousness connects us to a greater whole.<br/>

                                  
        
                                  </p>
                                  
                                </div>
                              </li>
                              <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                                <div>
                                  <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                                  2. The Role of Poetry and Symbolism
                                  </h5>
                                  <p>
                                  Kashmiri Sufis expressed their wisdom through metaphors, poetry, and parables, using symbolism to convey deep truths.<br/>
                                 <span className="font-bold"> •	Roses and Wine </span>symbolize divine intoxication (spiritual ecstasy).<br/>
                                 <span className="font-bold"> •	The Beloved </span> represents the Divine that the seeker longs for.<br/>
                                 <span className="font-bold"> •	The Journey </span> reflects the soul’s quest for truth and enlightenment.<br/>

                                  
        
                                  </p>
                                  
                                </div>
                              </li>
                              <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                                <div>
                                  <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                                  3. The Science of the Soul
                                  </h5>
                                  <p>
                                  Kashmiri Sufis were early psychologists, healers, and philosophers who explored the states of human consciousness through meditation, Zikr (remembrance), and breath control. Today, modern psychology and cognitive science validate these practices as powerful tools for emotional and mental well-being.
        
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
                <section className="px-6 py-12 md:py-16 lg:py-20 xl:py-32 2xl:py-48 bg-gray-100">
      <div className="max-w-5xl mx-auto text-left">
        <span className="relative inline-block text-left text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase">
        Why Understanding Kashmiri Sufism Matters Today
          <span className="absolute top-2 left-[-50px] w-10 sm:w-12 h-[2px] bg-fixnix-lightpurple"></span>
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
        Kashmiri Sufism is not just a historical tradition, it is a guide for modern seekers, scientists, and thinkers.
        </h2>
        
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Feature One */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
          <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
          <h3 className="mt-4 text-lg font-bold">
          In a world of division, it teaches unity and tolerance.
          </h3>
        </div>

        {/* Feature Two */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
        <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
          <h3 className="mt-4 text-lg font-bold">
          In an era of materialism, it reminds us of inner richness.
          </h3>
        </div>

        {/* Feature Three */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
        <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
          <h3 className="mt-4 text-lg font-bold">
          It helps us rediscover human consciousness and ethics.
          </h3>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 text-left">
        <h2 className="text-xl font-semibold">
        At the Sufi Science Center, we believe that Sufism is not confined to the past—it is a living force that must evolve, adapt, and illuminate the future.
        </h2>
      </div>
    </section>
               
        
                <section className="text-left-mobile bg-fixnix-lightpurple text-left team-top py-[40px] sm:py-[60px] md:py-[80px]">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
                      {/* Section Tagline */}
                      <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
                      A Call to Seekers 
                        <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                        
                      </span>
                      <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
                      Kashmiri Sufism is not about memorizing its history, it is about experiencing its wisdom.
                      </h2>
        
                     
        
                      {/* Section Text */}
                      
                      <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
                      •  If you seek knowledge beyond the ordinary, this is your path.<br/>
                      • If you believe science and spirituality can coexist, this is your journey.<br/>
                      • If you wish to shape a future rooted in wisdom, ethics, and enlightenment, this is your calling.<br/>
        
                      </p>
        
                      {/* Subheading */}
                      <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
                      Join the Movement. Explore the Depths. Be the Future of Kashmiri Sufism.
                      </h2>
                    </div>
                  </div>
                </section>

        {/* Team One End */}
      </Layout>
    </>
  );
}
