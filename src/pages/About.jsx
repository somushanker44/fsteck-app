import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/AboutUs.css';
import homeBanner from '../assets/HomeBanner-001.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Page Header */}
      <header className="page-header">
        <h1>About Us</h1>
        <p>Home &gt; About Us</p>
      </header>

      {/* First Section: Who We Are */}
      <section className="section-container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <img
              src={homeBanner}
              alt="Leading Digital Transformation"
              className="section-image"
            />
          </div>
          <div className="col-12 col-lg-6">
            <h5 className="sub-header-style">WHO WE ARE</h5>
            <h2>Leading Digital Transformation Company</h2>
            <p>
              V3, a MOURI Tech company committed to redefining the future of
              businesses. With a blend of innovation, technology, and expertise,
              we empower organizations to navigate the complexities of the
              digital age.
            </p>
            <p>
              Our commitment extends to harnessing GenAI to empower
              organizations to navigate and thrive in the complexities of the
              digital age. Our solutions, enhanced by GenAI, accelerate growth,
              optimize operations, and foster enduring customer relationships.
            </p>
            <button className="btn btn-primary">Get Started Now</button>
          </div>
        </div>
      </section>

      {/* Second Section: Why Us */}
      <section className="section-container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h5 className="sub-header-style">OUR USP</h5>
            <h2>Why Us</h2>
            <p>
              Our decades of industry experience are complemented by a
              cutting-edge focus on GenAI, ensuring you stay ahead of the
              technological curve. With a proven track record of trust and
              high-quality delivery, we integrate GenAI to transform challenges
              into opportunities, driving substantial and meaningful change
              across industries.
            </p>
            <ul className="usp-list">
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                <strong>Expertise:</strong> With decades of experience, we bring
                deep industry knowledge to solve your most complex challenges.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                <strong>Innovation:</strong> Our focus on cutting-edge
                technologies ensures you stay ahead of the curve.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                <strong>Trust:</strong> A proven track record of delivering
                high-quality solutions on time and within budget.
              </li>
            </ul>
            <button className="btn btn-primary">Know More</button>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={homeBanner}
              alt="Team Meeting"
              className="section-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
