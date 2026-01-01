"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
import { SetStateAction, useState } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  const GrowthSlides = [
    {
      subTitle: "Nurture Wisdom, Evolve Spiritually, Transform",
      title: "Unlock Your Spiritual <br/>Potential and Growth",
      text: " Embrace personal and spiritual growth through Kashmiri Sufi teachings,<br/> fostering wisdom, resilience, and self-discovery for a fulfilled life.",
      buttonText: "Read More",
      buttonLink: "/membership",
    },
    {
      subTitle: "Spiritual Awakening, Lifelong Learning, Inner Strength",
      title: "Elevate Your Mind, <br/>Heart, and Soul",
      text: "Guided by Sufi principles, embark on a journey of self-improvement,<br/> wisdom, and transformation to achieve true inner peace and fulfillment.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Learn, Reflect, Flourish, Empower, Inspire",
      title: " Cultivating Spiritual Growth <br/>Through Sufi Wisdom",
      text: "Deepen your connection to Sufi teachings, unlocking the strength, clarity, <br/>and purpose needed for continuous growth and meaningful transformation.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Knowledge, Devotion, Progress, Purpose, Fulfillment",
      title: "A Transformative Path<br/> to Self-Realization",
      text: "Harness the wisdom of Kashmiri Sufism to evolve spiritually, <br/>refine your character, and develop a profound sense of purpose in life.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Expand Consciousness, Deepen Inner Awareness",
      title: "Journey Toward Lasting <br/>Personal & Spiritual Growth",
      text: " Step into a transformative journey guided by Kashmiri Sufi wisdom, nurturing your<br/> mind, soul, and spirit for a fulfilling life.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
  ];
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={GrowthSlides}/>
        {/*Core Services Start*/}
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
                        src="/assets/images/services/growth.png"
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
                        Growth and Development
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-4xl sm:text-3xl md:text-2xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
                      ADVANCING BEYOND FOUNDATIONS: 
                      </h2>
                      <h3 className="text-3xl sm:text-xl md:text-xl font-semibold lowercase mb-6 leading-snug sm:leading-tight">THE INTEGRATED PATH OF SCIENTIFIC-SPIRITUAL DEVELOPMENT</h3>
                      <p className="text-base sm:text-lg text-gray-700">
                      After establishing the foundational practices and understanding outlined in the beginner's checklist, the serious seeker faces the essential question: How does one progress systematically along the Sufi path while maintaining integration with scientific understanding? This page addresses the dynamics of authentic growth and development through an approach that honors both spiritual wisdom and empirical inquiry.
                      </p>
                      <p className="text-base sm:text-lg mt-5 text-gray-700">
                      The journey beyond foundations involves specific challenges, methodologies, and markers of progress that can be understood through both traditional Sufi frameworks and contemporary scientific perspectives. What follows is a comprehensive guide to navigating this terrain with intellectual integrity and spiritual authenticity.
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-[120px] -mb-[340px] ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full ">
                  <div className="relative block">
                    <div className="text-left">
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      RECOGNIZING THE STAGES OF DEVELOPMENT
                      </h2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[20px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                STAGES OF DEVELOPMENT
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                     1. Traditional Framework
                      </h4>
                      <p>
                      In the Sufi tradition, development progresses through distinct stations (maqamat) and states (ahwal). Stations represent stable achievements of character and consciousness, while states are temporary experiences that come and go. Understanding this framework provides a map for the journey ahead.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Stations of Development (Maqamat):
                          </h5>
                          
                          <p className="">
                          Systematic progression through stages such as tawba (reorientation), wara (mindfulness), and sabr (patience) that represent stable character attainments.</p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	States of Experience (Ahwal): 
                          </h5>
                          <p>
                          Encountering temporary states such as qurb (nearness), mahabbah (love), and yaqin (certainty) that arise and subside during development.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Progressive Unveiling (Kashf): 
                          </h5>
                          <p>
                          The gradual revelation of spiritual realities as the seeker advances along the path of knowledge and practice.

                          </p>
                          
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                     2. Scientific Perspective
                      </h4>
                      <p>
                      Contemporary developmental psychology and neuroscience provide complementary frameworks for understanding stages of human growth.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Developmental Metrics: 
                          </h5>
                          <p>
                          Research on post-conventional adult development showing measurable stages in cognitive and ethical maturation beyond conventional socialization.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Neuroplasticity Research: 
                          </h5>
                          <p>
                          Studies demonstrating how consistent contemplative practice creates quantifiable changes in neural architecture at different expertise stages.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	State-Trait Transformation: 
                          </h5>
                          <p>
                          Evidence for how temporary states, when cultivated repeatedly, can become enduring traits through neurobiological mechanisms.

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
        <section className="relative block py-[120px] -mb-[340px] ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full ">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      KEY DIMENSIONS OF GROWTH
                      </h2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                KEY DIMENSIONS OF GROWTH
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      1. Perceptual Development
                      </h4>
                      <p>
                      The systematic refinement of awareness and attention, allowing for increasingly subtle perception of both inner and outer realities.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Heart Perception (Basirah): 
                          </h5>
                          
                          <p className="">
                          Development of the heart's capacity to recognize realities beyond ordinary sensory experience through systematic practice.</p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Attentional Training: 
                          </h5>
                          <p>
                          Research-based protocols for developing sustained, focused, and panoramic attention as foundations for advanced perception.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Discrimination Development: 
                          </h5>
                          <p>
                          Cultivating the ability to distinguish between genuine perception and projection, validated through multiple methods.

                          </p>
                          
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      2. Emotional Transformation
                      </h4>
                      <p>
                      Contemporary developmental psychology and neuroscience provide complementary frameworks for understanding stages of human growth.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Nafs Purification: 
                          </h5>
                          <p>
                          Traditional methods for recognizing and transforming the reactive patterns of the self through awareness and practice.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Emotional Regulation: 
                          </h5>
                          <p>
                          Scientific approaches to developing balanced emotional responses based on neurobiological understanding.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Heart Qualities: 
                          </h5>
                          <p>
                          Systematic cultivation of refined emotional states such as compassion, gratitude, and equanimity through integrated practices.

                          </p>
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      3. Cognitive Integration
                      </h4>
                      <p>
                      The development of wisdom that transcends yet includes rational thinking, allowing for more comprehensive understanding.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Integrative Wisdom (Hikmah): 
                          </h5>
                          <p>
                          Traditional approaches to developing knowledge that transcends the limitations of ordinary analytical thinking.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Cognitive Flexibility: 
                          </h5>
                          <p>
                          Research-based methods for developing the ability to move fluidly between different modes of knowing and perspectives.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Paradox Comfort: 
                          </h5>
                          <p>
                          Practices that develop capacity to embrace apparent contradictions and transcend binary thinking patterns.

                          </p>
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      4. Ethical Refinement
                      </h4>
                      <p>
                      The embodiment of virtues and qualities that reflect spiritual maturation in daily life and relationships.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Divine Attributes (Akhlaq): 
                          </h5>
                          <p>
                          Traditional framework for cultivating qualities that reflect divine attributes in human character and conduct.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Prosocial Development: 
                          </h5>
                          <p>
                          Scientific research on the cultivation of compassion, altruism, and ethical decision-making in interpersonal contexts.
                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Ethical Intelligence: 
                          </h5>
                          <p>
                          Integrated approaches to developing nuanced ethical understanding that responds appropriately to complex situations.

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
        <section className="relative block py-[120px] -mb-[340px] ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full ">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      METHODOLOGIES FOR SYSTEMATIC DEVELOPMENT
                      </h2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                METHODOLOGIES FOR SYSTEMATIC DEVELOPMENT
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      1. Progressive Practice Sequences
                      </h4>
                      <p>
                      Structured approaches that introduce practices at appropriate developmental stages with clear criteria for advancement.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Graduated Protocols:
                          </h5>
                          
                          <p className="">
                          Carefully sequenced practices with specific parameters for duration, frequency, and quality indicators.</p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Readiness Assessment: 
                          </h5>
                          <p>
                          Methods for determining when a practitioner is prepared to engage with more advanced practices.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Customized Adaptation: 
                          </h5>
                          <p>
                          Frameworks for adjusting practice sequences based on individual temperament and circumstances.

                          </p>
                          
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      2. Balanced Development Framework
                      </h4>
                      <p>
                      Approaches that ensure growth occurs across multiple dimensions rather than creating lopsided development.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Multiple Faculties: 
                          </h5>
                          <p>
                          Systems for developing intellectual, emotional, intuitive, physical, and social aspects of being in parallel.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Compensatory Focus: 
                          </h5>
                          <p>
                          Methods for identifying and addressing underdeveloped areas to ensure balanced growth.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Integration Practices: 
                          </h5>
                          <p>
                          Specific approaches that connect and harmonize development across different dimensions of experience.

                          </p>
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      3. Qualified Guidance System
                      </h4>
                      <p>
                      Structured relationships with teachers and communities that provide essential feedback and direction.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Teacher-Student Models: 
                          </h5>
                          <p>
                          Traditional and contemporary approaches to working with guides who have navigated the territory.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Community Validation: 
                          </h5>
                          <p>
                          Methods for engaging with peers who provide reflective feedback and diverse perspectives.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Objective Assessment:  
                          </h5>
                          <p>
                          Tools for measuring progress through both traditional wisdom criteria and scientific metrics.

                          </p>
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      4. Integrative Study Approach
                      </h4>
                      <p>
                      Systematic engagement with knowledge that combines intellectual understanding with direct experience.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Text-Experience Dialogue: 
                          </h5>
                          <p>
                          Practices that relate traditional texts and scientific research to personal experiential understanding.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Cross-Tradition Study: 
                          </h5>
                          <p>
                          Comparative approaches examining how similar developmental patterns appear across contemplative systems.
                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Interdisciplinary Integration: 
                          </h5>
                          <p>
                          Methods for connecting insights from diverse fields including psychology, neuroscience, and philosophy.

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
        <section className="relative block py-[120px] -mb-[340px] ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      NAVIGATING CHALLENGES AND OBSTACLES
                      </h2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                 CHALLENGES OF SUFI GROWTH 
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      1. Common Developmental Challenges
                      </h4>
                      <p>
                      Recognition and understanding of typical difficulties that arise during the growth process.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Spiritual Materialism: 
                          </h5>
                          
                          <p className="">
                           Identifying and working with the tendency to pursue spiritual experiences as achievements or possessions.</p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Psychological Bypassing: 
                          </h5>
                          <p>
                          Recognizing when spiritual concepts are used to avoid necessary psychological development.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Integration Difficulties: 
                          </h5>
                          <p>
                          Addressing challenges in applying insights from contemplative states to daily life situations.

                          </p>
                          
                        </div>
                      </li>
                      
                  
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      2. Scientific Approach to Obstacles
                      </h4>
                      <p>
                      Application of evidence-based methods for identifying and addressing specific types of developmental challenges.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Systematic Assessment: 
                          </h5>
                          <p>
                          Research-based protocols for identifying the precise nature and cause of particular obstacles.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Targeted Interventions: 
                          </h5>
                          <p>
                          Specific approaches matched to the particular challenge based on empirical understanding.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Progress Monitoring:  
                          </h5>
                          <p>
                          Methods for tracking changes objectively to evaluate intervention effectiveness over time.

                          </p>
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      3. Traditional Wisdom on Tests
                      </h4>
                      <p>
                      Understanding of how challenges serve essential functions in the developmental process according to Sufi teaching.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Contraction and Expansion: 
                          </h5>
                          <p>
                          Recognition of how states of constriction (qabd) and expansion (bast) serve the refinement process.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Necessary Challenges: 
                          </h5>
                          <p>
                          Understanding how difficulties function as catalysts for deeper surrender and development.
                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Discernment Development: 
                          </h5>
                          <p>
                          How tests cultivate the ability to distinguish between different qualities of experience.
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
        <section className="relative block py-[120px] -mb-[340px] ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      MARKERS OF AUTHENTIC PROGRESS
                      </h2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                MARKERS OF AUTHENTIC PROGRESS
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      1. Traditional Signs of Advancement
                      </h4>
                      <p>
                      Indicators recognized within Sufi tradition as reflecting genuine spiritual development rather than temporary states.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Presence Capacity: 
                          </h5>
                          
                          <p className="">
                          Increased ability to maintain conscious awareness in diverse circumstances beyond formal practice.</p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Ethical Embodiment:  
                          </h5>
                          <p>
                          Spontaneous expression of virtues without calculation, reflecting internalized spiritual qualities.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Service Orientation:  
                          </h5>
                          <p>
                          Natural movement toward benefiting others rather than focus on personal spiritual attainment.

                          </p>
                          
                        </div>
                      </li>
                      
                      
                      
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      2. Scientific Indicators of Development
                      </h4>
                      <p>
                      Measurable changes in functioning that correlate with progress in contemplative development.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Neurophysiological Markers: 
                          </h5>
                          <p>
                          Observable shifts in brain function, heart rate variability, and stress response patterns.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Cognitive Adaptability: 
                          </h5>
                          <p>
                          Enhanced capacity to navigate complexity, uncertainty, and paradox in thought and perception.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Behavioral Consistency:  
                          </h5>
                          <p>
                          Alignment between stated values and actual behavior across different contexts and challenges.

                          </p>
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      3. Integrated Assessment Approach
                      </h4>
                      <p>
                      Comprehensive methods that combine multiple perspectives to evaluate authentic development.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Multi-dimensional Evaluation:  
                          </h5>
                          <p>
                          Systems integrating subjective reporting, community feedback, and objective measurement.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Longitudinal Tracking: 
                          </h5>
                          <p>
                          Approaches for observing patterns over extended time periods rather than isolated experiences.
                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Contextual Understanding: 
                          </h5>
                          <p>
                          Frameworks for evaluating progress in relationship to life circumstances and personal history.
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
        <section className="relative block py-[120px] -mb-48 ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      ADVANCED INTEGRATION PRACTICES
                      </h2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                ADVANCED INTEGRATION PRACTICES
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      1. Contemplative Inquiry Methods
                      </h4>
                      <p>
                      Disciplined approaches to investigating consciousness directly while maintaining scientific rigor.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	First-Person Science: 
                          </h5>
                          
                          <p className="">
                          Structured methods for exploring subjective experience with precision and systematic reflection.</p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Phenomenological Refinement:  
                          </h5>
                          <p>
                          Development of nuanced language and categories for articulating subtle experiences.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Collaborative Investigation: 
                          </h5>
                          <p>
                          Protocols for engaging in shared exploration with fellow practitioners to validate insights.

                          </p>
                          
                        </div>
                      </li>
                      
                      
                      
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      2. Life as Laboratory
                      </h4>
                      <p>
                      Approaches that transform ordinary experience into opportunities for accelerated development.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Everyday Practice: 
                          </h5>
                          <p>
                          Methods for bringing awareness and transformative intention to routine activities and encounters.
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Relationship Development:  
                          </h5>
                          <p>
                          Using interpersonal dynamics as mirrors for self-understanding and growth opportunities.

                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Work Integration:  
                          </h5>
                          <p>
                          Approaches for bringing contemplative awareness to professional activities and challenges.

                          </p>
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      3. Service and Contribution
                      </h4>
                      <p>
                      Ways that advanced practitioners can support others and contribute to collective understanding.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Knowledge Translation:  
                          </h5>
                          <p>
                          Methods for articulating insights in accessible language for different audiences and contexts.

                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Mentoring Approaches: 
                          </h5>
                          <p>
                          Frameworks for supporting those earlier on the path with appropriate guidance and reflection.
                          </p>
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          •	Community Cultivation:  
                          </h5>
                          <p>
                          Approaches for creating environments that nurture integrated scientific-spiritual development.
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
            THE CONTINUOUS JOURNEY
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
              
            </span>
            
            <p className="text-[var(--fixnix-white)] mt-2">
            Growth and development on the Sufi path is not a linear progression toward a final destination but a continuous unfolding of human potential. Each stage brings new challenges, insights, and capacities while revealing ever-subtler dimensions of reality and selfhood. The integrated scientific-spiritual approach offers a comprehensive framework for this journey, one that honors both the profound wisdom of the Sufi tradition and the methodological rigor of scientific inquiry. By bringing these complementary perspectives together, the contemporary seeker can navigate the path with both the heart's wisdom and the mind's clarity, allowing each to enhance and refine the other.
            </p>
            
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
            Whether you are just beginning to move beyond foundations or are well-established on the path, the principles and practices outlined here provide orientation for the journey ahead, a journey of continuous growth, development, and discovery at the frontier of human possibility.
            </h2>
          </div>
          
        </div>
        
    </section>

       

        
        
      </Layout>
    </>
  );
}
