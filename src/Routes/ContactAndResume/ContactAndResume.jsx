import "./ContactAndResume.css";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import { useSelector } from "react-redux";

const ContactAndResume = () => {
  const contactPageItems = useSelector((store) => store.contactPageItems);
  const greetingItems = useSelector((store) => store.greetingItems);

  return (
    <div className="contact-main">
      <div className="basic-contact">
        <div className="contact-heading-div">
          <div className="contact-heading-img-div">
            <img
              className="profile-pic"
              src={contactPageItems.profile_image}
              alt=""
            />
          </div>
          <div className="contact-heading-text-div">
            <h1 className="contact-heading-text" style={{ color: "#FFFFFF" }}>
              {contactPageItems.title}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: "#8D8D8D" }}
            >
              {contactPageItems.description}
            </p>
            <SocialMedia />
            <br />
            <br />
            <a
              className="general-btn"
              href={greetingItems.resumeLink}
              target="_blank"
            >
              See my Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndResume;

/*

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

*/
