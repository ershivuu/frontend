import React, { useEffect, useState } from "react";
import "./Footers.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

export default function Footers() {
  const [formData, setFormData] = useState({
    Email:'',
  });
  const handleInputChange = (e) => {
    const { Email, value } = e.target;
    setFormData({
      ...formData,
      [Email]: value,
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

  return (
    <>
      <div>
        <div className="Footer">
          <div className="">
            <a href="#" className="f-logo">
              <img src={logo} />
            </a>
          </div>
          {/* Footer form */}
          <div className="c-form">
            <p style={{ color: "#22ac86", fontSize: "20px" }}>Join Our List</p>
            <form method="post" onSubmit={handleSubmit}>
              {/* <label>
                <input
                  id="email-2"
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                />  
              </label> */}
              <label>
                <input type="email" placeholder="Enter Email" name="Email" id="email-2" onChange={handleInputChange}/>
              </label>
              <button type="button" className="f-submit-button">
                <i class="fa fa-long-arrow-right arrow" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          {/* Footer form */}

          <div className="contact-us">
            <p id="c-head">CONTACT WITH US</p>
            <p>+91 96172-44330</p>
            <a href="">
              <img src={facebook} />
            </a>
            <a href="">
              <img src={instagram} />
            </a>
            <a href="">
              <img src={twitter} />
            </a>
            <a href="">
              <img id="youtube-logo-footer" src={youtube} />
            </a>
          </div>
        </div>

        <div className="f-details">
          <div className="d-content">
            <p>Copyright 2023. All rights reserved Corusview Venture LLP</p>
            <p>Designed & Developed By CorusView</p>
            <p>Privacy Policy Terms of Use Apply </p>
          </div>
        </div>
      </div>
    </>
  );
}
