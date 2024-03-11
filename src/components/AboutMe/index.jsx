// src/pages/AboutMe/index.jsx

import React from 'react';
import './AboutMe.css'; 

const AboutMe = ({ handleNavClick }) => {
  return (
    <section id="about" className="about-me">
    <div className="container">
      <h2>Know Me More</h2>
      <hr className="my-4" />
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
