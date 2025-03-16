import React from 'react';
import { heroBackground } from '../../utils/constants';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      {/* Desktop Hero Image */}
      <div className="hero-image">
        <img
          src={heroBackground}
          alt="Engineering Education"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tagline">saVRee is THE leading e-commerce company</p>
          <h1 className="hero-title">
            Conscious Shopping,<br />
            Endless Possibilities
          </h1>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <p className="hero-stat-number">5000+</p>
              <p className="hero-stat-text">top quality products</p>
            </div>
            <div className="hero-stat">
              <p className="hero-stat-number">900+</p>
              <p className="hero-stat-text">suppliers all around the world</p>
            </div>
            <div className="hero-stat">
              <p className="hero-stat-number">500+</p>
              <p className="hero-stat-text">subscribed customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;