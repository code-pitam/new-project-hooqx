import React from 'react'
import { service1 } from '../../assets/images';
import { MdComputer } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

function Service() {
  return (
    <div className="max-container">
      <p>Our Services</p>
      <p>From Zero to Hero: Our Exclusive IT Services</p>
      <div>
        <div className="    rounded-lg    rounded-br-3xl hover:-mt-5">
          <img src={service1} alt="" />
          <div>
            <MdComputer />
          </div>

          <p>Performance Marketing</p>
          <p>
            As a premier digital agency, we blend creativity with strategy to
            shape compelling online...
          </p>
          <div>
            <FaArrowRightLong className="text-white ml-1 text-xl hover:[#524cff]" />
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div>
        <p>Do You Want To explore more services just <a href="#">click here</a></p>
      </div>
    </div>
  );
}

export default Service