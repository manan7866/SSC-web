import Layout from "../../components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact Us">
        {/*Contact Page Start*/}
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left">
                  <div className="contact-page__shape-1">
                    <img
                      src="assets/images/shapes/contact-page-shape-1.png"
                      alt="image"
                    />
                  </div>
                  <h3 className="contact-page__title">Leave a message</h3>
                  <form
                    action="assets/inc/sendemail.php"
                    className="contact-page__form contact-form-validated"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="contact-page__form-input-box">
                          <input type="text" placeholder="Name" name="name" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__form-input-box">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__form-input-box">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__form-input-box">
                          <input
                            type="text"
                            placeholder="Phone"
                            name="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-page__form-input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Comment"
                          ></textarea>
                        </div>
                        <div className="contact-page__btn-box">
                          <Link
                            href="about"
                            className="thm-btn contact-page__btn"
                          >
                            Send Message
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">GET IN TOUCH</span>
                    <h2 className="section-title__title">
                      Visit one of our agency
                      <br /> contact us today
                    </h2>
                  </div>
                  <p className="contact-page__right-text">
                    Duis aute irure dolor in repreh enderit in volup tate cillum
                    dolore eu fugiat nulla dolor atur with Lorem ipsum is simply
                    free market web bites eius mod ut labore duis
                  </p>
                  <div className="contact-page__points-box-inner">
                    <div className="contact-page__points-box">
                      <h3 className="contact-page__points-title">New York</h3>
                      <ul className="contact-page__points-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-send"></span>
                          </div>
                          <div className="text">
                            <p>71890 Champlin Neck</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-mail"></span>
                          </div>
                          <div className="text">
                            <p>
                              <Link href="mailto:support@domain.com">
                                support@domain.com
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            <p>
                              <Link href="tel:62813221467">
                                (+62) 81 322 1467
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>09:00 AM - 22:00 PM</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="contact-page__points-box">
                      <h3 className="contact-page__points-title">Texas</h3>
                      <ul className="contact-page__points-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-send"></span>
                          </div>
                          <div className="text">
                            <p>71890 Champlin Neck</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-mail"></span>
                          </div>
                          <div className="text">
                            <p>
                              <Link href="mailto:support@domain.com">
                                support@domain.com
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            <p>
                              <Link href="tel:62813221467">
                                (+62) 81 322 1467
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>09:00 AM - 22:00 PM</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Page End*/}

        {/*Google Map Start*/}
        <section className="google-map">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
              className="google-map__one"
            ></iframe>
          </div>
        </section>
        {/*Google Map End*/}
      </Layout>
    </>
  );
}
