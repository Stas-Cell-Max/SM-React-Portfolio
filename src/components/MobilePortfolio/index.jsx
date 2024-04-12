import React from 'react';
import './MobilePortfolio.css'; // Mobile-specific styles

const MobilePortfolio = ({ projectsData }) => {
    return (
        <div className="mobile-portfolio">
            {projectsData.map(project => (
                <div key={project.id} className="mobile-portfolio-item">
                    <img src={project.thumbImage} alt={project.title} className="mobile-portfolio-image" />
                    <div className="mobile-portfolio-content">
                        <h5>{project.title}</h5>
                        <p>{project.projectInfo}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MobilePortfolio;
