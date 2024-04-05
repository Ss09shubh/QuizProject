import React from 'react';
import '../styles/ContactUs.css'; // Import external CSS file
import profile from '../images/profile.jpg';
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-form">
        {/* Your contact form goes here */}
      </div>

      <hr className="divider" />

      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-cards">
        <div className="card">
          <img src={profile} alt="Member 1" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Ashutosh Mahale</h3>
            <p className="card-text">Position: TeamLeader</p>
            <p className="card-text">Email: mahaleashutosh2000@gmail.com</p>
            <p className="card-text">Phone: +91 7756094735</p>
          </div>
        </div>

        <div className="card">
          <img src={profile} alt="Member 2" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Teja Kondargunta</h3>
            <p className="card-text">Position: Sr.TeamLeader</p>
            <p className="card-text">Email: tejakondargunta@gmail.com</p>
            <p className="card-text">Phone: +91 978686868</p>
          </div>
        </div>

        <div className="card">
          <img src={profile} alt="Member 3" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Pratik Dongre</h3>
            <p className="card-text">Position: Sr.TeamMember</p>
            <p className="card-text">Email: pratikdongre888@gmail.com</p>
            <p className="card-text">Phone: +91 9907965775</p>
          </div>
        </div>

        <div className="card">
          <img src={profile} alt="Member 4" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Shubham Singha</h3>
            <p className="card-text">Position: Sr.TeamMember</p>
            <p className="card-text">Email: shubhamsingha111@gmail.com</p>
            <p className="card-text">Phone: +91 6888799859</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
