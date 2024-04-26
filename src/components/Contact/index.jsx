// src/pages/Contact/index.jsx
import React, { useState }from 'react';
import './Contact.css'; 

const Contact = ({  }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupationLocation: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3002/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };


  return (
    <section id="contact" className="contact">
     <div className={"container " }>
          <div className="position-relative d-flex text-center mb-5">
           
          <h2
            className={
              "text-24 fw-600 w-100 mb-0 " 
            }
          >
            Get in Touch
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            CONTACT
            <span className="heading-separator-line d-block mx-auto" />
          </p>
       
      </div>

      <br></br>

      <form onSubmit={handleSubmit}>
      <div className="button-group text-center mb-6">
        </div>
          {/* Name Fields */}
          <div className="row mb-3">
            
              <input 
              type="text"
              className="form-control input-custom" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              required />
           
              <input 
              type="text" 
              className="form-control input-custom" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
              required />
            
          </div>

          {/* Email & Occupation Fields */}
          <div className="row mb-3">
            
              <input 
              type="email" 
              className="form-control input-custom" 
              name="email" 
              placeholder="Email"
              value={formData.email}
              onChange={handleChange} 
              required />
            
            
              <input type="text" 
              className="form-control input-custom" 
              name="occupationLocation" 
              placeholder="Occupation & Location" 
              value={formData.occupationLocation}
              onChange={handleChange}
              required />
            
          </div>

          {/* Message/Topic Textarea */}
          <div className="row mb-3">
            <textarea 
            className="form-control input-custom" 
            name="message" 
            rows="5" 
            placeholder="Message/Topic"
            value={formData.message}
            onChange={handleChange} 
            required></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" 
            className="btn btn-primary btn-custom">Submit</button>
          </div>
        </form>

        <p className="text-5 text-light mb-4">Follow Me /</p>
        <div className="social-links">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
