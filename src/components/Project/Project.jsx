// src/components/Project.jsx

import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={deployedLink} className="btn btn-primary">Deployed Application</a>
        <a href={repoLink} className="btn btn-secondary">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
