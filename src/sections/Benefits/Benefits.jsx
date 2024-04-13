import React from 'react'
import "./benefits.css"
import { benefits, benefits2 } from '../../assets/images';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";



function Benefits() {
  return (
    <div className="w-full pb-[200px] text-white benefit-section-main flex max-xl:flex-wrap  max-sm:p-3  max-lg:flex-col p-10 max-container gap-8">
      
      
      <div className="  w-1/2 max-xl:w-full max-lg:w-full z-10">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col text-white gap-1">
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-16 h-[1px] bg-white"> </div>
          </div>
          <p className="text-white">Our Benefits</p>
        </div>
        <p className="  font-bold text-[46px] leading-[52px] mb-6">
          Why Choose Us
        </p>

        <div className="flex z-10 mt-20 flex-wrap text-white   justify-between">
          <div className="w-[47%] mb-12 max-md:w-[100%]">
            <div className="bene-icon">
              <IoPersonSharp className="bene-icon" />;
            </div>
            <p className="z-10 text-[22px] -mt-10 flex items-center gap-3 font-bold mb-2">
              Business Growth
            </p>
            <p className=" text-[16px] max-md:w-[100%] z-10 ">
              Our Benefits Why Choose Us? Business Growth We're not just
              marketers; we're dedicated architects of business growth,
              transforming online strategies into tangible success stories
            </p>
          </div>

          <div className="w-[47%] mb-10 max-md:w-[100%]">
            <div className="bene-icon">
              <IoPersonSharp className="bene-icon" />;
            </div>
            <p className="z-10 text-[22px] -mt-10 flex items-center gap-3 font-bold mb-2">
              Business Growth
            </p>
            <p className=" text-[16px] max-md:w-[100%] z-10 ">
              Our Benefits Why Choose Us? Business Growth We're not just
              marketers; we're dedicated architects of business growth,
              transforming online strategies into tangible success stories
            </p>
          </div>

          <div className="w-[47%] mb-8 max-md:w-[100%]">
            <div className="bene-icon">
              <IoPersonSharp className="bene-icon" />;
            </div>
            <p className="z-10 text-[22px] -mt-10 flex items-center gap-3 font-bold mb-2">
              Business Growth
            </p>
            <p className=" text-[16px] max-md:w-[100%] z-10 ">
              Our Benefits Why Choose Us? Business Growth We're not just
              marketers; we're dedicated architects of business growth,
              transforming online strategies into tangible success stories
            </p>
          </div>

          <div className="w-[47%] mb-8 max-md:w-[100%]">
            <div className="bene-icon">
              <IoPersonSharp className="bene-icon" />;
            </div>
            <p className="z-10 text-[22px] -mt-10 flex items-center gap-3 font-bold mb-2">
              Business Growth
            </p>
            <p className=" text-[16px] max-md:w-[100%] z-10 ">
              Our Benefits Why Choose Us? Business Growth We're not just
              marketers; we're dedicated architects of business growth,
              transforming online strategies into tangible success stories
            </p>
          </div>
        </div>
      </div>
      <div className="relative bene-right max-xl:w-full  w-1/2 max-lg:w-full">
        <img className="w-full b-right-img" src={benefits} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Benefits