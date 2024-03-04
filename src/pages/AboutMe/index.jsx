// src/pages/AboutMe/index.jsx

import React from 'react';
import myPhoto from '../../assets/images/profile.jpg' // Assuming you have or will create a CSS file for custom styles

const AboutMe = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src="path_to_your_image.jpg" alt="Stanislav Morozan" className="img-thumbnail" />
        </div>
        <div className="col-12 col-md-8">
          <h1>Stanislav Morozan</h1>
          <p>
            Write a short bio here. ..........................
            .............
            Remember to keep itprofessional and engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
