import Link from "next/link";

export default function About() {
  return (
    <>
      {/*About One Start*/}
      <section className="about-one">
        <div
          className="about-one__bg float-bob-y"
          style={{
            backgroundImage:
              "url(public/assets/images/backgrounds/about-one-bg-img-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src="assets/images/resources/about-1-1.jpg" alt="image" />
                  <div className="about-one__our-goal">
                    <p className="about-one__our-goal-sub-title">Our goal:</p>
                    <h3 className="about-one__our-goal-title">
                      "We will fix it, till we make it"
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    OUR INTRODUCTION
                  </span>
                  <h2 className="section-title__title">
                    Welcome To Smartphone & Laptop Repair Service Center
                  </h2>
                </div>
                <p className="about-one__right-text-1">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum
                  is simply free text market web bites eius mod ut labore duis
                  aute irure pari
                </p>
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                          <Link href="Services">Repair Device</Link>
                        </h3>
                        <p className="about-one__points-subtitle">
                          Lorem ipsum dolor sit amet at labore consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                          <Link href="Services">Replace Device</Link>
                        </h3>
                        <p className="about-one__points-subtitle">
                          Lorem ipsum dolor sit amet at labore consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <Link href="Contact" className="thm-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </>
  );
}
