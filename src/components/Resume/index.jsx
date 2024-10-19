import React from 'react';
import './Resume.css';
import resumeFile from '../../Documents/Resume_Stanislav Morozan_WebDev.pdf';

// Resume component showcasing education, experience, and skills
const Resume = () => {
  
    const educationDetails = [
       // Array of education details
      {
        yearRange: "2022 - 2023",
        title: "Web Development",
        place: "University of Toronto",
        desc: "Mastered full-stack development technologies including MongoDB, Express.js, React.js, and Node.js (MERN Stack) specializing in dynamic, responsive web applications with RESTful APIs, modern JavaScript, and implementing best practices in code efficiency, security, and scalability.",
      },
      
      {
        yearRange: "2015 - 2018",
        title: "Architectural Technology",
        place: "George Brown College",
        desc: "Developed expertise in digital design and project visualization using BIM and CAD software, incorporating Building Science principles. Applied Building Codes and data-driven decision-making, based on Data Analysis, in collaborative projects using agile methodology for optimized outcomes.",
      },
     {
        yearRange: "2005 - 2010",
        title: "Architectural Engineering ",
        place: "Technical University of Moldova",
        desc: "Developed a solid foundation in Architectural Design, Urban Planning, Construction Engineering Project Management",
      },
      
    ];
    const experienceDetails = [
      // Array of experience details
      {
        yearRange: "2020 - 2024",
        title: "Frontend Developer | Project Web App",
        place: "One York Construction Management | Toronto, ON ",
        desc: "•	Directed development of a Web Application Project Hub for architectural presentations and construction project data. •	Designed and built a React.js-based frontend to integrate design drawings, technical documents, and progress photos. •	Implemented real-time updates for designs and documents, eliminating reliance on static PDFs. •	Developed UI components for version control, timelines, and progress tracking, enhancing transparency. •	Collaborated with backend developers to integrate REST APIs, ensuring seamless data flow. •	Applied responsive web design to optimize performance across devices for both on-site and office users.",
      },
      {
        yearRange: "2018 - 2020",
        title: "Architectural Designer | Technologist ",
        place: "Hariri Pontarini Architects | Toronto, ON ",
        desc: "•	Managed multiple projects simultaneously while adhering to strict deadlines and quality standards. •	Delivered high-quality technical drawings using AutoCAD and Revit software, ensuring accurate representation of architectural designs. •	Improved project timelines with effective coordination of multidisciplinary teams during the design process. •	Worked with licensing, permitting, planning and inspection authorities to evaluate and resolve concerns. ",
      },
      {
        yearRange: "2020 - 2024",
       title: "Architectural Technologist",
       place: "NORR | Toronto, ON ",
       desc: "•	Enabled data-driven design techniques, utilizing analytics to inform design decisions, reducing revision cycles. • Streamlined project workflows for improved collaboration between architects, engineers, and construction teams.  ",
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
                "text-24 fw-600 w-100 mb-0 " 
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
            <div className="col-12">
              <h2 align="center"
                className={
                  "resume-text-6 fw-600 mb-4 " 
                }
              >
                My Education
              </h2>
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div
                    key={index}
                    className={
                      "resume-info-box rounded p-4 mb-4 " 
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
            <div className="col-12">
              <h2 align="center"
                className={
                  "resume-text-6 fw-600 mb-4 " 
                }
              >
                My Experience
              </h2>
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div
                    key={index}
                    className={
                      "resume-info-boxt rounded p-4 mb-4 " 
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
          <div className="col-12">
          <h2 align="center"
              className="resume-text-6 fw-600 mb-4"
          >
            My Skills
          </h2>
          <div
          className="resume-info-box1 rounded p-4 mb-4"
          >
            <div className="skills-content">
          <p align="center  ">
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
  <a title='Mongoose' href="https://mongoosejs.com/" target="_blank" rel="noreferrer" className="skill-icon">
            <img src="images/mongoose.png" width="36" height="36" alt="Mongoose" />
        </a>&nbsp;&nbsp;&nbsp;
  <a title='MongoDB' href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="skill-icon"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>&nbsp;&nbsp;&nbsp;
          </p></div></div></div>
          <div className="text-center mt-5">

            <a
              className="btn btn-outline-secondary rounded-pill shadow-none"
              href={resumeFile}
              download
            >
              See my Resume
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
