import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CompanyIntro.css';
import CompanyImage from '../assets/Technology__-12-1.jpg'; // Replace with the path to your uploaded image

const CompanyIntro = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/contact'); // Redirects to the Contact Us page
  };

  return (
    <section className="company-intro">
      <div className="company-intro-container">
        <img src={CompanyImage} alt="Company Team" className="company-image" />
        <div className="company-content">
          <h5>Who We Are</h5>
          <h2>Leading Digital Transformation Company</h2>
          <p>
            V3, a MOURI Tech company committed to redefining the future of
            businesses. With a blend of innovation, technology, and expertise,
            we empower organizations to navigate the complexities of the digital
            age.
          </p>
          <p>
            Our commitment extends to harnessing GenAI to empower organizations
            to navigate and thrive in the complexities of the digital age. Our
            solutions, enhanced by GenAI, accelerate growth, optimize
            operations, and foster enduring customer relationships.
          </p>
          <button className="cta-button" onClick={handleGetStartedClick}>
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
