"use client";
import CounterUp from "../../../components/elements/CounterUp";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function Skill() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Two Section Start */}
      <section className="two-section">
        {/* Background Image */}
        <div
          className="two-section-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/two-section-bg.jpg)",
          }}
          aria-label="Section background"
        ></div>

        {/* Skill Two Section */}
        <div className="skill-two">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-xl-6 col-lg-6">
                <div className="skill-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Our Skills & Expertise
                    </span>
                    <h2 className="section-title__title">
                      We Specialize In Quick &<br />
                      Professional Repairs
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

                  {/* Progress Bars */}
                  <div className="skill-one__progress">
                    {[
                      { title: "Diagnostics", percentage: 84 },
                      { title: "Replacement", percentage: 95 },
                      { title: "Device Repair", percentage: 86 },
                    ].map((skill, index) => (
                      <div className="skill-one__progress-single" key={index}>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent={`${skill.percentage}%`}
                            style={{ width: `${skill.percentage}%` }}
                          >
                            <div className="count-text">{`${skill.percentage}%`}</div>
                            <h4 className="skill-one__progress-title">
                              {skill.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-xl-6 col-lg-6">
                <div className="skill-one__right">
                  <div className="skill-one__right-img-box">
                    <div className="skill-one__right-img">
                      <img
                        src="assets/images/resources/skill-1-1.jpg"
                        alt="Professional gadget and smartphone repair"
                      />
                      <div className="skill-one__video-link">
                        <button
                          onClick={() => setOpen(true)}
                          className="video-popup"
                          aria-label="Play video about our services"
                        >
                          <div className="skill-one__video-icon">
                            <span className="fa fa-play"></span>
                            <i className="ripple"></i>
                          </div>
                        </button>
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
        </div>

        {/* Counter Section */}
        <div className="counter-two">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <ul className="counter-two__list list-unstyled">
                  {[
                    { end: 20, suffix: "+", text: "Glorious Years" },
                    { end: 2, suffix: "k+", text: "Happy Customers" },
                    { end: 5, suffix: "k+", text: "Service Completed" },
                    { end: 99, suffix: "%", text: "Satisfaction" },
                  ].map((counter, index) => (
                    <li className="counter-two__single" key={index}>
                      <CounterUp end={counter.end} />
                      <span className="counter-two__plus">
                        {counter.suffix}
                      </span>
                      <p className="counter-two__text">{counter.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Video */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="Get7rqXYrbQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
