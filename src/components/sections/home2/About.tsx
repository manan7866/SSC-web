"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*About Two Start*/}
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="about-two__left">
                <div className="about-two__main-progress-box">
                  <div className="about-two__progress-single">
                    <div className="about-two__progress-box">
                      <div
                        className="circle-progress"
                        data-options='{ "value": 0.8,"thickness": 10,"emptyFill": "#f1f1f1","lineCap": "square", "size": 110, "fill": { "color": "#cf1f1f" } }'
                      ></div>
                      {/* /.circle-progress */}
                      <div className="about-two__pack">
                        <p>85%</p>
                      </div>
                    </div>
                    <div className="about-two__progress-content">
                      <p>Repair Device</p>
                    </div>
                  </div>
                  <div className="about-two__progress-single">
                    <div className="about-two__progress-box">
                      <div
                        className="circle-progress"
                        data-options='{ "value": 0.9,"thickness": 10,"emptyFill": "#f1f1f1","lineCap": "square", "size": 110, "fill": { "color": "#cf1f1f" } }'
                      ></div>
                      {/* /.circle-progress */}
                      <div className="about-two__pack">
                        <p>95%</p>
                      </div>
                    </div>
                    <div className="about-two__progress-content">
                      <p>Replace Device</p>
                    </div>
                  </div>
                </div>
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <img src="assets/images/resources/about-2-1.jpg" alt="image" />
                  </div>
                  <div className="about-two__img-two">
                    <img src="assets/images/resources/about-2-2.jpg" alt="image" />
                    <div className="about-two__video-link">
                      <a onClick={() => setOpen(true)} className="video-popup">
                        <div className="about-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="about-two__shape-1 shapeMover">
                  <img
                    src="assets/images/shapes/about-two-shape-1.png"
                    alt="image"
                  />
                </div>
                <div className="about-two__shape-2 float-bob-y">
                  <img
                    src="assets/images/shapes/about-two-shape-2.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Quality Repair</span>
                  <h2 className="section-title__title">
                    We Can Fix It Almost As Fast As You Can Break It.
                  </h2>
                </div>
                <p className="about-two__text-1">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore
                </p>
                <ul className="list-unstyled about-two__points">
                  <li>
                    <div className="icon">
                      <span className="icon-award"></span>
                    </div>
                    <div className="text">
                      <p>WE ALWAYS PUT QUALITY FIRST</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-community"></span>
                    </div>
                    <div className="text">
                      <p>CUSTOMER SATISFACTION IS ABSOLUTE</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-warranty"></span>
                    </div>
                    <div className="text">
                      <p>FAST AND QUALITY WORK</p>
                    </div>
                  </li>
                </ul>
                <p className="about-two__text-2">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum
                  is simply free text market web bites eius mod ut labore duis
                  aute irure pari
                </p>
                <Link href="contact" className="thm-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Two  End*/}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="Get7rqXYrbQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
