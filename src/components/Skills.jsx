import React from "react";
import {
  cssLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  tailwindLogo,
  nodeLogo,
  expressLogo,
  mongoLogo,
  sass,
} from "../assets";
import Skill from "./Skill";
import "../Styles/skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skillContainer" data-aos="fade-up">
        <h3>Skills </h3>
        <div className="skill">
          <Skill logo={htmlLogo} alt={"htmlLogo"} text={"HTML"} />
          <Skill logo={cssLogo} alt={"cssLogo"} text={"CSS"} />
          <Skill logo={jsLogo} alt={"jsLogo"} text={"JavaScript"} />
          <Skill logo={reactLogo} alt={"reactLogo"} text={"React"} />
          <Skill logo={tailwindLogo} alt={"tailwindLogo"} text={"Tailwind"} />
          <Skill logo={sass} alt={"tailwindLogo"} text={"SASS"} />
        </div>
      </div>
      <div className="skillContainer" data-aos="fade-up">
        <h3>Exploring</h3>
        <div className="skill">
          <Skill logo={nodeLogo} alt={"nodeLogo"} text={"NodeJS"} />
          <Skill logo={expressLogo} alt={"expressLogo"} text={"ExpressJS"} />
          <Skill logo={mongoLogo} alt={"mongoLogo"} text={"Mongo DB"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
