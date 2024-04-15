import React, { useState } from 'react';
import './MobilePortfolio.css'; // Ensure this CSS file is tailored for small screens
import ProjectDetailsModal  from "../ProjectDetailsModal";

// Portfolio data including slider images
const projectsData = [
    {
        id: 1,
        title: "Las Vegas Trip Advisor",
        projectInfo: "A dynamic web application designed to provide a comprehensive guide to Las Vegas, offering event information, interactive features, and package customization.",
        client: "The One",
        technologies: "HTML5, CSS3, JavaScript",
        industry: "Web Development",
        date: "October, 2023",
        url: "https://ozdaldogru.github.io/Las-Vegas-Trip-Organizer/",
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            instagram: "http://www.instagram.com/",
        },
        thumbImage: "/images/VegasMama2.png",
        sliderImages: [
            "/images/VegasMama2.png",
            "/images/VegasMama3.png",
            "/images/VegasMama1.png",
            "/images/VegasMama4.png",
        ],
        categories: ["Web Development"],
    },
    {
        id: 2,
        title: "BrimLoft",
        projectInfo: "An exclusive platform for exploring, registering, and purchasing stylish hats, featuring user authentication and personalized profiles.",
        client: "Group|4",
        technologies: "[HTML, CSS, JavaScript, Handlebars] [Node.js, Express.js] [MySQL, Sequelize ORM]",
        industry: "Web Development",
        date: "December, 2023",
        url: "https://protected-gorge-42703.herokuapp.com/",
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            instagram: "http://www.instagram.com/",
        },
        thumbImage: "/images/Brimloft.png",
        sliderImages: [
            "/images/Brimloft.png",
            "/images/Brimloft2.png",
            "/images/Brimloft3.png",
        ],
        categories: ["Web Development"],
    },
    // Additional projects can be added here
];

const filters = {
    ALL: "All",
    WEBDEV: "Web Development",
    ARCHTECH: "Architectural Technology",
    ARCHDESIGN: "Architectural Design",
};

const MobilePortfolio = () => {
    const [filterKey, setFilterKey] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = project => {
        setSelectedProject(project);
    };

    const filteredProjects = projectsData.filter(project =>
        filterKey === "All" || project.categories.includes(filterKey)
    );

    return (
        <section id="portfolio-small" className="container-fluid">
            <div className="text-center mb-4">
                <h2 className="display-4">My Work</h2>
                <p className="lead">PORTFOLIO</p>
            </div>
            <div className="filters">
                {Object.keys(filters).map((key) => (
                    <button
                        key={key}
                        onClick={() => setFilterKey(filters[key])}
                        className={`btn btn-sm ${filterKey === filters[key] ? 'btn-primary' : 'btn-outline-primary'}`}
                    >
                        {filters[key]}
                    </button>
                ))}
            </div>
            <div className="row">
                {filteredProjects.map(project => (
                    <div className="col-12 mb-3" key={project.id}>
                        <div className="card">
                            <img src={project.thumbImage} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.projectInfo}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <ProjectDetailsModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default MobilePortfolio;
