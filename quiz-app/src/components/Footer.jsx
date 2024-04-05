import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'; // Import Footer component styles

const Footer = () => {
  return (
  <footer className="footer">
  <div className="container-main">
      <div className="footer-content">
          <p>&copy; 2024 Your Quiz Project</p>
          <p>Designed and Developed by <a className='team-link text-light' href='/contact'>Team</a></p>
          <p>Contact: tejak@gmail.com & mahaleashutosh@gmail.com</p>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Phone: +91 7756094735</p>
      </div>
  </div>
</footer>

  );
}

export default Footer;
