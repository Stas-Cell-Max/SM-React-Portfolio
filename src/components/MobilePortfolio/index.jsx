import React from 'react';
import './MobilePortfolio.css';

const MobilePortfolio = ({ projectsData }) => {
  return (
    <section id="mobile-portfolio" className="container px-3 py-4">
      <div className="text-center mb-3">
        <h2 className="text-24 fw-600 mb-0">My Work</h2>
        <p className="text-9 text-dark fw-600">PORTFOLIO</p>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {projectsData.map(project => (
          <div key={project.id} className="card mb-4 mx-1" style={{ width: '18rem' }}>
            <img src={project.thumbImage} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.projectInfo}</p>
              <a href={project.url.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobilePortfolio;
