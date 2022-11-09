import React from "react";
import {
  cssLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  tailwindLogo,
  sass,
  ViewTube,
  Newsapp,
  Weather,
  netflix,
} from "../assets";
import "../Styles/project.css";
import Skill from "./Skill";

const Projects = () => {
  return (
    <div className="projectSection" data-aos="fade-in" data-aos-delay="100">
      <h1>Projects</h1>
      <div>
        <div className="projectContainer" data-aos="fade-left">
          <section>
            <a href="https://netflix-kappa-eight.vercel.app/" target="blank">
              <h2>Netflix</h2>
            </a>
            <div className="techStack">
              <Skill logo={reactLogo} text={"React"} alt={"React"} />
              <Skill logo={sass} text={"SASS"} alt={"sass"} />
            </div>
            <p>
              <li>
                This is a Netflix Clone built using a Netflix API from Rapid
                API.{" "}
              </li>
              <li> It has a complete authentication system.</li>
              <li>It also has complete responsiveness with any device.</li>
            </p>
          </section>
          <a href="https://netflix-kappa-eight.vercel.app/" target="blank">
            <img src={netflix} alt="ViewTube" className="projectImage" />
          </a>
        </div>
        <div className="projectContainer" data-aos="fade-right">
          <section>
            <a href="https://viewvtube.netlify.app" target="blank">
              <h2>ViewTube</h2>
            </a>
            <div className="techStack">
              <Skill logo={reactLogo} text={"React"} alt={"React"} />
              <Skill logo={sass} text={"SASS"} alt={"sass"} />
            </div>
            <p>
              <li>
                This is a YouTube Clone built using Youtube API from Rapid API.{" "}
              </li>
              <li> It has an inbuild react player to play videos directly.</li>
              <li>It also has the option to download any YouTube Video.</li>
            </p>
          </section>
          <a href="https://viewvtube.netlify.app" target="blank">
            <img src={ViewTube} alt="ViewTube" className="projectImage" />
          </a>
        </div>
        <div className="projectContainer" data-aos="fade-left">
          <section>
            <a href="https://catchlatestnews.netlify.app" target="blank">
              <h2>News App</h2>
            </a>
            <div className="techStack">
              <Skill logo={reactLogo} text={"React"} alt={"React"} />
              <Skill logo={tailwindLogo} text={"Tailwind"} alt={"Tailwind"} />
            </div>
            <p>
              <li>This is a News App build using React and Tailwind . </li>
              <li>
                {" "}
                It uses React-Router to fetch Data from Different End Points.
              </li>
              <li>It also has PWA support.</li>
            </p>
          </section>
          <a href="https://catchlatestnews.netlify.app" target="blank">
            <img src={Newsapp} alt="newsAppImg" className="projectImage" />
          </a>
        </div>
        <div className="projectContainer" data-aos="fade-right">
          <section>
            <a href="https://ashweathers.netlify.app" target="blank">
              <h2>Weather Website</h2>
            </a>
            <div className="techStack weTech">
              <Skill logo={htmlLogo} text={"HTML"} alt={"HTML"} />
              <Skill logo={cssLogo} text={"CSS"} alt={"CSS"} />
              <Skill logo={jsLogo} text={"JavaScript"} alt={"JavaScript"} />
            </div>
            <p>
              <li>
                This is the very first project I built after learing HTML,CSS
                and JavaScript.
              </li>
              <li>This is a Weather website built using open weather API</li>
              <li>And It has dark mode feature.</li>
            </p>
          </section>
          <a href="https://ashweathers.netlify.app" target="blank">
            <img src={Weather} alt="weatherApp" className="projectImage " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
