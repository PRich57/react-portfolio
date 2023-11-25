import React, { useState, useEffect } from 'react';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Method to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Event handler for window scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '10px', right: '10px', background: 'none', border: 'none', zIndex: '1000', opacity: '.7'}}>
            <ArrowUpCircleFill className="card-icons-alt" color="white" size={40} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
