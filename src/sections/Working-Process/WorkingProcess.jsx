import React from 'react'
import "./working.css"
import { RiFileSearchLine } from "react-icons/ri";


function WorkingProcess() {
  return (
    <div className="max-container flex flex-col items-center">
      <p className="service-t-h font-bold text-white rounded-full  px-5 py-1 mb-[10px]">
        How We works
      </p>
      <p className="text-[48px] mb-14 max-w-[800px] leading-[55px] text-center font-bold">
        Step into the Digital Groove: Our Workflow Rhythm
      </p>

      <div className="working-card flex  flex-wrap relative justify-between w-full">
        <div className="flex flex-col  max-lg:w-1/2 mb-12">
          <div className="working-inner-card group hover:bg-[#75429c]">
            <RiFileSearchLine className="text-[#75429c]   group-hover:text-white text-[64px]" />
            <div className="wi-i-corner group-hover:before:text-[#75429c] group-hover:text-[#75429c]  flex items-center justify-start   group-hover:bg-white ">
              <p className="m1-3 pl-3 text-center">01</p>
            </div>
          </div>
          <p className="mt-[21px] text-center text-[22px] leading-[1.2] font-[800]">
            Analysis
          </p>
        </div>
        <div className="flex flex-col  max-lg:w-1/2 mb-12">
          <div className="working-inner-card group hover:bg-[#75429c]">
            <RiFileSearchLine className="text-[#75429c]   group-hover:text-white text-[64px]" />
            <div className="wi-i-corner group-hover:before:text-[#75429c] group-hover:text-[#75429c]  flex items-center justify-start   group-hover:bg-white ">
              <p className="m1-3 pl-3 text-center">01</p>
            </div>
          </div>
          <p className="mt-[21px] text-center text-[22px] leading-[1.2] font-[800]">
            Analysis
          </p>
        </div>
        <div className="flex flex-col  max-lg:w-1/2 mb-12">
          <div className="working-inner-card group hover:bg-[#75429c]">
            <RiFileSearchLine className="text-[#75429c]   group-hover:text-white text-[64px]" />
            <div className="wi-i-corner group-hover:before:text-[#75429c] group-hover:text-[#75429c]  flex items-center justify-start   group-hover:bg-white ">
              <p className="m1-3 pl-3 text-center">01</p>
            </div>
          </div>
          <p className="mt-[21px] text-center text-[22px] leading-[1.2] font-[800]">
            Analysis
          </p>
        </div>
        <div className="flex flex-col  max-lg:w-1/2 mb-12">
          <div className="working-inner-card group hover:bg-[#75429c]">
            <RiFileSearchLine className="text-[#75429c]   group-hover:text-white text-[64px]" />
            <div className="wi-i-corner group-hover:before:text-[#75429c] group-hover:text-[#75429c]  flex items-center justify-start   group-hover:bg-white ">
              <p className="m1-3 pl-3 text-center">01</p>
            </div>
          </div>
          <p className="mt-[21px] text-center text-[22px] leading-[1.2] font-[800]">
            Analysis
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkingProcess