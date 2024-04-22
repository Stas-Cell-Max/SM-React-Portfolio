import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from 'imagesloaded';
import ProjectDetailsModal from "../ProjectDetailsModal";
import "./Portfolio.css";

const Portfolio = ({ darkTheme }) => {
  const filterContainerRef = useRef(null);
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0); // Correct state function name
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

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
      thumbImage: "images/Brimloft.png",
      sliderImages: [
        "images/Brimloft.png",
        "images/Brimloft2.png",
        "images/Brimloft3.png",
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
      title: "Bloor One",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
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
      categories: ["*", filters.ARCHTECH],
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
        link: "https://hariripontarini.com/projects/the-well/",
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
      title: "The Well",
      projectInfo:
        "The Well unites the vision and unique specialty of two top urban developers. The one-of-a-kind partnership between RioCan REIT and Allied Properties REIT combines the residential, retail and office expertise necessary for the creation of the city’s first truly integrated mixed-use project.",
      client: "Hariri Pontarini Architects",
      technologies: "Revit, BIM, Lumion",
      industry: "Architecture & Urbanism",
      date: "March, 2018",
      url: {
        name: "https://thewelltoronto.com/",
        link: "https://hariripontarini.com/projects/the-well/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
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
      categories: ["*", filters.ARCHDESIGN],
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
      categories: ["*", filters.WEBDEV],
    },
    {
      id: 8,
      title: "Bayview Village",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
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
      categories: ["*", filters.ARCHDESIGN],
    },
    {
      id: 9,
      title: "Case Study",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
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
      categories: ["*", filters.ARCHTECH],
    },
  ];

  useEffect(() => {
    // Ensure the filter container ref is current and has been rendered
    if (filterContainerRef.current) {
      // Use imagesLoaded to wait until all images are fully loaded
      imagesLoaded(filterContainerRef.current, function () {
        // Now that images are loaded, initialize Isotope
        isotope.current = new Isotope(filterContainerRef.current, {
          itemSelector: '.filter-item',
          layoutMode: 'masonry',
        });
      });
    }
  
    // Cleanup function to destroy Isotope instance when component unmounts
    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []); // The empty array ensures this effect runs only once on mount

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
            
          <div className="row portfolio-filter" ref={filterContainerRef}>
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