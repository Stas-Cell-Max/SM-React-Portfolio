import React from 'react';
import './MobilePortfolio.css'; 

const MobilePortfolio = ({ projectsData }) => {
    return (
        <div className="mobile-portfolio container">
            {projectsData.map((project, index) => (
                <div key={index} className="project card mb-3">
                    <img src={project.thumbImage} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.projectInfo}</p>
                        <a href={project.url.link} className="btn btn-primary">View Project</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MobilePortfolio;
