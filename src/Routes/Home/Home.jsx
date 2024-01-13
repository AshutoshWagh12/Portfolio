import Greeting from "../../Components/Greeting/Greeting";
import Skills from "../../Components/Skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-items">
      <Greeting />
      <Skills />
    </div>
  );
};

export default Home;
