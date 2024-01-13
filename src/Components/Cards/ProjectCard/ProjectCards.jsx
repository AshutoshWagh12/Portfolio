import "./ProjectCards.css";
import { FaEye } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ProjectCards = ({ item }) => {
  return (
    <div
      className=" project_div"
      style={{ backgroundColor: "rgb(41, 42, 45)" }}
    >
      <div className="Project-View">
        {item.id === "2" ? (
          <a href={item.projectView} target="_blank">
            <button type="button" className=" btn-project-card">
              Play
            </button>
          </a>
        ) : (
          <a href={item.projectView} target="_blank">
            <button type="button" className="btn-project-card">
              <FaEye className="Eye-btn" />
            </button>
          </a>
        )}
      </div>

      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: "rgb(255, 255, 255)" }}>
            {item.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: "rgb(255, 255, 255)" }}>
          {item.description}
        </p>
        <div className="repo-details">
          <div>
            <div className="software-skills-main-div">
              <ul className="dev-icons-languages">
                <li className="software-skill-inline">
                  {item.logos.map((logo, idx) => (
                    <OverlayTrigger
                      key={logo.language}
                      placement={"top"}
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          <strong>{logo.language}</strong>
                        </Tooltip>
                      }
                    >
                      <img src={logo.src} key={idx} />
                    </OverlayTrigger>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCards;
