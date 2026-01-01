"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface Slide {
  subTitle: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

interface BannerProps {
  slides: Slide[];
}

export default function Banner({ slides }: BannerProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onBeforeInit={(swiper) => {
          // manually bind navigation refs before init
          // (Swiper ignores string selectors when using React)
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-fixnix-purple text-white bg-fixnix-lightpurple min-h-[400px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <p className="text-xs md:text-xl font-medium mb-2">
                    {slide.subTitle}
                  </p>
                  <h2 className="text-2xl text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    {slide.title.split("<br/>").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h2>
                  <p className="text-xs md:text-base text-white/90 mb-6">
                    {slide.text.split("<br/>").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="inline-block relative px-3 py-2 lg:px-6 lg:py-3 text-sm md:text-base font-semibold text-fixnix-lightpurple rounded-full group overflow-hidden z-10"
                  >
                    <span className="absolute inset-0 bg-white transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full z-0"></span>
                    <span className="absolute inset-0 bg-fixnix-darkpurple translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      {slide.buttonText}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Swiper Pagination Bullets */}
        <div className="swiper-pagination absolute !bottom-6 !left-1/2 -translate-x-1/2 flex space-x-2 z-20"></div>
      </Swiper>

      {/* Navigation Arrows */}
      {/* Prev Button (mobile: bottom-left; md+: center-left) */}
      <div
        ref={prevRef}
        className="
    absolute z-[100] h1p cursor-pointer
    bottom-4 left-4                    
    md:top-1/2 md:left-4 md:bottom-auto md:-translate-y-1/2  
  "
      >
        <i className="fas fa-chevron-left text-white text-xl"></i>
      </div>

      {/* Next Button (mobile: bottom-left next to prev; md+: center-right) */}
      <div
        ref={nextRef}
        className="
    absolute z-[100] h1n cursor-pointer
    bottom-4 left-16                   
    md:top-1/2 md:right-4 md:left-auto md:bottom-auto md:-translate-y-1/2 
  "
      >
        <i className="fas fa-chevron-right text-white text-xl"></i>
      </div>
    </section>
  );
}
