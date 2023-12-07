import React from "react";
import { useEffect, useState } from "react";
import "./Upcommingprojects.css";
import upcommingimg from "../images/contact.jpg";
import vidoes from "../videos/sitevideo.mp4";
import Footers from "./Footers";
import Swiper from "swiper";
import sliderimg from "../images/slider.jpg";
function Upcommingprojects() {
  // backend---------------------------------------------------------------------
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8888/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submission successful:", data);
        // You can handle success UI updates or redirects here
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Handle errors or show error messages to the user
      });
  };

  // backend-------------------------------------------
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
          <img className="upcomming-bg" src={upcommingimg} />
        </div>
        <div className="upcomming-heading">
          <p>
            Upcomming <br />
            <span>Projects</span>
          </p>
        </div>
        <div className="upcomminc-corner">
          <div className="row1">
            <div className="col-6 upcomming-head">
              <p>
                <span>Description</span> <br />
                of upcomming <br /> projects
              </p>
            </div>
            <div className="col-6 upcomming-detail">
              <p>
                Siddhraj Paradise, a prestigious residential closed colony
                nestled in the serene locale of Sinhasa, Indore, is a testament
                to luxurious and tranquil living. Located in close proximity to
                the Indore International Airport, this meticulously planned
                enclave offers a range of plots spanning from 1200 to 2800 sqft,
                providing ample space for your dream home.
              </p>
              <p>
                Designed with meticulous attention to detail, Siddhraj Paradise
                seamlessly blends modern aesthetics with the tranquility of its
                natural surroundings. Residents can expect a harmonious living
                experience, surrounded by well-manicured landscapes,
                state-of-the-art infrastructure, and a secure, gated community.
              </p>
              <p>
                Whether you aspire to build a cozy abode or a spacious family
                residence, Siddhraj Paradise caters to diverse preferences,
                ensuring that every plot becomes a canvas for your unique
                vision. Immerse yourself in the charm of a community that
                prioritizes comfort, security, and a wholesome lifestyle.
              </p>
              <p>
                Experience the epitome of residential bliss at Siddhraj
                Paradise, where each plot is not just a piece of land but an
                opportunity to craft the home of your dreams in one of Indore's
                most sought-after and convenient locations.
              </p>
            </div>
          </div>
        </div>

        <div className="upcomming-slider-container">
          {/* slider to be inserted */}
          <p className="upcomming-slider-heading">
            Site <i>Pictures</i>
          </p>
          <div className="upcomming-container">
            <div className="swiper swiperCarousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img className="slider-img" src={sliderimg} />
                  </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <div className="notcommint-img" style={{ border: "0" }}>
          <div className="u-imgs">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6190.03748357249!2d75.77870815233712!3d22.70524867379953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQyJzE3LjIiTiA3NcKwNDYnNTIuMyJF!5e0!3m2!1sen!2sin!4v1701845983040!5m2!1sen!2sin"
              width="500"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="u-video" style={{ border: "0" }}>
            <video
              id="u-video"
              src={vidoes}
              style={{ border: "0" }}
              autoPlay
              muted
              loop
              controls="true"
            ></video>
          </div>
        </div>

        <div className="upcomming-form">
          <div className="upcomming-contact-form">
            <form method="post" onSubmit={handleSubmit}>
              <h1 style={{ fontStyle: "italic" }}>Get Quote</h1>
              <label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <input
                  type="tel"
                  placeholder="Number"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button type="submit" id="sent-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Upcommingprojects;
