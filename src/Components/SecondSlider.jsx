import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Core styles (CSS)

const SecondSlider = () => {

    const slides = [
        "/src/assets/andrei-r-popescu-FmOPaefLRA0-unsplash.jpg",
        "/src/assets/bedroom.jpg",
        "/src/assets/dinning room.jpg",
      ];

  return (
    <div className="max-w-full py-6">
    <Splide
      options={{
        type: "loop", // Loop the slider
        autoplay: true, // Enable autoplay
        interval: 3000, // Autoplay interval in milliseconds
        arrows: true, // Show navigation arrows
        padding: "2rem", // Default padding for medium screens
        height: "30rem", // Fixed height for the slider
        gap: "2rem", // Default gap between slides
        perPage: 2, // Default to showing 2 slides per page for larger screens
        pagination:false,
        breakpoints: {
          640: {
            perPage: 1, // Show 1 slide per page for mobile screens
            padding: "1rem", // Reduce padding on mobile
            gap: "1rem", // Reduce gap on mobile
          },
          768: {
            perPage: 1, // Show 1 slide per page for tablet screens
            padding: "2rem", // More padding on tablets
            gap: "2rem", // Default gap for tablets
          },
          1024: {
            perPage: 2, // Show 2 slides per page for larger screens
            padding: "3rem", // More padding for large screens
            gap: "2rem", // Default gap for large screens
          },
        },
      }}
    >
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  
    <style jsx>{`
      .splide__arrow {
        background: rgba(255, 255, 255, 0.9); /* Transparent white background */
        height: 30rem; /* Reduced arrow height */
        width: 3rem;  /* Set width for a box shape */
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 0; 
      }
  
      .splide__arrow svg {
        width: 1.5rem; /* Adjust arrow size for mobile */
        height: 1.5rem; /* Adjust arrow size for mobile */
      }
  
      .splide__arrow--prev {
        left: 0; /* Align left arrow */
      }
  
      .splide__arrow--next {
        right: 0; /* Align right arrow */
      }
    `}</style>
  </div>
  

  );
};


export default SecondSlider
