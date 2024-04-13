import React from 'react'
import "./service.css"
import { service1 } from '../../assets/images';
import { MdComputer } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

function Service() {
  return (
    <div className="max-container flex flex-col items-center">
      <p className="service-t-h font-bold text-white rounded-full  px-5 py-1 mb-[10px]">
        Our Services
      </p>
      <p className="text-[48px] mb-14 max-w-[800px] leading-[55px] text-center font-bold">
        From Zero to Hero: Our Exclusive IT Services
      </p>
      <div className="flex max-lg:flex-wrap   justify-between max-md:justify-center gap-5 w-full">
        <div className="   max-lg:w-[48%] service-card max-md:w-full bg-[#F1F3F8]   rounded-lg   w-1/4   rounded-br-3xl hover:-mt-2">
          <div className="service-card-img">
            <img src={service1} alt="" />
          </div>
          <div className="relative service-card-inner pt-[55px]">
            <div className="service-icon-box">
              <MdComputer />
            </div>

            <p className="text-[22px] font-bold mx-[30px] mb-3">
              {" "}
              Performance Marketing
            </p>
            <p className="mx-[30px] mb-6 text-[16px] leading-[28.6px]">
              As a premier digital agency, we blend creativity with strategy to
              shape compelling online...
            </p>
            <div className="ml-[30px] flex items-center gap-1">
              <FaArrowRightLong className="text-[#808093] ml-1 text-md hover:[#524cff]" />
              <a
                className="text-[#808093]   underline hover:text-[#BCA7D0]"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="   max-lg:w-[48%] service-card max-md:w-full bg-[#F1F3F8]  rounded-lg   w-1/4   rounded-br-3xl hover:-mt-2">
          <div className="service-card-img">
            <img src={service1} alt="" />
          </div>
          <div className="relative pt-[55px]">
            <div className="service-icon-box">
              <MdComputer />
            </div>

            <p className="text-[22px] font-bold mx-[30px] mb-3">
              {" "}
              Performance Marketing
            </p>
            <p className="mx-[30px] mb-6 text-[16px] leading-[28.6px]">
              As a premier digital agency, we blend creativity with strategy to
              shape compelling online...
            </p>
            <div className="ml-[30px] flex items-center gap-1">
              <FaArrowRightLong className="text-[#808093] ml-1 text-md hover:[#524cff]" />
              <a
                className="text-[#808093]   underline hover:text-[#BCA7D0]"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="   max-lg:w-[48%] service-card max-md:w-full bg-[#F1F3F8]  rounded-lg   w-1/4   rounded-br-3xl hover:-mt-2">
          <div className="service-card-img">
            <img src={service1} alt="" />
          </div>
          <div className="relative pt-[55px]">
            <div className="service-icon-box">
              <MdComputer />
            </div>

            <p className="text-[22px] font-bold mx-[30px] mb-3">
              {" "}
              Performance Marketing
            </p>
            <p className="mx-[30px] mb-6 text-[16px] leading-[28.6px]">
              As a premier digital agency, we blend creativity with strategy to
              shape compelling online...
            </p>
            <div className="ml-[30px] flex items-center gap-1">
              <FaArrowRightLong className="text-[#808093] ml-1 text-md hover:[#524cff]" />
              <a
                className="text-[#808093]   underline hover:text-[#BCA7D0]"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="   max-lg:w-[48%] service-card max-md:w-full bg-[#F1F3F8]  rounded-lg   w-1/4   rounded-br-3xl hover:-mt-2">
          <div className="service-card-img">
            <img src={service1} alt="" />
          </div>
          <div className="relative pt-[55px]">
            <div className="service-icon-box">
              <MdComputer />
            </div>

            <p className="text-[22px] font-bold mx-[30px] mb-3">
              {" "}
              Performance Marketing
            </p>
            <p className="mx-[30px] mb-6 text-[16px] leading-[28.6px]">
              As a premier digital agency, we blend creativity with strategy to
              shape compelling online...
            </p>
            <div className="ml-[30px] flex items-center gap-1">
              <FaArrowRightLong className="text-[#808093] ml-1 text-md hover:[#524cff]" />
              <a
                className="text-[#808093]   underline hover:text-[#BCA7D0]"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='service-section-footer mt-10'>
        <p>
          Do You Want To explore more services just <a href="#">click here</a>
        </p>
      </div>
    </div>
  );
}

export default Service