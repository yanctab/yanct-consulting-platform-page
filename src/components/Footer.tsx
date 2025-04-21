
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img 
              src="/yanct.png" 
              alt="Yanct Logo" 
              className="h-32 w-auto cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={scrollToTop}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
