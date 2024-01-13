import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./ExperienceCard.css";
import { useSelector } from "react-redux";

const ExperienceCard = () => {
  const experienceCardItems = useSelector((store) => store.experienceCardItems);

  return (
    <div className="expo-cards-div-main">
      <div
        className=" experience-div"
        style={{ backgroundColor: "rgb(41, 42, 45)" }}
      >
        <a
          href={experienceCardItems.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="expo-name-div">
            <h2 className="expo-name" style={{ color: "rgb(255, 255, 255)" }}>
              {experienceCardItems.name}
            </h2>
          </div>
          <div className="expo-subTitleName-div">
            <h5 className="expo-subTitleName" style={{ color: "#8D8D8D" }}>
              {experienceCardItems.subTitle}
            </h5>
          </div>

          {experienceCardItems.description.map((sentence) => (
            <p
              className="expo-description"
              style={{ color: "#8D8D8D" }}
              key={sentence}
            >
              {sentence}
            </p>
          ))}

          <div className="expo-details">
            <ul className="dev-icons-languages">
              <li className="software-skill-inline-languages">
                {experienceCardItems.logos.map((logo) => (
                  <OverlayTrigger
                    key={logo.language}
                    placement={"top"}
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>{logo.language}</strong>
                      </Tooltip>
                    }
                  >
                    <img src={logo.src} key={logo.language} />
                  </OverlayTrigger>
                ))}
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
