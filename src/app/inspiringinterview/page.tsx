
import Banner from "@/components/sections/home3/Banner";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ResearchSlides=[
  {
    subTitle: "DIGITAL ACADEMY",
    title: "Inspiring Interviews",
    text: "Conversations with remarkable individuals who embody spiritual principles<br/> in their everyday lives."  ,
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "STORIES OF TRANSFORMATION",
    title: "Inspiring Interviews",
    text: "Intimate discussions revealing how spiritual practice shapes<br/> personal and professional paths.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "FROM PRINCIPLE TO PRACTICE",
    title: "Inspiring Interviews",
    text: "Discovering how timeless teachings are applied to <br/>modern challenges through personal stories.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "LIVING TRADITION",
    title: "Inspiring Interviews",
    text:  "Capturing the knowledge and experiences of notable figures within the spiritual tradition.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
 
];
const cards = [
  {
    title:"Dusk became divine",
    quote: "The Awakening of Carter Nooruddin, Once a Wall Climber",
    image: "/assets/images/interview/1.webp",
  },
  {
    title:"Feather touched fire",
    quote: "Layla Sabreen's journey from dance to divine surrender ",
    image: "/assets/images/interview/2.png",
  },
  {
    title:"Silence led me Home",
    quote: "Malik Jennings silent breakdown that became prayer",
    image: "/assets/images/interview/3.png",
  },
  {
    title:"Name turned light",
    quote: "How Fatime Delgado walked away from titles and toward truth",
    image: "/assets/images/interview/4.png",
  },
  {
    title:"Unseen, Yet so Near",
    quote: "Rashid Green healing after loss opened a secret door",
    image: "/assets/images/interview/5.png",
  },
  {
    title:"He found me disappearing",
    quote: "Iman Rivera moment of surrender in the forests of oregon",
    image: "/assets/images/interview/6.png",
  },
  {
    title:"Veils fell, Light spoke",
    quote: "Zayn Taylor sudden clarity in a seattle bookstore",
    image: "/assets/images/interview/7.png",
  },
  {
    title:"The path wrote me",
    quote: "Maryam Hall stopped planning and started listening",
    image: "/assets/images/interview/8.png",
  },
  {
    title:"Breath from rhythm",
    quote: "Jasmine Rahma learns that dhikr lives in science",
    image: "/assets/images/interview/9.png",
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
             Inspiring Interviews
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">Lived Journeys. Lit Souls. Lasting Echoes.</h2>

              {/* Section Title */}

              {/* Section Text */}
              <p className="pt-[10px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              In inspiring interviews, you’ll meet individuals whose lives have been radically reshaped by the essence of Sufism. These are not celebrities—they are awakened souls: quiet reformers, radiant artists, silent servers, and bold seekers.
            Each conversation is a mirror into a life transformed. Some found God in grief. Some turned their professions into paths of light. Others carry centuries-old wisdom into modern chaos.
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
                  <li>
                    <Link
                      href="/sacredprofessions"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Sacred Professions
                    </Link>
                  </li>
                  <li className="font-bold">
                    <Link
                      href="/inspiringinterview"
                       className="hover:text-fixnix-darkpurple"
                    >
                      {" "}
                      Inspiring Interviews
                    </Link>
                  </li>

                

                  
                  
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto transition-transform hover:shadow-lg">
      {/* Compact header with gradient background */}
      <div className="bg-gradient-to-r from-fixnix-darkpurple to-fixnix-lightpurple py-2 px-4">
        <h3 className="font-bold text-lg text-white">Be Part of an Inspiring Interview</h3>
      </div>
      
      {/* Condensed content section */}
      <div className="p-3 space-y-2">
        {/* Combined tagline and description */}
        <div className="flex items-start">
          <div className="border-l-4 border-fixnix-lightpurple pl-2 flex-1">
            <p className="text-sm font-medium text-gray-800 italic">
              Your Story Can Illuminate Paths for Others
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Join a curated series of interviews with individuals who merge professional 
              excellence with spiritual depth. Share your insights and the intersections of Sufism with your work.
            </p>
          </div>
        </div>
        
        
        
          <h3 className="font-medium text-sm text-gray-800">Start Your Interview Journey</h3>
          <Link href="interviewform" className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white text-sm font-medium py-3 px-4 rounded transition-colors duration-200 flex items-center">
            Book Interview Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        
      </div>
    
      

                
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
          <Link href="/interviewdetails">
            <i className="fa fa-plus text-white text-2xl"></i>
          </Link>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-xl font-semibold mt-2 text-white">
          <Link href="/interviewdetails" className="text-white">{card.title}</Link>
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