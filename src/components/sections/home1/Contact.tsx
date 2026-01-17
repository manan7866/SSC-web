export default function Contact() {
  return (
    <>
      {/*Contact One Start*/}
      <section className="contact-one">
        <div
          className="contact-one-bg jarallax"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/contact-one-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">Contact Us</span>
            <h2 className="section-title__title">Let Us Know Or Call Us At</h2>
            <p className=" section-title__text">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply{" "}
            </p>
          </div>
          <div className="contact-one__form-box">
            <form
              action="assets/inc/sendemail.php"
              className="contact-one__form contact-form-validated"
            >
              <div className="row">
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-form__input-box">
                    <input type="text" placeholder="Your Name" name="name" />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-form__input-box">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-form__input-box">
                    <input type="text" placeholder="Subject" name="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="contact-form__input-box text-message-box">
                    <textarea name="message" placeholder="Comment"></textarea>
                  </div>
                  <div className="contact-form__btn-box">
                    <button type="submit" className="thm-btn contact-form__btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*Contact One End*/}
    </>
  );
}
