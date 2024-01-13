import { useSelector } from "react-redux";
import "./ProjectCardItmes.css";
import ProjectCards from "./ProjectCards";

const ProjectCardItmes = () => {
  const projectCardItems = useSelector((store) => store.projectCardItems);

  return (
    <div className="repo-cards-div-main">
      {projectCardItems.map((item) => (
        <ProjectCards key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProjectCardItmes;
