import { Element } from "react-scroll";
import AboutMe from "../AboutMe";
import Home from "../Home";
import "./index.css";

const WrapperComponent = () => {
  return (
    // <div className="vh-100 ">
    <div className="vh-100 w-full margin-left-auto ">
      <Element className="w-full" name="home">
        <Home />
      </Element>
      <Element className="w-full" name="aboutme">
        <AboutMe />
      </Element>
    </div>
  );
};

export default WrapperComponent;
