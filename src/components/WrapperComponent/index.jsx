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
    // Define the function to handle navigation click
    const handleNavClick = (elementId) => {
      // This will scroll to the Element with the corresponding 'name' prop
      document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    

  return (
    // <div className="vh-100 ">
  <div className="wrapper-component">
            <Element name="home"  id="home"><Home handleNavClick={handleNavClick} /></Element>
            <Element name="aboutme" id="aboutme"><AboutMe handleNavClick={handleNavClick} /></Element>
            <Element name="whatido" id="whatido"><WhatIDo handleNavClick={handleNavClick} /></Element>
            <Element name="resume" id="resume"><Resume handleNavClick={handleNavClick} /></Element>
            <Element name="portfolio" id="portfolio"><Portfolio handleNavClick={handleNavClick}/></Element>
            <Element name="testimonials" id="testimonials"><Testimonial handleNavClick={handleNavClick}/></Element>
            <Element name="contact" id="contact"><Contact handleNavClick={handleNavClick}/></Element>
            <Footer />
        </div>
  );
};

export default WrapperComponent;
