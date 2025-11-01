"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  
  return (
    <div className={containerStyles}>
      <button 
        className={`${btnStyles} group relative overflow-hidden`}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        {/* Gradient glow effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
        
        <PiCaretLeftBold className={`${iconsStyles} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
      </button>
      
      <button 
        className={`${btnStyles} group relative overflow-hidden`}
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        {/* Gradient glow effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
        
        <PiCaretRightBold className={`${iconsStyles} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;