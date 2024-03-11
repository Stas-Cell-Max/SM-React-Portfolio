import React from 'react';
import './Resume.css';


const Resume = () => {
  return (
    <div className="resume-section" id="resume">
    <div className="container">
      <h2 className="section-heading">Resume</h2>
      <hr className="section-heading-hr"/>

      <div className="education-experience-container">
        <div className="education">
          <h3>My Education</h3>
              <h4>Bachelor's Degree</h4>
              <h5>2005 - 2010</h5>
              <p><em>Technical University of Moldova</em></p>
              <p>Computer Science </p>
            </div>
            <div className="resume-item">
              <h4>Advaced Diploma</h4>
              <h5>2014 - 2018</h5>
              <p><em>George Brown College</em></p>
              <p>Architectural Technology </p>
            </div>
            <div className="resume-item">
              <h4>Certification</h4>
              <h5>2023 - 2024</h5>
              <p><em>University of Toronto</em></p>
              <p>Full Stack Web Development</p>
            </div>
            {/* Add more resume-item divs as needed */}
          </div>
          
          {/* Experience Section */}
          <div className="experience">
            <h3>My Experience</h3>
            <div className="resume-item">
              <h4>Jr. UI UX Designer</h4>
              <h5>2012 - 2013</h5>
              <p><em>ThemeforestGump</em></p>
              <p>Description of job responsibilities and achievements</p>
            </div>
            {/* Add more resume-item divs as needed */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-container">
          <h3>My Skills</h3>
          <div className="skill-item">
          <h4>HTML/CSS</h4>
          <h4>JavaScript</h4>
          <h4>JavaScript</h4>
          <h4>JavaScript</h4>
          <h4>JavaScript</h4>
        </div>
              
              {/* Add more skill-item divs as needed */}
            
          </div>
        

        {/* CV Link/Download */}
        <div className="row">
          <div className="col-md-12 text-center">
            <a href="/path-to-your-cv.pdf" download className="btn btn-primary mt-3">Download CV</a>
          </div>
        </div>
        </div>
        
        );
      
}

export default Resume;
