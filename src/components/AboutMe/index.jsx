// src/pages/AboutMe/index.jsx

import React from 'react';
import './AboutMe.css'; 
import resumeFile from '../../Documents/resume.pdf';

const AboutMe = ({ }) => {
  return (
    <section id="about" className="about-me">
    
    <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24   fw-600 w-100 mb-0 " 
            }
          >
            Know Me More
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            ABOUT ME
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
        </div>
     <div className="container">
      <p className="introduction">
        I'm Stanislav Morozan, a passionate Full Stack Web Developer and Architectural Technologist based in Toronto, Canada. With a keen eye for design and a commitment to building functional, accessible websites and applications, I blend technical skills with a creative approach to solve complex problems and create memorable online experiences.
      </p>
      <div className="personal-details">
        <p><strong>From:</strong> Toronto, Canada</p>
        <p><strong>Skills:</strong> JavaScript, React, Node.js, MongoDB ,Architectural Design</p>
        <p><strong>Hobbies:</strong> Driving, Woodworking, Urban Exploration</p>
      </div>
     
      
    </div>
  </section>
  );
};

export default AboutMe;
