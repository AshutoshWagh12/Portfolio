import React from "react";
import "./Experience.css";
// import { Fade } from "react-reveal";
import "./Experience.css";
import ExperienceImg from "./ExperienceImg";
import ExperienceCard from "../../Components/Cards/ExperienceCard/ExperienceCard";

function Experience() {
  return (
    <div className="experience-main">
      <div className="basic-experience">
        <div className="experience-heading-div">
          <div className="experience-heading-img-div">
            <ExperienceImg />
          </div>
          <div className="experience-heading-text-div">
            <h1 className="experience-heading-text" style={{ color: "white" }}>
              Internships
            </h1>
            <ExperienceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

/*


<div className="card full-card">
              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title">Web Developer Intern</h3>
                  <h4 className="card-subtitle mb-2 text-body-secondary">
                    Consisty System Pvt.Ltd.
                  </h4>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Achievements
                </h6>
                <div className="card-para">
                  <p className="card-text">
                    • Gained hands-on experience in Java, HTML, CSS, &
                    JavaScript through developing and maintaining web
                    applications.
                  </p>
                  <p className="card-text">
                    • Redesigned and improved existing websites for enhanced
                    user experience.
                  </p>
                </div>
                <div className="skills">
                  <img src="Images/java.png" />
                  <img src="Images/js.png" />
                  <img src="Images/html.png" />
                  <img src="Images/css.png" />
                </div>
              </div>
            </div>


*/
