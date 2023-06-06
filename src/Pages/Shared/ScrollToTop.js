import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import './ScrollToTop.css'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <FaArrowCircleUp className="scroll-icon" onClick={scrollToTop} />
      )}
    </div>
  );
};

export default ScrollToTop;
