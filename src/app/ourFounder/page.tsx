import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
const LegacySlides = [
  {
    subTitle: "Legacy of a Mystic Visionary",
    title: " Dr. Kumar's Path to<br/> Spiritual Awakening",
    text: "From Kashmir’s jungles to the world, Dr. Kumar’s Sufi wisdom inspires<br/> seekers to embrace love, peace, and self-awareness.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: " A Journey Beyond the Self",
    title: "Dr. Kumar’s Mystic <br/>Call to Truth",
    text: "Rooted in Kashmiri Sufism, Dr. Kumar’s teachings bridge science and spirituality,<br/> guiding seekers toward inner peace and enlightenment.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Awakening Through Mystic Science",
    title: " Dr. Kumar’s Legacy<br/> of Sufi Wisdom",
    text: " Combining mysticism and science, Dr. Kumar reveals the hidden truths of<br/> existence, offering seekers a path to harmony.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Wisdom Beyond the Material World",
    title: "Dr. Kumar’s Teachings<br/> of Inner Light",
    text: " Guided by Sufi science, Dr. Kumar’s insights empower seekers to <br/>uncover life’s deeper purpose through spiritual connection.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: " Finding Truth Through Mystic Paths",
    title: " Dr. Kumar’s Spiritual<br/> and Scientific Fusion",
    text: "Dr. Kumar’s teachings blend Kashmiri Sufism and science, leading seekers <br/>toward enlightenment, self-awareness, and universal harmony.",
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
        <Banner slides={LegacySlides}/>
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
                                      src="/assets/images/services/Dr_kumar_sahib.png"
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
                                    Our Founder  
                                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                                    </span>
                                    <h2 className="text-4xl sm:text-3xl md:text-2xl font-bold mt-4 mb-2 leading-snug sm:leading-tight">
                                    Dr. Ghulam Mohammad Kumar (Mama Ji, Kumar Sahib)
                                    </h2>
                                    <h3 className="text-3xl sm:text-xl md:text-xl font-semibold mb-6 leading-snug sm:leading-tight uppercase">Qalandar-i-Kashmir –The Wandering Light, The Hidden Pearl of Kashmir</h3>
                                    <p className="text-base sm:text-lg text-gray-700">
                                    In the sacred annals of Kashmir’s spiritual history, where mystics have walked the valleys whispering the secrets of Divine Truth, one name shines like a celestial beacon—Dr. Ghulam Mohammad Kumar, revered as Qalandar-i-Kashmir. A saint beyond the confines of time, a mystic immersed in the ocean of Haqiqat (Ultimate Reality), he continues to ignite the hearts of seekers with his presence.
                                    </p>
                                    <p className="text-base sm:text-lg mt-5 text-gray-700">
                                    Dr. Kumar is not an ordinary mystic—his journey is one of intense self-transformation, detachment from the material world, and complete surrender to Divine Love. He bridges the depths of Kashmiri Sufi wisdom with modern knowledge, showing that spirituality and intellect are not opposites but allies in the search for truth.
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
                       From Medicine to Divine Healing
                      </h2> 
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block pb-[12px]   ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                BACKGROUND
                </div>
                  <div className=" pt-[80px] pb-16 px-10 relative ">
                    
                    
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          
                          <p className="font-medium text-[20px]">
                          Born into a well-off and highly educated family, Dr. Kumar comes from a lineage of scholars and professionals, many of whom have served in prestigious government positions. Despite being surrounded by worldly success, his soul longed for a reality beyond the material realm.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          
                          <p className="font-medium text-[20px]">
                          An alumnus of Government Medical College Srinagar, he pursued a career in medicine and later became a Block Medical Officer in Kashmir. However, his spirit was not bound by the confines of a doctor’s clinic, it yearned for the boundless horizon of Divine Truth.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                        <p className="font-medium text-[20px]">
                        One day, as if struck by the call of Ishq-e-Haqiqi (Divine Love), he left his medical profession to embark on a spiritual journey. The world saw a doctor stepping away from his career, but in the unseen realm, a Wali (saint) was stepping into his divine mission.
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
        

        <section className="text-left-mobile bg-fixnix-lightpurple text-left team-top py-[40px] sm:py-[60px] md:py-[80px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
              The Journey into Fana 
                <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
              </span>
              <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
              Annihilation in the Divine
              </h2>
              

             

              {/* Section Text */}
              <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              For fourteen years, Dr. Kumar immersed himself in deep spiritual retreat, renouncing all attachments to the self and the world. He chose the jungles of Ganderbal as his meditation place, engaging in constant Muraqaba (deep spiritual absorption).<br/>
              Then, he returned, but not as the man people had once known, he returned as a Qalandar, lost in the Divine Presence.
              </p>
              <h2 className="mt-[5px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
              The Life of a Qalandar
              </h2>
              <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              Having undergone a complete spiritual transformation, he embodies the state of Fana-fi-Allah (annihilation in God),a soul that no longer recognizes the illusions of the material world. He walks detached from worldly possessions, unchained from the veils of dunya (the temporary world).<br/>The world sees simplicity, but the lovers of Truth see divine wisdom.


              </p>
              
              <p className="pt-[15px] sm:pt-[20px] font-bold text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              •		He never married, for his heart is already wed to the Eternal Beloved.<br/>
              •		He speaks little, for his silence carries the weight of divine secrets.<br/>
              •	 	To sit in his presence is to feel the tremors of spiritual awakening.<br/>
              •	To look into his eyes is to glimpse eternity.



              </p>

              {/* Subheading */}
              
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
    src="/assets/images/services/bargah1.png"
    alt="Core services"
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
                          <div className="text-left mb-4">
                            <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                            Banday Bagh  
                              <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 mb-1 leading-snug sm:leading-tight">
                            The Spiritual Station
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700">
                            In the valley of Serch Banday Bagh, Ganderbal, where the whispers of the saints still echo through the winds and trees, Dr. Kumar’s spiritual *maqam* (station) stands as a lighthouse for seekers. Hundreds come seeking, searching, yearning for peace, wisdom, and divine guidance and none leave empty-handed.
                            </p>
                            <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-2 -mb-4  leading-snug sm:leading-tight">
                            In the spirit of Sufi Khidmat (selfless service), his devotees have established:
                            </h2>
                          </div>
                          <ul className="space-y-5 sm:space-y-6 lg:space-y-4">
                            {/* List Item 1 */}
                            <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                              
                              <div className="ml-4 sm:ml-6">
                                <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                                Langar 
                                </h5>
                                <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                                Free food for all, where the hunger of the body and soul is satisfied alike.
                                </p>
                              </div>
                            </li>
        
                            {/* List Item 2 */}
                            <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                              
                              <div className="ml-4 sm:ml-6">
                                <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                                A Meditation Center 
                                </h5>
                                <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                                A place for deep reflection, where seekers engage in Zikr and Muraqaba .
                                </p>
                              </div>
                            </li>
                            <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                              
                              <div className="ml-4 sm:ml-6">
                                <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                                Free Lodging & Boarding  
                                </h5>
                                <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                                No seeker is turned away, for the doors of the Divine remain open to all.
                                </p>
                              </div>
                            </li>
                          </ul>
                          <p className="font-bold text-xl py-2 text-fixnix-darkpurple">
                          Let your heart lead the way, discover light, silence, saint. 
                           
                      
                          </p>
                         

                          <div className="flex items-center space-x-4  -mb-12">
  <a 
    href="https://www.google.com/maps/place/Faqeer+Dr.+Ghulam+Mohammad+Kumar+Saeb/@34.2392628,74.7889849,19.9z/data=!4m12!1m5!3m4!2zMzTCsDE0JzIxLjYiTiA3NMKwNDcnMjIuMCJF!8m2!3d34.23932!4d74.78944!3m5!1s0x38e183005b8004d5:0x63e85c5fd2255412!8m2!3d34.239245!4d74.788959!16s%2Fg%2F11wjlkjvbf?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-shrink-0"
  >
    <Image 
      src="/assets/images/services/l2.png" 
      alt="Our Location" 
      width={50} 
      height={50} 
      className=" hover:opacity-90 transition"
    />
  <div className="flex items-center space-x-2">
    <i className="fas fa-arrow-right text-fixnix-darkpurple text-xl"></i>
    <p className="font-bold text-fixnix-darkpurple whitespace-nowrap text-base sm:text-lg md:text-xl">
      Get Spiritual Direction
    </p>
  </div>
  </a>
</div>






                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="text-left-mobile bg-gray-100 team-top py-[50px] sm:py-[60px] md:py-[110px]">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] sm:text-[16px] xl:text-[20px] leading-[16px] text-fixnix-lightpurple font-bold uppercase z-[1]">
            A Sufi Guide for the New Generation
              <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              
            </span>

            {/* Section Title */}
            

            {/* Section Text */}
            <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
            The new educated generation of Kashmir often struggles to understand the ancient language of Sufism, which has traditionally been expressed through Kashmiri Chakir music and mystic poetry. However, Dr. Kumar’s teachings serve as a bridge between the old and the new. Unlike many before him, his spiritual communication integrates scientific reasoning and tele codes, making the timeless truths of Sufism accessible to today's seekers.
            </p>
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[20px] sm:text-[32px] md:text-[35px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
            His words are not just poetry, they are lightning bolts of spiritual awakening, guiding young souls toward self-discovery and divine love.
            </h2>

            {/* Subheading */}
        
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
                     
                       <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
                       The Birth of the Sufi Science Center(SSC)
                      </h2> 
                      <p className="text-[16px]">To preserve and spread his teachings, the Sufi Science Center was founded as a think tank, research hub, and spiritual sanctuary to carry forward Dr. Kumar’s vision of uniting Sufism with modern intellectual and technological advancements.</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block pb-[12px]   ">
              
              <div className="mb-[42px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                BIRTH OF SSC
                </div>
                  <div className=" pt-[100px] px-10 relative ">
                    
                    
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                            <h3 className="text-[24px] font-semibold leading-[34px] text-fixnix-darkpurple mb-[14px]">The Mission of SSC Under His Leadership</h3>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          • Preserving Kashmiri Sufi Heritage 
                          </h5>
                          <p>
                          Digitizing, translating, and reviving the wisdom of Kashmiri mystics.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          • Advancing Interdisciplinary Research 
                          </h5>
                          <p>
                          Studying the connections between Sufi consciousness, ethics, and scientific innovation.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          • Empowering the Youth 
                          </h5>
                          <p>
                          Creating educational programs, mentorship networks, and immersive experiences to inspire the next generation of Kashmiri seekers.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          • Building a Global Network of Thinkers 
                          </h5>
                          <p>
                          Connecting scholars, scientists, and spiritualists to engage in meaningful discussions on consciousness, ethics, and the future of humanity.
                          </p>
                          <p className="font-bold mt-3">
                          Under his guidance and vision, SSC is not just an institution, it is a movement, a revolution, a call to seek knowledge without limits.
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
        <section className="text-left-mobile bg-fixnix-lightpurple text-left team-top py-[40px] sm:py-[60px] md:py-[80px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
              The Legacy Continues 
                <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
              </span>
              <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
              Dr. Kumar Foundation USA
              </h2>
              

             

              {/* Section Text */}
              <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              To ensure his message reaches beyond Kashmir, one of Dr. Kumar’s students, who immigrated to the United States in 2019 and is now a U.S. citizen, established the Dr. Kumar Foundation USA.
              This foundation preserves, promotes, and spreads his message of love, divine unity, and self-realization to seekers across the world. It carries his teachings to a global audience, ensuring that his light continues to guide those searching for truth.
              </p>
              <h2 className="mt-[5px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
              A Call to the Seeker
              </h2>
              <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              To the one whose heart is restless,<br/>
To the one who feels the pull of something beyond this world,<br/>
To the one who seeks the truth hidden behind the illusion.<br/>



              </p>
              
              <p className="pt-[15px] sm:pt-[20px] font-bold text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              •		The path is open, the doors are never closed.<br/>
              •		The caravan of Haqiqat (Ultimate Reality) moves forward—will you walk with us?<br/>
              



              </p>
              <h2 className="mt-[5px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
              Join the Journey. Seek the Truth. Shape the Future.
              </h2>

              {/* Subheading */}
              
            </div>
          </div>
        </section>
        
                

        {/* Team One End */}
      </Layout>
    </>
  );
}
