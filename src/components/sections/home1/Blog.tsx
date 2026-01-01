import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/*Blog One Start*/}
      <div className="blog-one">
        <div
          className="blog-one-shape-1 float-bob-y"
          style={{
            backgroundImage:
              "url(public/assets/images/shapes/blog-one-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">From Our Blog</span>
            <h2 className="section-title__title">News And Articles</h2>
            <p className="section-title__text">
              Duis aute irure dolor in repreh enderit in volup tate velit esse
              cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum
              is simply{" "}
            </p>
          </div>
          <div className="row">
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="assets/images/blog/blog-1-1.jpg" alt="image" />
                  <div className="blog-one__plus">
                    <Link href="blog-details">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <Link href="blog-details">
                        <i className="fa fa-calendar-alt"></i>5 AUG 2023
                      </Link>
                    </li>
                    <li>
                      <Link href="blog-details">
                        <i className="far fa-comments"></i>02 COMMENTS
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      How To Fix Broken Back Glass On Your Phone
                    </Link>
                  </h3>
                  <div className="blog-one__btn-box">
                    <Link href="blog-details" className="thm-btn blog-one__btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="/assets/images/blog/blog-1-2.jpg" alt="image" />
                  <div className="blog-one__plus">
                    <Link href="blog-details">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <Link href="blog-details">
                        <i className="fa fa-calendar-alt"></i>5 AUG 2023
                      </Link>
                    </li>
                    <li>
                      <Link href="blog-details">
                        <i className="far fa-comments"></i>02 COMMENTS
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      How To Fix Broken Screen On Your Laptop
                    </Link>
                  </h3>
                  <div className="blog-one__btn-box">
                    <Link href="blog-details" className="thm-btn blog-one__btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="public/assets/images/blog/blog-1-3.jpg" alt="image" />
                  <div className="blog-one__plus">
                    <Link href="blog-details">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <Link href="blog-details">
                        <i className="fa fa-calendar-alt"></i>5 AUG 2023
                      </Link>
                    </li>
                    <li>
                      <Link href="blog-details">
                        <i className="far fa-comments"></i>02 COMMENTS
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      What Is The Best Affordable Android Phone In 2023?
                    </Link>
                  </h3>
                  <div className="blog-one__btn-box">
                    <Link href="blog-details" className="thm-btn blog-one__btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
          </div>
        </div>
      </div>
      {/*Blog One End*/}
    </>
  );
}
