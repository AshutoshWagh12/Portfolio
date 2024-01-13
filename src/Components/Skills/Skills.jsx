import SkillSection from "./SkillSection";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <h1 className="skills-header" style={{ color: "white" }}>
          Here's what I do
        </h1>
      </div>
      <SkillSection />
    </div>
  );
};

export default Skills;
