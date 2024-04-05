// src/pages/AboutMe/index.jsx

import React from 'react';
import './AboutMe.css'; 


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
      Leveraging a solid foundation in architectural technology and a life-long commitment to learning, I am a Full Stack Web Developer known for blending problem-solving skills and creativity to develop user-friendly applications. With a track record of managing complex projects from conception through execution, I excel in delivering solutions that enhance user experience and functionality. Specializing in JavaScript, React, Node.js, and responsive design, I am passionate about adopting a mobile-first approach to meet and exceed project goals. Eager to contribute to a quality-driven team, aiming to innovate and elevate web experiences.
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
