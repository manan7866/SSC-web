"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState,  useEffect  } from "react";
import Banner from "@/components/sections/home3/Banner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { createOrUpdateChecklist, getChecklist } from "@/hooks/sufiChecklist";
import type { ChecklistItem } from "@/hooks/sufiChecklist";


type ChecklistSection = {
  title: string;
  backendSection: string; // ✅ match backend enums
  items: string[];
  completed: boolean[];
};

export default function Home() {
  const [sections, setSections] = useState<ChecklistSection[]>([
    {
      title: "Initial Orientation",
      backendSection: "INITIAL_ORIENTATION",
      items: [
        "Read introductory materials on Sufi principles and practices",
        "Learn basic terminology used in Sufi discourse",
        "Research different Sufi orders (tariqahs) and their approaches",
        "Identify scientific concepts that parallel Sufi teachings",
        "Attend an introductory session or talk on Sufism"
      ],
      completed: [false, false, false, false, false]
    },
    {
      title: "Finding Guidance",
      backendSection: "FINDING_GUIDANCE",
      items: [
        "Connect with respected teachers who understand both scientific and spiritual dimensions",
        "Research authentic lineages (silsilas) and their methods of transmission",
        "Speak with practitioners who have scientific backgrounds",
        "Attend gatherings of potential spiritual communities",
        "Ask questions about how scientific understanding is integrated with practice"
      ],
      completed: [false, false, false, false, false]
    },
    {
      title: "Practice and Discipline",
      backendSection: "PRACTICE_AND_DISCIPLINE",
      items: [
        "Set up a consistent time and space for daily meditation/contemplation",
        "Learn a basic form of dhikr (remembrance practice)",
        "Begin a practice journal to document experiences and observations",
        "Track basic physiological effects of practice (calm, focus, sleep quality)",
        "Establish a regular reading schedule of relevant materials"
      ],
      completed: [false, false, false, false, false]
    },
    {
      title: "Community Engagement",
      backendSection: "COMMUNITY_ENGAGEMENT",
      items: [
        "Attend group dhikr or meditation sessions",
        "Participate in study circles discussing texts or concepts",
        "Engage in service activities with the community",
        "Ask questions and share observations with fellow practitioners",
        "Build relationships with more experienced practitioners"
      ],
      completed: [false, false, false, false, false]
    },
    {
      title: "Advanced Study",
      backendSection: "ADVANCED_STUDY",
      items: [
        "Create connections between scientific understanding and spiritual concepts",
        "Notice parallels between scientific research and personal experience",
        "Study one classic Sufi text alongside contemporary scientific perspectives",
        "Attend lectures or workshops that bridge scientific and spiritual worldviews",
        "Begin developing a personalized framework that honors both approaches"
      ],
      completed: [false, false, false, false, false]
    }
  ]);
  
  const [sectionProgress, setSectionProgress] = useState<number[]>([]);
  const [overallProgress, setOverallProgress] = useState<number>(0);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiLoading, setApiLoading] = useState(false);  
const [showProgressDetails, setShowProgressDetails] = useState(false);
  

  // Save checklist to API
  const saveChecklist = async (newSections: ChecklistSection[]) => {
    try {
      const items = newSections.flatMap(section =>
        section.items.map((item, idx) => ({
          section: section.backendSection, // ✅ use backend enums
          title: item,
          status: section.completed[idx] ? "COMPLETED" : "PENDING"
        }))
      );

      await createOrUpdateChecklist({
        progress: overallProgress,
        items: items as ChecklistItem[]
      });
    } catch (err) {
      setApiError("Failed to save checklist");
      console.error("Error saving checklist:", err);
    }
  };

  // Toggle an item
  const toggleItem = async (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].completed[itemIndex] = !newSections[sectionIndex].completed[itemIndex];
    setSections(newSections);
    await saveChecklist(newSections);
  };

  // Reset all
  const resetAll = async () => {
    const newSections = sections.map(section => ({
      ...section,
      completed: Array(section.items.length).fill(false)
    }));
    setSections(newSections);
    try {
      await createOrUpdateChecklist({
        progress: 0,
        items: [],
        resetAll: true // ✅ allowed now
      } as any);
    } catch {
      setApiError("Failed to reset checklist");
    }
  };

  // Complete all
  const completeAll = async () => {
    const newSections = sections.map(section => ({
      ...section,
      completed: Array(section.items.length).fill(true)
    }));
    setSections(newSections);
    try {
      await createOrUpdateChecklist({
        progress: 100,
        items: [],
        completeAll: true // ✅ allowed now
      } as any);
    } catch {
      setApiError("Failed to complete checklist");
    }
  };

  // Progress calculation
  useEffect(() => {
    const totalItems = sections.reduce((t, s) => t + s.items.length, 0);
    const totalCompleted = sections.reduce(
      (t, s) => t + s.completed.filter(Boolean).length,
      0
    );
    setOverallProgress(totalItems > 0 ? (totalCompleted / totalItems) * 100 : 0);
  }, [sections]);
  

  const getJourneyStatus = () => {
    if (overallProgress <= 25) return "Threshold of the Path";
    if (overallProgress <= 50) return "Active Engagement";
    if (overallProgress <= 75) return "Developing Integration";
    return "Ready for Advancement";
  };

  const getJourneyDescription = () => {
    if (overallProgress <= 25) {
      return "You are at the beginning stages of exploration. Focus on establishing basic knowledge, finding proper guidance, and implementing consistent daily practice. This is a crucial foundation-building phase.";
    } else if (overallProgress <= 50) {
      return "You've established a basic foundation and are actively engaging with multiple dimensions of the path. Continue deepening your practice while expanding community connections and knowledge integration.";
    } else if (overallProgress <= 75) {
      return "You're experiencing meaningful integration of scientific understanding and spiritual practice. Your personal framework is developing, and transformations in awareness and character are becoming noticeable. Focus on consistency and refinement.";
    } else {
      return "You've established a robust foundation across all dimensions of the beginner's path. You're ready to advance to intermediate practices and deeper studies. Consider increasing commitment to a specific lineage while maintaining your integrated approach.";
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  
  const LearningSlides = [
    {
      subTitle: "Wisdom, Growth, Enlightenment, Reflection, Mastery",
      title: " Explore the Foundations of<br/> Sufi Learning",
      text: " Follow structured learning paths rooted in Kashmiri Sufism, guiding you through <br/>spiritual wisdom, self-discovery, and transformative inner growth.",
      buttonText: "Read More",
      buttonLink: "/membership",
    },
    {
      subTitle: "Sacred Knowledge, Guided Spiritual Awakening",
      title: "Discover the Pathways to <br/>Spiritual Mastery",
      text: "Delve into the heart of Sufi teachings through curated learning paths, <br/>designed to nurture mindfulness, self-awareness, and deep spiritual insight.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "From Seeking to Understanding, Evolve Spiritually",
      title: "Step into the <br/>Essence of Sufism",
      text: "Embark on a structured journey through Kashmiri Sufi traditions, learning the principles<br/> of love, devotion, wisdom, and spiritual awakening.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: " Illuminate Your Path with Knowledge",
      title: "The Sufi Learning <br/>Paths Await You",
      text: "Explore foundational, intermediate, and advanced Sufi learning paths designed <br/>to awaken your consciousness and deepen your spiritual understanding.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "A Journey of Learning and Wisdom",
      title: "Guided Steps Toward <br/>Spiritual Enlightenment",
      text: "  Follow structured pathways in Kashmiri Sufism, blending sacred wisdom, ethical teachings,<br/>  and self-exploration for profound personal and spiritual growth.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
  ];
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={LearningSlides}/>
        {/*Core Services Start*/}
        <section className="relative block py-[120px] pb-[10px]">
          <div className="container mx-auto px-4">
            <div className="relative block mb-[52px]">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left">
                      <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                        Core Learning Paths
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      for New Journey in Sufism
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                      For those beginning a journey in Sufism, particularly those with scientific backgrounds, the following core learning paths provide an integrated structure that honors both spiritual tradition and scientific understanding. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10  ">
              
              <div className="mb-[52px] ">
             
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                Integrated Scientific-Spiritual Framework
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      An Integrated Scientific-Spiritual Framework
                      </h4>
                      <p>
                      These paths build progressively upon each other, creating bridges between empirical knowledge and experiential wisdom:
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          1. Knowledge Foundation
                          </h5>
                          <p>
                          •	Study essential Sufi concepts and terminology alongside their potential neurological and psychological correlates<br/>
                          •	Learn about the historical development of Sufism within the context of human cognitive and cultural evolution<br/>
                          •	Understand the relationship between Sufism and broader Islamic teachings through comparative analytical frameworks<br/>
                          •	Explore writings of key Sufi masters through both literary analysis and cognitive science perspectives<br/>
                          •	Examine how Sufi epistemology relates to scientific methods of knowledge acquisition and validation processes<br/>
                          

                          </p>
                          <p className="pt-3"><span className="font-bold">	Resource Enhancement:</span>
                          Access multimedia learning libraries containing lectures, animations and interactive modules that explain complex concepts from both traditions using multiple learning approaches</p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          2. Spiritual Practices
                          </h5>
                          <p>
                          •	Learn foundational remembrance practices (dhikr) with attention to their effects on neural synchronization and stress physiology<br/>
                          •	Develop regular meditation and contemplation (muraqabah) while exploring research on neuroplasticity and attentional networks<br/>
                          •	Practice presence and mindfulness with understanding of their documented effects on executive function and emotional regulation<br/>
                          •	Understand the purpose and method of spiritual retreats (khalwa) through both traditional frameworks and sensory processing studies<br/>
                          •	Track physiological markers (HRV, EEG patterns) as complementary data points to subjective experiential reporting techniques<br/>
                          
                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Practice Support:</span>
                          Implement a structured documentation system for recording both objective measurements and subjective experiences, creating valuable personal data for reflection and growth
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          3. Character Development
                          </h5>
                          <p>
                          •	Focus on purification of the lower self (tazkiyat an-nafs) with insights from personality psychology and behavioral neuroscience<br/>
                          •	Cultivate essential virtues (adab) in all interactions while studying the social neuroscience of prosocial behavior development<br/>
                          •	Recognize and work with psychological patterns using both traditional Sufi models and contemporary cognitive-behavioral frameworks<br/>
                          •	Implement ethical teachings in daily life while examining research on moral development and ethical decision-making processes<br/>
                          •	Apply principles of positive psychology that align with traditional Sufi approaches to character refinement and virtue cultivation

                          </p>
                          <p className="pt-3">
                          <span className="font-bold">	Assessment Framework: </span>
                          Utilize graduated evaluation methods that honor both objective metrics from psychology and traditional spiritual markers, creating a comprehensive developmental profile
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          4. Lineage Understanding & Transmission (Silsila)
                          </h5>
                          <p>
                          •	Study the concept of spiritual lineages (silsila) as methodological frameworks for transmission of experiential knowledge<br/>
                          •	Explore how diverse Sufi orders (Qadiriyya, Naqshbandiyya, Chishtiyya, etc.) represent different methodological approaches to the same truth<br/>
                          •	Understand how all authentic spiritual chains, though varied in specific practices and emphasis, ultimately converge at the same source of wisdom<br/>
                          •	Examine the scientific parallels to transmission lineages in terms of skill acquisition, expertise development, and knowledge preservation<br/>
                          •	Recognize how the teacher-student relationship (sheikh-murid) creates an empirically verifiable environment for accelerated neuroplasticity and learning

                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Integrative Understanding:  </span>
                          Develop appreciation for how the diversity of spiritual paths represents different methodological approaches to the same universal realities, similar to how various scientific disciplines offer complementary perspectives on natural phenomena
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          5. Community Engagement
                          </h5>
                          <p>
                          •	Participate in group remembrance ceremonies (hadra) while understanding collective coherence phenomena and group psychology<br/>
                          •	Engage in service to others (khidma) with awareness of the documented health benefits of altruism and prosocial behavior<br/>
                          •	Learn from the company of fellow seekers (suhbah) through principles of collaborative learning and knowledge construction<br/>
                          •	Build relationships with more experienced practitioners while studying mentorship dynamics and skill acquisition models<br/>
                          •	Explore social contagion theories in relation to traditional emphasis on spiritual companionship and community development

                          </p>
                          <p className="pt-3">
                          <span className="font-bold">	Learning Enhancement:  </span>
                          Participate in interdisciplinary study groups that bring together individuals from diverse scientific backgrounds with those knowledgeable in Sufi traditions, generating unique insights through cross-pollination
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          7. Integration Practices
                          </h5>
                          <p>
                          •	Apply Sufi principles across all aspects of life using systems thinking and complexity science models for holistic understanding<br/>
                          •	Bridge contemplative practice with active engagement through understanding of state-dependent learning and performance<br/>
                          •	Harmonize intellectual understanding with experiential knowledge using dual-process theories of cognition and knowledge integration<br/>
                          •	Balance individual development with community responsibility through ecological frameworks and network science principles<br/>
                          •	Develop research projects that ethically explore the intersection of Sufi practices and scientific measurement methodologies


                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Ethical Framework:   </span>
                          Implement a contextual ethics module addressing considerations at the intersection of scientific research and spiritual practice, including cultural respect, research ethics, and responsible integration
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          8. Advanced Integration & Contribution
                          </h5>
                          <p>
                          •	Study contemporary case examples of scientists who have successfully integrated Sufi practices while maintaining their scientific rigor<br/>
                          •	Contribute to the growing body of research at the intersection of contemplative practice and scientific investigation<br/>
                          •	Develop individualized approaches that honor both traditional lineage practices and scientific understanding<br/>
                          •	Mentor newcomers with scientific backgrounds who are beginning their own integrative journeys<br/>
                          •	Participate in collaborative projects that advance understanding in both scientific and spiritual domains


                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Community Building:   </span>
                          Create digital and in-person forums where practitioners can share experiences, insights and measurement approaches, building a community of practice around integrated scientific-spiritual development
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
        <div className="min-h-screen bg-white pb-y -mt-40 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 lg:px-8">
        
      <div className="w-full lg:w-8/12 mx-auto ">
      <div className="relative block">
                    <div  className="text-left py-5">
                      <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                      The Sufi Journey: A Path to Enlightenment
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-lg  sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      An Integrated Scientific-Spiritual Assessment Tool for the Modern Seeker

                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                      Embark on a transformative journey where ancient wisdom meets modern understanding. This powerful checklist is designed to guide you through the stages of Sufi practice, seamlessly blending scientific inquiry with profound spiritual exploration. It offers a comprehensive roadmap for establishing a deep, holistic practice that nurtures the mind, body, and soul. By following this path, you will not only gain insights into Sufi teachings but also integrate them into your daily life, ensuring both spiritual growth and scientific clarity as you advance towards higher states of consciousness.
                      </p>
                    </div>
                  </div>
                  <section className="feature-one">
                  <div className="text-left mb-3 -mt-24">
                  <h2 className="text-3xl font-bold mb-4">
                  Why Do You Need This Checklist?
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 pb-3">
                  The Sufi Journey is more than a set of rituals—it is a transformative path that refines the heart, mind, and soul. This checklist is designed for those who seek structured, meaningful progress in their spiritual journey while integrating modern scientific insights.
                  </p>
                    </div>
                   
        <div className="container">
          <div className="row">
            
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  
                  Structured <br/> Spiritual Growth
                  
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                 
                Merging Science<br/> Spirituality
                  
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  
                  Self-Discovery<br/> & Mindfulness
                  
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  
                  Guided Learning<br/> & Practice
                  
                </h3>
              </div>
            </div>
            
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  
                Community<br/> & Connection 
                  
                </h3>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  
                Character <br/> Refinement
                  
                </h3>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  
                Milestone-Based<br/> Progress
                  
                </h3>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  
                Authenticity <br/>& Wisdom
                  
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
          </div>
        </div>
      </section>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          <div id="checklist-form" className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple py-6 px-4 sm:px-6 md:px-10">
          <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                 EVALUATE NOW
                </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Beginner's Checklist for the Sufi Journey</h1>
            <p className="text-purple-100 mt-1 text-sm sm:text-base">An Integrated Scientific-Spiritual Assessment Tool</p>
          </div>
          
          <div className="p-4 sm:p-6 md:p-10">
            {apiError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {apiError}
              </div>
            )}
            {apiLoading && (
              <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
                Loading checklist...
              </div>
            )}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Overall Progress</h2>
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                  {Math.round(overallProgress)}% Complete
                </span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${overallProgress}%`,
                    background: `linear-gradient(to right, 
                      ${overallProgress <= 25 ? '#a855f7' : 
                        overallProgress <= 50 ? '#8b5cf6' : 
                          overallProgress <= 75 ? '#6366f1' : '#4f46e5'
                      }, 
                      ${overallProgress <= 25 ? '#d8b4fe' : 
                        overallProgress <= 50 ? '#c4b5fd' : 
                          overallProgress <= 75 ? '#a5b4fc' : '#818cf8'
                      })`
                  }}
                ></div>
              </div>
              
              <div className="mt-4 p-4 rounded-lg bg-gray-200 border border-indigo-100">
                <h3 className="font-medium text-lg text-fixnix-lightpurple">Current Status: {getJourneyStatus()}</h3>
                <p className="mt-1 text-fixnix-lightpurple">{getJourneyDescription()}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <button 
                  onClick={() => setShowProgressDetails(!showProgressDetails)}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-md transition"
                >
                  {showProgressDetails ? 'Hide Details' : 'Show Details'}
                </button>
                <button 
                  onClick={resetAll}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition"
                >
                  Reset All
                </button>
                <button 
                  onClick={completeAll}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-md transition"
                >
                  Complete All
                </button>
              </div>
              
              {showProgressDetails && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {sections.map((section, idx) => (
                    <div key={`progress-${idx}`} className="bg-white border border-gray-200 rounded-md p-3 sm:p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2 flex-wrap gap-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">{section.title}</h4>
                        <span className="text-xs sm:text-sm font-medium text-gray-600 bg-gray-50 px-1.5 py-0.5 rounded-full">
                          {Math.round(sectionProgress[idx])}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${sectionProgress[idx]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {sections.map((section, sectionIndex) => (
                <div key={`section-${sectionIndex}`} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-medium text-gray-800">{section.title}</h3>
                    <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${sectionProgress[sectionIndex]}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={`item-${sectionIndex}-${itemIndex}`}
                        className="px-4 sm:px-6 py-3 sm:py-4 flex items-start hover:bg-gray-50 transition"
                      >
                        <div className="flex-shrink-0">
                          <button
                            onClick={() => toggleItem(sectionIndex, itemIndex)}
                            className={`w-5 h-5 rounded border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                              section.completed[itemIndex]
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'border-gray-300'
                            }`}
                          >
                            {section.completed[itemIndex] && (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        </div>
                        <label 
                          htmlFor={`item-${sectionIndex}-${itemIndex}`}
                          className={`ml-3 cursor-pointer ${
                            section.completed[itemIndex] ? 'text-indigo-600 font-medium' : 'text-gray-800'
                          }`}
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200 text-xs sm:text-sm text-gray-500 text-center">
          <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Overall Progress</h2>
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                  {Math.round(overallProgress)}% Complete
                </span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${overallProgress}%`,
                    background: `linear-gradient(to right, 
                      ${overallProgress <= 25 ? '#a855f7' : 
                        overallProgress <= 50 ? '#8b5cf6' : 
                          overallProgress <= 75 ? '#6366f1' : '#4f46e5'
                      }, 
                      ${overallProgress <= 25 ? '#d8b4fe' : 
                        overallProgress <= 50 ? '#c4b5fd' : 
                          overallProgress <= 75 ? '#a5b4fc' : '#818cf8'
                      })`
                  }}
                ></div>
              </div>
              
              <div className="mt-4 p-4 rounded-lg bg-gray-200 border border-indigo-100">
                <h3 className="font-medium text-lg text-left text-fixnix-lightpurple">Current Status: {getJourneyStatus()}</h3>
                <p className="mt-1 text-fixnix-lightpurple text-left">{getJourneyDescription()}</p>
              </div>
            <p className="mt-2">This assessment is a guide for personal reflection, not an absolute measure of spiritual development.</p>
            <p>Regular consultation with qualified teachers remains essential.</p>
            

            
          </div>
        </div>
      </div>
    </div>

        {/*Pricing One End*/}

        

        {/*Services One End*/}
      </Layout>
    </>
  );
}
