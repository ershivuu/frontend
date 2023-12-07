import React from "react";
import "./Contact.css";
import Footer from "../components/Footers";
import facebook from "../images/facebook-black.png";
import twitter from "../images/twitter-black.png";
import instagram from "../images/instagram-black.png";
import youtube from "../images/youtube-black.png";
import contactbg from "../images/contact.jpg";

export default function Contact() {
  return (
    <>
      <div>
        <div>
          <img className="c-bgimg" src={contactbg} />
        </div>
        <div className="c-heading">
          <p>Contact</p>
        </div>
      </div>


      {/* -------------------- */}
      <div className="contact-form">
        <form action="">
          <label htmlFor="">
            <p>Write with us </p>
            <input type="email" placeholder="Email Address" />
          </label>
          <br /><br />
          <label htmlFor="">
            <p>Talk with us </p>
            <input type="tel" placeholder="+91 96172-44330" />
          </label>
        </form>
      </div>
      {/* --------------------- */}
      <div className="social-logos">
        <p>Connect with us</p>
        <div className="logos">
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
          <img id="youtube-logo-contact" src={youtube} />
        </div>
      </div>
      <Footer />
    </>
  );
}
