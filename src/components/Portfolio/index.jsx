import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

// Example project data with category
const portfolioData = [
  { id: 1, category: 'Web Dev', title: 'Project One', image: 'path-to-web-dev-image', description: 'Web Development Project', link: '/project-one' },
  { id: 2, category: 'Arch Tech', title: 'Project Two', image: 'path-to-arch-tech-image', description: 'Architectural Technology Project', link: '/project-two' },
  // ... Add all six projects here
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="text-center">My Work</h2>
        
        <div className="portfolio-buttons text-center">
          <button onClick={() => setActiveCategory('All')} className={`btn ${activeCategory === 'All' ? 'btn-primary' : 'btn-outline-primary'}`}>All</button>
          <button onClick={() => setActiveCategory('Web Dev')} className={`btn ${activeCategory === 'Web Dev' ? 'btn-primary' : 'btn-outline-primary'}`}>Web Dev</button>
          <button onClick={() => setActiveCategory('Arch Tech')} className={`btn ${activeCategory === 'Arch Tech' ? 'btn-primary' : 'btn-outline-primary'}`}>Arch Tech</button>
        </div>

        <div className="row portfolio-cards">
          {filteredProjects.map((project) => (
            <div className="col-md-4 portfolio-card" key={project.id}>
              <div className="card mb-4 shadow-sm">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <Link to={project.link} className="btn btn-secondary">View Project</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
