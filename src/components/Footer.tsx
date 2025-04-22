
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <button 
              onClick={scrollToTop}
              id="footer-btn"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
              aria-label="Scroll to top"
            >
              <img
                id="footer-logo"
                src="/yanct.png"
                alt="Yanct Logo"
                className="h-20 md:h-28 lg:h-32 w-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
