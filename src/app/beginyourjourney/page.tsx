"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SetStateAction, useState } from "react";
import Banner from "@/components/sections/home3/Banner";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  const JourneySlides = [
    {
      subTitle: "Step Into the Path of Wisdom",
      title: "Start Your Transformative<br/> Sufi Journey Today",
      text: " Embark on a spiritual path rooted in Kashmiri Sufism, unlocking self-awareness,<br/> inner peace, and divine connection through sacred teachings.",
      buttonText: "Read More",
      buttonLink: "/membership",
    },
    {
      subTitle: "Awaken, Explore, Reflect, Transform, Enlighten",
      title: "A Path to<br/> Inner Peace Begins",
      text: "Your journey into Kashmiri Sufi wisdom starts here—discover mindfulness,<br/> harmony, and a deeper connection to your spiritual essence.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Discover Your Soul’s True Calling",
      title: "Begin Your Journey to<br/> Sufi Wisdom",
      text: "Guided by Kashmiri Sufi traditions, embark on a path of knowledge, devotion,<br/> and self-realization, where wisdom leads to transformation.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: " A Journey Toward Truth Begins",
      title: "Step Into the Light<br/> of Sufism",
      text: "Join the timeless journey of seekers before you, discovering the beauty of<br/> Kashmiri Sufi philosophy through reflection, learning, and devotion.",
      buttonText: "Explore",
      buttonLink: "/membership",
    },
    {
      subTitle: "Start, Seek, Grow, Evolve, Transcend",
      title: "Unlock the Secrets of <br/>Spiritual Awakening",
      text: " Take your first steps toward a journey of enlightenment, where Sufi teachings<br/> illuminate your path to self-discovery and divine love.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
  ];
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        {/*Core Services Start*/}
        <Banner slides={JourneySlides}/>
        <section className="relative block py-[120px] z-[1]">
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
                        src="/assets/images/services/beginyourjourney.png"
                        alt="Core services"
                        layout="responsive"
                        width={500}
                        height={400}
                        className="w-full transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
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
                        Begin Your Journey
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      THE UNIQUE LEGACY OF KASHMIRI SUFISM
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                      Kashmir, known as Pir Waer (Valley of Saints), represents a profound convergence of spiritual traditions where Sufism developed unique characteristics. The Sufi Science Center Kashmir embodies this rich heritage, where ancient wisdom meets contemporary science. Our approach honors Kashmir's distinctive Rishi tradition while creating bridges between traditional practices and modern understanding, preserving timeless wisdom while making it accessible to today's seekers.
                      </p>
                    </div>
                    <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
                      {/* List Item 1 */}
                      <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 hover:-translate-y-[10px] group ">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                          <span className="icon-checked"></span>
                        </div>
                        <div className="ml-6 sm:ml-6">
                          <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                            Sacred Wisdom of Sufism
                          </h5>
                          <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                            Nurturing soul, awakening spirit in Kashmir.
                          </p>
                        </div>
                      </li>

                      {/* List Item 2 */}
                      <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500 hover:-translate-y-[10px] group">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                          <span className="icon-repair"></span>
                        </div>
                        <div className="ml-4 sm:ml-6">
                          <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                            Bridging Science and Spirituality
                          </h5>
                          <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                            Science meets Sufism for understanding.{" "}
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

        {/*Core Services End*/}

        {/*Pricing One Start*/}
        <section className="relative block py-[120px] pb-[10px]">
          <div className="container mx-auto px-4">
            <div className="relative block mb-[52px]">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left">
                      <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                        Path of the Seeker
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                        Uniting Spirituality & Science
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                        In Kashmir, the heart of the ancient Sufi tradition,
                        embark on a transformative journey where the soul’s
                        longings meet the wisdom of the natural world. This
                        journey transcends boundaries, revealing spirituality
                        and science as two sides of same coin – pathways leading
                        to Divine Truth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                 START YOUR SUFI JOURNEY
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      How to Start Your Sufism Journey
                      </h4>
                      <p>
                      Beginning a journey in Sufism involves both intellectual understanding and practical experience. Here's a structured approach to start your path:
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 1: Begin with Intention (Niyyah)
                          </h5>
                          <p>
                          Set a clear and sincere intention for your journey. In Sufism, the quality of your intention shapes your entire path. Ask yourself why you're drawn to Sufism and what you hope to discover or develop through this tradition.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 2: Study Foundational Concepts
                          </h5>
                          <p>
                          Build a basic intellectual framework:<br/>
                          •	Read introductory texts on Sufi principles and practices<br/>
                          •	Learn about key concepts like tawhid (divine unity), dhikr (remembrance), and muraqabah (contemplation)<br/>
                          •	Explore the relationship between the outer law (shariah) and the inner path (tariqah)

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 3: Connect with Authentic Teachers
                          </h5>
                          <p>
                          In the Sufi tradition, guidance from an experienced teacher is considered essential:<br/>
                          •	Research established Sufi orders (tariqahs) with authentic lineages<br/>
                          •	Attend talks, gatherings, or workshops led by respected Sufi teachers<br/>
                          •	Consider whether a formal initiation (bay'ah) with a teacher is right for you

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 4: Develop a Regular Practice
                          </h5>
                          <p>
                          Consistency is crucial for spiritual development:<br/>
                         •	Begin with simple daily dhikr (remembrance practices)<br/>
                         •	Incorporate regular periods of silent contemplation (muraqabah)<br/>
                         •	Practice mindfulness in everyday activities<br/>
                         •	Implement ethical principles in your daily interactions

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 5: Engage with Community (Suhbah)
                          </h5>
                          <p>
                          Sufism is typically practiced in community:<br/>
                          •	Attend regular gatherings (majlis) where possible<br/>
                          •	Participate in group dhikr sessions<br/>
                          •	Engage in service to others as a spiritual practice<br/>
                          •	Learn from the experiences of fellow travelers on the path

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 6: Integrate Knowledge with Experience
                          </h5>
                          <p>
                          Balance intellectual study with direct experience:<br/>
                          •	Apply what you read in your daily practice<br/>
                          •	Observe how theoretical concepts manifest in your life<br/>
                          •	Journal about your experiences and insights<br/>
                          •	Discuss your understanding with teachers and fellow seekers


                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 7: Practice Patience and Perseverance
                          </h5>
                          <p>
                          Spiritual development unfolds gradually:<br/>
                          •	Approach the path with commitment and consistency<br/>
                          •	Be patient with yourself through challenges and obstacles<br/>
                          •	Recognize that periods of difficulty are often important growth opportunities<br/>
                          •	Understand that Sufism is a lifelong journey, not a destination
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative block mb-[52px]">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left">
                      <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                        Path of the Seeker
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                        Uniting Spirituality & Science
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                        In Kashmir, the heart of the ancient Sufi tradition,
                        embark on a transformative journey where the soul’s
                        longings meet the wisdom of the natural world. This
                        journey transcends boundaries, revealing spirituality
                        and science as two sides of same coin – pathways leading
                        to Divine Truth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                <div className="flex flex-col md:flex-row  bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                 INTEGRATE SCIENTIFIC KNOWLEDGE
                </div>
                  <div className="pt-[123px] relative px-10">
                    <div className="mb-[24px]">
                      <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">
                      Integrating Scientific Knowledge into the Sufi Journey for New Seekers
                      </h4>
                      <p>
                      For newcomers with scientific backgrounds, let us help you to integrate your existing knowledge with Sufi practices & create a meaningful entry point.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 1: Establish Conceptual Parallels
                          </h5>
                          <p>
                          Create introductory materials that explicitly connect scientific concepts with Sufi principles:<br/>
                          •	Quantum non-locality and the Sufi concept of unity (tawhid)<br/>
                          •	Neuroplasticity research and Sufi practices of heart transformation<br/>
                          •	Complex systems theory and Sufi understanding of interconnection<br/>
                          •	Consciousness studies and Sufi states of awareness

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 2: Develop Evidence-Based Entry Practices
                          </h5>
                          <p>
                          Offer beginning practices with both spiritual significance and documented scientific effects:<br/>
                          •	Breathing techniques with known neurophysiological benefits<br/>
                          •	Attention training exercises validated by cognitive science<br/>
                          •	Contemplative practices with measured effects on stress reduction<br/>
                          •	Heart-focused meditation with documented HRV improvements

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Step 3: Create Dual-Language Learning Materials
                          </h5>
                          <p>
                          Design resources that speak both languages fluently:<br/>
                            •	Practice guides that include both traditional descriptions and scientific explanations<br/>
                            •	Glossaries that translate between scientific terminology and Sufi concepts<br/>
                            •	Case studies showing how scientists have personally integrated these approaches<br/>
                            •	Reading lists that include both scientific research and accessible Sufi texts

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Step 4: Establish Experiential Laboratories
                          </h5>
                          <p>
                          Develop structured environments where beginning students can explore both dimensions:<br/>
                          •	Workshops where practices are both experienced and objectively measured<br/>
                          •	Discussion groups facilitated by individuals fluent in both scientific and Sufi discourse<br/>
                          •	Demonstration sessions where experienced practitioners show measurable physiological changes during Sufi practices<br/>
                          •	Peer learning circles where students share observations using both frameworks

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Step 5: Train Bridge-Building Mentors
                          </h5>
                          <p>
                          Identify and develop guides who understand both worlds:<br/>
                          •	Scientists who have personal experience with Sufi practices<br/>
                          •	Sufi practitioners with scientific literacy<br/>
                          •	Educators skilled at translating between different epistemologies<br/>
                          •	Researchers studying contemplative practices who can communicate findings accessibly

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Step 6: Design Progressive Integration Pathways
                          </h5>
                          <p>
                          Create structured journeys that gradually deepen integration:<br/>
                            •	Begin with practices where scientific validation is strongest<br/>
                            •	Gradually introduce experiences that extend beyond current scientific frameworks<br/>
                            •	Help students develop sophisticated models that honor both empirical evidence and direct experience<br/>
                            •	Guide the transition from "either/or" thinking to "both/and" understanding

                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Step 7: Document and Share Integration Experiences
                          </h5>
                          <p>
                          Cultivate a community knowledge base:<br/>
                          •	Collect narratives from scientists who have successfully integrated Sufi practices<br/>
                          •	Document common challenges and effective approaches for overcoming them<br/>
                          •	Create case studies showing how scientific understanding can enhance spiritual development<br/>
                          •	Develop resources addressing frequent questions from scientifically-trained beginners

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
        
      </Layout>
    </>
  );
}
