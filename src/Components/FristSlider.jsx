import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Studio from "../assets/studio.jpg";
import DinningRoom2 from "../assets/dinninroom2.jpg";
import DinningRoom3 from "../assets/dinningeroom3.jpg";
import BedRoom2 from "../assets/dinningeroom3.jpg";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";


const FirstSlider = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    { id: 1, title: "Studio", image: Studio },
    { id: 2, title: "1-Bedroom", image: BedRoom2 },
    { id: 3, title: "Dining Room 1", image: DinningRoom2 },
    { id: 4, title: "Dining Room 2", image: DinningRoom3 },
  ];

  const handleNavClick = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index); // Navigate to the clicked slide
  };

  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer hover:bg-opacity-80 z-10"
      onClick={onClick}
    >
      <HiArrowSmLeft className="text-4xl sm:text-6xl text-black" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer hover:bg-opacity-80 z-10"
      onClick={onClick}
    >
      <HiArrowSmRight className="text-4xl sm:text-6xl text-black" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full mx-auto pb-14 text-center relative">
      {/* Navbar */}
      <div className="flex justify-center mb-10 2xl:space-x-4 md:space-x-5 space-x-2 flex-wrap">
  {sliderData.map((item, index) => (
    <button
      key={item.id}
      className={`px-4 py-2 mb-2 sm:mb-0 rounded-lg text-xs sm:text-base transition ${
        activeIndex === index
          ? "bg-gray-800 text-white border-b-2 border-teal-600"
          : "bg-gray-700 text-white hover:bg-gray-800"
      }`}
      onClick={() => handleNavClick(index)}
    >
      {item.title}
    </button>
  ))}
</div>


      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((item) => (
          <div key={item.id} className="slider-item">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] sm:h-[555px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FirstSlider;

