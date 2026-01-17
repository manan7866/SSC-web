import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/*Blog Two Start*/}
      <section className="blog-two">
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
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img">
                  <img src="assets/images/blog/blog-2-1.jpg" alt="image" />
                  <div className="blog-two__plus">
                    <Link href="blog-details">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-two__content">
                  <div className="blog-two__date">
                    <p>5 Aug 2023</p>
                  </div>
                  <h3 className="blog-two__title">
                    <Link href="blog-details">
                      How To Fix Broken Back Glass On Your Phone
                    </Link>
                  </h3>
                  <p className="blog-two__text">
                    Duis aute irure dolor in reprehenderit velit esse cillum
                    dolore eu fugiat nulla cupidatat non proident,
                  </p>
                  <Link href="blog-details" className="blog-two__read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img">
                  <img src="assets/images/blog/blog-2-2.jpg" alt="image" />
                  <div className="blog-two__plus">
                    <Link href="blog-details">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-two__content">
                  <div className="blog-two__date">
                    <p>5 Aug 2023</p>
                  </div>
                  <h3 className="blog-two__title">
                    <Link href="blog-details">
                      How To Fix Broken Screen On Your Laptop
                    </Link>
                  </h3>
                  <p className="blog-two__text">
                    Duis aute irure dolor in reprehenderit velit esse cillum
                    dolore eu fugiat nulla cupidatat non proident,
                  </p>
                  <Link href="blog-details" className="blog-two__read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img">
                  <img src="assets/images/blog/blog-2-3.jpg" alt="image" />
                  <div className="blog-two__plus">
                    <Link href="blog-details">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-two__content">
                  <div className="blog-two__date">
                    <p>5 Aug 2023</p>
                  </div>
                  <h3 className="blog-two__title">
                    <Link href="blog-details">
                      What Is The Best Affordable Android Phone In 2023?
                    </Link>
                  </h3>
                  <p className="blog-two__text">
                    Duis aute irure dolor in reprehenderit velit esse cillum
                    dolore eu fugiat nulla cupidatat non proident,
                  </p>
                  <Link href="blog-details" className="blog-two__read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
          </div>
        </div>
      </section>
      {/*Blog Two End*/}
    </>
  );
}
