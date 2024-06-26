import React from "react";
import { GiProcessor } from "react-icons/gi";
import "../Hero/slider.css";


function LowerCard() {
  return (
    <div className="transition-all	   font-bold  lower-card max-lg:gap-10  -mt-24 flex flex-wrap justify-center items-center gap-8 z-[100000] bottom-[-10%] w-full ">
      <div className="card relative gap-5 rounded-xl shadow-md hover:text-white group     hover:-mt-5 transition-all duration-300  dark:hover:bg-[#6721AB]  hover:bg-[#6721AB]	 max-lg:w-[40%] max-md:w-[95%] z-[100] overflow-hidden w-[190px] p-10 px-16 flex flex-col justify-center items-center dark:bg-[#242525]  bg-white">
        <GiProcessor className="text-[#6721AB] transition-all   duration-300   group-hover:text-white text-[80px]" />
        <p className="text-black group-hover:text-white text-center text-xl dark:text-white">
          Web Development
        </p>
        <img
          className="absolute bottom-0 w-32 left-0 z-[100] opacity-50  "
          src="https://shtheme.com/demosd/ziptech/wp-content/uploads/2023/04/6.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="card relative gap-5 rounded-xl shadow-md hover:text-white group     hover:-mt-5 transition-all duration-300  dark:hover:bg-[#6721AB]   hover:bg-[#6721AB]	 max-lg:w-[40%] max-md:w-[95%] z-[100] overflow-hidden w-[190px] p-10 px-16 flex flex-col justify-center items-center dark:bg-[#242525]  bg-white">
        <GiProcessor className="text-[#6721AB] transition-all   duration-300   group-hover:text-white text-[80px]" />
        <p className="text-black group-hover:text-white text-center text-xl dark:text-white">
          App Development
        </p>
        <img
          className="absolute bottom-0 w-32 left-0 z-[100] opacity-50  "
          src="https://shtheme.com/demosd/ziptech/wp-content/uploads/2023/04/6.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="card relative gap-5 rounded-xl shadow-md hover:text-white group     hover:-mt-5 transition-all duration-300 dark:hover:bg-[#6721AB]    hover:bg-[#6721AB]	 max-lg:w-[40%] max-md:w-[95%] z-[100] overflow-hidden w-[190px] p-10 px-16 flex flex-col justify-center items-center dark:bg-[#242525]  bg-white">
        <GiProcessor className="text-[#6721AB] transition-all   duration-300   group-hover:text-white text-[80px]" />
        <p className="text-black group-hover:text-white text-center text-xl dark:text-white">
          Digital Marketing
        </p>
        <img
          className="absolute bottom-0 w-32 left-0 z-[100] opacity-50  "
          src="https://shtheme.com/demosd/ziptech/wp-content/uploads/2023/04/6.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="card relative gap-5 rounded-xl shadow-md hover:text-white group     hover:-mt-5 transition-all duration-300  dark:hover:bg-[#6721AB]   hover:bg-[#6721AB]	 max-lg:w-[40%] max-md:w-[95%] z-[100] overflow-hidden w-[190px] p-10 px-16 flex flex-col justify-center items-center dark:bg-[#242525]  bg-white">
        <GiProcessor className="text-[#6721AB] transition-all   duration-300   group-hover:text-white text-[80px]" />
        <p className="text-black group-hover:text-white text-center text-xl dark:text-white">
          Software Development
        </p>
        <img
          className="absolute bottom-0 w-32 left-0 z-[100] opacity-50  "
          src="https://shtheme.com/demosd/ziptech/wp-content/uploads/2023/04/6.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="card relative gap-5 rounded-xl shadow-md hover:text-white group     hover:-mt-5 transition-all duration-300  dark:hover:bg-[#6721AB]  hover:bg-[#6721AB]	 max-lg:w-[40%] max-md:w-[95%] z-[100] overflow-hidden w-[190px] p-10 px-16 flex flex-col justify-center items-center dark:bg-[#242525]  bg-white">
        <GiProcessor className="text-[#6721AB] transition-all   duration-300   group-hover:text-white text-[80px]" />
        <p className="text-black group-hover:text-white text-center text-xl dark:text-white">
          UI/UX Design
        </p>
        <img
          className="absolute bottom-0 w-32 left-0 z-[100] opacity-50  "
          src="https://shtheme.com/demosd/ziptech/wp-content/uploads/2023/04/6.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="card relative gap-5 rounded-xl shadow-md hover:text-white group     hover:-mt-5 transition-all duration-300  dark:hover:bg-[#6721AB]   hover:bg-[#6721AB]	 max-lg:w-[40%] max-md:w-[95%] z-[100] overflow-hidden w-[190px] p-10 px-16 flex flex-col justify-center items-center dark:bg-[#242525]  bg-white">
        <GiProcessor className="text-[#6721AB] transition-all   duration-300   group-hover:text-white text-[80px]" />
        <p className="text-black group-hover:text-white text-center text-xl dark:text-white">
          AI-ML Blockchain
        </p>
        <img
          className="absolute bottom-0 w-32 left-0 z-[100] opacity-50  "
          src="https://shtheme.com/demosd/ziptech/wp-content/uploads/2023/04/6.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default LowerCard;
