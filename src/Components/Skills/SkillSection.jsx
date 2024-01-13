import React from "react";
import "./Skills.css";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import { useSelector } from "react-redux";
import SoftwareSkill from "./SoftwareSkills";
import SoftwareSkills from "./SoftwareSkills";

const SkillSection = () => {
  const skillItems = useSelector((store) => store.skillItems);
  return (
    <div>
      {skillItems[0].map((skillItem, index) => (
        <div className="skills-main-div" key={index}>
          <div className="FullStackImg-div">
            <div className="skills-image-div">
              <FullStackImg />
            </div>
          </div>

          <div className="skills-text-div">
            <h1 className="skills-heading" style={{ color: "white" }}>
              {skillItem.title}
            </h1>
            <div className="SoftSkill-logos">
              <SoftwareSkills logos={skillItem.softwareSkills} />
            </div>
            <div className="SkillSentences">
              <div>
                {skillItem.skills.map((skillSentence, idx) => (
                  <p
                    className="subTitle skills-text"
                    style={{ color: "#8D8D8D" }}
                    key={idx}
                  >
                    {skillSentence}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {skillItems[1].map((skillItem, index) => (
        <div className="skills-main-div-one" key={index}>
          <div className="skills-text-div">
            <div>
              <h1
                className="skills-heading Tech-heading"
                style={{ color: "white" }}
              >
                {skillItem.title}
              </h1>
            </div>
            <div className="Tech-logos">
              <SoftwareSkills logos={skillItem.softwareSkills} />
            </div>
            <div className="Tech-Sentences">
              {skillItem.skills.map((skillSentence, idx) => {
                return (
                  <p
                    className="subTitle skills-text"
                    style={{ color: "#8D8D8D" }}
                    key={idx}
                  >
                    {skillSentence}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="CloudInfraImg-div">
            <div className="skills-image-div">
              <CloudInfraImg />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
