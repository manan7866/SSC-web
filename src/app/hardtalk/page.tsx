import Banner from "@/components/sections/home3/Banner";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ResearchSlides=[
  {
    subTitle:  "DIGITAL ACADEMY",
    title: "Hard Talk Series",
    text: "Confronting difficult questions with intellectual honesty,<br/> spiritual insight, and respectful dialogue.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "BEYOND COMFORTABLE ANSWERS",
    title: "Hard Talk Series",
    text: "Engaging with challenging topics that require both<br/> intellectual rigor and spiritual wisdom.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "DIGITAL ACADEMY PRESENTS",
    title: "Hard Talk Series",
    text: "Where difficult questions meet deep knowledge, <br/>creating space for authentic spiritual inquiry.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "SEEKING CLARITY",
    title: "Hard Talk Series",
    text: "Conversations that move beyond simplistic answers to <br/>embrace the complexity of spiritual truth.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  
];
const cards = [
  {
    quote: "This path bleeds, ask those who vanished in fire, not those who watched dancing",
    image: "/assets/images/hardtalk/9.webp",
  },
  {
    quote: "We carry their light, not as merchants, but as mirrors of divine trust.",
    image: "/assets/images/hardtalk/10.png",
  },
  {
    quote: "Sharia was my sword Mysticism, my surrender. I vanished where both became One.",
    image: "/assets/images/hardtalk/11.png",
  },
  {
    quote: "If they truly saw me, they’d see only the dust beneath His feet",
    image: "/assets/images/hardtalk/12.png",
  },
  {
    quote: "Why preach Hell when I’ve walked through it just to light another’s path?",
    image: "/assets/images/hardtalk/13.png",
  },
  {
    quote: "I surrendered every term what remains is what God wanted through my nothingness.",
    image: "/assets/images/hardtalk/14.png",
  },
  {
    quote: "You see bricks, I see light. My mosque is within, always facing Him",
    image: "/assets/images/hardtalk/15.png",
  },
  {
    quote: "Rumi is Qur’an unveiled his words bleed revelation, and I bleed with him",
    image: "/assets/images/hardtalk/16.png",
  },
  {
    quote: "I wage the greatest Jihad—where no blood spills, but the ego dies screaming",
    image: "/assets/images/hardtalk/17.png",
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
             Hard Talk Series
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">Where Silence Breaks and Truth Emerges</h2>

              {/* Section Title */}

              {/* Section Text */}
              <p className="pt-[10px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Dive deep into the boldest confrontation between tradition and reality. The HARD TALK series courageously exposes what many dare not utter, challenging revered Sufi masters with profoundly provocative accusations. Here, spirituality is tested against harsh truths, truths that question the intentions behind practices, confront the comfort zones of mystics, and expose contradictions in faith and action. Each session peels away superficial layers, inviting intense self-reflection and honesty, shattering illusions and igniting authentic transformation.<br/>
Are you prepared to face the raw, unapologetic conversations that redefine spiritual integrity? Step forward into HARD TALK, where answers aren't comfortable, but they're undeniably necessary.

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
                  <li >
                    <Link
                      href="/dialogseries"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Dialog Series
                    </Link>
                  </li>
                  <li  className="font-bold">
                    <Link
                      href="/hardtalk"
                      className="hover:text-fixnix-darkpurple"
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
          alt={`Hard Talk ${index + 1}`}
          width={500}
          height={300}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
          <Link href="/hardtalkdetails">
            <i className="fa fa-plus text-white text-2xl"></i>
          </Link>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-xl font-semibold mt-2 text-white">
          <Link href="/hardtalkdetails" className="text-white">Hard Talk {index + 1}</Link>
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