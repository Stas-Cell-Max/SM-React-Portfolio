import React from 'react';
import './Testimonial.css';// Import CSS for Testimonial section
import Slider from "react-slick";  // Import slider component for displaying testimonials

// Testimonial component showcasing colleague reviews
const Testimonial = () => {
  const reviews = [
     // Array of reviews/testimonials from colleagues
  {
    
    name: "Gabriel Kraskovskyi",
    title: "Arch Tech from USA",
    src: "images/gabriel.jpg",
    quote: "Throughout his contributions to architectural technology, Stas has consistently shown remarkable ability in implementing cutting-edge solutions. His deep knowledge in sustainable design has greatly enhanced the success of our projects, establishing him as an essential member of our team.",
    rating: 5,
  },
  {
    
    name: "Anna Antropova",
    title: "Arch from Toronto",
    src: "images/anna.jpg",
    quote: "Stanislav's architectural design work is characterized by creativity, precision, and a deep understanding of space and form. Stanislav's designs not only meet but exceed client expectations, showcasing a unique blend of functionality and aesthetic appeal, while integrating sustainable practices and innovative solutions.",
    rating: 5,
  },
  {
    
    name: "Sergey Stankevich",
    title: "Software Developer from Toronto",
    src: "images/stankevich.jpg",
    quote: "Stanislav exhibits a rare combination of dedication, expertise, and teamwork. Regardless of the project at hand, he consistently deliver high-quality results, demonstrating his commitment to excellence and making him a valued member of our team.",
    rating: 5,
  },
  {
    
    name: "Valeriia Kolimbet",
    title: "Project Manager from Toronto",
    src: "images/valeriia.jpg",
    quote: "Stas is a highly skilled web developer, known for his proficiency in coding and innovative approach to solving complex problems. His contributions have greatly enhanced our web applications' user experience and functionality, proving them to be a standout talent in the field.",
    rating: 5,
  },
];

// Slider settings for controlling the testimonial carousel
var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
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

  return (
    
    <section 
    id="testimonial"
     className={"section"}>
      <div className={"containert " }>
      <div className="position-relative d-flex text-center mb-5 ">
          <h2
            className={"text-24  fw-600 w-100 mb-0 " 
            }
          >
            Colleagues Speak
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            TESTIMONIALS
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
        </div>

        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-item">
              <img src={review.src} alt={review.name} className="testimonial-photo" />
              <div className="testimonial-content">
                <p>{review.quote}</p>
                <div className="testimonial-rating">
                  {'★'.repeat(review.rating)}
                </div>
                <h5 className="testimonial-name">{review.name}</h5>
                <h6 className="testimonial-title">{review.title}</h6>
              </div>
            </div>
          ))}
        </Slider>
        </div> 
        
    </section>
  );
};


export default Testimonial;
