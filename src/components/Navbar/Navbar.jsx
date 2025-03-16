import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="/" className="logo-text">
              <span>sa</span>
              <span>VR</span>
              <span>ee</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#" className="nav-link">PRODUCTS</a>
            <a href="#" className="nav-link">CATALOG</a>
            <a href="#" className="nav-link">PRICING</a>
            <a href="#" className="nav-link">CONTACT</a>
            <a href="#" className="login-button">
              LOGIN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="icon" />
            ) : (
              <Menu className="icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <a href="#" className="nav-link">3D MODELS</a>
              <a href="#" className="nav-link">COURSES</a>
              <a href="#" className="nav-link">ENCYCLOPEDIA</a>
              <a href="#" className="nav-link">PRICING</a>
              <a href="#" className="nav-link">CONTACT</a>
              <a href="#" className="login-button mobile-login">
                LOGIN
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;