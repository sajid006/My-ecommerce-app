import React from 'react';
import { Shield, Truck, Clock, CreditCard } from 'lucide-react';
import './WhyChoose.scss';

const WhyChoose = () => {
  const features = [
    {
      icon: <Shield className="icon" />,
      title: "Secure Shopping",
      description: "100% secure payment processing with advanced encryption"
    },
    {
      icon: <Truck className="icon" />,
      title: "Fast Delivery",
      description: "Express shipping available worldwide"
    },
    {
      icon: <Clock className="icon" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for your needs"
    },
    {
      icon: <CreditCard className="icon" />,
      title: "Easy Returns",
      description: "Hassle-free return policy within 30 days"
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title">Why Choose SaVRee?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;