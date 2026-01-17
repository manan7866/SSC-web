"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
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

export default function Brand() {
  return (
    <>
      {/*Brand Two Start*/}
      <section className="brand-one">
        <div className="container">
          <div className="brand-one__inner">
            <Swiper
              {...swiperOptions}
              className="thm-swiper__slider swiper-container"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-1.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-2.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-3.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-4.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-5.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-1.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-2.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-3.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-4.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src="assets/images/brand/brand-1-5.png" alt="image" />
                  </div>
                  {/* /.swiper-slide */}
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      {/*Brand Two End*/}
    </>
  );
}
