import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { IoIosStar } from "react-icons/io";

import "react-awesome-slider/dist/styles.css";

function Testimonials() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="max-container   pb-[300px] justify-center ite flex text-white">
      <div className="w-[40%] flex justify-end mr-10  bg-white overflow-hidden rounded-xl">
        <AutoplaySlider
          className="w-[100%]     h-full bg-white
            -mt-10  rounded-lg"
          play={true}
          cancelOnInteraction={false}
          interval={1000}
          bullets={false}
          organicArrows={false}
          // cssModule={AwesomeSliderStyles}
        >
          <div className="w-full bg-white  pl-[20%]  pt-16 overflow-visible   h-full relative">
            <div className="w-[90%]  h-full  flex flex-col  overflow-visible">
              <p className="text-[#3b1111]">
                Hooqx shines in the digital crowd with their creativity and
                expertise. Their visually stunning websites and engaging social
                media campaigns transformed our brand, setting them apart with
                dedication and innovative ideas.
              </p>
              <div className="w-[100%] mt-5 h-[1px] bg-slate-600  text-black"></div>
              <div className="mt-5 text-[#441414]   text-lg flex justify-between ">
                <p>Lisa chen</p>
                <div className="text-white bg-[#6808CD] flex items-center text-sm p-1 rounded-lg px-2">
                  <IoIosStar />

                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>
            </div>
            {/* <div className="w-16 h-16 bg-fuchsia-500 rounded-full absolute  top-[50%] -left-9 z-[99999]"></div> */}
          </div>
          <div className="w-full bg-white  pl-[20%]  pt-16 overflow-visible   h-full relative">
            <div className="w-[90%]  h-full  flex flex-col  overflow-visible">
              <p className="text-[#3b1111]">
                Hooqx shines in the digital crowd with their creativity and
                expertise. Their visually stunning websites and engaging social
                media campaigns transformed our brand, setting them apart with
                dedication and innovative ideas.
              </p>
              <div className="w-[100%] mt-5 h-[1px] bg-slate-600  text-black"></div>
              <div className="mt-5 text-[#441414]   text-lg flex justify-between ">
                <p>Lisa chen</p>
                <div className="text-white bg-[#6808CD] flex items-center text-sm p-1 rounded-lg px-2">
                  <IoIosStar />

                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>
            </div>
            {/* <div className="w-16 h-16 bg-fuchsia-500 rounded-full absolute  top-[50%] -left-9 z-[99999]"></div> */}
          </div>
        </AutoplaySlider>
      </div>
      <div className="w-1/2 text-white">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col text-white gap-1">
            <div className="w-8 h-1 bg-[white]"></div>
            <div className="w-16 h-[1px] bg-[white]"> </div>
          </div>
          <p className="text-[white] font-bold">Word on the (Digital) Street</p>
        </div>
        <p className="  font-bold text-[46px] leading-[52px] mb-6">
          Digital Alchemy{" "}
          <span className="text-[#15ebae]">Transforming Tech</span> Troubles
          into Triumphs
        </p>
        <div className="flex  text-[white] flex-wrap   justify-start">
          <div className="w-[48%]  max-md:w-[100%]">
            <p className="text-[16px] flex items-start gap-2  mb-2">
              <FaRegCircleDot className="  text-[16px] mt-1 " />
              Customer Satisfaction Survey Results
            </p>
          </div>
          <div className="w-[48%] m-2  max-md:w-[100%]">
            <p className="text-[16px] flex items-start gap-2  mb-2">
              <FaRegCircleDot className="  text-[16px] mt-1 " />
              Customer Reviews: What They're Saying
            </p>
          </div>
          <div className="w-[48%] max-md:w-[100%]">
            <p className="text-[16px] flex items-start gap-2  mb-2">
              <FaRegCircleDot className="  text-[16px] mt-1 " />
              Feedback From Our Valued Customers
            </p>
          </div>
          <div className="w-[48%] max-md:w-[100%] ml-2">
            <p className="text-[16px] flex items-start gap-2  mb-2">
              <FaRegCircleDot className="  text-[20px] mt-1 " />
              Customer Voices Guiding Our SuccessFeedback Summary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
