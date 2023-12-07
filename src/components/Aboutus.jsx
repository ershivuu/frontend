import React from "react";
import "./Aboutus.css";
import slider1 from "../images/slider4.jpg";
import slider2 from "../images/slider5.jpg";
import slider3 from "../images/slider6.jpg";
import img1 from "../images/home1.jpg";
import img2 from "../images/home2.jpg";
import img3 from "../images/home3.jpg";
import Footers from "../components/Footers";

function Aboutus() {
  return (
    <>
      <div className="slider">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img
                class="d-block w-100 my-imgs"
                src={slider1}
                alt="First slide"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100 my-imgs"
                src={slider2}
                alt="Second slide"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100 my-imgs"
                src={slider3}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="abt-heading">
        <p>
          About <br />
          <i>us</i>
        </p>
      </div>

      <div className="abt-nav-2">
        <a href="">Overview</a>
        <a href="">Mission</a>
        <a href="">Vision</a>
        <a href="">Resources </a>
      </div>
      <div className="abt-llp">
        <div className="abt-llp-para">
          <p>
            <p className="abt-llp-heading">
              About<i> Corusview Venture LLP</i>
            </p>
            Corusview Venture LLP is a real estate firm dedicated to raising the
            bar for excellence in the sector. We take great pride in our
            constant dedication to quality, creativity, and client happiness.
            Our company was founded with the goal of transforming environments
            and elevating lifestyles. In every aspect of real estate
            development, Corusview Venture LLP is a reputable name that is
            synonymous with excellence, honesty, and integrity thanks to its
            team of seasoned professionals and extensive portfolio of successful
            projects.
          </p>
        </div>
        <div welcome-imgs>
          <img id="img7" src={img1} />
          <img id="img8" src={img2} />
          <img id="img9" src={img2} />
        </div>
      </div>
      <div className="llp-mission">
        <div className="mission-description">
          At Corusview Venture LLP, our goal is to constantly surpass our
          clients' expectations by providing outstanding real estate solutions.
          Driven by the values of honesty, competence, and customer-first
          mentality, we are committed to generating value for all of the people
          we serve. Our intentions are to maintain moral corporate conduct,
          build long-lasting connections, and make a significant impact on the
          communities we serve. Our mission is to be known as a trendsetter in
          the real estate industry, turning aspirations into reality one project
          at a time, by means of an uncompromising pursuit of excellence.
        </div>
        <div className="mission-heading">
          <p>
            Our <br />
            <i>
              <b>Mission</b>
            </i>
          </p>
        </div>
      </div>

      {/* -------------------------------------------------- */}

      <div className="llp-vision">
        <div className="vision-heading">
          <p>
            Our <br />
            <i>
              <b>Vision</b>
            </i>
          </p>
        </div>
        <div className="vision-description">
          At Corusview Venture LLP, we strive to create living experiences that
          are in line with our clients' dreams in addition to developing
          structures. Our vision is to lead the way in innovative architectural
          and design practises, establishing thriving and sustainable
          communities that foster a sense of community. Our vision is to create
          a lasting impact on the urban landscape, redefine the future of real
          estate, and set new standards for unmatched excellence by utilising
          innovation and adapting to changing market conditions.
        </div>
      </div>
      <div className="faq-section">
        <p className="faq-heading">
          Helpfull <br />
          <b>
            <i>resources</i>
          </b>
          <br /> <span>FAQ's</span>
        </p>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
      </div>
      <Footers />
    </>
  );
}

export default Aboutus;
