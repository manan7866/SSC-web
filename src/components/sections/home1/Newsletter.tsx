"use client";
import Link from "next/link";
import { useState } from "react";

export default function Newsletter() {
  return (
    <>
      {/*Newsletter One Start*/}
      <section className="newsletter-one">
        <div
          className="newsletter-one-bg jarallax"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/newsletter-one-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">Contact Us</span>
            <h2 className="section-title__title">Let Us Know Or Call Us At</h2>
            <p className=" section-title__text">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply{" "}
            </p>
          </div>
          <form className="newsletter-one__form">
            <div className="newsletter-one__input-box">
              <input type="email" placeholder="Your Email" name="email" />
              <button type="submit" className="thm-btn newsletter-one__btn">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </section>
      {/*Newsletter One End*/}
    </>
  );
}
