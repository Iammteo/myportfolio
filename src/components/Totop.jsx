
import { useState, useEffect } from 'react';
import './Totop.css';
import { FaArrowUp } from "react-icons/fa6";

const Totop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to show/hide the button
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 3000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
     <FaArrowUp />
    </button>
  );
};

export default Totop;
