import React from "react";
import "../Styles/skill.css";

const skill = ({ logo, alt, text }) => {
  return (
    <div className="iSkill">
      <img src={logo} alt={alt} />
      <h5>{text}</h5>
    </div>
  );
};

export default skill;
