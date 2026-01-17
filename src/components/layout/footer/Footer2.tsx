import Link from "next/link";

export default function Footer2() {
  return (
    <>
      {/*Site Footer Start*/}
      <footer className="site-footer site-footer-two">
        <div
          className="site-footer-shape-1 float-bob-y-2"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-shape-1.png)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="#">
                      <img
                        src="assets/images/resources/footer-logo-2.png"
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      Connects Sufi traditions with modern science, inspiring
                      the next generation of spiritual and scientific
                      exploration.
                    </p>
                  </div>
                  <div className="footer-widget__social-box">
                    <h4 className="footer-widget__social-title">
                      Stay Connected
                    </h4>
                    <div className="site-footer__social">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Quick Links</h3>
                  </div>
                  <ul className="footer-widget__Explore-list list-unstyled">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="about">About Us</Link>
                    </li>
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="blog-v-1">Blog</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__services">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget__services-list list-unstyled">
                    <li>
                      <Link href="services-details">Smartphone Repair</Link>
                    </li>
                    <li>
                      <Link href="services-details">Laptop Repair</Link>
                    </li>
                    <li>
                      <Link href="services-details">Desktop Repair</Link>
                    </li>
                    <li>
                      <Link href="services-details">Tablet Repair</Link>
                    </li>
                    <li>
                      <Link href="services-details">Smart Watch Repair</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__subscribe">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Subscribe</h3>
                  </div>
                  <form className="footer-widget__subscribe-box">
                    <div className="footer-widget__subscribe-input-box">
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__subscribe-btn thm-btn"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                  <p className="footer-widget__subscribe-text">
                    Stay always in touch! Subscribe to our newsletter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © 2025 Copyright by{" "}
                <Link href="">Sufi Science Center</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}
