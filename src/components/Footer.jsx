import React from "react";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className="max-container text-[#90909c] mt-[110px]">
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col w-1/4 gap-6">
          <img
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
        <div className="flex flex-col w-1/4 ">
          <p className="text-[20px] mb-2 text-white font-bold">Services</p>
          <div className="w-16 h-1.5 rounded-full bg-[#15ebae]"></div>
          <div className="mt-5">
            <ul className="flex flex-col gap-1 text-white ">
              <li className="flex gap-3 items-center"></li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
