"use client";
import CounterUp from "../../components/elements/CounterUp";
import Layout from "../../components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Skill from "@/components/sections/home2/Skill";
import Banner from "@/components/sections/home3/Banner";
const CollaborationSlides = [
  {
    subTitle: "Together, We Build a Legacy",
    title: " Partner with Us for<br/> Meaningful Impact",
    text: "Join hands with us to promote Kashmiri Sufi traditions, foster education,<br/> and create lasting spiritual and cultural initiatives.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Unite, Innovate, Inspire, Grow, Transform",
    title: " Strengthening Bonds Through<br/> Shared Vision",
    text: " We welcome organizations, scholars, and institutions to collaborate in preserving Sufi<br/> wisdom, research, and global spiritual education.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Collective Efforts, Lasting Change ",
    title: "Let’s Work Together<br/> for a Purpose",
    text: " Partner with us in research, events, and cultural initiatives to promote Sufi<br/> spirituality, ethical living, and conscious learning.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Wisdom Grows When We Collaborate",
    title: "Join a Network of <br/>Inspired Thinkers",
    text: " Connect with scholars, artists, and spiritual leaders to expand the<br/> reach of Sufi science, philosophy, and ethical teachings.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Bridging Spirituality, Knowledge, and Action",
    title: "Partner with Us<br/> for Greater Good",
    text: "Explore collaboration opportunities in education, research, and cultural programs that <br/>support the growth of Kashmiri Sufi traditions worldwide.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: number) => {
    // Type the key parameter as a number
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: isActive.key, // Include the key when updating the state
      });
    } else {
      setIsActive({
        status: true,
        key, // Make sure to pass the key value when updating
      });
    }
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner slides={CollaborationSlides}/>
        {/*Services Two Start*/}
        
          <section className="relative py-20 bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                      Collaborations
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
                      Unity in the Divine Craft
                    </h2>
                  </div>
                  <p className="text-gray-700 mt-4">
                    At the Sufi Science Center – Kashmir Chapter, we believe in
                    the transformative power of unity, where the heart beats as
                    one, and the soul resonates in harmony. Our path is
                    illuminated by the divine light of collaboration, for it is
                    through collective effort that we elevate the sacred arts,
                    preserve ancient wisdom, and empower the community.
                  </p>
                  <p className="text-gray-700 mt-2">
                    We invite partners, organizations, and individuals who share
                    our vision to join us in a sacred journey of spiritual
                    awakening, artistic preservation, and cultural enrichment.
                    Collaboration, in the truest sense, is an offering to the
                    Divine, a shared commitment to fostering knowledge, beauty,
                    and peace across the world.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[425px] h-[500px]  bg-fixnix-lightpurple">
                 

                    <Image
                      src="/assets/images/resources/Collaboration.png"
                      alt="Repair Services"
                      width={425}  // Adjust width as per design requirements
                      height={500} // Adjust height as per design requirements
                      className="mix-blend-multiply"
                    />

                    
                  </div>
                </div>
              </div>
            </div>

            {/* Counter Section */}
  </section>
                <section className="container py-16">
        <div className="text-left mb-12">
        <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
        Our Collaborative Endeavours
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
          <h2 className="text-3xl font-bold mt-4">
            Empower, Preserve, Transform.
          </h2>
          <p className="mt-4 text-left">
            We collaborate to empower artisans, preserve cultural heritage, foster educational partnerships, <br />
            and promote spiritual growth and community well-being in Kashmir.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Service 1 */}
                    <div className="wow fadeInUp" data-wow-delay="100ms">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-fixnix-lightpurple p-4 rounded-full mb-4 transition-transform transform hover:scale-110">
                  <span className="icon-phone text-white text-2xl"></span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Artisan Empowerment</h3>
                <p className="text-left text-gray-700">
                  We collaborate with artisans, spiritual mentors, and craftspeople to preserve Kashmir’s traditions. Each woven thread and carved detail reflects devotion and timeless wisdom. Together, we sustain heritage through craftsmanship infused with spiritual significance.
                </p>
              </div>
            </div>
          </div>


                    {/* Service 2 */}
              {/* Service 2 */}
          <div className="wow fadeInUp" data-wow-delay="200ms">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-fixnix-lightpurple p-4 rounded-full mb-4 transition-transform transform hover:scale-110">
                  <span className="icon-tap text-white text-2xl"></span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Educational Partnerships</h3>
                <p className="text-left text-gray-700">
                  The Center partners with universities, spiritual institutions, and scholars worldwide. We offer transformative learning rooted in Sufi wisdom, Kashmiri mysticism, and sacred traditions. Through teachings and exchanges, we deepen understanding of spiritual principles.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="wow fadeInUp" data-wow-delay="300ms">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-fixnix-lightpurple p-4 rounded-full mb-4 transition-transform transform hover:scale-110">
                  <span className="icon-laptop text-white text-2xl"></span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Cultural Preservation</h3>
                <p className="text-left text-gray-700">
                  We work with museums, cultural organizations, and heritage foundations to protect Kashmir’s sacred arts. From Pashmina weaving to spiritual calligraphy, we ensure their legacy endures. Our collaborations safeguard these treasures for future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="wow fadeInUp" data-wow-delay="400ms">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-fixnix-lightpurple p-4 rounded-full mb-4 transition-transform transform hover:scale-110">
                  <span className="icon-computer text-white text-2xl"></span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Spiritual Retreats</h3>
                <p className="text-left text-gray-700">
                  We create transformative spaces with Sufi orders, retreats, and healing sanctuaries. Through meditation, devotion, and divine love, seekers connect with spirituality. These gatherings offer sacred environments for reflection and collective enlightenment.
                </p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="wow fadeInUp" data-wow-delay="500ms">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-fixnix-lightpurple p-4 rounded-full mb-4 transition-transform transform hover:scale-110">
                  <span className="icon-camera text-white text-2xl"></span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Social Initiatives</h3>
                <p className="text-left text-gray-700">
                  We engage in ethical commerce, environmental sustainability, and humanitarian outreach in Kashmir. Our initiatives address social challenges while preserving cultural values. By fostering dialogue, we build bridges of mutual respect and understanding.
                </p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="wow fadeInUp" data-wow-delay="600ms">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-fixnix-lightpurple p-4 rounded-full mb-4 transition-transform transform hover:scale-110">
                  <span className="icon-smartwatch text-white text-2xl"></span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Community Empowerment</h3>
                <p className="text-left text-gray-700">
                  We support sustainable development and spiritual enrichment for Kashmiri communities. By reviving ancestral knowledge and fostering resilience, we empower families. Our holistic approach integrates economic stability with spiritual well-being.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


        {/*Services Two End*/}

        {/*Newsletter One Start*/}
        <section className="relative bg-[var(--fixnix-lightpuple)] py-24 text-left-mobile">
          <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
          <div className="container">
            <div className="text-left mb-12">
              <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
                For partnership inquiries
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
                
              </span>
              <h2 className="text-[var(--fixnix-white)] text-3xl mt-2 font-bold">
                Please reach out to us
              </h2>
              <p className="text-[var(--fixnix-white)] mt-2">
                Whether you are an artisan, educator, spiritual guide, or a
                partner in social change, we welcome you to unite with us, to
                share the love of the Divine, and to contribute to a future
                where the spiritual sciences of Kashmir flourish, where sacred
                traditions are honored, and where the soul’s quest for truth is
                illuminated.
                <br />
                May this collaboration be blessed with divine grace, and may it
                illuminate the hearts of all those who participate.
              </p>
            </div>
            <div className="flex flex-wrap justify-left gap-8">
              {[
                {
                  icon: "fa-envelope",
                  title: "Send us an email",
                  text: "info@sufisciencecenter.info",
                  link: "mailto:contact@gmail.com",
                },
                {
                  icon: "fa-phone",
                  title: "Give us a call",
                  text: "+1 916 699 0091",
                  link: "tel:0124357689",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center bg-white rounded-lg p-3 max-w-[325px] w-full transition-all"
                >
                  <div className="flex items-center justify-center h-[55px] w-[55px] rounded-full bg-[var(--fixnix-lightpuple)] transition-all duration-500 hover:bg-[var(--fixnix-darkpurple)]">
                    <span
                      className={`fa ${item.icon} text-white text-2xl transform transition-all duration-500 scale-100 hover:scale-90`}
                    ></span>
                  </div>
                  <div className="ml-4">
                    <span className="block text-[20px] text-[var(--fixnix-darkpurple)] font-bold leading-6 mb-2">
                      {item.title}
                    </span>
                    <p className="text-[18px] leading-[18px]">
                      <a
                        href={item.link}
                        className="text-[var(--fixnix-gray)] transition-all duration-500 hover:text-[var(--fixnix-lightpuple)]"
                      >
                        {item.text}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className=" text-left-mobile relative block py-[120px] pb-[90px] bg-fixnix-primary z-10">
        <div className="absolute top-[10px] left-0 services-one-shape-1">
            <Image 
              src="/assets/images/shapes/services-one-shape-1.png" 
              alt="Shape 1" 
              width={500} 
              height={500} 
            />
          </div>
          <div className="absolute top-[65px] right-0 services-one-shape-2">
            <Image 
              src="/assets/images/shapes/services-one-shape-2.png" 
              alt="Shape 2" 
              width={500} 
              height={500} 
            />
          </div>
          <div className="container">
            <div className=" text-center mb-[49px]">
              <span className=" text-fixnix-lightpurple uppercase font-semibold text-[16px] leading-[16px] relative inline-block">
                Why Collaborate with Us?
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className=" text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold mt-[14px]">
                Divine flow of collaboration connects us all
              </h2>
              <p className="text-gray-700 pt-[20px]">
                Together, in unity and in love, we create a divine journey—a
                journey that transcends borders, a journey of spiritual
                awakening, healing, and collective growth. <br />
                We aim to offer rich, transformative learning experiences rooted
                in Sufi science, Kashmiri mysticism, and sacred knowledge.
              </p>
            </div>

            <div className="row flex flex-wrap">
              {/* Service 1 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className=" relative block bg-fixnix-lightpurple shadow-light-purple mb-[30px] z-[2] transition-transform duration-500 hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                
                  <div className=" p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] text-white transition-all duration-500  font-semibold leading-[34px]">
                      A Sacred Purpose
                    </h3>
                    <p className=" mt-[15px] mb-[22px] text-white">
                      Every partnership with the Sufi Science Center is rooted
                      in a higher calling—a shared dedication to advancing the
                      timeless wisdom of Sufi science, to preserving the art and
                      culture of Kashmir, and to cultivating peace, love, and
                      understanding in the world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="relative block bg-fixnix-lightpurple shadow-light-purple mb-[30px] z-[2] transition-transform duration-500 hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                 
                  <div className=" p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] text-white transition-all duration-500 font-semibold leading-[34px]">
                      Platform for Transformation
                    </h3>
                    <p className=" mt-[15px] mb-[22px] text-white">
                      Our collaborations offer a space for deep, meaningful
                      impact. By working together, we amplify each other’s
                      efforts, creating a ripple of transformation that reaches
                      far beyond our individual endeavors. Collaboration
                      connects us all, weaving threads of unity and purpose.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="relative block bg-fixnix-lightpurple shadow-light-purple mb-[30px] z-[2] transition-transform duration-500 hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                 
                  <div className="p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] text-white transition-all duration-500  font-semibold leading-[34px]">
                      Legacy of Enlightenment
                    </h3>
                    <p className="text-white mt-[15px] mb-[22px]">
                      Through our collective efforts, we build a lasting legacy
                      of spiritual enlightenment, cultural preservation, and
                      artistic excellence. Each collaboration strengthens the
                      foundation of wisdom, compassion, and harmony.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Why Choose One End*/}

        {/*Collaborator Application Start*/}
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-fixnix-lightpurple">
                Join the Sufi Science Center as Collaborator
              </h1>
              <p className="text-gray-600 text-sm">
                A soulful movement rooted in spirituality, wisdom, and community
                healing.
              </p>
            </div>

            <form id="collaboratorForm" className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Country *
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              {/* Collaborator Intent */}
              <div className="space-y-4 text-gray-700 border-t pt-6">
                <h3 className="text-lg font-semibold">Collaborator Intent</h3>
                {[
                  "institutional",
                  "cultural",
                  "interfaithDialogue",
                  "programCorrelation",
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input type="checkbox" value={type} className="w-4 h-4" />
                    <span className="capitalize">{type.replace(/([A-Z])/g, " $1")}</span>
                  </label>
                ))}
                <input
                  type="text"
                  placeholder="Organization (if applicable)"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  placeholder="What do you hope to co-create?"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Anything else you'd like to share?
                </label>
                <textarea
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                  rows={4}
                ></textarea>
              </div>

              {/* Consent */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4" required />
                  <span>I agree to the principles of the Sufi Science Center</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>I consent to receiving updates</span>
                </label>
              </div>

              {/* Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-semibold rounded-xl transition"
                >
                  Apply as Collaborator
                </button>
              </div>
            </form>
          </div>
        </section>

        {/*Collaborator Application End*/}

      </Layout>
    </>
  );
}
