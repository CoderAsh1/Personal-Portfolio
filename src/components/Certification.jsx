import React from "react";
import { jsCertificate, cssCertificate } from "../assets";
import "../Styles/certification.scss";
import Tilt from "react-parallax-tilt";

const Certification = () => {
  return (
    <div className="projectSection certificates" data-aos="fade-in">
      <h1>Certification</h1>
      <div className="certificate">
        <Tilt>
          <a
            data-aos="fade-in"
            data-aos-delay="500"
            href="https://www.sololearn.com/certificates/CT-6MGZZMCQ"
            target="blank"
          >
            <img src={jsCertificate} />
          </a>
        </Tilt>
        <Tilt>
          <a
            data-aos="fade-in"
            data-aos-delay="500"
            href="https://www.hackerrank.com/certificates/1cf2549f297c"
            target="blank"
          >
            <img src={cssCertificate} />
          </a>
        </Tilt>
      </div>
    </div>
  );
};

export default Certification;
