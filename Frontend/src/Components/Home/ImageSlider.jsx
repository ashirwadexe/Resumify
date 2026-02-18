import React, { useEffect, useRef, useState } from "react";

// import images from assets
import slide1 from "../../assets/slide1.png";
import slide3 from "../../assets/slide3.png";
import slide5 from "../../assets/slide5.png";

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [slide1, slide3, slide5];
  const totalSlides = images.length;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Move slider
  useEffect(() => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.clientWidth;
    sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center">
      {/* Slider */}
      <div className="w-full max-w-5xl overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="
                w-full flex-shrink-0 
                border-20 border-orange-100 
                rounded-2xl 
                shadow-lg 
                box-border
                hover:shadow-orange-400/50 
                hover:shadow-2xl 
                transition-all duration-300
              "
            />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center mt-6 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-orange-400" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
