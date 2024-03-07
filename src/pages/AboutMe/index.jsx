// src/pages/AboutMe/index.jsx

import React from 'react';
import myPhoto from '../../assets/images/profile.jpg' 

const AboutMe = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src="../../assets/images/profile.jpg" alt="Stanislav Morozan" className="img-thumbnail" />
        </div>
        <div className="col-12 col-md-8">
          <h1>About Me</h1>
          <p>
            Write a short bio here. ..........................
            .............
            Remember to keep it professional and engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
