import "../App.css"

import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";


function Navbar() {
  const [isActive, setActive] = useState(false);

  const ToggleClass = (e) => {
    e.stopPropagation();

    setActive(!isActive);
  };

  const handleChild = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className="text-white  navbar transition-all    text-lg   font-bold fixed top-0 w-full z-[900]  flex justify-between pr-4 items-center filter backdrop-blur-md ">
        <div className="logo bg-gradient-to-r from-[#524cff] to-[#7234a8] p-4 pr-10 mr-5 max-md:mr-10">
          <img
            width={182}
            src="https://hooqx.com/wp-content/uploads/2024/02/hq-logo-png-02-2.png"
            alt=""
            srcset=""
          />
        </div>
        <nav className=" max-lg:hidden">
          <ul className="flex  gap-9">
            <li className="text-[#45DEAE]">HOME </li>
            <li className="flex items-center gap-2  font-bold">
              DEVELOPMENT <FaPlus />
            </li>
            <li className="flex items-center gap-2  font-bold">
              MARKETING <FaPlus />
            </li>
            <li className="flex items-center gap-2  font-bold">
              DESIGN <FaPlus />
            </li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>

        <div className="s-icon"></div>
        <div className="flex gap-3 items-center">
          <div
            className="text-[#9D75B5] hidden max-lg:flex text-3xl justify-self-end 	"
            onClick={ToggleClass}
          >
            <CiMenuFries />
          </div>
          <BiSearchAlt className="text-2xl" />

          <span className="p-3 rounded-full max-md:hidden   bg-purple-900 ml-4">
            <MdPhoneInTalk className="  text-3xl" />
          </span>
          <p className="  max-md:hidden">+971 4 509 5919</p>
        </div>
      </div>

      <div
        className={` animate-fade-right navbar-side transition-display ease-in-out delay-1000 duration-1000 fixed text-white z-[999999] w-[100vw]  h-screen bg-[rgba(8, 8, 8, 0.84)] ${
          isActive ? "block" : "hidden"
        }`}
        onClick={ToggleClass}
      >
        <div
          className="w-[300px] h-full  pt-5  bg-[#171D26]"
          onClick={handleChild}
        >
          <img
            width={182}
            src="https://hooqx.com/wp-content/uploads/2024/02/hq-logo-png-02-2.png"
            alt=""
            srcset=""
            className="pl-5"
          />
          <div className="pl-5 mt-10 mb-20">
            <ul className="flex flex-col gap-5 ">
              <li>HOME</li>
              <li>DEVELOPMENT</li>
              <li>MARKETING</li>
              <li>DESIGN</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="mt-10 pl-3">
            <ul className="flex flex-col justify-start  items-start gap-3">
              <li className="flex items-center text-md g">
                <p className="flex items-start">
                  <IoLocationSharp className="text-xl mt-1 w-10  text-[#9D75B5]" />{" "}
                  Al Ahli House C, Al Nahda, Dubai, United Arab Emirates
                </p>
              </li>
              <li className="flex items-center gap-2 ml-2">
                <IoMdMail className="text-[#9D75B5]" />
                info@hooqx.com
              </li>
              <li className=" flex items-center gap-2 ml-2">
                <FaPhoneAlt className="text-[#9D75B5]" />
                +971 4 509 5919
              </li>
            </ul>
          </div>
          <div className="mt-10 pl-3">
            <ul className="flex  gap-1 text-white">
              <li className="flex bg-[#9D75B5] rounded-full justify-center items-center text-md p-3">
                <FaTwitter />
              </li>
              <li className="flex bg-[#9D75B5] rounded-full justify-center items-center gap-2 ml-2 p-3">
                <MdFacebook />
              </li>
              <li className=" justify-center rounded-full bg-[#9D75B5] flex items-center gap-2 ml-2 p-3">
                <IoLogoPinterest />
              </li>
              <li className=" justify-center rounded-full bg-[#9D75B5] flex items-center gap-2 ml-2 p-3">
                <FaInstagram />
              </li>
            </ul>
          </div>
          <div className=" m-10 ml-5 flex w-fit justify-center bg-white  rounded-md items-center  text-slate-400 p-2">
            <FaMoon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
