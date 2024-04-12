import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";



function Arrow({prevSlide, nextSlide}) {
  return (
    <div className="arrow m-5">
      <span className="prev" onClick={prevSlide}>
        <FaArrowLeftLong className="text-white ml-1 text-xl hover:[#524cff]" />
      </span>
      <span className="next" onClick={nextSlide}>
        <FaArrowRightLong className="text-white ml-1 text-xl hover:[#524cff]" />
      </span>
    </div>
  );
}

export default Arrow;