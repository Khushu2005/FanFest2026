import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          FAN<span>FEST</span> 2026
        </div>
        <p className="footer-tagline">
          August 14–16, 2026 • For creators, by creators.
        </p>
        <p className="footer-links">
          © 2026 FanFest. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#contact">Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;