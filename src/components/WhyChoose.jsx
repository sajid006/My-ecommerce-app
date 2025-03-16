import React from 'react';
import { Shield, Truck, Clock, CreditCard } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Shopping",
      description: "100% secure payment processing with advanced encryption"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Express shipping available worldwide"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for your needs"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Easy Returns",
      description: "Hassle-free return policy within 30 days"
    }
  ];

  return (
    <section className="py-20 px-4 mt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SaVRee?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;