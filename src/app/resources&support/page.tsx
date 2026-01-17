"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "@/components/sections/home3/Banner";
import { SetStateAction, useState } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  const ResourcesSlides = [
    {
      subTitle: "Guidance, Knowledge, Support, Growth, Enlightenment",
      title: "Empowering Seekers with<br/> Sufi Wisdom Resources",
      text: " Access a wealth of teachings, guidance, and support to deepen your Sufi journey,<br/> nurture growth, and enhance spiritual understanding.",
      buttonText: "Read More",
      buttonLink: "/membership",
    },
    {
      subTitle: "Find Strength, Learn, and Flourish",
      title: "Your Path to <br/>Knowledge and Support",
      text: "Explore valuable Sufi insights, mentorship, and learning materials designed to<br/> support your personal, spiritual, and intellectual development.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Guidance for Every Step Forward",
      title: "  Supportive Resources for<br/> Lifelong Learning",
      text: "Whether you're beginning or advancing, find essential Sufi teachings, mentorship,<br/> and tools to guide your spiritual and personal growth.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Seek Knowledge, Find Guidance, Grow",
      title: "Nurturing Growth Through <br/>Wisdom and Care",
      text: "Gain access to essential resources, mentorship, and a supportive community that<br/> empowers your journey through Kashmiri Sufi teachings.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Support, Learn, Thrive, Connect, Evolve",
      title: "Tools and Guidance for<br/> Your Journey",
      text: "  Discover comprehensive support, sacred texts, and interactive learning materials<br/> that strengthen your understanding and connection to Kashmiri Sufism.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
  ];
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={ResourcesSlides}/>
        {/*Core Services Start*/}
        <section className="relative block py-[120px] -pb-[40px]">
          <div className="container mx-auto px-4">
            <div className="relative block mb-[52px]">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left">
                      <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                      RESOURCES & SUPPORT
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      TOOLS FOR YOUR JOURNEY OF INTEGRATION
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                      
                      The path of integrating scientific understanding with spiritual wisdom requires both traditional and contemporary resources. This page provides carefully curated materials, practical tools, and support services to enhance your journey at every stage of development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block pt-[60px]  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                DIGITAL LIBRARY
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                    DIGITAL LIBRARY
                      </h4>
                      
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          CORE TEXTS COLLECTION
                          </h5>
                          <p>
                          Access our growing digital library of essential writings from both Sufi traditions and scientific disciplines. Each text includes contextual information and study guides that highlight connections between traditional wisdom and contemporary knowledge.<br/>
                          Featured collections include:
                          
                          </p>
                          <p>
                          <span className="font-bold">•	Sufi Classics: </span>Annotated versions of works by Ibn Arabi, Al-Ghazali, Rumi, and other masters<br/>
                          <span className="font-bold">•	Contemporary Science: </span>Key research papers and books on consciousness, complexity, and contemplative neuroscience<br/>
                          <span className="font-bold">•	Integrative Frameworks: </span>Writings that explicitly bridge scientific and spiritual understanding<br/>
                          
                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          MULTIMEDIA RESOURCES
                          </h5>
                          <p>
                          Enhance your learning through diverse formats that engage multiple learning styles:
                          
                          </p>
                          <p>
                          <span className="font-bold">•	Guided Practice Recordings: </span>Audio and video guidance for meditation, contemplation, and presence practices<br/>
                          <span className="font-bold">•	Expert Interviews:  </span>: Conversations with scientists, spiritual practitioners, and integrative thinkers<br/>
                          <span className="font-bold">•	Instructional Videos:  </span>Step-by-step visual guidance for complex practices and concepts<br/>
                          <span className="font-bold">•	Interactive Learning Modules:   </span>Self-paced explorations of key topics with embedded assessments<br/>
                          
                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          RESEARCH REPOSITORY
                          </h5>
                          <p>
                          Stay current with emerging research at the intersection of contemplative practice and scientific investigation:
                          
                          </p>
                          <p>
                          <p>
                          •	Curated research papers on meditation effects, consciousness studies, and biofield science<br/>
                          •	Accessible summaries of complex scientific findings relevant to spiritual practice<br/>
                          •	Updates on ongoing research projects within our community and beyond<br/>
                          •	Resources for practitioners interested in contributing to research initiatives
                          

                          </p>
                          </p>
                          
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
             
            </div>
             </div> 
             <div className="relative  block pt-[60px]  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                PRACTICE TOOLS
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                    PRACTICE TOOLS
                      </h4>
                      
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          MOBILE PRACTICE COMPANION
                          </h5>
                          <p>
                          Our custom mobile application supports your daily practice with:
                          
                          </p>
                          <p>
                          •	Structured practice sequences with timing and guidance<br/>
                          •	Tracking tools for monitoring consistency and insights<br/>
                          •	Reminders and motivation features to support regular engagement<br/>
                          •	Connection to community members practicing simultaneously

                          
                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          MEASUREMENT INSTRUMENTS
                          </h5>
                          <p>
                          For those interested in quantitative aspects of practice, we offer guidance on appropriate measurement tools:
                          
                          </p>
                          <p>
                          •	Recommendations for heart rate variability (HRV) monitoring devices<br/>
                          •	EEG and brain entrainment resources for advanced practitioners<br/>
                          •	Standardized assessment tools for tracking wellbeing and development<br/>
                          •	Protocols for systematic phenomenological self-observation

                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          PRACTICE JOURNALS
                          </h5>
                          <p>
                          Structured journals designed specifically for integrated practice:
                          
                          </p>
                          <p>
                          
                          •	Templates for recording both objective and subjective dimensions of experience<br/>
                          •	Frameworks for recognizing patterns and development over time<br/>
                          •	Reflection prompts that integrate scientific and spiritual perspectives<br/>
                          •	Space for dialogue between analytical understanding and direct experience


                          </p>
                          
                          
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
             
            </div>
            </div>
            <div className="relative  block pt-[60px]  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                LEARNING PATHWAYS
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                    LEARNING PATHWAYS
                      </h4>
                      
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          SELF-STUDY COURSES
                          </h5>
                          <p>
                          Comprehensive online courses designed for independent learning:
                          
                          </p>
                          <p>
                          <span className="font-bold">•	Foundations of Integration:  </span>Core concepts and practices for beginners<br/>
                          <span className="font-bold">•	Contemplative Neuroscience:  </span>Understanding the brain and consciousness through both objective and subjective inquiry<br/>
                          <span className="font-bold">•	Sacred Geometry & Pattern Recognition:  </span>Exploring mathematical principles in both natural systems and traditional art<br/>
                          <span className="font-bold">•	Ethics of Integration:  </span>Navigating the moral dimensions of integrating diverse knowledge systems<br/>
                          
                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          GUIDED LEARNING COHORTS
                          </h5>
                          <p>
                          Join structured learning groups that move through material together:
                          
                          </p>
                          <p>
                          •	8-week cohorts with weekly online meetings and structured practice assignments<br/>
                          •	Facilitated discussion and collaborative exploration of challenging concepts<br/>
                          •	Peer support and accountability for consistent practice<br/>
                          •	Integration exercises that connect conceptual understanding with direct experience

                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          CUSTOMIZED LEARNING PLANS
                          </h5>
                          <p>
                          Work with experienced guides to develop personalized study and practice sequences:
                          
                          </p>
                          <p>
                          <p>
                          •	Initial assessment of background, needs, and learning style<br/>
                          •	Tailored recommendations for readings, practices, and community engagement<br/>
                          •	Regular check-ins to adjust and refine your approach<br/>
                          •	Progressive advancement through appropriate stages of development



                          </p>
                          </p>
                          
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
             
            </div>
            </div>
            <div className="relative  block  pt-[60px]  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                PERSONAL SUPPORT
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                    PERSONAL SUPPORT
                      </h4>
                      
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          INDIVIDUAL GUIDANCE
                          </h5>
                          <p>
                          Connect with experienced mentors for one-on-one support:
                          
                          </p>
                          <p>
                          •	Virtual consultation sessions focused on specific questions or challenges<br/>
                          •	Regular check-ins to support consistent practice and integration<br/>
                          •	Guidance for navigating challenging experiences or insights<br/>
                          •	Recommendations for resources and practices tailored to your needs

                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          PEER CONNECTIONS
                          </h5>
                          <p>
                          Build relationships with fellow travelers on the path:
                          
                          </p>
                          <p>
                          •	Facilitated peer mentoring matches based on experience and interest<br/>
                          •	Small practice pods that meet regularly for mutual support<br/>
                          •	Skill-sharing exchanges that leverage diverse expertise within the community<br/>
                          •	Collaborative projects that deepen understanding through shared exploration


                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          INTEGRATION SUPPORT
                          </h5>
                          <p>
                          Specialized assistance for integrating spiritual insights with daily life:
                          
                          </p>
                          <p>
                          <p>
                          •	Consultation on applying principles in professional contexts<br/>
                            •	Support for balancing contemplative practice with active engagement<br/>
                            •	Guidance for communicating integrated understanding to different audiences<br/>
                            •	Help with navigating relationships from an evolving perspective




                          </p>
                          </p>
                          
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
             
            </div>
            </div>
            <div className="relative  block  pt-[60px] ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                 START YOUR SUFI JOURNEY
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                    SPECIALIZED RESOURCES
                      </h4>
                      
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          FOR SCIENTISTS & RESEARCHERS
                          </h5>
                          <p>
                          Resources specifically designed for those with scientific training:
                          
                          </p>
                          <p>
                          •	Methodological frameworks for rigorous first-person inquiry<br/>
                          •	Protocols for investigating contemplative experience through multiple epistemologies<br/>
                          •	Guidance for maintaining scientific integrity while exploring subjective dimensions<br/>
                          •	Networking with others bridging scientific and contemplative approaches


                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          FOR TRADITIONAL PRACTITIONERS
                          </h5>
                          <p>
                          Support for those with established practice in traditional Sufi paths:
                          
                          </p>
                          <p>
                          •	Contextual information on scientific research relevant to traditional practices<br/>
                          •	Suggestions for complementary approaches that enhance traditional methods<br/>
                          •	Frameworks for translating traditional understanding into contemporary language<br/>
                          •	Resources for preserving traditional wisdom while engaging with modern knowledge



                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          FOR EDUCATORS & FACILITATORS
                          </h5>
                          <p>
                          Tools for those sharing integrated approaches with others:
                          
                          </p>
                          <p>
                          <p>
                          •	Curriculum materials for various age groups and contexts<br/>
                          •	Facilitation guides for group processes and discussions<br/>
                          •	Assessment approaches that honor multiple dimensions of learning<br/>
                          •	Ethical frameworks for teaching integrative approaches





                          </p>
                          </p>
                          
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
             
            </div>
            </div>
            <div id="techical-assistance" className="relative  block  pt-[60px] ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                TECHNICAL ASSISTANCE
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                    TECHNICAL ASSISTANCE
                      </h4>
                      
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          PLATFORM SUPPORT
                          </h5>
                          <p>
                          Get help with accessing and using our digital resources:
                          
                          </p>
                          <p>
                          •	Technical support for website and mobile app navigation<br/>
                          •	Troubleshooting assistance for virtual gathering participation<br/>
                          •	Guidance for optimal setup for online learning experiences<br/>
                          •	Help with account management and personalization



                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          ACCESSIBILITY SERVICES
                          </h5>
                          <p>
                          Resources to ensure all community members can fully participate:
                          </p>
                          <p>
                          •	Materials in multiple formats (text, audio, video) to accommodate different needs<br/>
                          •	Closed captioning and transcripts for multimedia content<br/>
                          •	Screen reader-compatible digital resources<br/>
                          •	Support for those with limited technology access or experience




                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          LANGUAGE SUPPORT
                          </h5>
                          <p>
                          Resources for our international community:
                          
                          </p>
                          <p>
                          <p>
                          •	Key materials translated into multiple languages<br/>
                          •	Translation assistance for live events and gatherings<br/>
                          •	Language exchange opportunities between community members<br/>
                          •	Cultural contextualization for concepts that vary across traditions






                          </p>
                          </p>
                          
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
             
            </div>
            </div>
            <div className="relative  block py-[120px] pt-10 -mb-44  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                ACCESSING RESOURCES
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                    ACCESSING RESOURCES
                      </h4>
                      <p>
                      Most digital resources are available to all registered community members through our online platform. Some specialized resources and services may require additional registration or contribution.
                          </p>
                      
                      
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          FOR NEW MEMBERS
                          </h5>
                          
                          <p>
                          1.	Complete your community registration<br/>
                          2.	Attend a new member orientation session<br/>
                          3.	Set up your digital resource account<br/>
                          4.	Begin with the recommended starter resources




                          
                          </p>
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          FOR ESTABLISHED MEMBERS
                          </h5>
                          <p>
                          Resources to ensure all community members can fully participate:
                          </p>
                          <p>
                          •	Resources are organized by topic, format, and experience level in our digital library<br/>
                              •	Use the personalized recommendation system based on your interests and background<br/>
                              •	Contact contact@sufisciencecenter.info for assistance finding specific materials<br/>
                              •	Suggest new resources that have been valuable in your own journey
                              <p className="font-bold">
                            We are committed to making these resources accessible to sincere seekers regardless of financial circumstances. If you need assistance accessing any materials or services, please contact our support team to discuss options.
                          </p>




                          
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
            <span className="relative text-left-mobile inline-block text-[24px] leading-[16px] text-white font-bold  uppercase z-[1]">
            THE CONTINUOUS JOURNEY
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
              
            </span>
            
            <p className="text-[var(--fixnix-white)] mt-2 text-[19px]">
            The journey of integrating scientific understanding with spiritual wisdom unfolds uniquely for each person. These resources are offered not as definitive answers but as supportive tools for your exploration of the territory where empirical investigation meets contemplative insight. We welcome your feedback on existing resources and suggestions for additional support that would benefit our community.
            </p>
            
            
          </div>
          
        </div>
        
    </section>
        
        
       
       
        {/*Services One End*/}
      </Layout>
    </>
  );
}
