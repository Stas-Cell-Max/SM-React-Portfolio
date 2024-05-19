import React from 'react';
import './Testimonial.css';
import Slider from "react-slick";

const Testimonial = () => {
  const reviews = [
  {
    
    name: "Gabriel Kraskovskyi",
    title: "Arch Tech from USA",
    src: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/346468173_925581748703951_362898022832999076_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U_U_ZYRudWcQ7kNvgEFDZ6N&_nc_ht=scontent-ord5-2.xx&oh=00_AYCyhH4gi7QcNuEw8UqyKEDYUlCAD6jB_jaSFGCs5RSWOA&oe=66504E69",
    quote: "Throughout his contributions to architectural technology, Stas has consistently shown remarkable ability in implementing cutting-edge solutions. Their deep knowledge in sustainable design has greatly enhanced the success of our projects, establishing them as an essential member of our team.",
    rating: 5,
  },
  {
    
    name: "Anna Antropova",
    title: "Arch from Toronto",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/361112109_10161048926611007_5778823206661691662_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4M65javtsgEQ7kNvgGJhQyl&_nc_ht=scontent-ord5-1.xx&oh=00_AYBI_gXKH3SgkSyKDTqHsPX3RrOmVEzir3E2WS7W_KyynA&oe=665057D3",
    quote: "Stanislav's architectural design work is characterized by creativity, precision, and a deep understanding of space and form. Their designs not only meet but exceed client expectations, showcasing a unique blend of functionality and aesthetic appeal, while integrating sustainable practices and innovative solutions.",
    rating: 5,
  },
  {
    
    name: "Sergey Stankevich",
    title: "Software Developer from Toronto",
    src: "https://media.licdn.com/dms/image/C4D03AQFHu3rKrs3nWg/profile-displayphoto-shrink_400_400/0/1599752777123?e=1721865600&v=beta&t=fd7VPnPscUqTNwx2Sfcq1yXSER0-QSY5NFjWT9-eNpI",
    quote: "Stanislav exhibits a rare combination of dedication, expertise, and teamwork. Regardless of the project at hand, they consistently deliver high-quality results, demonstrating their commitment to excellence and making them a valued member of our team.",
    rating: 5,
  },
  {
    
    name: "Valeriia Kolimbet",
    title: "QA Analyst from Toronto",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/55849361_10157126481940270_605990318910734336_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SQsZeIVwrBsQ7kNvgG2SnnM&_nc_ht=scontent-ord5-1.xx&oh=00_AYAJEh39IP1fdlKUzLuCQ_VcozL9aObRczZqRRbArXz0Yg&oe=6671F03C",
    quote: "Stas is a highly skilled web developer, known for their proficiency in coding and innovative approach to solving complex problems. Their contributions have greatly enhanced our web applications' user experience and functionality, proving them to be a standout talent in the field.",
    rating: 5,
  },
];

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
