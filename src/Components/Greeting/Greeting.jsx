import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Greeting.css";
import GreetingImg from "./GreetingImg";
import { useSelector } from "react-redux";

const Greeting = () => {
  const greetingItems = useSelector((store) => store.greetingItems);

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{greetingItems.title}</h1>
            <p
              className="greeting-text-p subTitle"
              style={{ color: "rgb(141, 141, 141)" }}
            >
              <span>I'm </span>
              <span style={{ color: "pink" }}>{greetingItems.full_name}. </span>
              {greetingItems.subTitle}
            </p>
            <SocialMedia />
            <div className="portfolio-repo-btn-div">
              <Link to="/contact">
                <button className="button">Contact Me</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <GreetingImg />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
