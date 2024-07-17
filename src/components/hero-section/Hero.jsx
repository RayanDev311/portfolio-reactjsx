import React from "react";
import "./Hero.css";
import icon from "./Button.svg";
import icon1 from "./Button (1).svg";
import icon2 from "./Button (2).svg";
import icon3 from "./Button (3).svg";
import img from "./Frame 20.svg";

function Hero() {
  return (
    <header className="hero-section">
      <div className="container">
        <div className="content">
          <div className="intro">
            <span className="h3">Hello I’am</span> &nbsp;&nbsp;
            <span className="bold">Fadhil.</span> <br></br>
            <span className="bold">Frontend</span>&nbsp;&nbsp;
            <span className="transparent">Developer</span> <br></br>
            <span className="h3">Based In</span>&nbsp;&nbsp;
            <span className="bold">Benin.</span>
            <p>
              I am Fadhil ISHOLA! Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to specimen book.
            </p>
          </div>
          <div className="hero-links">
            <a href="#">
              <img src={icon} alt="icon" className="hero-icon" />
            </a>
            <a href="#">
              <img src={icon1} alt="icon" className="hero-icon" />
            </a>
            <a href="#">
              <img src={icon2} alt="icon" className="hero-icon" />
            </a>
            <a href="#">
              <img src={icon3} alt="icon" className="hero-icon" />
            </a>
          </div>
        </div>
        <div className="img">
          <img src={img} alt="Logo" className="hero-img" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
