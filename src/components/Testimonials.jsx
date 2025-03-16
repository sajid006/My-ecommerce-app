import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Have to Say</h2>
        
        <div className="relative">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;