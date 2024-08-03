import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:py-[30px] py-[20px] ">
      <div className=" bg-[#10091B] lg:pl-[140px] pl-0 lg:flex lg:flex-row flex-col items-center lg:justify-between justify-center">
        <div className="">
          <h1 className="text-[40px] lg:w-[442px] font-bold md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
            Powerful Web3 Ticketing APIs
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
            Share your creations, collaborate with other innovators, and push
            the boundaries of event technology together.
          </p>
          <button className="bg-[#FF5B96] text-white py-[8px] px-[24px] rounded-md w-[205px] cursor-pointer">
            Read docs
          </button>
        </div>
        <div className="justify-end items-end flex">
          <Image
            className=""
            src="./developers-hero.svg"
            alt="Next.js Logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
