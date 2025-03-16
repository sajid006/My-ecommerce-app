import React from 'react';
import footerBgDesktop from '../assets/footer_bg.png';
import footerBgMobile from '../assets/footer_bg_small.webp';

const Footer = () => {
  return (
    <footer className="relative text-white pt-28 pb-2">
      {/* Desktop Background */}
      <div 
        className="hidden md:block absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center" 
        style={{ backgroundImage: `url(${footerBgDesktop})` }}
      />
      
      {/* Mobile Background */}
      <div 
        className="md:hidden absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBgMobile})` }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="text-3xl font-bold block mb-4 ml-4">
              <span className="text-white">sa</span>
              <span className="text-white">VR</span>
              <span className="text-white">ee</span>
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Why saVRee?</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy (GDPR)</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">LMS</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Interface Builder</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Impressum</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-300">Help</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white-800 text-center text-sm">
          <p>&copy; 2025 saVRee 3D Interactive Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;