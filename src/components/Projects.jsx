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
  crypto,
  chartJs,
  material,
  redux,
} from "../assets";
import "../Styles/project.scss";
import Skill from "./Skill";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <div className="projectSection" data-aos="fade-in" data-aos-delay="100">
      <h1>Projects</h1>
      <div>
        <Tilt>
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
                <li>It is an ongoing Project.</li>
                <li>This is a Netflix Clone built using TMDB API. </li>
                <li> It will have complete authentication system.</li>
              </p>
            </section>
            <a href="https://netflix-kappa-eight.vercel.app/" target="blank">
              <img src={netflix} alt="ViewTube" className="projectImage" />
            </a>
          </div>
        </Tilt>
        <Tilt>
          <div className="projectContainer" data-aos="fade-left">
            <section>
              <a href="https://cryptocake.netlify.app/" target="blank">
                <h2>CryptoCake</h2>
              </a>
              <div className="techStack">
                <Skill logo={reactLogo} text={"React"} alt={"React"} />
                <Skill logo={redux} alt={"redux"} text={"Redux"} />
                <Skill logo={material} alt={"material"} text={"MUI"} />
                <Skill logo={chartJs} alt={"chartJs"} text={"chartJs"} />
              </div>
              <p>
                <li>It is a crypto app with latest charts.</li>
                <li>It uses rtk query to fetch the data. </li>
                <li> The entire UI is built using Material UI and Chart JS.</li>
              </p>
            </section>
            <a href="https://cryptocake.netlify.app/" target="blank">
              <img src={crypto} alt="crypto" className="projectImage" />
            </a>
          </div>
        </Tilt>
        <Tilt>
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
                  This is a YouTube Clone built using Youtube API from Rapid
                  API.{" "}
                </li>
                <li>
                  {" "}
                  It has an inbuild react player to play videos directly.
                </li>
                <li>It also has the option to download any YouTube Video.</li>
              </p>
            </section>
            <a href="https://viewvtube.netlify.app" target="blank">
              <img src={ViewTube} alt="ViewTube" className="projectImage" />
            </a>
          </div>
        </Tilt>
        <Tilt>
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
        </Tilt>
        <Tilt>
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
        </Tilt>
      </div>
    </div>
  );
};

export default Projects;
