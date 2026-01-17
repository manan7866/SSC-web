import Banner from "@/components/sections/home3/Banner";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
const ResearchSlides=[
  {
    subTitle: "DIGITAL ACADEMY",
    title:"Sufi Impact on Professions",
    text: "Exploring how Sufi principles transform workplace cultures, professional ethics,<br/> and career paths across diverse fields.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "DIGITAL ACADEMY PRESENTS",
    title: "Sufi Impact on Professions",
    text: "How Sufi principles of service, integrity, and presence are reshaping<br/> leadership across professional domains.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "BEYOND CONVENTIONAL SUCCESS",
    title: "Sufi Impact on Professions",
    text: "Examining the profound influence of spiritual values on professional<br/> environments, decisions, and outcomes.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "PROFESSION AS SPIRITUAL PATH",
    title: "Sufi Impact on Professions",
    text: "Understanding how Sufi practitioners elevate their fields through the integration of <br/>spiritual wisdom and technical expertise.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  
];
const cards = [
  {
    title:"The Statesman",
    quote: "I don’t rule by power,I serve where Divine Justice writes the laws unseen",
    image: "/assets/images/professions/1.webp",
  },
  {
    title:"The Administrator",
    quote: "I govern the unseen, where divine order flows through systems, not just signatures",
    image: "/assets/images/professions/2.png",
  },
  {
    title:"The Court",
    quote: "I don’t argue cases,I defend truth where voices break, and justice breathes",
    image: "/assets/images/professions/3.png",
  },
  {
    title:"The Businessman",
    quote: "I walk the marketplace as mosque, every transaction a test, every profit a prayer",
    image: "/assets/images/professions/4.png",
  },
  {
    title:"The Ecologist",
    quote: "I don’t just heal the earth, I remember it as a living breath of the Divine",
    image: "/assets/images/professions/5.png",
  },
  {
    title:"The Developer",
    quote: "I don’t build apps, I script realities where Divine Will runs every backend",
    image: "/assets/images/professions/6.png",
  },
  {
    title:"The Witness",
    quote: "Report with reverence, when truth is sacred, every word becomes a mirror of God",
    image: "/assets/images/professions/7.png",
  },
  {
    title:"The Physician",
    quote: "My hands touch flesh, my gaze sees spirit. I heal in God’s name",
    image: "/assets/images/professions/8.png",
  },
  {
    title:"The Police Officer",
    quote: "I wear no badge but conscience, my authority flows from Light, not law alone",
    image: "/assets/images/professions/9.png",
  },
  {
    title:"The Teacher",
    quote: "My chalk is dhikr, each word drawn to stir the soul’s forgotten script",
    image: "/assets/images/professions/10.png",
  },
  {
    title:"The Student",
    quote: "I don’t collect knowledge, I empty myself, so Truth may pour in freely",
    image: "/assets/images/professions/11.png",
  },
  {
    title:"The Architect",
    quote: "I carve the unseen into form, where geometry bows before the Beloved’s rhythm",
    image: "/assets/images/professions/12.png",
  },
  
];
export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={ResearchSlides}/>
      <section className="team-top text-left-mobile">
          <div className="container mx-auto px-4 text-left-mobile">
            <div className="text-center sm:text-left relative block mt-[40px] mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              Sufi profession 
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">Sufi Impact on Professions</h2>

              

              <p className="pt-[5px] text-left-mobile text-center italic font-semibold text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              When work becomes worship, and every role becomes a reflection of the Divine.<br/>
              
              </p>
              <p className="pt-[7px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Sufism transforms professions into sacred trusts, where leading, healing, teaching, building, or coding is not just a duty, but a path to presence. Here, every action is remembrance, every service is sanctified, and every profession becomes a prayer in motion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
            
              <div className="p-4 border rounded-lg  bg-fixnix-lightpurple shadow-sm relative">
              <h3 className="font-semibold text-center text-xl mb-2 text-white">Categories</h3>
              </div>


              
              <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
                
                <ul className="space-y-2">
                
                  <li className="font-bold">
                    <Link
                      href="/dialogseries"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Dialog Series
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hardtalk"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Hard Talk
                    </Link>
                  </li>
                  <li className="font-bold">
                    <Link
                      href="/sacredprofessions"
                      className="hover:text-fixnix-darkpurple"
                    >
                      Sacred Professions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/inspiringinterview"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      {" "}
                     Inspiring Interviews
                    </Link>
                  </li>

                

                  
                  
                </ul>
              </div>
            </div>
            {/* Products */}
            <div className="md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
                <p>Showing 1–12 results</p>
                <select className="p-2 border bg-gray-100 rounded-lg">
                  <option className="hover:bg-fixnix-lightpurple">
                    Sort by popular
                  </option>
                  
                  <option>Sort by Ratings</option>
                </select>
              </div>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
                  >
                    <div className="relative group">
                      <Image
                        src={card.image}
                        alt={`dialogs ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover rounded-t-xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
                        <Link href="/professionsdetails">
                          <i className="fa fa-plus text-white text-2xl"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="px-4 py-3">
                      <h3 className="text-xl font-semibold mt-2 text-white">
                        <Link href="/professionsdetails" className="text-white">{card.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-100 mt-2 italic">"{card.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

          

        
       
    </Layout>
  );
}