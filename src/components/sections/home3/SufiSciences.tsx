"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link"; // ✅ Correct import

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
};

const testimonials = [
  {
    name: "Foundational Matrices",
    link: "/foundationalmatrices",
    text: "Unveil the divine scaffolding of existence, where the Pen (Qalam) etched realities into being through luminous codes of pre-eternity.",
  },
  {
    name: "Ecological Intelligence",
    link: "/ecologicalintelligence",
    text: "Witness nature as the Breath of the Compassionate, where every leaf, stream, and stone mirrors divine balance (mīzān) and remembrance.",
  },
  {
    name: "Consciousness Geometries",
    link: "/consciousnessgeometries",
    text: "Trace the soul’s ascent through sacred forms—latā’if, circles, and stars—mapping the inner heavens of experiential gnosis (ma‘rifah).",
  },
  {
    name: "Perceptual Gateways",
    link: "/perceptualgateways",
    text: "Open the subtle senses (bāṭin) beyond physical sight—where intuition becomes vision (basīrah) and silence speaks through unveiling (kashf).",
  },
  {
    name: "Reality Frameworks",
    link: "/realityframeworks",
    text: "Journey through the layered worlds (‘ālam al-mithāl, al-malakūt, al-jabarūt)—where quantum multiplicity reflects divine oneness (tawḥīd).",
  },
  {
    name: "Cosmic Harmonics",
    link: "/cosmicharmonics",
    text: "Enter the symphony of divine breath—where dhikr aligns soul to the harmonic architecture of the Names (Asmā’ al-Ḥusnā).",
  },
  {
    name: "Energetic Architectures",
    link: "/energeticarchitectures",
    text: "Know your being as a luminous circuitry—where spiritual centers (latā’if) channel divine light (nūr) through remembrance and stillness.",
  },
  {
    name: "Character Alchemy",
    link: "/characteralchemy",
    text: "Refine the nafs through inner jihad—transmuting rusted traits into polished mirrors of divine attributes via Sufi disciplines and adab.",
  },
  {
    name: "Unity Sciences",
    link: "/unitysciences",
    text: "Witness the hidden One in every form—where multiplicity collapses into the Face of the Friend (Wajh Allāh), eternally present.",
  },
  {
    name: "Healing Mysteries",
    link: "/healingmysteries",
    text: "Let divine names descend like medicine—where sacred sound, breath, and presence become elixirs for hearts wounded by distance.",
  },
  {
    name: "Wisdom Transmission",
    link: "/wisdomtransmission",
    text: "Receive the unseen (ghaib) through chains of light—where the master’s gaze, silence, or a single breath transfers oceans.",
  },
  {
    name: "Sacred Artistry",
      link: "/sacredartistry",
    text: "Create with reverence—where form is veil and unveiling, and every curve is a reflection of al-Jamīl, the Beautiful.",
  },
  {
    name: "Advanced Technologies",
    link: "/advancedtechnologies",
    text: "Navigate modern tools as instruments of the Real—where AI, neurotech, and digital networks become means of divine witnessing (shuhūd).",
  },
];


const truncateWords = (text: string, wordLimit = 28) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

export default function Testimonial() {
  return (
    <section className="testimonal-two py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="sm:text-left lg:text-center  mb-10">
          <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            SUFI SCIENCE EXPLORER
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
          <h2 className="text-3xl md:text-4xl  font-bold mt-2">
            Decoding the Divine Design : One Veil at a Time.
          </h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
            Journey Beyond the Seen: Where Science Meets Sainthood.
          </p>
        </div>

        <Swiper {...swiperOptions} className="w-full">
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-5 rounded-xl shadow-md h-[320px] flex flex-col justify-between hover:bg-fixnix-lightpurple hover:text-white transition-all duration-300">
                <div>
                  <p className="text-gray-700 group-hover:text-white text-sm leading-relaxed">
                    {truncateWords(item.text)}
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-fixnix-lightpurple mr-4 flex-shrink-0 transition-all duration-300"></div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-base">{item.name}</h4>
                    <Link
                      href={item.link}
                      className="text-sm text-fixnix-lightpurple hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-6 text-center"></div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="srp cursor-pointer px-3 py-2 bg-fixnix-lightpurple text-white rounded hover:bg-fixnix-darkpurple ">
            Prev
          </div>
          <div className="srn cursor-pointer px-3 py-2 bg-fixnix-lightpurple text-white rounded hover:bg-fixnix-darkpurple ">
            Next
          </div>
        </div>
      </div>
    </section>
  );
}
