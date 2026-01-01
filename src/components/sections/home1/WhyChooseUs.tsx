import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <>
      {/*Why Choose One Start*/}
      <section className="why-choose-one">
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">Why Choose Us</span>
            <h2 className="section-title__title">Gadget Repair For Everyone</h2>
            <p className="section-title__text">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              {/*Why Choose One Single Start*/}
              <div className="why-choose-one__single">
                <div className="why-choose-one__icon">
                  <span className="icon-award"></span>
                </div>
                <div className="why-choose-one__content">
                  <h3 className="why-choose-one__title">
                    <Link href="services-details">Warranty Service</Link>
                  </h3>
                  <p className="why-choose-one__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore eu fugiat
                  </p>
                </div>
              </div>
              {/*Why Choose One Single Start*/}
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              {/*Why Choose One Single Start*/}
              <div className="why-choose-one__single">
                <div className="why-choose-one__icon">
                  <span className="icon-customer-service"></span>
                </div>
                <div className="why-choose-one__content">
                  <h3 className="why-choose-one__title">
                    <Link href="services-details">Customer Service</Link>
                  </h3>
                  <p className="why-choose-one__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore eu fugiat
                  </p>
                </div>
              </div>
              {/*Why Choose One Single Start*/}
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              {/*Why Choose One Single Start*/}
              <div className="why-choose-one__single">
                <div className="why-choose-one__icon">
                  <span className="icon-security"></span>
                </div>
                <div className="why-choose-one__content">
                  <h3 className="why-choose-one__title">
                    <Link href="services-details">Secured Device</Link>
                  </h3>
                  <p className="why-choose-one__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore eu fugiat
                  </p>
                </div>
              </div>
              {/*Why Choose One Single Start*/}
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              {/*Why Choose One Single Start*/}
              <div className="why-choose-one__single">
                <div className="why-choose-one__icon">
                  <span className="icon-computer-1"></span>
                </div>
                <div className="why-choose-one__content">
                  <h3 className="why-choose-one__title">
                    <Link href="services-details">No Virus Threat</Link>
                  </h3>
                  <p className="why-choose-one__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore eu fugiat
                  </p>
                </div>
              </div>
              {/*Why Choose One Single Start*/}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="why-choose-one__bottom">
                <p className="why-choose-one__bottom-text">
                  Get proper services from us{" "}
                  <Link href="about">guideline and knowledge</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Why Choose One End*/}
    </>
  );
}
