import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="school-footer">
      <div className="footer-logo">Genetic Computer School</div>
      <p>&copy; {currentYear} Genetic Computer School. All rights reserved.</p>
      <div className="footer-nav">
        <a href="#about" className="footer-nav-link">About Us</a>
        <a href="#contact" className="footer-nav-link">Contact Support</a>
        <a href="#privacy" className="footer-nav-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
