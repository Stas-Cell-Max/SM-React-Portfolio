import React from 'react';
import { Link } from 'react-scroll';
import { Element } from "react-scroll";
import AboutMe from "../AboutMe";
import Home from "../Home";
import WhatIDo from "../WhatIDo";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Testimonial from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";
import "./WrapperComponent.css";

const WrapperComponent = () => {
  return (
    // <div className="vh-100 ">
    <div className="wrapper-component">
      <Element className="home" name="home">
        <Home />
      </Element>
      <Element className="aboutme" name="aboutme">
        <AboutMe />
      </Element>
      <Element  name="whatido">
        <WhatIDo />
      </Element>
      <Element className="resume" name="resume">
        <Resume />
      </Element>
      <Element className="portfolio" name="portfolio">
        <Portfolio />
      </Element>
      <Element className="testimonial" name="testimonial">
        <Testimonial />
      </Element>
      <Element className="contact" name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default WrapperComponent;
