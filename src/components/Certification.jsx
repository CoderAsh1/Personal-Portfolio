import React from "react";
import { jsCertificate, cssCertificate, relevel } from "../assets";
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
            <img src={jsCertificate} alt="javascript" />
          </a>
        </Tilt>
        <Tilt>
          <a
            data-aos="fade-in"
            data-aos-delay="500"
            href="https://www.hackerrank.com/certificates/1cf2549f297c"
            target="blank"
          >
            <img src={cssCertificate} alt="hackerrank" />
          </a>
        </Tilt>
        <Tilt>
          <a
            data-aos="fade-in"
            data-aos-delay="500"
            href="https://drive.google.com/file/d/12MOlNtVMK3JcvUPMjHLPy1pZQGROPpyT/view"
            target="blank"
          >
            <img src={relevel} alt="relevel" />
          </a>
        </Tilt>
      </div>
    </div>
  );
};

export default Certification;
