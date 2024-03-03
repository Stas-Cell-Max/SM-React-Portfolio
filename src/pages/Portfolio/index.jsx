// src/pages/Portfolio/index.jsx

import React from 'react';
import Project from '../../components/Project/Project';

const Portfolio = () => {
  // Placeholder data for projects
  const projects = [
    {
      title: 'Project One',
      image: 'path_to_image.jpg',
      deployedLink: 'http://deployedlink.com',
      repoLink: 'http://githublink.com'
    },
    // ...other projects
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center">My Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
