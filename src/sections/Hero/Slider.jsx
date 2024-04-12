import React from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrow from "./Arrow";
import sliderImage from "./sliderImage";
import "../Hero/slider.css";
import { useState, useEffect } from "react";
import LowerCard from "./LowerCard";

const len = sliderImage.length - 1;

console.log(sliderImage);
function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //       return () => clearInterval(interval);
  //     }, 5000);
  //   }, [activeIndex]);

  return (
    <div className="slider-container " id="product">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      {/* <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      /> */}

      {/* <LowerCard/> */}
    </div>
  );
}

export default Slider;
