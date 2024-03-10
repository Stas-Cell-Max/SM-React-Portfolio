import React from 'react';

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
  <Element name="home"> <Home /></Element>
      <Element name="aboutme"> <AboutMe /></Element>
      <Element name="whatido">
        <WhatIDo />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="testimonials">
        <Testimonial />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default WrapperComponent;
