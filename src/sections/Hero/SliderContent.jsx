import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function SliderContent({activeIndex, sliderImage}) {
  return (
    <section>
      {sliderImage?.map((slide, index) => (
        <div className={index === activeIndex ? "slides active " : "inactive"}>
          <div
            style={{
              background: `url(${slide.urls})`,
            }}
            className={`s-content text-center overflow-hidden bg-black flex flex-col leading-6 pt-[220px] pb-[250px] bg-[url(${slide.urls})]  bg-cover bg-no-repeat bg-center`}
          >
            <div className="slide-left  z-40">
              {slide?.title.map((item) => {
                return (
                  <>
                    <p  className="text-6xl -mb-10 text-[#E5E0D8] animate-fade-up animate-once  animate-duration-1000 animate-delay-200 animate-ease-in  font-extrabold ">
                      {item}
                    </p>
                    <br />
                  </>
                );
              })}
            </div>
            <div className="flex  gap-8 z-50">
              <a
                href="#_"
                class="relative hero-button item-center  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-[#524cff] to-[#7234a8] rounded hover:bg-white group"
              >
                <span class="w-56 h-56 rounded-full rotate-[-40deg] bg-white absolute bottom-0 left-0  ease-out duration-500 transition-all translate-y-[120%] mb-9 mr-9 group-hover:mr-0 group-hover:mb-32 group-hover:-translate-x-[13%]"></span>
                <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-[#524cff]">
                  Button Text
                </span>
                <FaArrowRightLong className="text-white ml-1 text-xl hover:[#524cff]" />
              </a>
              <a
                href="#_"
                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded border-solid border-[1px] border-[#3D3D3A] group"
              >
                <span class="w-56 h-56 rounded-full rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0  ease-out duration-500 transition-all translate-y-[120%] mb-9 mr-9 group-hover:mr-0 group-hover:mb-32 group-hover:-translate-x-[13%]"></span>
                <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                  Button Text
                </span>
              </a>
            </div>
            {/* <img
              className="slide-image object-cover "
              src={slide.urls}
              alt=""
              srcset=""
            /> */}

            <div className="absolute  bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#010221] opacity-80"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent