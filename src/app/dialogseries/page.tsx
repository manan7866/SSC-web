import Banner from "@/components/sections/home3/Banner";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ResearchSlides=[
  {
    subTitle: "DIGITAL ACADEMY",
    title: "Dialog Series",
    text: "Engaging discussions that explore spiritual wisdom through<br/> diverse perspectives and thoughtful exchange.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "WISDOM THROUGH CONVERSATION",
    title:  "Dialog Series",
    text:"Join respected scholars and practitioners in conversations<br/> that illuminate complex spiritual concepts.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "DIGITAL ACADEMY PRESENTS",
    title: "Dialog Series",
    text: "Explore the richness of spiritual tradition through structured conversations<br/> that welcome all perspectives.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "QUESTIONS & INSIGHTS",
    title: "Dialog Series",
    text: "Thoughtful discussions that navigate the depths of spiritual knowledge<br/> with clarity and authenticity.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  
];
const cards = [
  {
    title:"The Curious Seeker",
    quote: "A soul questions. A Master listens. What follows is not teaching, it’s unraveling.",
    image: "/assets/images/dialogs/9.webp",
  },
  {
    title:"The Sufism Challenger",
    quote: "He came to argue. The Master didn’t resist. Truth didn’t need defending, only revealing.",
    image: "/assets/images/dialogs/10.png",
  },
  {
    title:"The Sufi Scholar",
    quote: "He knew everything but missed presence. Until silence taught what books never could explain.",
    image: "/assets/images/dialogs/11.png",
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
             Dialog Series
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">Where Truth Faces Challenge and Wisdom Meets Courage</h2>

              {/* Section Title */}

              {/* Section Text */}
              <p className="pt-[10px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Step into a realm where conventional beliefs about Sufism are tested through groundbreaking, bold conversations. In this extraordinary series, the curious seeker boldly confronts the seasoned master, the skeptic fearlessly challenges sacred doctrines, and the experienced scholar dares to question established truths. Each dialog peels back layers of tradition, exploring the core of spiritual authenticity with unmatched depth and sincerity. Prepare yourself for a transformative encounter, one that not only questions but illuminates, awakening your inner journey toward profound enlightenment.



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
                      className="hover:text-fixnix-darkpurple"
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
                  <li>
                    <Link
                      href="/sacredprofessions"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
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
                <p>Showing 1–3 results</p>
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
          <Link href="/dialogsdetails">
            <i className="fa fa-plus text-white text-2xl"></i>
          </Link>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-xl font-semibold mt-2 text-white">
          <Link href="/dialogsdetails" className="text-white">{card.title}</Link>
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