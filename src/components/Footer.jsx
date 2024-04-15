import React from "react";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="max-container text-[#c0c0c6] mt-[110px]">
      <div className="flex flex-wrap gap-8  max-xl:p-3 justify-around mb-[60px] max-md:p-1">
        <div className="flex flex-col w-[20%] max-xl:w-[45%] gap-6 max-md:w-[100%] mb-8">
          <img
            width={160}
            src="https://hooqx.com/wp-content/uploads/2024/02/hq-logo-png-02-2.png"
            alt=""
          />
          <p>
            We globally enhance client businesses with strategic creativity in
            IT solutions, spanning development, marketing, design, and
            problem-solving.
          </p>
          <div className="mt-5">
            <ul className="flex  gap-1 text-white ">
              <li className="flex hover:bg-[#15EBAE] hover:text-[#151d35] bg-[#151d35] rounded-full justify-center items-center text-md p-4">
                <FaTwitter />
              </li>
              <li className="flex bg-[#151d35] hover:bg-[#15EBAE] hover:text-[#151d35] rounded-full justify-center items-center gap-2 ml-2 p-4">
                <MdFacebook />
              </li>
              <li className=" justify-center rounded-full bg-[#151d35] hover:bg-[#15EBAE] hover:text-[#151d35] flex items-center gap-2 ml-2 p-4">
                <IoLogoPinterest />
              </li>
              <li className=" justify-center rounded-full bg-[#151d35] hover:bg-[#15EBAE] hover:text-[#151d35] flex items-center gap-2 ml-2 p-4">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[20%] max-xl:w-[45%] max-md:w-[100%] mb-8">
          <p className="text-[20px] mb-2 text-white font-bold">Services</p>
          <div className="w-16 h-1.5 rounded-full bg-[#15ebae]"></div>
          <div className="mt-5">
            <ul className="flex flex-col gap-4 hover:text-[#15ebae]  text-[#c0c0c6]">
              <li className="flex gap-3 items-center group hover:text-[#15ebae]">
                <a
                  href=""
                  className="group-hover:gap-4 gap-2 flex items-center"
                >
                  <FaArrowRightLong /> Web Development
                </a>
              </li>
              <li className="flex gap-3 items-center group hover:text-[#15ebae]">
                <a
                  href=""
                  className="group-hover:gap-4 gap-2 flex items-center"
                >
                  <FaArrowRightLong /> App Development
                </a>
              </li>
              <li className="flex gap-3 items-center group hover:text-[#15ebae]">
                <a
                  href=""
                  className="group-hover:gap-4 gap-2 flex items-center"
                >
                  <FaArrowRightLong /> UI/UX Design
                </a>
              </li>
              <li className="flex gap-3 items-center group hover:text-[#15ebae]">
                <a
                  href=""
                  className="group-hover:gap-4 gap-2 flex items-center"
                >
                  <FaArrowRightLong /> SEO
                </a>
              </li>
              <li className="flex gap-3 items-center group hover:text-[#15ebae]">
                <a
                  href=""
                  className="group-hover:gap-4 gap-2 flex items-center"
                >
                  <FaArrowRightLong /> SMO
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[20%] max-xl:w-[45%] max-md:w-[100%] mb-8">
          <p className="text-[20px] mb-2 text-white font-bold">Contact</p>
          <div className="w-16 h-1.5 rounded-full bg-[#15ebae]"></div>
          <div className="mt-5 text-[#90909c]">
            <ul className="flex flex-col gap-4 text-white text-[16px]">
              <li className="text-[#c0c0c6] text-[16px] mb-3">
                Al Ahli House C, Al Nahda, Dubai, United Arab Emirates
              </li>
              <li className="text-[#c0c0c6]">+971 4 509 5919</li>
              <li className="text-[#c0c0c6]">info@hooqx.com</li>
              <li className="flex gap-2 items-center group text-[#c0c0c6]">
                <AiOutlineGlobal className="text-xl group-hover:text-[#15ebae]" />
                www.hooqx.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[20%] max-xl:w-[45%] max-md:w-[100%] mb-8">
          <p className="text-[20px] mb-2 text-white font-bold">Contact</p>
          <div className="w-16 h-1.5 rounded-full bg-[#15ebae]"></div>
          <div className="mt-5 text-[#90909c]">
            <ul className="flex flex-col gap-6 text-white text-[16px]">
              <li className="text-[#c0c0c6] text-[16px] mb-3">
                Stay updated with the latest in tech – subscribe now for
                trending news!
              </li>
              <li className="bg-[#12213b] p-3 shadow-md rounded-xl flex items-center relative max-md:py-5">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your Email "
                  className="text-[#c0c0c6] border-none outline-none bg-transparent"
                />
                <a
                  href=""
                  className="bg-[#15ebae] text-black p-2  rounded-lg absolute right-3"
                >
                  <FaArrowRightLong />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
