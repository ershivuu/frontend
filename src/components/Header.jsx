import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  const [isResponsive, setIsResponsive] = useState(false);
  const myFunction = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    setIsResponsive(!isResponsive); // Toggle the state to manage responsive class
  };

  return (
    <>
      <section>
        <div className="topnav" id="myTopnav">
          <a href="/" className="active">
            <img src={logo} />
          </a> 
          <Link to="/aboutus" >ABOUT US</Link>
          <Link to="/upcomming">UPCOMMING PROJECTS</Link>
          <Link to="/nricorner">NRI CORNER</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/contactus">CONTACT</Link>
          <a
            href="javascript:void(0);"
            style={{ fontSize: 15 }}
            className="icon"
            onClick={myFunction}
          >
            &#9776;
          </a>
        </div>
      </section>
      <Outlet></Outlet>
    </>
  );
}
