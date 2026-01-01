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

export default function Testimonial() {
  return (
    <>
      {/*Testimonial two Start*/}
      <section className="testimonal-two">
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">TESTIMONIAL</span>
            <h2 className="section-title__title">Our Customers Review</h2>
            <p className=" section-title__text">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply{" "}
            </p>
          </div>
          <Swiper
            {...swiperOptions}
            className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
          >
            {/*Testimonial two Single Start*/}
            <SwiperSlide>
              <div className="item">
                <div className="testimonial-two__sinlge">
                  <div className="testimonial-two__sinlge-inner">
                    <div className="testimonial-two__quote">
                      <span className="icon-quote"></span>
                    </div>
                    <p className="testimonial-two__text">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="testimonial-two__info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-1.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="testimonial-two__content">
                        <h3 className="testimonial-two__client-name">
                          Nicolas Marko
                        </h3>
                        <p className="testimonial-two__client-title">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonial two Single End*/}
            {/*Testimonial two Single Start*/}
            <SwiperSlide>
              <div className="item">
                <div className="testimonial-two__sinlge">
                  <div className="testimonial-two__sinlge-inner">
                    <div className="testimonial-two__quote">
                      <span className="icon-quote"></span>
                    </div>
                    <p className="testimonial-two__text">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="testimonial-two__info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-2.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="testimonial-two__content">
                        <h3 className="testimonial-two__client-name">
                          Jessica Smith
                        </h3>
                        <p className="testimonial-two__client-title">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonial two Single End*/}
            {/*Testimonial two Single Start*/}
            <SwiperSlide>
              <div className="item">
                <div className="testimonial-two__sinlge">
                  <div className="testimonial-two__sinlge-inner">
                    <div className="testimonial-two__quote">
                      <span className="icon-quote"></span>
                    </div>
                    <p className="testimonial-two__text">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="testimonial-two__info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-1.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="testimonial-two__content">
                        <h3 className="testimonial-two__client-name">
                          Nicolas Marko
                        </h3>
                        <p className="testimonial-two__client-title">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonial two Single End*/}
            {/*Testimonial two Single Start*/}
            <SwiperSlide>
              <div className="item">
                <div className="testimonial-two__sinlge">
                  <div className="testimonial-two__sinlge-inner">
                    <div className="testimonial-two__quote">
                      <span className="icon-quote"></span>
                    </div>
                    <p className="testimonial-two__text">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="testimonial-two__info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-2.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="testimonial-two__content">
                        <h3 className="testimonial-two__client-name">
                          Jessica Smith
                        </h3>
                        <p className="testimonial-two__client-title">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonial two Single End*/}
            {/*Testimonial two Single Start*/}
            <SwiperSlide>
              <div className="item">
                <div className="testimonial-two__sinlge">
                  <div className="testimonial-two__sinlge-inner">
                    <div className="testimonial-two__quote">
                      <span className="icon-quote"></span>
                    </div>
                    <p className="testimonial-two__text">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="testimonial-two__info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-1.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="testimonial-two__content">
                        <h3 className="testimonial-two__client-name">
                          Nicolas Marko
                        </h3>
                        <p className="testimonial-two__client-title">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonial two Single End*/}
            {/*Testimonial two Single Start*/}
            <SwiperSlide>
              <div className="item">
                <div className="testimonial-two__sinlge">
                  <div className="testimonial-two__sinlge-inner">
                    <div className="testimonial-two__quote">
                      <span className="icon-quote"></span>
                    </div>
                    <p className="testimonial-two__text">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="testimonial-two__info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-2.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="testimonial-two__content">
                        <h3 className="testimonial-two__client-name">
                          Jessica Smith
                        </h3>
                        <p className="testimonial-two__client-title">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonial two Single End*/}
          </Swiper>
        </div>
      </section>
      {/*Testimonial two End*/}
    </>
  );
}
