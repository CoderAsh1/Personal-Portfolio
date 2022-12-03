import React from "react";
import programming from "../assets/programming.svg";
import namaste from "../assets/namaste.png";
import "../Styles/hero.scss";
const Hero = () => {
  const { innerWidth: width } = window;

  return (
    <div className="container">
      <section
        className="intro"
        data-aos={width > 850 ? "fade-right" : "fade-in"}
        data-aos-duration="1200"
      >
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
        <a href="#footer" data-aos="fade-up">
          <button>Contact Me</button>
        </a>
      </section>

      <img
        className="heroImg"
        src={programming}
        alt=""
        data-aos="fade-left"
        data-aos-duration="1200"
      />
    </div>
  );
};

export default Hero;
