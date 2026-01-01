"use client";
import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "@/components/sections/home3/Banner";
import { useEffect, useMemo, useState } from "react";
const LegacySlides = [
  {
    subTitle: "Legacy of Light, Love, Wisdom",
    title: "Echoes of Kashmir’s<br/> Sufi Masters",
    text: " Journey through the sacred traditions of Kashmiri Sufism, where timeless wisdom,<br/> devotion, and love illuminate the path of seekers.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Roots, Enduring Spiritual Legacy",
    title: "Tracing the Footsteps of<br/> Sufi Saints",
    text: "Discover the spiritual depth of Kashmiri Sufism, a legacy of divine wisdom, <br/>poetic expression, and profound devotion passed through generations.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sufi Wisdom, Kashmir’s Eternal Soul",
    title: "Unraveling the Mysticism of<br/> Kashmiri Sufis",
    text: " Explore the teachings of Kashmiri Sufi luminaries whose insights and<br/> poetry continue to inspire seekers on the path of divine truth.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Faith, Devotion, Unity, Love, Truth",
    title: " Kashmir’s Sufi Heritage: <br/>A Living Tradition",
    text: " Witness the spiritual legacy of Kashmir’s Sufis, who shaped a culture of love,<br/> tolerance, and enlightenment that transcends time.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Love, Harmony, Faith, Knowledge, Eternity",
    title: "Timeless Teachings of<br/>  Kashmiri Sufi Masters",
    text: "Step into the rich spiritual legacy of Kashmiri Sufism, where poetry,<br/> devotion, and wisdom illuminate the seeker’s path to inner peace.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];


type Saint = {
  id: number;
  name: string;
  dates_raw: string | null;
  period: string;
  century: string;
  summary: string;
  tags: string[];
};

export default function Home() {
  const [saints, setSaints] = useState<Saint[]>([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [century, setCentury] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch from backend API
        const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
        const res = await fetch(`${apiUrl}/v1/sufi-saints`, { 
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"
          }
        });
        
        if (!res.ok) {
          throw new Error(`API request failed: ${res.status}`);
        }
        
        const response = await res.json();
        // API returns: { code: 200, message: "ok", data: { collection, count, fields, data } }
        const payload = response.data;
        
        const items = Array.isArray(payload?.data)
          ? (payload.data as any[]).map((d) => ({
              id: d.id || 0,
              name: d.name ?? "",
              dates_raw: d.dates_raw ?? null,
              period: d.period ?? "",
              century: d.century ?? "",
              summary: d.summary ?? "",
              tags: Array.isArray(d.tags) ? d.tags : []
            }))
          : [];
        setSaints(items);
      } catch (e) {
        console.error("Failed to load saints data from API", e);
        // Fallback to local JSON if API fails
        try {
          const res = await fetch("/assets/data/sufi_saints.json", { cache: "no-store" });
          const payload = await res.json();
          const items = Array.isArray(payload?.data)
            ? (payload.data as any[]).map((d, idx) => ({
                id: idx + 1,
                name: d.name ?? "",
                dates_raw: d.dates_raw ?? null,
                period: d.period ?? "",
                century: d.century ?? "",
                summary: d.summary ?? "",
                tags: Array.isArray(d.tags) ? d.tags : []
              }))
            : [];
          setSaints(items);
          console.log("Loaded saints data from local JSON fallback");
        } catch (fallbackError) {
          console.error("Failed to load saints data from fallback", fallbackError);
        }
      }
    };
    loadData();
  }, []);

  const filtered = useMemo(() => {
    return saints.filter((s) => {
      const matchesSearch = search
        ? (s.name || "")
            .toLowerCase()
            .includes(search.toLowerCase())
        : true;
      const matchesCentury = century ? s.century === century : true;
      return matchesSearch && matchesCentury;
    });
  }, [saints, search, century]);

  // Show only 3 by default; when searching or filtering by century, show all matching
  const displayed = useMemo(() => {
    const isDefaultView = !search && !century;
    return isDefaultView ? filtered.slice(0, 3) : filtered;
  }, [filtered, search, century]);
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
                                      src="/assets/images/services/legacy.png"
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
                                    Kashmiri Sufi Legacy 
                                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                                    </span>
                                    <h2 className="text-4xl sm:text-3xl md:text-2xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
                                    The Spirit of Mysticism and Knowledge
                                    </h2>
                                    <h3 className="text-3xl sm:text-xl md:text-xl font-semibold mb-6 leading-snug sm:leading-tight uppercase">A Heritage Rooted in Love, Wisdom, and Spiritual Science</h3>
                                    <p className="text-base sm:text-lg text-gray-700">
                                    Kashmir has long been known as the land of saints and mystics—a place where the divine met the intellectual, where spirituality was never separate from wisdom, and where Sufism shaped the very essence of Kashmiri identity, culture, and ethics. The Kashmiri Sufi Legacy is not just about the past; it is a living tradition, inspiring generations of seekers, scientists, and scholars to explore the mysteries of existence.
                                    </p>
                                    <p className="text-base sm:text-lg mt-5 text-gray-700">
                                    At the Sufi Science Center (SSC), we honor, preserve, and evolve this rich tradition, ensuring that it continues to illuminate minds and nurture souls in the modern world. Our legacy is one of unity, enlightenment, and boundless inquiry—a philosophy that bridges spiritual insight with scientific exploration
                                    </p>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="bg-gray-100 text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl font-bold text-center mt-8">
                  Kashmir's Sufi Legacy: A Journey Across Centuries
                  </h1>
                  <h1 className="text-xl sm:text-4xl font-semibold text-center mt-1 mb-4">
                  Discover. Search. Experience.
                  </h1>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-2 mb-8">
                    <input
                      type="text"
                      placeholder="Search saints..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full md:w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
                    />
                    <button
                      onClick={() => setSearch(query)}
                      className="w-full md:w-auto px-4 py-2 bg-fixnix-lightpurple text-white rounded-lg hover:opacity-90 md:ml-2"
                    >
                      Search
                    </button>
                    <select
                      value={century}
                      onChange={(e) => setCentury(e.target.value)}
                      className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm md:mx-2"
                    >
                      <option value="">Century</option>
                      <option value="14th Century">14th Century</option>
                      <option value="15th Century">15th Century</option>
                      <option value="16th Century">16th Century</option>
                      <option value="17th Century">17th Century</option>
                      <option value="18th Century">18th Century</option>
                      <option value="19th Century">19th Century</option>
                      <option value="20th Century">20th Century</option>
                      <option value="21st Century">21st Century</option>
                    </select>
                    <button
                      onClick={() => {
                        setSearch("");
                        setQuery("");
                        setCentury("");
                      }}
                      className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 md:ml-2"
                    >
                      Reset
                    </button>
                  </div>


                  {/* Cards */}
                  <div className="space-y-6">
                    {displayed.map((s) => (
                      <div key={s.id} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold">{s.name}</h2>
                        <p className="text-sm text-gray-600 mb-2">{s.dates_raw ?? ""} | {s.period}</p>
                        <p className="mb-4">{s.summary}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.tags?.map((t, i) => (
                            <span key={i} className="bg-fixnix-lightpurple text-gray-100 text-xs font-medium px-2 py-1 rounded-full">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                    {displayed.length === 0 && (
                      <p className="text-center text-gray-600">No results found.</p>
                    )}
                  </div>
                </div>
              </div>
   <section className="relative block py-[120px] pb-[10px]">
          <div className="container mx-auto px-4">
            <div className="relative block mb-[52px]">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left">
                     
                       <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      The Foundations of Kashmiri Sufism
                      </h2> 
                      <p className="text-base sm:text-lg text-gray-700">
                      For those beginning a journey in Sufism, particularly those with scientific backgrounds, the following core learning paths provide an integrated structure that honors both spiritual tradition and scientific understanding. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block pb-[12px]   ">
              
              <div className="mb-[42px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                Foundations of Kashmiri Sufism
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          1. The Arrival of Sufism in Kashmir
                          </h5>
                          <p>
                          •	The 14th century saw the rise of Sufism in Kashmir, led by Mir Sayyid Ali Hamadani (Shah-e-Hamadan), who transformed the valley with his teachings on spiritual discipline, ethics, and craftsmanship.<br/>
•	His disciples, along with local saints, established Kashmir’s Rishi-Sufi tradition, blending Persian Sufism with indigenous spiritual practices.<br/>
•	This movement embraced diversity, allowing Hindu, Buddhist, and Islamic traditions to coexist and thrive.<br/>

                          

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          2. The Rishi-Sufi Tradition – A Path of Simplicity and Wisdom
                          </h5>
                          <p>
                          <span className="font-bold">•	Simplicity and Detachment – </span> Saints like Sheikh Noor-ud-Din Noorani (Nund Rishi) lived in nature, preaching minimalism and inner peace.<br/>
                          <span className="font-bold">•	Love for All Beings –  </span> A philosophy of universal compassion, rejecting materialism and sectarianism.<br/>
                          <span className="font-bold">•	Poetry as Divine Expression –  </span> The spiritual wisdom of Kashmir was preserved through mystical poetry, songs, and oral traditions.<br/>

                          </p>
                         
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                         3. The Great Mystics Who Shaped Kashmiri Sufism
                          </h5>
                          <p>
                          <span className="font-bold">• Mir Sayyid Ali Hamadani (Shah-e-Hamadan) – </span> The Sufi scholar who introduced Islamic ethics, craftsmanship, and trade to Kashmir, shaping its cultural and economic foundation.<br/>
                          <span className="font-bold">•	Sheikh Noor-ud-Din Noorani (Nund Rishi) –  </span> The greatest Kashmiri saint, a mystic who preached harmony, humility, and devotion to the Divine.<br/>
                          <span className="font-bold">•	Lalleshwari (Lal Ded) –  </span>A poetess-mystic who transcended religious boundaries, inspiring both Hindus and Muslims with her soul-stirring verses.<br/>
                          <span className="font-bold">•	Ahmad Batwari & Baba Naseeb-ud-Din Ghazi  </span>Sufi scholars who continued the tradition of spiritual knowledge and wisdom.<br/>

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
                       The Science of Kashmiri Sufism
                      </h2> 
                      <p className="text-base sm:text-lg text-gray-700">
                      Kashmiri Sufism was never just about faith and devotion—it was also about knowledge, reason, and the mysteries of the universe. The saints of Kashmir delved deep into metaphysics, consciousness, and the unseen realms of existence, concepts that modern physics and neuroscience are only beginning to explore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block pb-[12px]  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                Science of Kashmiri Sufism
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          1. Mysticism and Quantum Science
                          </h5>
                          <p>
                          •	Kashmiri Sufi teachings on oneness, interconnectedness, and divine energy resonate with modern quantum physics.<br/>
•	The idea that all existence is woven from a single reality mirrors the scientific theories of the unified field.<br/>

                          

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          2. The Sufi Understanding of Consciousness
                          </h5>
                          <p>
                          •	Kashmiri Sufis explored the depths of human consciousness, using meditation and Zikr (remembrance) to alter states of perception.<br/>
•	Their insights align with modern neuroscience and the study of higher states of awareness.<br/>

                          </p>
                         
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          3. Mathematics, Sacred Geometry, and Architecture
                          </h5>
                          <p>
                          •	Kashmiri Sufi shrines and mosques showcase intricate mathematical patterns, reflecting the divine order of the universe.<br/>
•	The study of sacred geometry in Sufi architecture aligns with today’s understanding of fractal mathematics and cosmic patterns.<br/>

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
                       Reviving the Kashmiri Sufi Legacy<br/> for a New Generation
                      </h2> 
                      <p className="text-base sm:text-lg text-gray-700">
                      At the Sufi Science Center (SSC), we believe that our legacy must evolve, not remain frozen in time. To honor our Sufi ancestors, we must adapt their wisdom to meet the challenges of the modern world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block pb-[12px]  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                Reviving the Kashmiri Sufi Legacy
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          1. Digitizing Kashmiri Sufi Teachings
                          </h5>
                          <p>
                          •	Translating and preserving the poetry, philosophy, and ethics of Kashmiri Sufi masters for global accessibility.<br/>
•	Creating a digital library and multimedia storytelling platform to bring their wisdom to new audiences.<br/>


                          

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          2. Exploring Sufism through Scientific Lenses
                          </h5>
                          <p>
                          •	Hosting seminars, discussions, and research projects that explore the scientific dimensions of Sufi thought.<br/>
•	Connecting Sufi principles with neuroscience, psychology, and physics to uncover new insights.<br/>


                          </p>
                         
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          3. A Platform for the New Age Sufis
                          </h5>
                          <p>
                          •	Engaging young minds in spiritual-scientific dialogues to keep the Kashmiri Sufi spirit alive and evolving.<br/>
•	Encouraging critical thinking, self-reflection, and scientific inquiry in the light of Sufi wisdom.<br/>


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
         {/*Experience One End*/}
        

        

        <section className="text-left-mobile bg-fixnix-lightpurple text-left team-top py-[40px] sm:py-[60px] md:py-[80px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
              A Call to the Seekers
                <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
              </span>

             

              {/* Section Text */}
              <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              The Kashmiri Sufi Legacy is not a thing of the past, it is a movement, a living force that continues to inspire, guide, and transform lives. Whether you are drawn to the wisdom of the mystics or the discoveries of science, this legacy belongs to you. Join us at the Sufi Science Center, where the secrets of the saints meet the discoveries of science, and where the new generation of Kashmiri Sufis carries forward a tradition of enlightenment.
              </p>

              {/* Subheading */}
              <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
              Be Part of the Legacy. Be a Seeker of Truth. Be the Future.
              </h2>
            </div>
          </div>
        </section>

        {/* Team One End */}
      </Layout>
    </>
  );
}
