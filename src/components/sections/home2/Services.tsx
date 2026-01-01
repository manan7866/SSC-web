import Link from "next/link";

export default function Services() {
  return (
    <>
      {/*Services Two Start*/}
      <section className="services-two">
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">OUR SERVICES</span>
            <h2 className="section-title__title">Our Efficient Solution</h2>
            <p className="section-title__text">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply
            </p>
          </div>
          <div className="row">
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="services-two__single">
                <div className="services-two__single-inner">
                  <div className="services-two__icon">
                    <span className="icon-phone"></span>
                  </div>
                  <h3 className="services-two__title">
                    <Link href="services-details">Mobile Phone</Link>
                  </h3>
                  <p className="services-two__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                </div>
              </div>
            </div>
            {/*Services Two Single End*/}
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-two__single">
                <div className="services-two__single-inner">
                  <div className="services-two__icon services-two__icon--two">
                    <span className="icon-tap"></span>
                  </div>
                  <h3 className="services-two__title">
                    <Link href="services-details">Tablet</Link>
                  </h3>
                  <p className="services-two__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                </div>
              </div>
            </div>
            {/*Services Two Single End*/}
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-two__single">
                <div className="services-two__single-inner">
                  <div className="services-two__icon services-two__icon--three">
                    <span className="icon-laptop"></span>
                  </div>
                  <h3 className="services-two__title">
                    <Link href="services-details">Laptop</Link>
                  </h3>
                  <p className="services-two__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                </div>
              </div>
            </div>
            {/*Services Two Single End*/}
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="services-two__single">
                <div className="services-two__single-inner">
                  <div className="services-two__icon services-two__icon--three">
                    <span className="icon-computer"></span>
                  </div>
                  <h3 className="services-two__title">
                    <Link href="services-details">Computer Desktop</Link>
                  </h3>
                  <p className="services-two__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                </div>
              </div>
            </div>
            {/*Services Two Single End*/}
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="services-two__single">
                <div className="services-two__single-inner">
                  <div className="services-two__icon">
                    <span className="icon-camera"></span>
                  </div>
                  <h3 className="services-two__title">
                    <Link href="services-details">Camera</Link>
                  </h3>
                  <p className="services-two__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                </div>
              </div>
            </div>
            {/*Services Two Single End*/}
            {/*Services Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="services-two__single">
                <div className="services-two__single-inner">
                  <div className="services-two__icon services-two__icon--two">
                    <span className="icon-smartwatch"></span>
                  </div>
                  <h3 className="services-two__title">
                    <Link href="services-details">Wearable Device</Link>
                  </h3>
                  <p className="services-two__text">
                    Duis aute irure dolor in repreh enderit in volup tate velit
                    esse cillum dolore fugiat nulla dolor atur
                  </p>
                </div>
              </div>
            </div>
            {/*Services Two Single End*/}
          </div>
        </div>
      </section>
      {/*Services Two End*/}
    </>
  );
}
