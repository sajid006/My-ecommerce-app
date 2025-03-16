import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.scss';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mechanical Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "SaVRee has transformed my engineering learning experience. The interactive 3D models are incredibly detailed!"
    },
    {
      name: "Michael Chen",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "The best engineering education platform I've used. The training videos are comprehensive and easy to follow."
    },
    {
      name: "Emma Davis",
      role: "Industrial Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "SaVRee's platform makes complex engineering concepts accessible and engaging."
    },
    {
      name: "David Wilson",
      role: "Senior Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "The engineering handbooks are comprehensive and well-structured. A valuable resource for professionals."
    },
    {
      name: "Lisa Zhang",
      role: "CAD Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "The 3D model library is extensive and helps me understand complex mechanisms better."
    },
    {
      name: "James Anderson",
      role: "Engineering Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "SaVRee has become an essential tool for our team's professional development."
    },
    {
      name: "Maria Garcia",
      role: "Process Engineer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "The platform's approach to engineering education is revolutionary. Highly recommended!"
    },
    {
      name: "Tom Baker",
      role: "Engineering Consultant",
      image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "The quality of content and attention to detail in the 3D models is outstanding."
    },
    {
      name: "Anna Kim",
      role: "Research Engineer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "SaVRee makes learning complex engineering concepts intuitive and enjoyable."
    },
    {
      name: "Robert Martinez",
      role: "Engineering Educator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      content: "An invaluable resource for both students and educators in engineering."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Customers Have to Say</h2>
        
        <div className="testimonials-carousel">
          <button 
            onClick={prevTestimonial}
            className="testimonials-nav-button testimonials-prev-button"
          >
            <ChevronLeft className="testimonials-nav-icon" />
          </button>

          <div className="testimonials-grid">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-person">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="testimonial-star" />
                  ))}
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="testimonials-nav-button testimonials-next-button"
          >
            <ChevronRight className="testimonials-nav-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;