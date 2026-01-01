"use client";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  return (
    <>
      {/*Contact Two Start*/}
      <section className="contact-two">
        <div
          className="contact-two-bg jarallax"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/contact-two-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="contact-two__inner">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">Contact Us</span>
              <h2 className="section-title__title">
                Get support for your problem
              </h2>
              <p className=" section-title__text">
                Duis aute irure dolor in repreh enderit in volup tate velit esse
                cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
                is simply{" "}
              </p>
            </div>
            <div className="contact-two__details-box">
              <ul className="list-unstyled contact-two__details">
                <li>
                  <div className="icon">
                    <span className="fa fa-envelope"></span>
                  </div>
                  <div className="content">
                    <span>Send us an email</span>
                    <p>
                      <Link href="mailto:contact@gmail.com">
                        contact@gmail.com
                      </Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="content">
                    <span>Give us a call</span>
                    <p>
                      <Link href="tel:0124357689">+012 (435) 7689</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Two  End*/}
    </>
  );
}
