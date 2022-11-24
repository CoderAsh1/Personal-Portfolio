import React from "react";
import { jsCertificate, cssCertificate } from "../assets";
import "../Styles/certification.scss";

const Certification = () => {
  return (
    <div className="projectSection certificates" data-aos="fade-in">
      <h1>Certification</h1>
      <div className="certificate">
        <div data-aos="fade-in" data-aos-delay="100">
          <img src={jsCertificate} />
        </div>
        <div data-aos="fade-in" data-aos-delay="100">
          <img src={cssCertificate} />
        </div>
      </div>
    </div>
  );
};

export default Certification;
