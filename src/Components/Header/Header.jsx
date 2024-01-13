// import { MdOutlineDarkMode } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // When the location changes (route changes), trigger the animation
    setAnimationTrigger(true);

    // Reset animationTrigger after a short delay to allow re-triggering
    const timer = setTimeout(() => {
      setAnimationTrigger(false);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, [location]);

  return (
    <header className={`header ${animationTrigger ? "animated" : ""}`}>
      <NavLink to="/" className="logo-container">
        <div className="logo">
          <img src="Images/My_Pic.jpg" alt="My PortFolio" />
        </div>
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            className="homei"
            activeclassname="active"
            to="/"
            style={{ borderRadius: 5, color: "rgb(255, 255, 255)" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="ec"
            activeclassname="active"
            to="/Accomplishments"
            style={{ borderRadius: 5, color: "rgb(255, 255, 255)" }}
          >
            Accomplishments
          </NavLink>
        </li>
        <li>
          <NavLink
            className="xp"
            activeclassname="active"
            to="/Experience"
            style={{ borderRadius: 5, color: "rgb(255, 255, 255)" }}
          >
            Internships
          </NavLink>
        </li>
        <li>
          <NavLink
            className="projects"
            activeclassname="active"
            to="/projects"
            style={{ borderRadius: 5, color: "rgb(255, 255, 255)" }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cr"
            activeclassname="active"
            to="/contact"
            style={{ borderRadius: 5, color: "rgb(255, 255, 255)" }}
          >
            Contact and Resume
          </NavLink>
        </li>

        {/* <button className="mode">
          <MdOutlineDarkMode />
        </button> */}
      </ul>
    </header>
  );
};

export default Header;
