import CertificationCardItems from "../../Components/Cards/CertificationCard/CertificatinCardItems";
import AccomplishmentImg from "./AccomplishmentImg";
import "./Accomplishments.css";

const Accomplishments = () => {
  return (
    <div className="education-main">
      <div className="basic-education">
        <div className="heading-div">
          <div className="heading-img-div">
            <AccomplishmentImg />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: "white" }}>
              Accomplishments
            </h1>
            <h3 className="heading-sub-text" style={{ color: "white" }}>
              Certifications
            </h3>
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: "#8D8D8D" }}
            >
              These are my some of the certifications achieved on different
              platforms.
            </p>
          </div>
        </div>
        <CertificationCardItems />
      </div>
    </div>
  );
};

export default Accomplishments;
