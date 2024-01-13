import "./ContactAndResume.css";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import { useSelector } from "react-redux";

const ContactAndResume = () => {
  const contactPageItems = useSelector((store) => store.contactPageItems);
  const greetingItems = useSelector((store) => store.greetingItems);

  return (
    <main>
      <div className="my-img">
        <img src={contactPageItems.profile_image} alt="" />
      </div>
      <div className="contact-info">
        <h1>{contactPageItems.title}</h1>
        <p style={{ color: "#8D8D8D" }}>{contactPageItems.description}</p>
        <div className="social-media">
          <SocialMedia />
        </div>

        <br />
        <br />
        <div className="Resume-btn">
          <button type="button" className="btn res-btn">
            <a
              className="general-btn"
              href={greetingItems.resumeLink}
              target="_blank"
            >
              See my Resume
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ContactAndResume;
