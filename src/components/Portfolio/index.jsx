import React, { useEffect, useState, useRef} from 'react';
import Isotope from "isotope-layout";
import ProjectDetailsModal from '../ProjectDetailsModal';
import './Portfolio.css';



const Portfolio = () => {

  // Define filter categories
  const filters = {
    ALL: '*',
    WEB_DEV: 'web-dev',
    ARCH_TECH: 'arch-tech'
  };

  const [filterKey, setFilterKey] = useState(filters.ALL);
  const [selectedProject, setSelectedProject] = useState(null);
  const isotope = useRef();

   // Initialize Isotope on component mount
   useEffect(() => {
    if (isotope.current) {
      filterKey === filters.ALL
        ? isotope.current.arrange({ filter: '*' })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
    
  

    // Update Isotope layout on filter change
    useEffect(() => {
      if (filterKey === '*') {
        isotope.current.arrange({ filter: `*` });
      } else {
        isotope.current.arrange({ filter: `.${filterKey}` });
      }
    }, [filterKey]);

    // Filter change handler
  const handleFilterChange = (key) => {
    setFilterKey(filters[key]);
  };

   // Handle project selection
   const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
    // Assuming I have a method to show the modal
    // I may need to adapt this if I am using a different approach for modals
  
  const portfolioData = [
    {
      title: "Las Vegas Trip Adviser",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "HTML, CSS3, JavaScript",
      industry: "Tourism",
      date: "July 16, 2023",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "/images/project-.jpg",
      sliderImages: [
        "/images/project-2.jpeg" ,
        "/images/project-2.jpeg" ,
      ],
      categories: [filters.BRAND],
    },

    {
      title: "Project Title 6",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "/images/project-.jpg",
      sliderImages: [
        "/images/project-2.jpeg" ,
        "/images/project-2.jpeg" ,
      ],
      categories: [filters.BRAND],
    },

    {
      title: "Project Title 5",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "/images/project-.jpg",
      sliderImages: [
        "/images/project-2.jpeg" ,
        "/images/project-2.jpeg" ,
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 4",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "/images/project-.jpg",
      sliderImages: [
        "/images/project-2.jpeg" ,
        "/images/project-2.jpeg" ,
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 3",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "/images/project-.jpg",
      sliderImages: [
        "/images/project-2.jpeg" ,
        "/images/project-2.jpeg" ,
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 2",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "/images/project-.jpg",
      sliderImages: [
        "/images/project-2.jpeg" ,
        "/images/project-2.jpeg" ,
      ],
      categories: [filters.BRAND],
    },
  ];

  return (
    <>
      <section id="portfolio" className="portfolio-section">
        {/* Buttons for filtering */}
        <div className="portfolio-filters">
          <button onClick={() => handleFilterChange('filters.ALL')}>All</button>
          <button onClick={() => handleFilterChange('filters.WEB_DEV')}>Web Development</button>
          <button onClick={() => handleFilterChange('filters.ARCH_TECH')}>Architect Technologist</button>
        </div>

        <div className="grid">
          {/* Map through the projects and display them */}
          {portfolioData.map(project => (
            <div key={project.id} className={`grid-item ${project.categories.join(' ')}`}>
              <img src={project.thumbImage} alt={project.title} />
              <button onClick={() => handleProjectClick(project)}>View Details</button>
            </div>
          ))}
        </div>
      </section>
      
      {selectedProject && (
  <ProjectDetailsModal
    project={selectedProject}
    closeModal={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Portfolio;