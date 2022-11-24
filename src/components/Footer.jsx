import React from "react";
import "../Styles/footer.scss";
import { phone, gmail, github, linkedIn } from "../assets";
import CV from "../assets/cv.pdf";

const Footer = () => {
  return (
    <section id="footer">
      <a href={CV} target="blank">
        <h2>Download CV</h2>
      </a>
      <div className="socials">
        <a>
          <img src={phone} alt="" />
          <h6>+91 7008927199</h6>
        </a>
        <a target="blank">
          <img src={gmail} alt="" />
          <h6>ashutoshsasmal1@gmail.com</h6>
        </a>
        <a href="https://github.com/CoderAsh1" target="blank">
          <img src={github} alt="" />
          <h6>github.com/CoderAsh1</h6>
        </a>
        <a
          href="https://www.linkedin.com/in/ashutosh-sasmal-38456624b/"
          target="blank"
        >
          <img src={linkedIn} alt="" />
          <h6>
            www.linkedin.com/in/ ashutosh- <br />
            sasmal -38456624b
          </h6>
        </a>
      </div>
    </section>
  );
};

export default Footer;
