import React from "react";
import { callback } from "../../assets/images";

function CallBack() {
  return (
    <div className="max-container flex pt-[100px] callback p-5 items-center pb-[100px] bg-white rounded-lg  shadow-lg shadow-black  -pt-[400px] z-[11000] top-1 ">
      <div className="w-[40%] pr-10">
        <img src={callback} alt="" className="w-full" />
      </div>
      <div className="flex flex-col w-[50%] ">
        <p className="text-[46px] font-bold leading-[55.2px]">
          Request a Call Back
        </p>
        <p className="text-lg font-normal mt-4 text-[#515264]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at
          consequuntur necessitatibus!
        </p>
        <form>
          <div className=" flex gap-8 mb-5 mt-8">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="bg-[#f1f3f8] p-4  outline-offset-1  outline-slate-200 border-none"
            />
            <input
              className="bg-[#f1f3f8] p-4  outline-offset-1  outline-slate-200 border-none"
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
            />
          </div>
          <div className=" flex gap-8 mb-5 mt-8">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="bg-[#f1f3f8] p-4  outline-offset-1  outline-slate-200 border-none"
            />
            <input
              className="bg-[#f1f3f8] p-4  outline-offset-1  outline-slate-200 border-none"
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
            />
          </div>
          <div className=" flex gap-8 mb-5 mt-8">
            <textarea
              name=""
              id=""
        placeholder="Message"
              cols="60"
              className="bg-[#f1f3f8] w-full h-[150px] p-4 outline-offset-1  outline-slate-200 border-none"
            ></textarea>
          </div>
          <input
            className="bg-[#6600d3] rounded-md text-[white] hover:bg-[white] mt-4 hover:border-2 px-8 p-4 font-bold hover:border-[#6600d3] border-solid hover:text-[#6600d3]"
            type="button"
            value="Submit Now"
          />
        </form>
      </div>
    </div>
  );
}

export default CallBack;
