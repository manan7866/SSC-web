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

export default function Service() {
  return (
    <>
      {/*Services One Start*/}
      <section className="services-one">
        <div className="services-one-shape-1 float-bob-x">
          <img src="assets/images/shapes/services-one-shape-1.png" alt="image" />
        </div>
        <div className="services-one-shape-2 float-bob-y">
          <img src="assets/images/shapes/services-one-shape-2.png" alt="image" />
        </div>
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">OUR SERVICES</span>
            <h2 className="section-title__title">Our Efficient Solution</h2>
            <p className="section-title__text">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply
            </p>
          </div>
          <div className="row">
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="services-one__single">
                <div className="services-one__img">
                  <img src="assets/images/services/services-1-1.jpg" alt="image" />
                  <div className="services-one__icon">
                    <span className="icon-laptop"></span>
                  </div>
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <Link href="services-details">Laptop Repair</Link>
                  </h3>
                  <p className="services-one__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                  <div className="services-one__btn-box">
                    <Link
                      href="services-details"
                      className="thm-btn services-one__btn"
                    >
                      Repair Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Services One Single Start*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-one__single">
                <div className="services-one__img">
                  <img src="assets/images/services/services-1-2.jpg" alt="image" />
                  <div className="services-one__icon">
                    <span className="icon-phone"></span>
                  </div>
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <Link href="services-details">Phone Repair</Link>
                  </h3>
                  <p className="services-one__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                  <div className="services-one__btn-box">
                    <Link
                      href="services-details"
                      className="thm-btn services-one__btn"
                    >
                      Repair Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Services One Single Start*/}
            {/*Services One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-one__single">
                <div className="services-one__img">
                  <img src="assets/images/services/services-1-3.jpg" alt="image" />
                  <div className="services-one__icon">
                    <span className="icon-tap"></span>
                  </div>
                </div>
                <div className="services-one__content">
                  <h3 className="services-one__title">
                    <Link href="services-details">Tablet Repair</Link>
                  </h3>
                  <p className="services-one__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                  <div className="services-one__btn-box">
                    <Link
                      href="services-details"
                      className="thm-btn services-one__btn"
                    >
                      Repair Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Services One Single Start*/}
          </div>
        </div>
      </section>
      {/*Services One End*/}
    </>
  );
}
