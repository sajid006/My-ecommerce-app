import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#205AA4CC] text-white py-4 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              <span className="text-white">sa</span>
              <span className="text-white">VR</span>
              <span className="text-white">ee</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-200">PRODUCTS</a>
            <a href="#" className="text-white hover:text-gray-200">CATALOG</a>
            <a href="#" className="text-white hover:text-gray-200">PRICING</a>
            <a href="#" className="text-white hover:text-gray-200">CONTACT</a>
            <a href="#" className="bg-white text-[#4B79B6] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              LOGIN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-gray-200">3D MODELS</a>
              <a href="#" className="text-white hover:text-gray-200">COURSES</a>
              <a href="#" className="text-white hover:text-gray-200">ENCYCLOPEDIA</a>
              <a href="#" className="text-white hover:text-gray-200">PRICING</a>
              <a href="#" className="text-white hover:text-gray-200">CONTACT</a>
              <a href="#" className="bg-white text-[#4B79B6] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-center">
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