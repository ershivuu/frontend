import React, { useEffect } from "react";
import bg from "../images/background.jpg";
import img1 from "../images/home1.jpg";
import img2 from "../images/home2.jpg";
import img3 from "../images/home3.jpg";
import Footers from "./Footers";
import sliderimg from "../images/siteimgs/Picture1.jpg";
import sliderimg2 from "../images/siteimgs/Picture2.jpg";
import sliderimg3 from "../images/siteimgs/Picture3.jpg";
import sliderimg4 from "../images/siteimgs/Picture4.jpg";
import sliderimg5 from "../images/siteimgs/Picture5.jpg";
import sliderimg6 from "../images/siteimgs/Picture6.jpg";
import "./Home.css";
import Swiper from "swiper";

export default function Home() {
  useEffect(() => {
    const swiper = new Swiper(".swiperCarousel", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      keyboard: {
        enabled: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const slides = document.getElementsByClassName("swiper-slide");
    for (const slide of slides) {
      slide.addEventListener("click", () => {
        const { className } = slide;
        if (className.includes("swiper-slide-next")) {
          swiper.slideNext();
        } else if (className.includes("swiper-slide-prev")) {
          swiper.slidePrev();
        }
      });
    }

    function resizeTextToFit() {
      const quoteEls = document.getElementsByClassName("quote");
      for (const el of quoteEls) {
        el.style.width = el.offsetWidth;
        el.style.height = el.offsetHeight;
      }
      window.textFit(quoteEls, { maxFontSize: 14 });
    }
    resizeTextToFit();
    window.addEventListener("resize", () => {
      resizeTextToFit();
    });

    return () => {
      window.removeEventListener("resize", () => {
        resizeTextToFit();
      });
    };
  }, []);

  return (
    <>
      <div>
        <div>
          {/* background image is fixed herre*/}
          <img className="bg-img" src={bg} alt="bg-img" />
        </div>
        <div className="h-heading">{/* <p>Dummy Heading content</p> */}</div>

        <div className="welcome-llp">
          <div className="welcome-llp-para">
            <p>
              <p className="welcome-llp-heading">
                Welcome to the <i>VENTURE LLP</i> experience
              </p>
              Corusview Venture LLP is a real estate firm dedicated to raising
              the bar for excellence in the sector. We take great pride in our
              constant dedication to quality, creativity, and client happiness.
              Our company was founded with the goal of transforming environments
              and elevating lifestyles. In every aspect of real estate
              development, Corusview Venture LLP is a reputable name that is
              synonymous with excellence, honesty, and integrity thanks to its
              team of seasoned professionals and extensive portfolio of
              successful projects.
            </p>
            <div>
              <button type="button" id="view-btn">
                View About us
              </button>
            </div>
          </div>
          <div welcome-imgs>
            <img id="img1" src={img1} />
            <img id="img2" src={img2} />
            <img id="img3" src={img2} />
          </div>
        </div>

        <div className="slider-container">
          {/* slider to be inserted */}
          <p className="slider-heading">Explore Our Venture</p>
          <div className="container">
            <div className="swiper swiperCarousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg}/>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg2} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg3} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg4} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg5} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg6} />
                  </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <button type="button" className="gallery-btn">
            View Gallery
          </button>
        </div>

        {/*copied code for the below imgs allignment  */}
        <div className="welcome2-llp">
          <div welcome2-imgs>
            <img id="img4" src={img1} />
            <img id="img5" src={img2} />
            <img id="img6" src={img2} />
          </div>
          <div className="welcome2-llp-para">
            <p>
              <span className="welcome2-coma">"</span>
              <br />
              You and team went above and beyond! Thank y'all so much for the
              commitment to excellence- the results speak for themselves.
              <br />
              <span className="welcome2-coma">"</span>
            </p>
            <div>
              <button type="button" id="testimonial-btn">
                View Testimonial
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}
