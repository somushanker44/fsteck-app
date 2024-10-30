import React, { useState } from 'react';
import Slider from 'react-slick';
import Heroslide1 from '../assets/HomeBanner-001.jpg';
import Heroslide2 from '../assets/HomeBanner-002.jpg';
import Heroslide3 from '../assets/HomeBanner-003.jpg';
import HeroSection from '../components/HeroSection';

const slides = [
  {
    image: Heroslide1,
    title: 'Empowering Businesses to Thrive in a Digital-First World',
    subtitle:
      "Unlock your business's full potential with our innovative digital solutions.",
    buttonText: 'Know More',
  },
  {
    image: Heroslide2,
    title: 'Revolutionize Your Business with Our Digital Services',
    subtitle:
      'Embrace innovation and drive growth with our comprehensive digital transformation services, tailored to propel your business into the future.',
    buttonText: 'Know More',
  },
  {
    image: Heroslide3,
    title: 'Elevate Your Operations with Digital Excellence',
    subtitle:
      'Unlock unparalleled efficiency and innovation with our transformative digital services, expertly designed to take your business operations to new heights.',
    buttonText: 'Know More',
  },
];

export const HeroSlider = () => {
  const [animate, setAnimate] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    beforeChange: () => {
      setAnimate(false); // Remove animation class before slide change
    },
    afterChange: () => {
      setAnimate(true); // Re-apply animation class after slide change
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <HeroSection
            key={index}
            backgroundImage={slide.image}
            headerText={slide.title}
            paragraphText={slide.subtitle}
            buttonText={slide.buttonText}
            animate={animate} // Pass animation state as a prop
          />
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
