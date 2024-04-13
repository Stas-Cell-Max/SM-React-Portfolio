import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "../ProjectDetailsModal";
import imagesLoaded from 'imagesloaded';
import "./Portfolio.css";



const Portfolio = () => {
  const isotope = useRef();

  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
 
// Filters map
  const filters = {
    WEBDEV: "Web Development",
    ARCHTECH: "Architectural Technology",
    ARCHDESIGN: "Architectural Design",
  };

  const projectsData = [
    {
      id: 1,
      title: "Las Vegas Trip Advisor",
      projectInfo:
        "The Las Vegas Explorer app is a dynamic web application designed to provide users with an immersive experience of Las Vegas. From premium or basic packages to event information and interactive features, this app serves as a gateway to the thrilling world of the city.",
      client: "The One",
      technologies: " HTML5, CSS3, JavaScript",
      industry: "Web Development",
      date: "October, 2023",
      url: {
        name: "https://ozdaldogru.github.io/Las-Vegas-Trip-Organizer/",
        link: "https://ozdaldogru.github.io/Las-Vegas-Trip-Organizer/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "/images/VegasMama2.png",
      sliderImages: [
        "/images/VegasMama2.png",
        "/images/VegasMama3.png",
        "/images/VegasMama1.png",
        "/images/VegasMama4.png",
      ],
      categories: ["*", filters.WEBDEV],
    },
    {
      id: 2,
      title: "BrimLoft",
      projectInfo:
        "BrimLoft is a dynamic web application designed for hat enthusiasts. It offers users an exclusive platform to explore, register, and purchase a wide range of stylish hats. With features like user authentication, personalized profiles, and an intuitive shopping interface, BrimLoft elevates the online hat shopping experience.",
      client: "Group|4",
      technologies: "[HTML, CSS, JavaScript, Handlebars] [Node.js, Express.js] [MySQL, Sequelize ORM] ",
      industry: "Web Development",
      date: "December, 2023",
      url: {
        name: "https://protected-gorge-42703-db942224a3bb.herokuapp.com/",
        link: " https://protected-gorge-42703-db942224a3bb.herokuapp.com/",
        gitRepo: "https://github.com/Stas-Cell-Max/brim-loft"
        
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/Brimloft.png",
      sliderImages: [
        "images/Brimloft.png",
        "images/Brimloft2.png",
        "images/Brimloft3.png",
      ],
      categories: ["*", filters.WEBDEV],
    },
    {
      id: 3,
      title: "OPP Modernization Phase 2",
      projectInfo:
        "A design of nine new community police detachment facilities for the OPP through an Alternative Financing and Procurement (AFP) model in Ontario in a Design Build Finance (DBF) delivery method, to better support modern police operations. The detachments vary in size and are located in Clinton, Hawkesbury, Little Current, Marathon, Mississauga, Moosonee, Orillia, Parry Sound and Fort Frances. Design and construction was completed in phases with completion in 2022.",
      client: "Ontario Provincial Police",
      technologies: "BIM, Revit, Autocad, BlueBeam",
      industry: "Architectural Technology",
      date: "July, 2018",
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
      thumbImage: "images/OPP.webp",
      sliderImages: [
        "images/OPP.webp",
        "images/OPP1.webp",
        "images/OPP2.webp",
      ],
      categories: ["*", filters.ARCHTECH],
    },
    {
      id: 4,
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
      thumbImage: "images/OPP.webp",
      sliderImages: [
        "images/project-4.png",
        "images/project-9.png",
      ],
      categories: ["*", filters.ARCHTECH, filters.ARCHDESIGN],
    },
    {
      id: 5,
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
      thumbImage: "images/OPP.webp",
      sliderImages: [
        "images/project-10.jpeg",
        "images/project-9.png",
      ],
      categories: ["*", filters.ARCHTECH],
    },
    {
      id: 6,
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
      thumbImage: "images/OPP.webp",
      sliderImages: [
        "images/project-7.jpg",
        "images/project-8.JPG",
      ],
      categories: ["*", filters.ARCHDESIGN],
    },
    {
      id: 7,
      title: "Project Title 7",
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
      thumbImage: "images/OPP.webp",
      sliderImages: [
        "images/project-4.png",
        "images/project-5.png",
      ],
      categories: ["*", filters.WEBDEV, filters.ARCHTECH],
    },
    {
      id: 8,
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
      thumbImage: "images/OPP.webp",
      sliderImages: [
        "images/project-7.jpg",
        "images/project-8.JPG",
      ],
      categories: ["*", filters.ARCHDESIGN],
    },
  ];

  // Initialize Isotope after all images are loaded
  useEffect(() => {
    const imgLoad = imagesLoaded('.portfolio-filter');
    imgLoad.on('always', function() {
      if (isotope.current) {
        isotope.current.layout();
      }
    });
  }, []);
  
  useEffect(() => {
    function handleResize() {
      if (isotope.current) {
        isotope.current.layout();
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle filter key change and window resize
  useEffect(() => {
    const handleLayout = () => {
      if (isotope.current) {
        isotope.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
      }
    };

    // Apply layout on filter change
    handleLayout();

    // Re-apply layout on window resize with debounce
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleLayout, 300);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [filterKey]);

  // Update Isotope layout when imagesLoadedCount changes
  useEffect(() => {
    if (imagesLoadedCount === projectsData.length) {
      if (isotope.current) {
        isotope.current.layout();
      }
    }
  }, [imagesLoadedCount]);

  useEffect(() => {
    const iso = isotope.current;
    
    // Instantiate ResizeObserver
    const resizeObserver = new ResizeObserver(entries => {
      if (iso) {
        iso.arrange(); // or iso.layout()
      }
    });
  
    // Observe the Isotope container for size changes
    const container = document.querySelector('.portfolio-filter');
    if (container) {
      resizeObserver.observe(container);
    }
  
    // Clean up observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [imagesLoadedCount]);
  
  

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  return (
    <>
      <section id="portfolio" className="min-vh-100">
        <div className="container px-lg-5">
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 fw-600 w-100 mb-0 text-light opacity-4">
              My Work
            </h2>
            <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ">
              PORTFOLIO
              <span className="heading-separator-line  d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}

          {/* Filter Menu */}
          <ul className="position-relative d-flex mb-5 justify-content-evenly">
            <li className="nav-link">
              <div
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
                style={{ cursor: "pointer" }}
              >
                All
              </div>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-link" key={i}>
                <div
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </div>
              </li>
            ))}
          </ul>

          {/* portfolio cards */}
          <div className="portfolio popup-ajax-gallery">
            
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, ) => {
                  if (project.categories.includes(filterKey)) {
                    return (
                      <div
                        className={
                          "col-sm-6 col-lg-4 filter-item " +
                          project.categories.join(" ")
                        }
                        key={project.id}
                      >
                        <div className="portfolio-box rounded">
                          <div className="portfolio-img rounded">
                            <img
                              onLoad={() => {
                                setImagesLoadedCount(prevCount => prevCount + 1); 
                              }}
                              className="img-fluid d-block portfolio-image"
                              src={project.thumbImage}
                              alt=""
                            />
                            <div className="portfolio-overlay">
                              <a
                                className="popup-ajax stretched-link"
                                href=""
                                onClick={() => {
                                  setSelectedProjectDetails(project);
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              />
                              <div className="portfolio-overlay-details">
                                <h5 className="text-white fw-400">
                                  {project.title}
                                </h5>
                                <span className="text-light">Category</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return "";
                  }
                })}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={false}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
