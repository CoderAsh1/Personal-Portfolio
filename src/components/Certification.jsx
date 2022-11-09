import React from "react";
import { jsCertificate, cssCertificate } from "../assets";
import "../Styles/certification.css";

const Certification = () => {
  return (
    <div
      className="projectSection certificates"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h1>Certification</h1>
      <div className="certificate">
        <img src={jsCertificate} />
        <img src={cssCertificate} />
      </div>
    </div>
  );
};

export default Certification;
