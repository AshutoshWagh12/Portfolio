import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./SocialMedia.css";
import { useSelector } from "react-redux";

const SocialMedia = () => {
  const socialMediaLinks = useSelector((store) => store.socialMediaLinks);

  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={fab.faGithub} />
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={fab.faLinkedinIn} />
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={fab.faGoogle} />
        <span></span>
      </a>
      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={fab.faInstagram} />
        <span></span>
      </a>
    </div>
  );
};

export default SocialMedia;
