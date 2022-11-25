import React from "react";
import { jsCertificate, cssCertificate } from "../assets";
import "../Styles/certification.scss";

const Certification = () => {
  return (
    <div className="projectSection certificates" data-aos="fade-in">
      <h1>Certification</h1>
      <div className="certificate">
        <a
          data-aos="fade-in"
          data-aos-delay="100"
          href="https://www.sololearn.com/certificates/CT-6MGZZMCQ"
          target="blank"
        >
          <img src={jsCertificate} />
        </a>
        <a
          data-aos="fade-in"
          data-aos-delay="100"
          href="https://www.hackerrank.com/certificates/1cf2549f297c"
          target="blank"
        >
          <img src={cssCertificate} />
        </a>
      </div>
    </div>
  );
};

export default Certification;
