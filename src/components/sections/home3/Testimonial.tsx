"use client";
import { useState, useEffect } from "react";
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
      <section className="relative block py-32 pb-48">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium mb-2">TESTIMONIAL</span>
            <h2 className="text-3xl font-bold mb-4">Our Customers Review</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply{" "}
            </p>
          </div>
          <Swiper
            {...swiperOptions}
            className="relative overflow-visible"
          >
            <SwiperSlide>
              {/*Testimonial two Single Start*/}
              <div className="item">
                <div className="relative block bg-white shadow-lg rounded-lg z-10">
                  <div className="relative block overflow-hidden p-9 rounded-lg z-10 group hover:before:scale-y-100 hover:before:opacity-100">
                    {/* The hover effect will need a little custom CSS or use Tailwind's group-hover */}
                    <div className="relative block">
                      <span className="text-4xl text-purple-400 group-hover:text-white transition-colors duration-500 icon-quote"></span>
                    </div>
                    <p className="text-lg font-semibold text-purple-900 pt-5 pb-8 group-hover:text-white transition-colors duration-500">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="flex items-center">
                      <div className="w-[75px]">
                        <img
                          src="assets/images/testimonial/testimonial-2-1.jpg"
                          alt="image"
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-2xl font-semibold text-purple-400 leading-7 mb-1.5 group-hover:text-white transition-colors duration-500">
                          Nicolas Marko
                        </h3>
                        <p className="text-lg leading-5 group-hover:text-white transition-colors duration-500">
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
                <div className="relative block bg-white shadow-lg rounded-lg z-10">
                  <div className="relative block overflow-hidden p-9 rounded-lg z-10 group hover:before:scale-y-100 hover:before:opacity-100">
                    <div className="relative block">
                      <span className="text-4xl text-purple-400 group-hover:text-white transition-colors duration-500 icon-quote"></span>
                    </div>
                    <p className="text-lg font-semibold text-purple-900 pt-5 pb-8 group-hover:text-white transition-colors duration-500">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="flex items-center">
                      <div className="w-[75px]">
                        <img
                          src="assets/images/testimonial/testimonial-2-2.jpg"
                          alt="image"
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-2xl font-semibold text-purple-400 leading-7 mb-1.5 group-hover:text-white transition-colors duration-500">
                          Jessica Smith
                        </h3>
                        <p className="text-lg leading-5 group-hover:text-white transition-colors duration-500">
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
                <div className="relative block bg-white shadow-lg rounded-lg z-10">
                  <div className="relative block overflow-hidden p-9 rounded-lg z-10 group hover:before:scale-y-100 hover:before:opacity-100">
                    <div className="relative block">
                      <span className="text-4xl text-purple-400 group-hover:text-white transition-colors duration-500 icon-quote"></span>
                    </div>
                    <p className="text-lg font-semibold text-purple-900 pt-5 pb-8 group-hover:text-white transition-colors duration-500">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="flex items-center">
                      <div className="w-[75px]">
                        <img
                          src="assets/images/testimonial/testimonial-2-1.jpg"
                          alt="image"
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-2xl font-semibold text-purple-400 leading-7 mb-1.5 group-hover:text-white transition-colors duration-500">
                          Nicolas Marko
                        </h3>
                        <p className="text-lg leading-5 group-hover:text-white transition-colors duration-500">
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
                <div className="relative block bg-white shadow-lg rounded-lg z-10">
                  <div className="relative block overflow-hidden p-9 rounded-lg z-10 group hover:before:scale-y-100 hover:before:opacity-100">
                    <div className="relative block">
                      <span className="text-4xl text-purple-400 group-hover:text-white transition-colors duration-500 icon-quote"></span>
                    </div>
                    <p className="text-lg font-semibold text-purple-900 pt-5 pb-8 group-hover:text-white transition-colors duration-500">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="flex items-center">
                      <div className="w-[75px]">
                        <img
                          src="assets/images/testimonial/testimonial-2-2.jpg"
                          alt="image"
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-2xl font-semibold text-purple-400 leading-7 mb-1.5 group-hover:text-white transition-colors duration-500">
                          Jessica Smith
                        </h3>
                        <p className="text-lg leading-5 group-hover:text-white transition-colors duration-500">
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
                <div className="relative block bg-white shadow-lg rounded-lg z-10">
                  <div className="relative block overflow-hidden p-9 rounded-lg z-10 group hover:before:scale-y-100 hover:before:opacity-100">
                    <div className="relative block">
                      <span className="text-4xl text-purple-400 group-hover:text-white transition-colors duration-500 icon-quote"></span>
                    </div>
                    <p className="text-lg font-semibold text-purple-900 pt-5 pb-8 group-hover:text-white transition-colors duration-500">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="flex items-center">
                      <div className="w-[75px]">
                        <img
                          src="assets/images/testimonial/testimonial-2-1.jpg"
                          alt="image"
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-2xl font-semibold text-purple-400 leading-7 mb-1.5 group-hover:text-white transition-colors duration-500">
                          Nicolas Marko
                        </h3>
                        <p className="text-lg leading-5 group-hover:text-white transition-colors duration-500">
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
                <div className="relative block bg-white shadow-lg rounded-lg z-10">
                  <div className="relative block overflow-hidden p-9 rounded-lg z-10 group hover:before:scale-y-100 hover:before:opacity-100">
                    <div className="relative block">
                      <span className="text-4xl text-purple-400 group-hover:text-white transition-colors duration-500 icon-quote"></span>
                    </div>
                    <p className="text-lg font-semibold text-purple-900 pt-5 pb-8 group-hover:text-white transition-colors duration-500">
                      Sed ut perspiciatis unde omnis iste natus rem eaque ipsan
                      quae ab illo inventore veritatis dolores eos qui
                      voluptatem sequi nesciunt.
                    </p>
                    <div className="flex items-center">
                      <div className="w-[75px]">
                        <img
                          src="assets/images/testimonial/testimonial-2-2.jpg"
                          alt="image"
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-2xl font-semibold text-purple-400 leading-7 mb-1.5 group-hover:text-white transition-colors duration-500">
                          Jessica Smith
                        </h3>
                        <p className="text-lg leading-5 group-hover:text-white transition-colors duration-500">
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