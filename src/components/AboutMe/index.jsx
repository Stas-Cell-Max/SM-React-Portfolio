// src/pages/AboutMe/index.jsx

import React from 'react';
import './AboutMe.css'; 

// AboutMe component displays information about the developer
const AboutMe = ({ }) => {
  return (
    <section id="aboutme" className="about-me">
    
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
      As a Full Stack Web Developer with a solid foundation in architectural technology, I blend problem-solving skills and creativity to develop user-friendly applications. I excel in managing complex projects, specializing in JavaScript, React, Node.js, and responsive design. Passionate about a mobile-first approach, I'm eager to contribute to a quality-driven team and elevate web experiences.
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
