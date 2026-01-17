"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import Isotope from "isotope-layout"; // Make sure to import Isotope if it's available

export default function PortfolioFilter1() {
  const isotope = useRef<Isotope | null>(null); // Type the ref properly
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".items-container", {
        itemSelector: ".masonry-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".masonry-item",
        },
        transitionDuration: "0.75s", // This controls the animation speed when filtering
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: string) => () => {
      setFilterKey(key);
    },
    [],
  );

  const activeBtn = (value: string) =>
    value === filterKey ? "filter active" : "filter";

  return (
    <>
      <div className="filters clearfix">
        <ul className="filter-tabs filter-btns clearfix">
          <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
            All Topics <span className="count">0</span>
          </li>
          <li
            className={activeBtn("cat-1")}
            onClick={handleFilterKeyChange("cat-1")}
          >
            Business <span className="count">0</span>
          </li>
          <li
            className={activeBtn("cat-2")}
            onClick={handleFilterKeyChange("cat-2")}
          >
            Coaching <span className="count">0</span>
          </li>
          <li
            className={activeBtn("cat-3")}
            onClick={handleFilterKeyChange("cat-3")}
          >
            Financial <span className="count">0</span>
          </li>
          <li
            className={activeBtn("cat-4")}
            onClick={handleFilterKeyChange("cat-4")}
          >
            Marketing <span className="count">0</span>
          </li>
          <li
            className={activeBtn("cat-5")}
            onClick={handleFilterKeyChange("cat-5")}
          >
            Technical <span className="count">0</span>
          </li>
        </ul>
      </div>
      <div className="items-container row clearfix">
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-1.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Marketing</h5>
                <h4>Business Leadership</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-2.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Technical</h5>
                <h4>Market Expansion</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-3.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Coaching</h5>
                <h4>Money Savings</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-5 cat-2 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-4.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Business</h5>
                <h4>Helthy Solutions</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-2 cat-1 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-5.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Marketing</h5>
                <h4>Startup Business</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-3 cat-5 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-4-1.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Technical</h5>
                <h4>Market Expansion</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-4-2.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Marketing</h5>
                <h4>Business Leadership</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-4-3.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Financial</h5>
                <h4>Capital Management</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-4 cat-5 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-4-4.jpg" alt="image" />
            </div>
            <div className="overlay">
              <div className="title">
                <span className="icon">
                  <img src="/assets/images/icons/icon-8.png" alt="image" />
                </span>
                Precision
              </div>
              <div className="link-btn">
                <Link href="#">
                  <i className="flaticon-right-arrow" />
                </Link>
              </div>
              <div className="content">
                <h5>Financial</h5>
                <h4>Capital Management</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
