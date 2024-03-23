import React from 'react';
import './Events.css';

const Events = ({ Header, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2005 - 2010",
      title: "Computer Science",
      place: "Technical University of Moldova",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2014 - 2018",
      title: "Advanced Diploma",
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
      title: "Architectural Tech",
      place: "Hariri Pontarini Architects",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2020 - 2023",
      title: "Architectural Tech",
      place: "One York Construction Management",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

<<<<<<< HEAD
const Events = () => {
  
    const americasDetails = [
      {src: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/347436958_1917420595290690_4501166707948439754_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wtr-gZqRzuEAX-LMPV-&_nc_ht=scontent-ord5-2.xx&oh=00_AfDA4hjGEuos6Ef_59guLEqm0wFnyNnuxESTp4dCkZo-KA&oe=65F9A939",
        yearRange: "When?  April 14-15",
        place: "Where?  Laguna Cliffs Marriott Resort & Spa - Vue Lawn",
        title: "California Wine Festival - Dana Point",
        
        desc: "The Wine Spectator's Grand Tour takes place in three cities in the US instead of a single location like most other wine festivals. For 2023, the three selected locations are Seminole in Florida, Chicago and Las Vegas. You will be able to enjoy an evening of with exceptional wines to taste, produced in the world’s best wine-growing regions. All wines are guaranteed to be rated 90 points or higher by Wine Spectator’s editors, ensuring only the highest quality is admitted at the festival. You will be able to meet winemakers, enjoy a delicious selection of food and wine pairing and also take home a souvenir Riedel wine glass included in the admission ticket.",
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
    const europeDetails = [
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
              Grape Gatherings
            </h2>
            
            <p
              className={
                "text-9 text-dark fw-700 position-absolute w-100 align-self-center lh-base mb-0 " 
            
              }
            >
              {" "}
              WINE EVENTS
              <span className="heading-separator-line  d-block mx-auto" />
            </p>
          </div>
          
          <div className="container">
            {/* Americas*/}
            <div className="row">
              <h2
                className={
                  "text-6 fw-600 mb-4 " 
                }
              >
                Americas
              </h2>
              {americasDetails.length > 0 &&
                americasDetails.map((value, index) => (
                  <div
                    key={index}
                    className="card">
                    <div className="face face1">
                      <div className="content">
                        <img src="https://i.imgur.com/52er9UX.png" alt="html" />
                        <h3>HTML</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          Hypertext Markup Language (HTML) is the standard markup language
                          for documents designed to be displayed in a web browser.
                        </p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    </div>
                ))}
            
            {/* Europe */}
            <div className="col-md-6">
              <h2
                className={
                  "text-6 fw-600 mb-4 " 
                }
              >
                Europe
              </h2>
              {europeDetails.length > 0 &&
                europeDetails.map((value, index) => (
                  <div
                    key={index}
                    className="card">
                    <div className="face face1">
                      <div className="content">
                        <img src="https://i.imgur.com/52er9UX.png" alt="html" />
                        <h3>HTML</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          Hypertext Markup Language (HTML) is the standard markup language
                          for documents designed to be displayed in a web browser.
                        </p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    </div>
                ))}
            </div>
          </div>
          </div>
        </div>
      </section>  
     
    );
  };
=======
  return (
    <section id="events" className={`section ${darkTheme ? "bg-dark-1" : ""}`}>
      <div className={`container ${Header ? "" : "px-lg-5"}`}>
        <div className="position-relative d-flex text-center mb-5">
          <h2 className={`text-24 fw-600 w-100 mb-0 ${darkTheme ? "text-muted opacity-1" : "text-light opacity-4"}`}>
            Grape Gatherings
          </h2>
          <p className={`text-9 text-dark fw-700 position-absolute w-100 align-self-center lh-base mb-0 ${darkTheme ? "text-white" : "text-dark"}`}>
            WINE EVENTS
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
            <h2 className={`text-6 fw-600 mb-4 ${darkTheme ? "text-white" : ""}`}>
              Americas
            </h2>
            {educationDetails.map((value, index) => (
              <div key={index} className={`bg-white rounded p-4 mb-4 ${darkTheme ? "bg-dark" : "bg-white border"}`}>
                <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                <h3 className={`text-5 ${darkTheme ? "text-white" : ""}`}>{value.title}</h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>{value.place}</p>
                <p className={`mb-0 ${darkTheme ? "text-white-50" : ""}`}>{value.desc}</p>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h2 className={`text-6 fw-600 mb-4 ${darkTheme ? "text-white" : ""}`}>
              Europe
            </h2>
            {experienceDetails.map((value, index) => (
              <div key={index} className={`bg-white rounded p-4 mb-4 ${darkTheme ? "bg-dark" : "bg-white border"}`}>
                <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                <h3 className={`text-5 ${darkTheme ? "text-white" : ""}`}>{value.title}</h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>{value.place}</p>
                <p className={`mb-0 ${darkTheme ? "text-white-50" : ""}`}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> 6b605d68e7b1a2343810ca0cbea6b7912bee83d8

export default Events;




 <div className="row gx-5">
          <div className="col-md-6">
            <h2 className={`text-6 fw-600 mb-4 ${darkTheme ? "text-white" : ""}`}>
              Americas
            </h2>
            {educationDetails.map((value, index) => (
              <div key={index} className={`bg-white rounded p-4 mb-4 ${darkTheme ? "bg-dark" : "bg-white border"}`}>
                <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                <h3 className={`text-5 ${darkTheme ? "text-white" : ""}`}>{value.title}</h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>{value.place}</p>
                <p className={`mb-0 ${darkTheme ? "text-white-50" : ""}`}>{value.desc}</p>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h2 className={`text-6 fw-600 mb-4 ${darkTheme ? "text-white" : ""}`}>
              Europe
            </h2>
            {experienceDetails.map((value, index) => (
              <div key={index} className={`bg-white rounded p-4 mb-4 ${darkTheme ? "bg-dark" : "bg-white border"}`}>
                <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                <h3 className={`text-5 ${darkTheme ? "text-white" : ""}`}>{value.title}</h3>
                <p className={darkTheme ? "text-primary" : "text-danger"}>{value.place}</p>
                <p className={`mb-0 ${darkTheme ? "text-white-50" : ""}`}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        


