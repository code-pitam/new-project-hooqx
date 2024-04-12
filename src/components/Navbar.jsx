import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { FaPlus } from "react-icons/fa";


function Navbar() {
  return (
    <div className="text-white     text-lg   font-bold fixed top-0 w-full z-[900]  flex justify-between pr-4 items-center filter backdrop-blur-md ">
      <div className="logo bg-gradient-to-r from-[#524cff] to-[#7234a8] p-4 pr-10 mr-5">
        <img
          width={182}
          src="https://hooqx.com/wp-content/uploads/2024/02/hq-logo-png-02-2.png"
          alt=""
          srcset=""
        />
      </div>
      <nav>
        <ul className="flex  gap-9">
          <li>HOME </li>
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
        <span className="p-3 rounded-full   bg-purple-900 ml-4">
          <MdPhoneInTalk className="  text-3xl" />
        </span>
        <p>+971 4 509 5919</p>
      </div>
    </div>
  );
}

export default Navbar;
