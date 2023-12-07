import React from "react";
import "./Gallary.css";
import gallaryimg from "../images/contact.jpg";
import imgs from "../images/home1.jpg";

import Footers from "./Footers";

export default function Gallary() {
  return (
    <>
      <div>
        <div>
          <img className="c-bgimg" src={gallaryimg} />
        </div>
        <div className="g-heading">
          <p>Gallery</p>
        </div>
      </div>

      {/* <div className="gallery-nav">
        <div className="g-heading">
          <p>Gallery</p>
        </div>
        <div className="set-li">
           <ul>
            <li><a href="">All</a></li>
            <li><a href="">Site</a></li>
            <li><a href="">Constructed</a></li>
            <li><a href="">3D</a></li>
           </ul>
           </div>
      </div> */}
      <div className="gallery-img">
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
           <div className="g-imgs"> <img src={imgs}/></div>
      </div>
      <Footers/>
    </>
    
  );
}
