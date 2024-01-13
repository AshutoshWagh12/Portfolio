import React from "react";
import "./SoftwareSkills.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SoftwareSkills = ({ logos }) => {
  return (
    <div className="image-details">
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {logos.map((logo) => (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline">
                  <img src={logo.src} key={logo.skillName} />
                </li>
              </OverlayTrigger>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSkills;
