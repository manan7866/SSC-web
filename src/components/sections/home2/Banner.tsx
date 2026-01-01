"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      {/*Main Slider Start*/}
      <section className="main-slider-two clearfix">
        <Swiper
          {...swiperOptions}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer-two"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-2.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider-two__content">
                        <p className="main-slider-two__sub-title">
                          Profesional Repair
                        </p>
                        <h2 className="main-slider-two__title">
                          We Are Experts At <br /> Cell Phone Repair!
                        </h2>
                        <p className="main-slider-two__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod <br /> tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="main-slider-two__btn-box">
                          <Link
                            href="services"
                            className="thm-btn main-slider-two__btn"
                          >
                            Repair My Device
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer-two"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-1.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider-two__content">
                        <p className="main-slider-two__sub-title">
                          Profesional Repair
                        </p>
                        <h2 className="main-slider-two__title">
                          We Are Experts At <br /> Cell Phone Repair!
                        </h2>
                        <p className="main-slider-two__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod <br /> tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="main-slider-two__btn-box">
                          <Link
                            href="services"
                            className="thm-btn main-slider-two__btn"
                          >
                            Repair My Device
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer-two"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-3.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider-two__content">
                        <p className="main-slider-two__sub-title">
                          Profesional Repair
                        </p>
                        <h2 className="main-slider-two__title">
                          We Are Experts At <br /> Cell Phone Repair!
                        </h2>
                        <p className="main-slider-two__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod <br /> tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="main-slider-two__btn-box">
                          <Link
                            href="services"
                            className="thm-btn main-slider-two__btn"
                          >
                            Repair My Device
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* If we need navigation buttons */}
          <div className="main-slider-two__nav">
            <div
              className="swiper-button-prev h1p"
              id="main-slider__swiper-button-next"
            >
              <i className="icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next h1n"
              id="main-slider__swiper-button-prev"
            >
              <i className="icon-right-arrow"></i>
            </div>
          </div>
        </Swiper>
      </section>
      {/*Main Slider End*/}
    </>
  );
}
