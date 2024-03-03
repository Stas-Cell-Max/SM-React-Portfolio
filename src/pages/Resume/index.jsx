// src/pages/Resume/index.jsx

import React from 'react';

const Resume = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Resume</h1>
      <div className="text-center mb-4">
        <a href="path_to_your_resume.pdf" className="btn btn-primary" download>Download My Resume</a>
      </div>
      <h2>Proficiencies</h2>
      <ul>
        {/* Replace with own proficiencies */}
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        {/* ...other proficiencies */}
      </ul>
    </div>
  );
};

export default Resume;
