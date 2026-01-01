"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function Skill() {
  const [isOpen, setOpen] = useState(false);
  function handleClose(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      {/*Skill One Start*/}
      <section className="skill-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="skill-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    Our Skills & Expertise
                  </span>
                  <h2 className="section-title__title">
                    We Specialize In Quick &
                    <br /> Professional Repairs
                  </h2>
                </div>
                <p className="skill-one__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  words which don't look even slightly believable.
                </p>
                <p className="skill-one__text-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  words which don't look even slightly believable.
                </p>
                <div className="skill-one__progress">
                  <div className="skill-one__progress-single">
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="84%"
                        style={{ width: "84%" }}
                      >
                        <div className="count-text">84%</div>
                        <h4 className="skill-one__progress-title">
                          Diagnostics
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="skill-one__progress-single">
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="95%"
                        style={{ width: "95%" }}
                      >
                        <div className="count-text">95%</div>
                        <h4 className="skill-one__progress-title">
                          Replacment
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="skill-one__progress-single">
                    <div className="bar marb-0">
                      <div
                        className="bar-inner count-bar"
                        data-percent="86%"
                        style={{ width: "86%" }}
                      >
                        <div className="count-text">86%</div>
                        <h4 className="skill-one__progress-title">
                          Device Repair
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="skill-one__right">
                <div
                  className="skill-one__right-img-box wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="skill-one__right-img">
                    <img src="assets/images/resources/skill-1-1.jpg" alt="image" />
                    <div className="skill-one__video-link">
                      <a onClick={() => setOpen(true)} className="video-popup">
                        <div className="skill-one__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="skill-one__video-content">
                    <p>Improve gadget smartphone laptop repair services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Skill One End*/}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        onClose={handleClose}
        videoId="dQw4w9WgXcQ" // Add the video ID here
      />
    </>
  );
}
