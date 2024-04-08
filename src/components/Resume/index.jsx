import React from 'react';
import './Resume.css';
import resumeFile from '../../Documents/Resume_Stanislav Morozan_P.pdf';


const Resume = () => {
  
    const educationDetails = [
      {
        yearRange: "2005 - 2010",
        title: "Science of Information Technology",
        place: "Technical University of Moldova",
        desc: "Coursework encompassed network architecture, database management, software development, web technologies, cybersecurity, system analysis, and IT project management, equipping me with a foundational understanding of technology in business operations.",
      },
      {
        yearRange: "2014 - 2018",
        title: "Architectural Technology",
        place: "George Brown College",
        desc: "Comprehensive study in building design and architectural drafting, BIM (Building Information Modeling), sustainable design principles, construction technology, and project management, preparing for innovative solutions in architectural development and execution.",
      },
      {
        yearRange: "2023 - 2024",
        title: "Web Development",
        place: "University of Toronto",
        desc: "Intensive training in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Covered full-stack development practices, RESTful APIs, CRUD operations, and modern JavaScript, emphasizing responsive design and user experience.",
      },
    ];
    const experienceDetails = [
      {
        yearRange: "2016 - 2018",
        title: "Architectural Technologist",
        place: "NORR",
        desc: "Enabled digital transformation of architectural solutions, translating physical design principles into the virtual realm, which enhanced client presentations and project bids. Facilitated the high-fidelity digital conversion of technical drawings and specifications, ensuring detailed accuracy and improving project team collaboration by 20%.  Led the adoption of data-driven design techniques, leveraging analytics to inform design decisions and enhance UI adaptability, significantly reducing revision cycles by 25%. ",
      },
      {
        yearRange: "2018 - 2020",
        title: "Architectural Design Technologist",
        place: "Hariri Pontarini Architects",
        desc: "Transformed project documentation processes by leading the digital transition using BIM methodologies, creating highly interactive and comprehensive project representations akin to sophisticated web applications, enhancing project stakeholder engagement by 30%.  Implemented responsive design principles in architectural visualization tools, significantly improving accessibility and user interaction, marking a firm-wide shift towards more digitally inclusive design practices.  Pioneered sustainable design integration into digital project delivery, optimizing code for energy-efficient operations and reducing digital carbon footprint by 15%.",
      },
      {
        yearRange: "2020 - 2024",
        title: "Tech Integration Architect",
        place: "One York Construction Management",
        desc: "Revolutionized client engagement by architecting the company's website from the ground up,leveraging architectural design principles to enhance visualization and interactivity. Direct involvement led to a 20% increase in online project inquiries. Orchestrated the end-to-end development of a construction project management platform, facilitating unprecedented collaboration among stakeholders. This initiative reduced project delivery times by 25% and significantly improved stakeholder satisfaction.  Championed user-centric design, establishing robust feedback loops that informed continuous improvements, resulting in a 40% uptick in platform user satisfaction. Led targeted training programs that bolstered platform adoption and user proficiency. ",
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
            <div className="col-md-6 col-sm-12">
              <h3
                className={
                  "text-6 fw-600 mb-4 " 
                }
              >
                My Education
              </h3>
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
                    <p className={ "mb-0 "}> <strong>
                      {value.place} </strong>
                    </p>
                    <p className={"mb-0 "}>
                      {value.desc}
                    </p>
                  </div>
                ))}
            </div>
            {/* My Experience */}
            <div className="col-md-6 col-sm-12">
              <h3
                className={
                  "text-6 fw-600 mb-4 " 
                }
              >
                My Experience
              </h3>
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
                    <p className={ "mb-0 "}> <strong> 
                      {value.place}</strong>
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
  <a title='Git' href="https://git-scm.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>&nbsp;&nbsp;&nbsp;
  <a title='JavaScript' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>&nbsp;&nbsp;&nbsp;
  <a title='HTML5' href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>&nbsp;&nbsp;&nbsp;
  <a title='React' href="https://reactjs.org/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>&nbsp;&nbsp;&nbsp; 
  <a title='Jquery' href="https://jquery.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="36" height="36" alt="JQuery" /></a>&nbsp;&nbsp;&nbsp;
  <a title='CSS' href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Bootstrap' href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Node' href="https://nodejs.org/en/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Express' href="https://expressjs.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>&nbsp;&nbsp;&nbsp;
  <a title='MySQL' href="https://www.mysql.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>&nbsp;&nbsp;&nbsp;
  <a title='PostgreSQL' href="https://www.postgresql.org/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a>&nbsp;&nbsp;&nbsp;
  <a title='AWS' href="https://aws.amazon.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg" width="36" height="36" alt="AWS" /></a>&nbsp;&nbsp;&nbsp; 
  <a title='Heroku' href="https://www.heroku.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" /></a>&nbsp;&nbsp;&nbsp;
  <a title='Cloud' href="https://cloud.google.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" width="36" height="36" alt="Google Cloud" /></a>&nbsp;&nbsp;&nbsp;
   <a title='Mongoose' href="https://mongoosejs.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongoose-colored.svg" width="36" height="36" alt="Mongoose" /></a>&nbsp;&nbsp;&nbsp;
  <a title='MongoDB' href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>&nbsp;&nbsp;&nbsp;
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
