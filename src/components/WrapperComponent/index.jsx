import { Element } from "react-scroll";
import AboutMe from "../AboutMe";
import Home from "../Home";
import WhatIDo from "../WhatIDo";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Testimonial from "../Testimonial";
import Contact from "../Contact";
import "./WrapperComponent.css";

const WrapperComponent = () => {
  return (
    // <div className="vh-100 ">
    <div className="wrapper-component">
      <Element className="w-full" name="home">
        <Home />
      </Element>
      <Element className="w-full" name="aboutme">
        <AboutMe />
      </Element>
      <Element className="w-full" name="whatido">
        <WhatIDo />
      </Element>
      <Element className="w-full" name="resume">
        <Resume />
      </Element>
      <Element className="w-full" name="portfolio">
        <Portfolio />
      </Element>
      <Element className="w-full" name="testimonial">
        <Testimonial />
      </Element>
      <Element className="w-full" name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default WrapperComponent;
