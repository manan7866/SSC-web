"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SetStateAction, useState } from "react";
import Banner from "@/components/sections/home3/Banner";
import React, { useEffect } from 'react';
import { useRef } from 'react';

interface AssessmentDomain {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  score: number;
  feedbackLow: string;
  feedbackMedium: string;
  feedbackHigh: string;
}

export default function Home() {
  const [domains, setDomains] = useState<AssessmentDomain[]>([
    {
      id: "presence",
      title: "Presence Quality",
      arabicTitle: "Hudur",
      description: "Your ability to maintain centered awareness while responding to others' neuroemotional states",
      score: 5,
      feedbackLow: "Focus on developing foundational mindfulness practices and emotional regulation skills. Consider practices like muraqaba (contemplative observation) for at least 20 minutes daily.",
      feedbackMedium: "You have established good presence. Continue refining through challenging interpersonal situations and increase duration of contemplative practice.",
      feedbackHigh: "You demonstrate strong presence capacity. Consider developing methods to transmit this quality to others through guidance and modeling."
    },
    {
      id: "perception",
      title: "Perceptual Accuracy",
      arabicTitle: "Firasa",
      description: "Your ability to discern others' hal (states) and developmental needs through subtle cues",
      score: 5,
      feedbackLow: "Practice focused observation exercises. Develop your ability to notice subtle physical, emotional, and energetic cues in others without immediate interpretation.",
      feedbackMedium: "Your perceptual skills are developing well. Work on distinguishing between factual observation and interpretation. Practice validating your insights.",
      feedbackHigh: "Your perceptive abilities are refined. Continue developing the skill of appropriate response based on accurate perception."
    },
    {
      id: "communication",
      title: "Communication Precision",
      arabicTitle: "Bayan",
      description: "Your ability to express complex concepts in accessible ways across multiple processing modalities",
      score: 5,
      feedbackLow: "Practice articulating spiritual concepts in multiple ways - logical, metaphorical, experiential, and practical. Work with explaining the same concept to different audiences.",
      feedbackMedium: "You communicate well. Now focus on calibrating your communication to different learning styles and developmental levels.",
      feedbackHigh: "Your communication is highly effective. Consider documenting your teaching approaches and developing frameworks for others."
    },
    {
      id: "ethics",
      title: "Ethical Clarity",
      arabicTitle: "Adab",
      description: "Your understanding of ethical dimensions in rabbani (spiritual guidance) relationships",
      score: 5,
      feedbackLow: "Study traditional texts on adab (spiritual courtesy) and contemporary ethics in helping relationships. Develop clear personal ethical guidelines.",
      feedbackMedium: "Your ethical framework is sound. Work on applying these principles in complex or ambiguous situations through case studies and reflection.",
      feedbackHigh: "Your ethical understanding is well-developed. Consider mentoring others in developing their ethical framework and navigating challenging situations."
    }
  ]);
  
  const [overallAssessment, setOverallAssessment] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [teachingExperience, setTeachingExperience] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [assessmentId, setAssessmentId] = useState("");
  const [assessmentDate, setAssessmentDate] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    calculateOverallAssessment();
  }, [domains]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSliderChange = (id: string, value: number) => {
    const updatedDomains = domains.map(domain => 
      domain.id === id ? {...domain, score: value} : domain
    );
    setDomains(updatedDomains);
    
    // Update the quick assessment whenever any slider changes
    if (userName) {
      updateQuickAssessment(updatedDomains);
    }
  };
  
  const updateQuickAssessment = (currentDomains = domains) => {
    const averageScore = currentDomains.reduce((sum, domain) => sum + domain.score, 0) / currentDomains.length;
    const highestDomain = currentDomains.reduce((max, domain) => max.score > domain.score ? max : domain, currentDomains[0]);
    const lowestDomain = currentDomains.reduce((min, domain) => min.score < domain.score ? min : domain, currentDomains[0]);
    
    let assessmentLevel = "";
    if (averageScore < 4) {
      assessmentLevel = "developing";
    } else if (averageScore < 7) {
      assessmentLevel = "established";
    } else {
      assessmentLevel = "advanced";
    }
    
    const quickSummary = `${userName || "Your"} teaching capacity is currently at an ${assessmentLevel} level (${averageScore.toFixed(1)}/10). Strongest in ${highestDomain.title} (${highestDomain.arabicTitle}) at ${highestDomain.score}/10, with ${lowestDomain.title} (${lowestDomain.arabicTitle}) at ${lowestDomain.score}/10 as an area for growth.`;
    
    setQuickAssessment(quickSummary);
    if (userName && teachingExperience) {
      setShowQuickAssessment(true);
    }
  };
  
  // Update assessment when name or experience changes
  useEffect(() => {
    if (userName && teachingExperience) {
      updateQuickAssessment();
    } else {
      setShowQuickAssessment(false);
    }
  }, [userName, teachingExperience]);
  
  const calculateOverallAssessment = () => {
    const averageScore = domains.reduce((sum, domain) => sum + domain.score, 0) / domains.length;
    
    let assessment = "";
    if (averageScore < 4) {
      assessment = "You are at the beginning stages of developing teaching capacity. Focus on deepening your personal practice while developing foundational teaching skills in structured, low-stakes environments. Regular guidance from experienced mentors will be essential.";
    } else if (averageScore < 7) {
      assessment = "You have established meaningful teaching capacities with room for continued growth. Consider finding specific contexts to practice teaching under supervision, while continuing to refine your areas of development through targeted practices.";
    } else {
      assessment = "You demonstrate significant teaching capacity across multiple domains. Consider formal teaching roles while maintaining a balance between guiding others and continuing your own development. You may be ready to mentor emerging teachers.";
    }
    
    setOverallAssessment(assessment);
  };
  
  const [buttonMessage, setButtonMessage] = useState("");
  const [showButtonMessage, setShowButtonMessage] = useState(false);
  const [quickAssessment, setQuickAssessment] = useState("");
  const [showQuickAssessment, setShowQuickAssessment] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check form completion
    if (!userName || !teachingExperience) {
      setButtonMessage("Please complete all fields above before continuing");
      setShowButtonMessage(true);
      setTimeout(() => setShowButtonMessage(false), 3000);
      return;
    }
    
    // Generate a quick assessment summary below the button
    const averageScore = domains.reduce((sum, domain) => sum + domain.score, 0) / domains.length;
    const highestDomain = domains.reduce((max, domain) => max.score > domain.score ? max : domain, domains[0]);
    const lowestDomain = domains.reduce((min, domain) => min.score < domain.score ? min : domain, domains[0]);
    
    const quickSummary = `${userName}, your average teaching capacity is ${averageScore.toFixed(1)}/10. Your strongest area is ${highestDomain.title} (${highestDomain.arabicTitle}) at ${highestDomain.score}/10, while ${lowestDomain.title} (${lowestDomain.arabicTitle}) at ${lowestDomain.score}/10 would benefit from additional development.`;
    
    setQuickAssessment(quickSummary);
    setShowQuickAssessment(true);
    
    // Generate a unique assessment ID
    const prefix = "SUF";
    const userCode = userName.replace(/\s+/g, '').substring(0, 5).toUpperCase();
    const randomNum = Math.floor(Math.random() * 9000 + 1000);
    const newAssessmentId = `${prefix}-${userCode}-${randomNum}`;
    setAssessmentId(newAssessmentId);
    
    // Set current date
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setAssessmentDate(formattedDate);
    
    setFormSubmitted(true);
    setShowResults(true);
    
    // Scroll to results after a slight delay to allow rendering
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
    
    // In a real application, you might save this data to a database
  };
  
  const getFeedback = (domain: AssessmentDomain) => {
    if (domain.score < 4) return domain.feedbackLow;
    if (domain.score < 7) return domain.feedbackMedium;
    return domain.feedbackHigh;
  };
  
  const getScoreColor = (score: number) => {
    if (score < 4) return "text-amber-600";
    if (score < 7) return "text-indigo-600";
    return "text-emerald-600";
  };

  
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  const LeadershipSlides = [
    {
      subTitle: "Lead with Wisdom, Teach with Heart",
      title: "Empowering Leaders Through <br/>Sufi Knowledge",
      text: " Discover the art of leadership and teaching rooted in Kashmiri Sufi wisdom,<br/> inspiring transformation, guidance, and lifelong learning.",
      buttonText: "Read More",
      buttonLink: "/membership",
    },
    {
      subTitle: "Inspire, Guide, Empower, Transform, Lead",
      title: " Shaping Future Leaders<br/> with Sufi Wisdom",
      text: "Develop leadership skills and teaching abilities through Kashmiri Sufi traditions, <br/>fostering spiritual, intellectual, and ethical excellence in every step.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Wisdom-Driven Leadership, Heartfelt Teaching",
      title: " Become a Guide, <br/>Mentor, & Teacher",
      text: "Through Kashmiri Sufi teachings, cultivate the knowledge and presence to lead <br/>with purpose and teach with profound spiritual insight.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Serve, Lead, Teach, Illuminate, Uplift",
      title: "Transforming Knowledge into <br/>Leadership & Impact",
      text: "Master the essence of Sufi leadership, guiding others with wisdom, humility,<br/> and a deep understanding of spiritual and ethical values.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
    {
      subTitle: "Leading Minds, Enlightening Souls, Teaching Truth",
      title: "The Path to <br/>Spiritual Leadership Begins",
      text: "  Embrace the role of a Sufi leader and teacher, illuminating paths with,<br/> knowledge, compassion, and the wisdom of Kashmiri traditions.",
      buttonText: "Join Now",
      buttonLink: "/membership",
    },
  ];
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={LeadershipSlides}/>
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
                        src="/assets/images/services/leadership3.png"
                        alt="Core services"
                        layout="responsive"
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
                    <div className="text-left mb-8">
                      <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                        Leadership and Teaching
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      THE JOURNEY FROM SEEKER TO GUIDE
                      </h2>
                      <h2 className=" sm:text-sm md:text-md font-semibold lg:text-md xl:text-md 2xl:text-lg italic mt-4 mb-6 leading-snug sm:leading-tight">
                      "The true teacher is one who can descend to the level of the student, lead them by the hand, and guide them upward." — Traditional Sufi saying
                      </h2>

                      <p className="text-base sm:text-lg text-gray-700">
                      The transition from murid (dedicated seeker) to murshid (spiritual guide) represents a profound transformation in one's spiritual station (maqam). This shift transcends mere intellectual accumulation—it embodies the Sufi principle of fana (dissolution of self) followed by baqa (subsistence in divine attributes). When contemporary neuroscientific understanding of interpersonal neural synchronization complements the traditional wisdom of silsila (spiritual lineage), leadership manifests as a quantum entanglement that bridges multiple epistemological frameworks.
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Core Services End*/}
        <section className="relative block py-[120px] -mb-80 ">
          <div className="container mx-auto px-4">
            <div className="relative block ">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left ">
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      FOUR PILLARS OF INTEGRATED TEACHING
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
                PILLARS OF INTEGRATED TEACHING
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      EMBODIED PRESENCE (HUDUR)
                      </h4>
                      <p>
                      The capacity to maintain coherent awareness (yaqaza) while accurately perceiving others' hal (spiritual state) and maqam (spiritual station). Polyvagal theory research demonstrates that a teacher's autonomic nervous system state directly influences students' neurophysiological receptivity through co-regulation mechanisms.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Attunement training through muraqaba (contemplative observation) practices 
                          </h5>
                          
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Heart rate variability coherence development using psychophysiological monitoring
                          </h5>
                          
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Cultivation of receptive awareness (qabuliyyah) in dynamic interpersonal field dynamics
                          </h5>
                          
                          
                        </div>
                      </li>
                      
                      
                      
                      
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      DEVELOPMENTAL WISDOM (HIKMAH)
                      </h4>
                      <p>
                      Understanding the territory of nafs transformation (from ammara to lawwama to mutma'inna) and the specific challenges that arise at each stage. Integrating the traditional seven stages of nafs development with contemporary constructive-developmental theory and neuroplasticity research.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Recognizing stage-specific learning needs through cognitive complexity assessment
                          </h5>
                      
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Anticipating common obstacles (qabd - spiritual contraction) before they arise
                          </h5>
                          
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Adapting teaching to evolutionary readiness based on developmental coherence measures
                          </h5>
                          
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      COMMUNICATION MASTERY (BAYAN)
                      </h4>
                      <p>
                      The art of expressing haqiqa (essential truth) at multiple levels simultaneously, engaging both the neocortical analytical processing and limbic experiential systems of the listener.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Multi-dimensional language that addresses visual, auditory, kinesthetic and conceptual processing modalities
                          </h5>
                          
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Strategic use of tamthil (metaphor), ishara (allusion), and hikayat (narrative) to bypass cognitive defense mechanisms
                          </h5>
                          
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Calibrating communication to the listener's cognitive-developmental stage and neurological receptivity 
                          </h5>
                          
                         
                        </div>
                      </li>
                      <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                      ETHICAL INTEGRITY (ADAB)
                      </h4>
                      <p>
                      The foundation of trust that allows for genuine transmission (tawassul). Research in interpersonal neurobiology confirms that perceived ethical coherence activates mirror neuron systems essential for deep imitative learning.
                      </p>
                    </div>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Transparency in the sheikh-murid relationship based on transactional field theory
                          </h5>
                          
                          
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Clear boundaries that serve developmental goals within appropriate power differential dynamics
                          </h5>
                          
                          
                        </div>
                      </li>
                      
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[1px]">
                          •	Consistency between personal suluk (spiritual conduct) and teaching methodology
                          </h5>
                          
                         
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
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-1 leading-snug sm:leading-tight">
                      PRACTICAL DEVELOPMENT PATHWAYS
                      </h2>
                    
                      <p>
                      The journey to effective teaching follows specific developmental sequences that transform intellectual understanding into embodied capacity through state-dependent memory, learning, and behavior processes.
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
                DEVELOPMENT PATHWAYS
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                       
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          FOUNDATION STAGE
                          </h5>
                          <p className="pt-1">
                          <span className="font-bold">Focus:    </span>
                          Create digital and in-person forums where practitioners can share experiences, insights and measurement approaches, building a community of practice around integrated scientific-spiritual development
                          </p>
                          <p className="pt-3 font-bold">
                          
                          Key Practices:
                          </p>
                          <p>
                          •	Regular documentation of personal ahwal (spiritual states) and insights using structured introspection protocols<br/>
                          •	Systematic observation of experienced murshids using cognitive apprenticeship methodologies<br/>
                          •	Small halqa (circle) facilitation under supervision with neural feedback monitoring<br/>



                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Integration Method:   </span>
                          Regular muhasaba (self-accounting) sessions with mentors using critical incident analysis
                          </p>
                        </div>
                        
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                      <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          DEVELOPMENT STAGE
                          </h5>
                          <p className="pt-1">
                          <span className="font-bold">Focus:    </span>
                          Expanding teaching repertoire while refining interoceptive sensitivity
                          </p>
                          <p className="pt-3 font-bold">
                          
                          Key Practices:
                          </p>
                          <p>
                          •	Targeted skill development in identified growth areas using deliberate practice principles<br/>
                          •	Case-based learning with complex teaching scenarios using simulated student interactions<br/>
                          •	Receiving structured feedback from diverse perspectives using 360-degree assessment methodologies




                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Integration Method:   </span>
                          Peer consultation groups employing collaborative inquiry models
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                      <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          MASTERY STAGE
                          </h5>
                          <p className="pt-1">
                          <span className="font-bold">Focus:    </span>
                          Developing innovative approaches while maintaining adherence to usul (fundamental principles)
                          </p>
                          <p className="pt-3 font-bold">
                          
                          Key Practices:
                          </p>
                          <p>
                          	•	Systematic investigation of teaching effectiveness using mixed-methods evaluation<br/>
                            •	Creative adaptation of methods to new contexts through cultural neuroscience frameworks<br/>
                            •	Mentoring emerging teachers using scaffolded learning theory

                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Integration Method:   </span>
                          Contributing to collective understanding through action research paradigms
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
                      
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-1 leading-snug sm:leading-tight">
                      THE SCIENCE OF TRANSMISSION
                      </h2>
                      <p>
                      Recent research in cognitive neuroscience, interpersonal neurobiology, and contemplative pedagogy offers valuable insights that complement traditional understanding of how baraka (spiritual blessing) is transmitted:
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
                SCIENCE OF TRANSMISSION
                </div>
                  <div className=" pt-[123px] px-10 relative ">
                    
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                       
                        <div>
                          <h5 className="text-[24px] uppercase font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Neural Resonance
                          </h5>
                        
                          <p>
                          Studies of interbrain synchronization show that teachers and students develop coupled oscillatory brain activity patterns during effective sohbet (spiritual conversation). This neural coupling facilitates learning beyond verbal instruction through phase-locked gamma wave entrainment.


                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Application:   </span>
                          Practices that develop coherent brain states through tamarkuz (concentration) before teaching sessions
                          </p>
                        </div>
                        
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                       
                        <div>
                          <h5 className="text-[24px] uppercase font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Transformative Learning
                          </h5>
                        
                          <p>
                          Research in neuroepistemology identifies specific conditions that facilitate perspective transformation rather than mere assimilative learning. These parallel traditional understandings of hal (state) to maqam (station) transition mechanisms.


                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Application:   </span>
                          Creating environments that support cognitive dissonance and resolution through controlled disequilibrium states
                          </p>
                        </div>
                        
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                       
                        <div>
                          <h5 className="text-[24px] uppercase font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Relational Psychology
                          </h5>
                        
                          <p>
                          Studies in attachment neuroscience confirm that the quality of the rabitah (heart connection) between teacher and student is the strongest predictor of developmental outcomes, beyond specific techniques.


                          </p>
                          <p className="pt-3">
                          <span className="font-bold">Application:   </span>
                          Prioritizing authentic connection through secure attachment paradigms within appropriate developmental boundaries
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
        <div className="relative block max-w-[1180px] px-4 mx-auto  py-[120px] pt-10 ">
                   
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                    WISDOM TRADITIONS SPEAK 
                    </h3>
                    <p>
                    The integrated approach to teaching draws from diverse silsilas while recognizing their common essence in tawhid (unity):
                      </p>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      "Teach in the language of the listener's understanding (fahm)." — Ali ibn Abi Talib
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      "The function of the murshid is to point the way to the summit, but the spiritual climbing (suluk) must be done by the murid." — Hazrat Inayat Khan
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      "The true teacher defends his pupils against his own personal spiritual influence." — Agehananda Bharati
                      </p>
                    </div>
                    </div>
        

        {/*Pricing One Start*/}
        <section className="relative block py-[120px] z-[1]">
                  <div
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                    style={{
                      backgroundImage:
                        "url(assets/images/backgrounds/core-services-bg.jpg)",
                    }}
                  ></div>
                  {/*Experience One End*/}
                  <div className="relative block py-12 -mb-24 lg:py-28 bg-cover bg-center bg-no-repeat">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex flex-wrap items-center">
                        {/* Left Section */}
                        <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
                          <div className="relative">
                            <div className="rounded-lg overflow-hidden relative group">
                              <Image
                                src="/assets/images/services/leadership1.png"
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
                              NAVIGATING COMPLEX CHALLENGES 
                                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                              </span>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                              CASE STUDY:<br/> The Eager Student
                              </h2>
                              <p className="text-base sm:text-lg text-gray-700">
                              <span className="font-bold">Scenario:</span> A highly intelligent student with strong nafs al-ammara (commanding self) constantly seeks advanced practices before mastering fundamental adab (spiritual courtesy).
                              </p>
                            </div>
                            <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
                              {/* List Item 1 */}
                              <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 hover:-translate-y-[10px] group ">
                                
                                <div className="ml-6 sm:ml-6">
                                  
                                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                                  How do you honor himma (spiritual aspiration) while maintaining proper tariqah (methodological sequence)?
                                  </p>
                                </div>
                              </li>
        
                              {/* List Item 2 */}
                              <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500 hover:-translate-y-[10px] group">
                                
                                <div className="ml-4 sm:ml-6">
                                  
                                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                                  What underlying attachment patterns and dopaminergic reward seeking might be operating?
                                  </p>
                                </div>
                              </li>
                              <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500 hover:-translate-y-[10px] group">
                                
                                <div className="ml-4 sm:ml-6">
                                  
                                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                                  How can you redirect their cognitive-attentional resources constructively?
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
                                src="/assets/images/services/leadership2.png"
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
                              NAVIGATING COMPLEX CHALLENGES 
                                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                              </span>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                              CASE STUDY:<br/> The Group Divide
                              </h2>
                              <p className="text-base sm:text-lg text-gray-700">
                              <span className="font-bold">Scenario:</span> A teaching majlis (gathering) includes both scientifically-oriented skeptics with analytical cognitive styles and devotionally-oriented believers with experiential processing preferences.
                              </p>
                            </div>
                            <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
                              {/* List Item 1 */}
                              <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 hover:-translate-y-[10px] group ">
                                
                                <div className="ml-6 sm:ml-6">
                                  
                                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                                  How do you create wahdat (unity) while honoring kathrat (multiplicity) of cognitive styles?
                                  </p>
                                </div>
                              </li>
        
                              {/* List Item 2 */}
                              <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500 hover:-translate-y-[10px] group">
                                
                                <div className="ml-4 sm:ml-6">
                                  
                                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                                  	What bridging epistemological frameworks serve both neocortical and limbic processing orientations?
                                  </p>
                                </div>
                              </li>
                              <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500 hover:-translate-y-[10px] group">
                                
                                <div className="ml-4 sm:ml-6">
                                  
                                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                                  	How can cognitive-affective tension become a teaching tool for integrative consciousness?
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
                
       
        {/*Pricing One End*/}
        <div id="assessment-form" className=" max-w-4xl mx-auto bg-white rounded-xl shadow-md mt-8 overflow-hidden">
        <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-lg 2xl:text-lg font-semibold mt-4 mb-6 px-6  leading-snug sm:leading-tight">
                Identify your current strengths and growth areas as a teacher or potential murshid
                </h2>
      <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple py-6 px-6 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Personalized Teaching Path Assessment</h1>
        <p className="text-indigo-100 mt-2">Evaluate your spiritual teaching capacity through an integrated Sufi-scientific framework</p>
      </div>
      
      {!formSubmitted ? (
        <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="mb-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Teaching Experience</label>
              <select
                id="experience"
                value={teachingExperience}
                onChange={(e) => setTeachingExperience(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select your experience level</option>
                <option value="none">No formal teaching experience yet</option>
                <option value="beginning">Beginning (less than 2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="experienced">Experienced (5+ years)</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-8">
            {domains.map(domain => (
              <div key={domain.id} className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{domain.title}</h3>
                    <p className="text-sm italic text-gray-600">{domain.arabicTitle}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center">
                    <span className={`text-2xl font-bold ${getScoreColor(domain.score)}`}>{domain.score}</span>
                    <span className="text-gray-400 text-sm ml-1">/10</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{domain.description}</p>
                
                <div className="mb-1 flex justify-between text-xs text-gray-500">
                  <span>Developing</span>
                  <span>Established</span>
                  <span>Advanced</span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={domain.score}
                  onChange={(e) => handleSliderChange(domain.id, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-fixnix-lightpurple"
                />
                
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
              <svg className="h-5 w-5 text-fixnix-lightpurple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Your Self Assessment Report
            </h3>
            
            {showQuickAssessment ? (
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                  <p className="text-gray-700">{quickAssessment}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm">Average Score</div>
                    <div className="text-2xl font-bold text-indigo-700">
                      {(domains.reduce((sum, domain) => sum + domain.score, 0) / domains.length).toFixed(1)}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm">Status</div>
                    <div className="text-lg font-medium text-indigo-700">
                      {domains.reduce((sum, domain) => sum + domain.score, 0) / domains.length < 4 ? 
                        "Developing" : 
                        domains.reduce((sum, domain) => sum + domain.score, 0) / domains.length < 7 ? 
                        "Established" : "Advanced"}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Recommended Next Steps:</h4>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <ul className="space-y-2">
                      {domains.filter(d => d.score < 7).map((domain, idx) => (
                        <li key={`rec-${idx}`} className="flex items-start">
                          <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span className="text-gray-700 text-sm">{getFeedback(domain)}</span>
                        </li>
                      ))}
                      {domains.every(d => d.score >= 7) && (
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-fixnix-lightpurple mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700 text-sm">Continue refining your advanced teaching abilities and consider mentoring others.</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="text-right">
                  <button
                    onClick={() => {
                      setFormSubmitted(true);
                      setShowResults(true);
                      
                      // Generate a unique assessment ID
                      const prefix = "SUF";
                      const userCode = userName.replace(/\s+/g, '').substring(0, 5).toUpperCase();
                      const randomNum = Math.floor(Math.random() * 9000 + 1000);
                      const newAssessmentId = `${prefix}-${userCode}-${randomNum}`;
                      setAssessmentId(newAssessmentId);
                      
                      // Set current date
                      const now = new Date();
                      const formattedDate = now.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      });
                      setAssessmentDate(formattedDate);
                      
                      // Scroll to results after a slight delay to allow rendering
                      setTimeout(() => {
                        if (resultsRef.current) {
                          resultsRef.current.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="px-4 py-2 bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-medium rounded-md shadow-sm transition duration-150 ease-in-out text-sm"
                  >
                    Generate Detailed Report
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
                <p className="text-gray-500">
                  {!userName || !teachingExperience ? 
                    "Please complete your name and teaching experience above to begin" : 
                    "Adjust the sliders above to see your dynamic assessment report"}
                </p>
              </div>
            )}
          </div>
        </form>
      ) : (
        <div ref={resultsRef} className="p-6 md:p-8 space-y-8">
          <div className="bg-gray-100 border border-indigo-100 rounded-lg p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
              <h2 className="text-xl font-semibold text-fixnix-lightpurple">Assessment for {userName}</h2>
              <div className="flex flex-col gap-2">
                <div className="bg-indigo-100 text-fixnix-lightpurple px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <span className="font-bold mr-2">ID:</span> {assessmentId}
                </div>
                <div className="bg-indigo-100 text-fixnix-lightpurple px-3 py-1 rounded-full text-xs font-medium">
                  <span className="font-bold mr-1">Date:</span> {assessmentDate}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{overallAssessment}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                <div className="text-gray-500 text-sm">Average Score</div>
                <div className="text-2xl font-bold text-fixnix-lightpurple">
                  {(domains.reduce((sum, domain) => sum + domain.score, 0) / domains.length).toFixed(1)}
                </div>
              </div>
              
              <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                <div className="text-gray-500 text-sm">Strongest Area</div>
                <div className="text-lg font-medium text-fixnix-lightpurple">
                  {domains.reduce((max, domain) => max.score > domain.score ? max : domain, domains[0]).title}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">Detailed Feedback</h3>
            
            {domains.map(domain => (
              <div key={domain.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{domain.title} <span className="text-sm italic text-gray-600">({domain.arabicTitle})</span></h4>
                  </div>
                  <div className={`font-bold text-xl ${getScoreColor(domain.score)}`}>
                    {domain.score}/10
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{getFeedback(domain)}</p>
                
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                  <div 
                    className="h-1.5 rounded-full"
                    style={{ 
                      width: `${domain.score * 10}%`,
                      backgroundColor: domain.score < 4 ? '#d97706' : domain.score < 7 ? '#4f46e5' : '#059669'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 md:p-6">
            <h3 className="text-lg font-medium text-purple-900 mb-3">Recommended Next Steps</h3>
            
            <ul className="space-y-2">
              {domains.filter(domain => domain.score < 7).map(domain => (
                <li key={`rec-${domain.id}`} className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-gray-700">{getFeedback(domain)}</span>
                </li>
              ))}
              {domains.every(domain => domain.score >= 7) && (
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">You have strong teaching capacities. Consider mentoring others and continuing to refine your approach through advanced training.</span>
                </li>
              )}
            </ul>
          </div>
          
          <div className="mt-8">
            <div className="bg-white py-3 px-4 border border-indigo-100 rounded-lg mb-6 text-center">
              <p className="text-gray-700 font-medium">Your assessment has been completed and saved</p>
              <p className="text-fixnix-lightpurple font-bold mt-1">Reference ID: {assessmentId}</p>
              <p className="text-gray-500 text-sm mt-1">Use this ID when consulting with mentors or tracking your progress</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setShowResults(false);
                  // Scroll back to top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    if (formRef.current) {
                      formRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="w-full py-3 px-4 bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-medium rounded-md shadow transition duration-150 ease-in-out"
              >
                Retake Assessment
              </button>
              
              <button
                onClick={() => {
                  // In a real app, this would trigger printing or PDF generation
                  window.print();
                }}
                className="w-full py-3 px-4 bg-white border border-fixnix-lightpurple hover:bg-indigo-50 text-fixnix-lightpurple font-medium rounded-md shadow transition duration-150 ease-in-out flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Save Results
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          This assessment is designed as a reflective tool to support your development as a spiritual guide. For a comprehensive evaluation, combine these self-insights with feedback from mentors and peers.
        </p>
      </div>
    </div>


        {/*Contact Two Start*/}
        <section className="relative bg-fixnix-lightpurple py-24 mt-7 text-left-mobile">
        <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
        <div className="container">
          <div className="text-left mb-12">
            <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-bold  uppercase z-[1]">
            THE CONTINUOUS JOURNEY
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
              
            </span>
            
            <p className="text-[var(--fixnix-white)] mt-2">
            The journey of becoming a murshid never ends. Even the most experienced guides remain perpetual murids—continuing to refine their understanding through fana fi-sheikh (dissolution in the teacher), deepen their presence through fana fi-rasul (dissolution in the messenger), and expand their capacity to serve through fana fi-Allah (dissolution in the Divine). By integrating the wisdom of traditional silsilas with contemporary neuroscientific understanding, you develop the ability to guide others with both timeless basirah (insight) and modern relevance—creating bridges between worlds that allow others to discover their own path of integration between zahir (outer) and batin (inner) realities.
            </p>
            
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
            The greatest teaching transcends technique—it emerges from the authentic embodiment of what you've realized through dhawq (direct taste), communicated with ishara (precision), wuduh (clarity), and rahma (compassion).
            </h2>
          </div>
          
        </div>
        
    </section>
        {/*Services One End*/}
      </Layout>
    </>
  );
}
