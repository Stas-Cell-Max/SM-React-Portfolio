import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: "Gabriel Kraskovskyi",
    title: "Freelancer from USA",
    quote: "I am happy working with printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anna Antropova",
    title: "User from UK",
    quote: "I have used them twice now. Good rates, very efficient service and lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  // add more testimonials as needed
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="container">
        <h2 className="section-title">Colleagues Speak</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="testimonial-content">
                <p>{testimonial.quote}</p>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <h5 className="testimonial-name">{testimonial.name}</h5>
                <h6 className="testimonial-title">{testimonial.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
