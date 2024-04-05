import React from 'react';
import '../styles/AboutUs.css'; // Import external CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="section-title">About Us</h2>
      <div className="company-info-card">
        <div className="about-card">
          <div className="card-content">
            <h3 className="card-title">Our Company</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam faucibus, ipsum a consequat aliquam, felis quam 
              accumsan sapien, eget gravida nulla justo ut libero. 
              Vestibulum dapibus libero eu tortor consequat, vitae ultrices
              odio convallis.
            </p>
          </div>
        </div>
      </div>

      <h2 className="section-title">Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Service 1</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Service 2</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Service 3</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
