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

const WrapperComponent = ({handleNavClick}) => {
  return (
    // <div className="vh-100 ">
  <div className="wrapper-component">
            <Element name="home"  id="home"><Home handleNavClick={handleNavClick} /></Element>
            <Element name="aboutme" style={{height: '100%'}}  id="aboutme"><AboutMe handleNavClick={handleNavClick} /></Element>
            <Element name="whatido" style={{height: '100%'}}  id="whatido"><WhatIDo handleNavClick={handleNavClick} /></Element>
            <Element name="resume" id="resume"><Resume handleNavClick={handleNavClick} /></Element>
            <Element name="portfolio" id="portfolio"><Portfolio handleNavClick={handleNavClick}/></Element>
            <Element name="testimonials" style={{height: '100%'}} id="testimonials"><Testimonial handleNavClick={handleNavClick}/></Element>
            <Element name="contact"style={{height: '100%'}}  id="contact"><Contact handleNavClick={handleNavClick}/></Element>
            
            <Footer />
        </div>
  );
};

export default WrapperComponent;
