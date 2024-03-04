// src/pages/Resume/index.jsx

import React from 'react';
//import resumeFile from '../../assets/resume.pdf';

const Resume = () => {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            {/*<a href={resumeFile} download className="btn btn-primary mb-3">Download Resume</a>*/}
            <ul className="list-group">
              <li className="list-group-item">Skill 1</li>
              <li className="list-group-item">Skill 2</li>
              <li className="list-group-item">Skill 3</li>
              {/* Add more skills or proficiencies here */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;
