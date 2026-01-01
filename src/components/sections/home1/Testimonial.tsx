"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

export default function Testimonial() {
  return (
    <>
      {/*Testimonial One Start*/}
      <section className="testimonial-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  OUR HAPPY CLIENTS
                </span>
                <h2 className="section-title__title">Our Customers Review</h2>
              </div>
              <Swiper
                {...swiperOptions}
                className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
              >
                {/*testimonial One Single Start*/}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-img-box">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testimonial-one__client-info-box">
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          laudantium, rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis beatae dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet,
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3>Nicolas Marko</h3>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*testimonial One Single End*/}
                {/*testimonial One Single Start*/}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-img-box">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testimonial-one__client-info-box">
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          laudantium, rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis beatae dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet,
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3>Nicolas Marko</h3>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*testimonial One Single End*/}
                {/*testimonial One Single Start*/}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-img-box">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testimonial-one__client-info-box">
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          laudantium, rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis beatae dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet,
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3>Nicolas Marko</h3>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*testimonial One Single End*/}
                {/*testimonial One Single Start*/}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-img-box">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testimonial-one__client-info-box">
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          laudantium, rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis beatae dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet,
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3>Nicolas Marko</h3>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*testimonial One Single End*/}
                {/*testimonial One Single Start*/}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-img-box">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="testimonial-one__client-info-box">
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          laudantium, rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis beatae dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet,
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3>Nicolas Marko</h3>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*testimonial One Single End*/}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial One End*/}
    </>
  );
}
