import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = ({
  backgroundImage,
  headerText,
  paragraphText,
  buttonText,
  animate,
}) => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/contact'); // Redirects to the Contact Us page
  };

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`content ${animate ? 'animate' : ''}`}>
        <h1>{headerText}</h1>
        <p>{paragraphText}</p>
        <button className="hero-button" onClick={handleKnowMoreClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
