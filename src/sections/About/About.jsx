import React from "react";
import "./about.css";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { about1, about2, about3, about4 } from "../../assets/images";

function About() {
  return (
    <div className="w-full flex  max-sm:p-3  max-lg:flex-col p-10 text-black max-container gap-8">
      <div className="about4">
        <img src={about4} alt="" />
      </div>
      <div className="  w-1/2 max-lg:w-full">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col text-[#680BCA] gap-1">
            <div className="w-8 h-1 bg-[#680BCA]"></div>
            <div className="w-16 h-[1px] bg-[#680BCA]"> </div>
          </div>
          <p className="text-[#680BCA]">About Company</p>
        </div>
        <p className="  font-bold text-[46px] leading-[52px] mb-6">
          Digital Alchemy{" "}
          <span className="text-[#680BCA]">Transforming Tech</span> Troubles
          into Triumphs
        </p>
        <p className="text-[#515264] text-[16px] leading-[28.6px] mb-6">
          We strive to add value to our client's businesses across the globe
          with strategic thinking alongside creative approaches when it comes to
          development, marketing, design, and problem-solving
        </p>
        <div className="flex  text-[#515264] flex-wrap   justify-between">
          <div className="w-[48%] mb-8 max-md:w-[100%]">
            <p className="text-[22px] flex items-center gap-3 font-bold mb-2">
              <FaRegCircleDot className="  text-[22px] text-[#680BCA]" />
              IT Consultancy
            </p>
            <p className=" text-[16px] max-md:w-[100%]">
              Our seasoned consultants work closely with you to assess,
              optimise, and seamlessly integrate cutting-edge technologies
            </p>
          </div>
          <div className="w-[48%] m-2 mb-8 max-md:w-[100%]">
            <p className="text-[22px] flex items-center gap-3 font-bold mb-2">
              <FaRegCircleDot className="  text-[22px] text-[#680BCA]" />
              IT Consultancy
            </p>
            <p className=" text-[16px] max-md:w-[100%]">
              Our seasoned consultants work closely with you to assess,
              optimise, and seamlessly integrate cutting-edge technologies
            </p>
          </div>
          <div className="w-[48%] mb-8 max-md:w-[100%]">
            <p className="text-[22px] flex items-center gap-3 font-bold mb-2">
              <FaRegCircleDot className="  text-[22px] text-[#680BCA]" />
              IT Consultancy
            </p>
            <p className=" text-[16px] max-md:w-[100%]">
              Our seasoned consultants work closely with you to assess,
              optimise, and seamlessly integrate cutting-edge technologies
            </p>
          </div>
          <div className="w-[48%] mb-8 max-md:w-[100%]">
            <p className="text-[22px] flex items-center gap-3 font-bold mb-2">
              <FaRegCircleDot className="  text-[22px] text-[#680BCA]" />
              IT Consultancy
            </p>
            <p className=" text-[16px] max-md:w-[100%]">
              Our seasoned consultants work closely with you to assess,
              optimise, and seamlessly integrate cutting-edge technologies
            </p>
          </div>
        </div>
        <div className="flex gap-12 max-md:w-[100%] mt-5 mb-5" >
          <a
            href="#_"
            class="relative hero-button item-center  inline-flex items-center justify-start px-10 py-4 overflow-hidden font-medium transition-all bg-gradient-to-r from-[#524cff] to-[#7234a8] rounded hover:bg-white group"
          >
            <span class="w-56 h-56 rounded-full rotate-[-40deg] bg-white absolute bottom-0 left-0  ease-out duration-500 transition-all translate-y-[120%] mb-9 mr-9 group-hover:mr-0 group-hover:mb-32 group-hover:-translate-x-[13%]"></span>
            <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-[#524cff]">
              Connect Us
            </span>
            <FaArrowRightLong className="text-white ml-1 text-xl hover:[#524cff]" />
          </a>
          <img width={61} src={about1} alt="" srcset="" />
        </div>
      </div>
      <div className="relative  w-1/2 max-lg:w-full  ">
        <div className="">
          <img className="about2 z-50" src={about2} alt="" srcset="" />
          <img className="about3 max-md:hidden" src={about3} alt="" srcset="" />
          <div class="years-of-experience">
            <span class="count-text"></span>
            Decades of Experience
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
