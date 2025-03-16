import React from 'react';
import footerBgDesktop from '../../assets/footer_bg.png';
import footerBgMobile from '../../assets/footer_bg_small.webp';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Desktop Background */}
      <div 
        className="footer-bg-desktop"
        style={{ backgroundImage: `url(${footerBgDesktop})` }}
      />
      
      {/* Mobile Background */}
      <div 
        className="footer-bg-mobile"
        style={{ backgroundImage: `url(${footerBgMobile})` }}
      />

      {/* Content */}
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-logo">
            <a href="/" className="logo-text">
              <span>sa</span>
              <span>VR</span>
              <span>ee</span>
            </a>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <ul>
                <li><a href="#">Why saVRee?</a></li>
                <li><a href="#">Privacy Policy (GDPR)</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">LMS</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <ul>
                <li><a href="#">Interface Builder</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Impressum</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; 2025 saVRee 3D Interactive Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;