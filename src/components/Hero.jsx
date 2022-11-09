import React from "react";
import programming from "../assets/programming.svg";
import namaste from "../assets/namaste.png";
import "../Styles/hero.css";

const Hero = () => {
  return (
    <div className="container" data-aos="fade-in">
      <section className="intro">
        <div className="left">
          <h1>Namaste</h1>
          <img className="namasteLogo" src={namaste} alt="" />
        </div>
        <h1 className="desc">
          I'm
          <span> Ashutosh Sasmal</span>, a Front End Web developer based in
          Odisha,India. I love building beautiful interfaces,Web Apps and
          everything in between.
        </h1>
        <a href="#footer" data-aos="fade-up" data-aos-duration="600">
          <button>Contact Me</button>
        </a>
      </section>
      <img className="heroImg" src={programming} alt="" />
    </div>
  );
};

export default Hero;
