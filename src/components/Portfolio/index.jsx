import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout"; // Library for layout filtering
import imagesLoaded from 'imagesloaded'; // Ensures images are loaded before triggering layout
import ProjectDetailsModal from "../ProjectDetailsModal"; // Modal for project details
import "./Portfolio.css"; // Component-specific CSS

// Portfolio component: displays project list with filter functionality
const Portfolio = ({ darkTheme }) => {
  const filterContainerRef = useRef(null); // Ref for portfolio filter container
  const isotope = useRef(null); // Ref for Isotope instance
  const [filterKey, setFilterKey] = useState("*"); // State to manage active filter
  const [setImagesLoadedCount] = useState(0); // Tracks images loaded for layout
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null); // Stores selected project for modal


 // Filter options for portfolio projects
  const filters = {
    WEBDEV: { displayName: "Web Development", className: "webdev" },
    ARCHTECH: { displayName: "Architectural Technology", className: "archtech" },
    ARCHDESIGN: { displayName: "Architectural Design", className: "archdesign" },
  };
  
 // Array of projects displayed in portfolio
  const projectsData = [ 
// Each project object contains details such as title, description, technologies, images, etc.
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
      thumbImage: "images/VegasMama.png",
      sliderImages: [
        "images/VegasMama1.png",
        "images/VegasMama2.png",
        "images/VegasMama3.png",
        "images/VegasMama4.png",
      ],
      categories: ["*", "webdev"],
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
        link: " https://brim-loft-22a58ce3b819.herokuapp.com/",
        gitRepo: "https://github.com/waltscode/BrimLoft"
        
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
        "images/Brimloft4.png",
        "images/Brimloft2.png",
        "images/Brimloft3.png",
        "images/Brimloft5.png",
        
      ],
      categories: ["*","webdev"],
    },
    {
      id: 3,
      title: "OPP Modernization Phase 2",
      projectInfo:
        "Contributed to the design of nine new community police detachment facilities for the OPP in Ontario through a Design Build Finance (DBF) delivery method. Completed in 2022, these facilities, located in Clinton, Hawkesbury, Little Current, Marathon, Mississauga, Moosonee, Orillia, Parry Sound, and Fort Frances, support modern police operations.",
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
      categories: ["*","archtech"],
    },
    {
      id: 4,
      title: "One Bloor",
      projectInfo:
        "One Bloor is a 76-storey landmark mixed-use residential building at a major Toronto intersection and subway junction. The design increases density while enhancing the public realm, with a six-storey podium that preserves the street scale. I designed and documented key architectural elements of the building's envelope.",
      client: "Hariri Pontarini Architects",
      technologies: "Revit, AutoCad, Photography",
      industry: "Architecture",
      date: "April, 2018",
      url: {
        name: "https://www.onebloor.com/",
        link: "https://hariripontarini.com/projects/one-bloor/",
      },
     
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
    
      thumbImage: "images/OneBloor-1.png",
      sliderImages: [
        "images/OneBloor_Elev.png",
        "images/OneBloor_Elev1.png",
        "images/OneBloor_CanopDet.png",
        "images/OneBloor_CanopDet2.png",
        "images/OneBloor_CanopDet3.png",
        "images/OneBloor_CanopDet4.png",
      ],
      categories: ["*", "archtech"],
    },
    {
      id: 5,
      title: "Maxidom",
      projectInfo:
        "Maxidom is a professionally crafted, modern, responsive website for a finishing carpentry company. It highlights services like trim work, door installation, cabinetry, flooring, and stair refinishing. The site features SEO optimization, interactive elements, and easy navigation to explore products and contact the company.",
      client: "Maxidom Inc.",
      technologies: " HTML5, CSS3, Java Script, jQuery",
      industry: "Web Development",
      date: "June 16, 2024",
      url: {
        name: "https://maxidom.net/",
        link: "https://maxidom.net/",
      },
      socialLinks: {
        facebook: "https://www.facebook.com/MaxidomMax",
      
        instagram: "https://www.instagram.com/maxidom_max/",
  
      },
      thumbImage: "images/maxidom3.jpg",
      sliderImages: [
        "images/maxidom1.jpg",
        "images/maxidom2.jpg",
        "images/maxidom4.jpg",
        "images/maxidom5.jpg",
        "images/maxidom6.jpg",
        "images/maxidom7.jpg",
        "images/maxidom8.jpg",
        "images/maxidom9.jpg",
        "images/maxidom10.jpg",
        "images/maxidom11.jpg",
      ],
      categories: ["*", "webdev"],
    },
    {
      id: 6,
      title: "The Well",
      projectInfo:
        "The Well represents a groundbreaking collaboration, uniting the vision and expertise necessary for the creation of the city’s first truly integrated mixed-use project. Hariri Pontarini Architects (HPA) played a pivotal role in this development. As a key team member, I played a key role in designing and documenting this architectural masterpiece.",
      client: "Hariri Pontarini Architects",
      technologies: "Revit, BIM, Lumion",
      industry: "Architecture & Urbanism",
      date: "March, 2018",
      url: {
        name: "https://thewelltoronto.com/",
        link: "https://hariripontarini.com/projects/the-well/",
      },
     
      thumbImage: "images/TheWell-Aerial.png",
      sliderImages: [
        "images/TheWell-3D2.png",
        "images/TheWell-3D.png",
        "images/TheWell-3DA.png",
        "images/TheWell-Site.png",
        "images/TheWell-Fac1.png",
        "images/TheWell-Fac2.png",
        "images/TheWell-Podium.png",
        "images/TheWell-Sect.png",
        "images/TheWell-Sect1.png",
        
      ],
      categories: ["*",  "archdesign"],
    },

    {
      id: 7,
      title: "Weather Forecast Dashboard",
      projectInfo:
        "A weather forecasting application that provides current and future weather data for cities around the world. It uses the OpenWeatherMap API to fetch real-time weather data, including a 5-day forecast.",
      client: "Alexandee Meyer Inc.",
      technologies: "HTML, CSS, JavaScript, OpenWeatherMap API",
      industry: "Web Development",
      date: "Feb, 2024",
      url: {
        name: "www.example.com",
        link: "https://github.com/Stas-Cell-Max",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/Weather.png",
      sliderImages: [
        "images/project-4.png",
        "images/project-5.png",
      ],
      categories: ["*", "webdev"],
    },
    {
      id: 8,
      title: "Bayview Village",
      projectInfo:
        "The Bayview Village Redevelopment is an ambitious project featuring six mixed-use buildings, designed by HPA and DIALOG. Situated at the intersection of Bayview Avenue and Sheppard Avenue East. As a vital team member, I contributed significantly to the design and documentation processes of this transformative project.",
      client: "Hariri Pontarini Architects",
      technologies: "BIM, Revit, Lumion",
      industry: "Architecture",
      date: "July, 2020",
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
      thumbImage: "images/BayviewVillage_3D.png",
      sliderImages: [
        "images/BayviewVillage_3D1.png",
        "images/BayviewVillage_3D2.png",
        "images/BayviewVillage_Fac.png",
        "images/BayviewVillage_Section.png",
        "images/BayviewVillage_Section1.png",
        "images/BayviewVillage_SitePlan.png",
      ],
      categories: ["*", "archdesign"],
    },
    {
      id: 9,
      title: "Case Study",
      projectInfo:
        "As an Architectural Designer and Building Science team member, I researched and designed the thermal performance of building envelopes. This study focused on the intricate balance of orientation and composition to enhance indoor comfort and energy efficiency. The building envelope acts as a barrier against external elements, requiring precise design to manage climate variations effectively. My work involved optimizing these elements to improve thermal efficiency and ensure sustainable, comfortable living environments.",
      client: "Hariri Pontarini Architects",
      technologies: "BIM, Revit",
      industry: "Architecture, Building Science",
      date: "July 16, 2019",
     
      thumbImage: "images/CaseStudy-4.png",
      sliderImages: [
        "images/CaseStudy-1.png",   
        "images/CaseStudy-2.png",
        "images/CaseStudy-3.png",
      ],
      categories: ["*", "archtech"],
    },

    {
      id: 10,
      title: "Personal Portfolio",
      projectInfo:
        "This React-based single-page application (SPA) is the personal portfolio of Stanislav Morozan. It showcases his development projects and professional journey with a clean, user-friendly interface. Built using the latest web technologies, it features responsive design with Bootstrap, smooth navigation, interactive project displays, and a contact form. The portfolio effectively highlights Stanislav's skills and accomplishments.",
      client: "Stanislav Morozan",
      technologies: "React.js,Vite,Bootstrap,React Router,React-scroll,Slick Carousel,Isotope-layout,CSS",
      industry: "Web Development",
      date: "July 16, 2019",
      url: {
        name: "www.SM_Portfolio.com",
        link: "https://stas-cell-max.github.io/SM-React-Portfolio/",
      },
      socialLinks: {
        facebook: "https://facebook.com/stas.moozan",
        instagram: "https://instagram.com/stas_moozan",
        LinkedIn: "https://www.linkedin.com/in/stanislavmorozan/",
  
      },
      thumbImage: "images/port.jpg",
      sliderImages: [
        "images/port1.jpg",   
        "images/port3.jpg",
        "images/port4.jpg",
        "images/port5.jpg",   
        "images/port7.jpg",
        "images/port6.jpg",
        "images/port9.jpg",
      ],
      categories: ["*", "webdev"],
    },
    
  ];


 // Effect to initialize Isotope layout and handle filtering
  useEffect(() => {
    if (filterContainerRef.current) {
      imagesLoaded(filterContainerRef.current, function () {
        isotope.current = new Isotope(filterContainerRef.current, {
          itemSelector: '.filter-item', // Define which elements Isotope should filter
          layoutMode: 'masonry', // Masonry layout for dynamic positioning
        });
      });
    }
  
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
      
      // Force layout reflow after showing all elements with a slight delay
      if (filterKey === '*') {
        setTimeout(() => {
          isotope.current.reloadItems();
          isotope.current.layout(); // Recalculate layout for all elements
        }, 100); // Adjust delay as needed
      }
    }
  
    return () => {
      if (isotope.current) {   // Clean up Isotope instance when component unmounts
        isotope.current.destroy();
      }
    };
  }, [filterKey]);
  
  
  // Updates filter key when user clicks a filter
  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section id="portfolio" className="portfolio-section ">
        <div className="container ">
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24 fw-600 w-100 mb-0 " 
              }
            >
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
            {Object.keys(filters).map((key, i) => (
              <li className="nav-link" key={i}>
                <div
                  className={
                    "nav-link " +
                    (filterKey === filters[key].className ? "active" : "")
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleFilterKeyChange(filters[key].className)}
                >
                  {filters[key].displayName}
                </div>
              </li>
            ))}
          </ul>

          {/* portfolio cards */}
          <div className="portfolio popup-ajax-gallery">
            
          <div className="row portfolio-filter" ref={filterContainerRef}>
              {projectsData.length > 0 &&
                projectsData.map((project, ) => {
                  
                    if (project.categories.includes(filterKey) || filterKey === "*") {
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
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                    } else {
                          return null; // Don't render the project if it doesn't match the filter
                        }
                })}
            </div>
          </div>
        </div>
        <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={false}
        ></ProjectDetailsModal>
      </div>

      </section>
      
    </>
  );
};

export default Portfolio;