import React from 'react';
import '../styles/OurServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPalette,
  faCode,
  faBuilding,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faPalette,
    title: 'UI/UX',
    description:
      'Crafting intuitive and engaging user experiences to enhance customer satisfaction and drive business success.',
  },
  {
    icon: faCode,
    title: 'Development Services',
    description:
      'Delivering robust and scalable software solutions tailored to meet your unique business requirements and goals.',
  },
  {
    icon: faBuilding,
    title: 'Enterprise Solutions',
    description:
      'Empowering large-scale organizations with integrated and optimized systems to streamline operations & boost productivity.',
  },
  {
    icon: faRobot,
    title: 'Digital Transformation Services',
    description:
      'Revolutionizing businesses with innovative technologies, ensuring agility, efficiency, and a competitive edge in the digital era.',
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="services-container">
        <h5>What We Offer</h5>
        <h2>Our Services</h2>
        <p>
          Transform your business with our digital solutions, where GenAI drives
          innovation and efficiency across all operations. From creating
          intuitive GenAI-driven UI/UX designs that predict user preferences to
          developing GenAI-enhanced software solutions that anticipate user
          needs and automate complex processes, our services are designed to
          give you a competitive edge.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
