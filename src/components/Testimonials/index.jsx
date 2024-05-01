import React from 'react';
import './Testimonial.css';
import Slider from "react-slick";

const Testimonial = () => {
  const reviews = [
  {
    id: 1,
    name: "Gabriel Kraskovskyi",
    title: "Arch Tech from USA",
    src: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/347436958_1917420595290690_4501166707948439754_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=11w4iCuK5MMAb6fmrbU&_nc_ht=scontent-ord5-2.xx&oh=00_AfDcibnXP5aeFoB2nyPmdfsSungv_RRJQEtv7v47ceBuuA&oe=66287679",
    quote: "Throughout his contributions to architectural technology, Stas has consistently shown remarkable ability in implementing cutting-edge solutions. Their deep knowledge in sustainable design has greatly enhanced the success of our projects, establishing them as an essential member of our team.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anna Antropova",
    title: "Arch from Toronto",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/361112109_10161048926611007_5778823206661691662_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P-_eaRSYbGcAb4rF0aO&_nc_ht=scontent-ord5-1.xx&oh=00_AfDBbo3On-gpX-FcQ1I7ciitZPgrljY0dH4UuvLxIcOSQQ&oe=66289293",
    quote: "Stanislav's architectural design work is characterized by creativity, precision, and a deep understanding of space and form. Their designs not only meet but exceed client expectations, showcasing a unique blend of functionality and aesthetic appeal, while integrating sustainable practices and innovative solutions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Christina MacIntyre ",
    title: "Arch Tech from Toronto",
    src: "https://media.licdn.com/dms/image/D5603AQEihJlxsuBEjA/profile-displayphoto-shrink_200_200/0/1705968358833?e=1715817600&v=beta&t=ohR16-2zzd1XO2uWYtIwF-6cyaN7gUUi-aOgIFVwWuc",
    quote: "Stanislav exhibits a rare combination of dedication, expertise, and teamwork. Regardless of the project at hand, they consistently deliver high-quality results, demonstrating their commitment to excellence and making them a valued member of our team.",
    rating: 5,
  },
  {
    id: 4,
    name: "Valeriia Kolimbet",
    title: "QA Analyst from Toronto",
    src: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/55849361_10157126481940270_605990318910734336_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=icF_iYRwSoUAX_bA02-&_nc_ht=scontent-ord5-1.xx&oh=00_AfB8XNTb7_Em-mlemcd8IWD0bc7AbHZnmhZbn-lODJA1gA&oe=661D903C",
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
     className="testimonial">
      <div className={"container " }>
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
