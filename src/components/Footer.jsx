import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links" style={{ marginBottom: 20 }}>
        <Link to="/" className="footerLinkStyle">
          Home
        </Link>
        <Link to="/about" className="footerLinkStyle">
          About Us
        </Link>
        <Link to="/services" className="footerLinkStyle">
          Services
        </Link>
        <Link to="/industries" className="footerLinkStyle">
          Industries
        </Link>
        <Link to="/contact" className="footerLinkStyle">
          Contact Us
        </Link>
      </div>

      <p>
        Fsteck is committed to redefining the future of businesses. With a blend
        of innovation, technology, and expertise, we empower organizations to
        navigate the complexities of the digital age.
      </p>

      <p>Copyright © 2024 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
