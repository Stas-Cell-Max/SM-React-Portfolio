import React from 'react';
import './Resume.css';
import resumeFile from '../../Documents/resume.pdf';


const Resume = () => {
  
    const educationDetails = [
      {
        yearRange: "2005 - 2010",
        title: "Computer Science",
        place: "Technical University of Moldova",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      },
      {
        yearRange: "2014 - 2018",
        title: "Advaced Diploma",
        place: "George Brown College",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      },
      {
        yearRange: "2023 - 2024",
        title: "Certification",
        place: "University of Toronto",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      },
    ];
    const experienceDetails = [
      {
        yearRange: "2016 - 2018",
        title: "Jr. Architectural Tech",
        place: "NORR",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      },
      {
        yearRange: "2018 - 2020",
        title: "Hariri Pontarini Architects",
        place: "Architectural Tech",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      },
      {
        yearRange: "2020 - 2023",
        title: "Architectural Tech",
        place: "One York Construction Management",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      },
    ];

    const skills = [
      {
        name: "Node.js",
        percent: 65,
      },
      {
        name: "HTML/CSS",
        percent: 95,
      },
      {
        name: "Java Script",
        percent: 80,
      },
      {
        name: "React JS",
        percent: 70,
      },
      {
        name: "MongoDB",
        percent: 60,
      },
      {
        name: "Bootstrap",
        percent: 75,
      },
    ];
        

    return (
      <section
        id="resume"
        className={"section " }
      >
        <div className={"container " }>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24   fw-600 w-100 mb-0 " 
              }
            >
              Resume
            </h2>
            
            <p
              className={
                "text-9 text-dark fw-700 position-absolute w-100 align-self-center lh-base mb-0 " 
            
              }
            >
              {" "}
              SUMMARY
              <span className="heading-separator-line  d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <div className="row gx-5">
            {/* My Education */}
            <div className="col-md-6">
              <h2
                className={
                  "text-6 fw-600 mb-4 " 
                }
              >
                My Education
              </h2>
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div
                    key={index}
                    className={
                      "info-box rounded p-4 mb-4 " 
                    }
                  >
                    <p className="badge bg-primary text-2 fw-400">
                      {value.yearRange}
                    </p>
                    <h3 className={"text-5 " }>
                      {value.title}
                    </h3>
                    <p className={ "mb-0 "}>
                      {value.place}
                    </p>
                    <p className={"mb-0 "}>
                      {value.desc}
                    </p>
                  </div>
                ))}
            </div>
            {/* My Experience */}
            <div className="col-md-6">
              <h2
                className={
                  "text-6 fw-600 mb-4 " 
                }
              >
                My Experience
              </h2>
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div
                    key={index}
                    className={
                      "info-boxt rounded p-4 mb-4 " 
                    }
                  >
                    <p className="badge bg-primary text-2 fw-400">
                      {value.yearRange}
                    </p>
                    <h3 className={"text-5 " }>
                      {value.title}
                    </h3>
                    <p className={ "mb-0 "}>
                      {value.place}
                    </p>
                    <p className={"mb-0 "}>
                      {value.desc}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          {/* My Skills */}
          <h2 align="center"
            className={
              "text-6 fw-600 mt-4 mb-4 " 
            }
          >
            My Skills
          </h2>
          <p align="center">
  <a title='Git' href="https://git-scm.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>&nbsp;&nbsp;&nbsp;
  <a title='JavaScript' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>&nbsp;&nbsp;&nbsp;
  <a title='HTML5' href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>&nbsp;&nbsp;&nbsp;
  <a title='React' href="https://reactjs.org/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>&nbsp;&nbsp;&nbsp; 
  <a title='Jquery' href="https://jquery.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="36" height="36" alt="JQuery" /></a>&nbsp;&nbsp;&nbsp;
  <a title='CSS' href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Bootstrap' href="https://getbootstrap.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Node' href="https://nodejs.org/en/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Express' href="https://expressjs.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>&nbsp;&nbsp;&nbsp;
  <a title='MySQL' href="https://www.mysql.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>&nbsp;&nbsp;&nbsp;
  <a title='PostgreSQL' href="https://www.postgresql.org/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a>&nbsp;&nbsp;&nbsp;
  <a title='AWS' href="https://aws.amazon.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg" width="36" height="36" alt="AWS" /></a>&nbsp;&nbsp;&nbsp; 
  <a title='Heroku' href="https://www.heroku.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Cloud' href="https://cloud.google.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" width="36" height="36" alt="Google Cloud" /></a>&nbsp;&nbsp;&nbsp;

   <a title='Mongoose' href="https://mongoosejs.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongoose-colored.svg" width="36" height="36" alt="Mongoose" /></a>&nbsp;&nbsp;&nbsp;

  
  <a title='MongoDB' href="https://www.mongodb.com/" target="_blank" rel="noreferrer" class="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>&nbsp;&nbsp;&nbsp;
</p>
          <div className="text-center mt-5">

            <a
              className="btn btn-outline-secondary rounded-pill shadow-none"
              href={resumeFile}
              download
            >
              Download CV
              <span className="ms-1">
                <i className="fas fa-download" />
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  };

export default Resume;
