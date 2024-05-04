import React from 'react';
import './WhatIDo.css'; 

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="what-i-do-section">
       <div className={"container " }>
      <div className="position-relative d-flex text-center mb-5 ">
          <h2
            className={"text-24 fw-600 w-100 mb-0 " 
            }
          >
            What I Do
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            SERVICES
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
        </div>
        
        <div className="row">
          {/* Web Development */}
          <div className="col-md-4 service-item">
            <span className="fa-stack fa-4x">
              <i className="fas fa-stack-2x text-primary"></i>
              <i className="fas fa-code fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
            <h4 className="service-heading"> <strong>Web Development </strong> </h4>
            <p className="text-muted">Building responsive and dynamic websites and web applications.</p>
          </div>
          </div>

          {/* Web Design */}
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-stack-2x text-primary"></i>
              <i className="fas fa-laptop-code fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
            <h4 className="service-heading"> <strong> Web Design</strong></h4>
            <p className="text-muted">Designing engaging and user-focused web experiences.</p>
          </div>
         </div>
          {/* Architectural Technology */}
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas  fa-stack-2x text-primary"></i>
              <i className="fas fa-drafting-compass fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
            <h4 className="service-heading"> <strong> Architectural Technology</strong></h4>
            <p className="text-muted">Integrating technology into building design and architecture.</p>
          </div>
          </div>

          {/* Architectural Design */}
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-stack-2x text-primary"></i>
              <i className="fas fa-light fa-pen-ruler fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
            <h4 className="service-heading"> <strong> Architectural Design</strong></h4>
            <p className="text-muted">Creating eco-friendly and sustainable architectural solutions.</p>
          </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
