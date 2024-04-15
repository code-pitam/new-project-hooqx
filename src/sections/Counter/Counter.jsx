import React from 'react'
import CountUp from "react-countup";
import { IoDiamondOutline } from "react-icons/io5";

function Counter() {
  return (
    <div className="max-container mb-[142px] mt-[80px] flex flex-wrap justify-around max-md:items-start  max-md:justify-start">
      <div className="flex items-center gap-6 max-lg:w-[40%] max-md:w-[90%] mb-[40px]">
        <IoDiamondOutline className="text-[62px] text-[#75429c] " />
        <div className="counter-card flex-col flex gap-1">
          <p className="c-number font-bold">
            <CountUp end={5} duration={10} className="text-[54px]" />
          </p>
          <p className="text-[] ">Years of Experience </p>
        </div>
      </div>
      <div className="flex items-center gap-6 max-lg:w-[40%] max-md:w-[90%] mb-[40px]">
        <IoDiamondOutline className="text-[62px] text-[#75429c] " />
        <div className="counter-card flex-col flex gap-1">
          <p className="c-number font-bold">
            <CountUp end={261} duration={10} className="text-[54px]" />
          </p>
          <p className="text-[] ">Project Completed </p>
        </div>
      </div>
      <div className="flex items-center gap-6 max-lg:w-[40%] max-md:w-[90%] mb-[40px]">
        <IoDiamondOutline className="text-[62px] text-[#75429c] " />
        <div className="counter-card flex-col flex gap-1">
          <p className="c-number font-bold">
            <CountUp end={56} duration={10} className="text-[54px]" />
          </p>
          <p className="text-[] ">Skilled Experts</p>
        </div>
      </div>
      <div className="flex items-center gap-6 max-lg:w-[40%] max-md:w-[90%] mb-[40px]">
        <IoDiamondOutline className="text-[62px] text-[#75429c] " />
        <div className="counter-card flex-col flex gap-1">
          <p className="c-number font-bold">
            <CountUp end={247} duration={10} className="text-[54px]" />
          </p>
          <p className="text-[] ">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
}

export default Counter