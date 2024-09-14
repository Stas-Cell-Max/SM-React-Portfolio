import React, { useEffect, useRef } from "react";
import './ProjectDetailsModal.css';  // Import CSS for ProjectDetailsModal
import Slider from "react-slick"; // Import slider component for image slideshow

// ProjectDetailsModal component displays detailed information about selected projects
const ProjectDetailsModal = ({  projectDetails }) => {
  const sliderRef = useRef();

   // Slider settings for controlling image carousel
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
 
  // When project details change, reset the slider to the first image
  useEffect(() => {
    sliderRef.current.slickGoTo(0);
  }, [projectDetails]);

  return (
    <>
      <div
        className="modal fade bg-dark-1"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div
            className={
              "modal-content " 
            }
          >
            <div className="modal-body">
              <button
                type="button"
                className={"btn-close " }
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div
                className={
                  "container ajax-container " }
              >
                <h2
                  className={
                    "titled font-weight-600 modal-title" 
                  }
                >
                  {projectDetails?.title}
                </h2>
                <div className="row g-4">
                  <div className="col-md-7">
                    <Slider {...settings} ref={sliderRef}>
                      <div className="item">
                        <img
                          className="img-fluid"
                          alt=""
                          src={projectDetails?.thumbImage}
                        />
                      </div>
                      {projectDetails?.sliderImages?.length > 0 &&
                        projectDetails?.sliderImages.map((image, index) => (
                          <div className="item" key={index}>
                            <img className="img-fluid" alt="" src={image} />
                          </div>
                        ))}
                    </Slider>
                  </div>


                  <div className="col-md-5">
                    <h4
                      className={
                        "text-4 font-weight-600 mt-4" 
                      }
                    >
                      Project Info:
                    </h4>
                    <p>{projectDetails?.projectInfo}</p>
                    <h4
                      className={
                        "text-4 font-weight-600 mt-4"
                      }
                    >
                      Project Details:
                    </h4>
                    <ul
                      className={
                        "list-style-2 "
                      }
                    >
                      <li>
                        <span
                          className={
                            "list-style-2"
                          }
                        >
                          Client:
                        </span>
                        {projectDetails?.client}
                      </li>
                      <li>
                        <span
                          className={
                            "list-style-2" 
                          }
                        >
                          Technologies:
                        </span>
                        {projectDetails?.technologies}
                      </li>
                      <li>
                        <span
                          className={
                            "list-style-2" 
                          }
                        >
                          Industry:
                        </span>
                        {projectDetails?.industry}
                      </li>
                      <li>
                        <span
                          className={
                            "list-style-2"
                          }
                        >
                          Date:
                        </span>
                        {projectDetails?.date}
                      </li>
                      <li>
                        <span
                          className={
                            "list-style-2 "
                          }
                        >
                          URL:
                        </span>
                        <a
                          href={projectDetails?.url?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {projectDetails?.url?.name}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> 
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
