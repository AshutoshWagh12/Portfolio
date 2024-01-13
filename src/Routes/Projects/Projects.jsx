import ProjectCardItmes from "../../Components/Cards/ProjectCard/ProjectCardItems";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects = () => {
  return (
    <div className="projects-main">
      <div className="basic-projects">
        <div className="projects-heading-div">
          <div className="projects-heading-img-div">
            <ProjectsImg />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text" style={{ color: "white" }}>
              Projects
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: "#8D8D8D" }}
            >
              My projects make use of a vast variety of latest technology tools.
              My best experience is to create JavaScript and React Project.
              Below are some of my projects.
            </p>
          </div>
        </div>
        <ProjectCardItmes />
      </div>
    </div>
  );
};

export default Projects;
