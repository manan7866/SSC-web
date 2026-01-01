import Link from "next/link";

export default function Cases() {
  return (
    <>
      {/*Experience One Start*/}
      <section className="experience-one">
        <div
          className="experience-one-shape-1 shapeMover"
          style={{
            backgroundImage:
              "url(public/assets/images/shapes/experience-one-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">About Experience</span>
            <h2 className="section-title__title">
              We Have Than 20 Years Experience in Gadget
              <br />
              Smartphone & Laptop Repair Services
            </h2>
          </div>
          <div className="row">
            {/*Experience One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="experience-one__single">
                <div className="experience-one__icon">
                  <span className="icon-service"></span>
                </div>
                <div className="experience-one__content">
                  <h3 className="experience-one__title">
                    <Link href="services-details">Quality Services</Link>
                  </h3>
                  <p className="experience-one__text">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*Experience One Single End*/}
            {/*Experience One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="experience-one__single">
                <div className="experience-one__icon">
                  <span className="icon-management"></span>
                </div>
                <div className="experience-one__content">
                  <h3 className="experience-one__title">
                    <Link href="team">Professional Team</Link>
                  </h3>
                  <p className="experience-one__text">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*Experience One Single End*/}
            {/*Experience One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="experience-one__single">
                <div className="experience-one__icon">
                  <span className="icon-headphones"></span>
                </div>
                <div className="experience-one__content">
                  <h3 className="experience-one__title">
                    <Link href="contact">24 Hour Support</Link>
                  </h3>
                  <p className="experience-one__text">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*Experience One Single End*/}
          </div>
        </div>
      </section>
      {/*Experience One End*/}
    </>
  );
}
