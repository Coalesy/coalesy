import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:py-[50px] py-[20px] ">
      <div className=" bg-[#10091B] pl-[140px] lg:flex lg:flex-row flex-col items-center justify-center gap-[40px] ">
        <div>
          <h1 className="text-[40px] lg:w-[442px] font-bold md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
          Make It Happen with <span>Coalesy!</span>
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
          Reach a wider audience, create a buzz, and sell out your next event with Coalesy.
          </p>
          <button className="bg-[#FF5B96] text-white py-[8px] px-[24px] rounded-md w-[205px] cursor-pointer">
            Launch wallet
          </button>
        </div>
        <div className="justify-center flex mt-[-30px]">
          <Image
            className=""
            src="./creator-hero-img.svg"
            alt="Next.js Logo"
            width={732}
            height={732}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
