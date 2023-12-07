import React, { useState } from "react";
import "./NRICorner.css";
import Footers from "./Footers";
import nriimg from "../images/contact.jpg";

function NRICorner() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8888/nri-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submission successful:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div>
        <div>
          <img className="nri-bg" src={nriimg} />
        </div>
        <div className="nri-heading">
          <p>
            <span>"</span>
            <br />
            Global <br /> Dreams, <br /> Local <br /> Homes. <br />
            <span>"</span>
          </p>
        </div>
      </div>
      <div className="abt-corner">
        <div className="row1">
          <div className="col-6 corner-head">
            <p>
              <span>NRI</span> <br />
              Corner
            </p>
          </div>
          <div className="col-6 corner-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            incidunt sint culpa a dignissimos corporis voluptatem, delectus
            sequi quidem enim quae vero id quas doloremque odit dicta eum omnis
            modi?
          </div>
        </div>
      </div>

      <div className="nri-contact-form">
        <form action="" method="get" onSubmit={handleSubmit}>
          <h1 style={{ fontStyle: "italic" }}>Get Quote</h1>
          <label>
            <input
              type="text"
              id="name2"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </label>
          <label>
            <input
              type="tel"
              id="number2"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Number"
            />
          </label>
          <label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </label>
          <p id="comment-head">Comment</p>
          <label>
            <input
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              type="text"
            />
          </label>
          <br />
          <button type="submit" id="sent-btn">
            Submit
          </button>
        </form>
      </div>
      <Footers />
    </>
  );
}
export default NRICorner;
