import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:py-[120px] py-[20px] ">
      <div className=" bg-[#10091B] pl-[140px] lg:flex lg:flex-row flex-col items-center justify-center gap-[80px] ">
        <div>
          <h1 className="text-[40px] lg:w-[442px] font-bold md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
            Get front row with <span>Coalesy!</span>
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
            Never miss out on the fun again! ‍♀️ Coalesy connects you to events
            you&apos;ll love.
          </p>
          <button className="bg-[#FF5B96] text-white py-[8px] px-[24px] rounded-md w-[205px] cursor-pointer">
            Explore events
          </button>
        </div>
        <div className="justify-end mt-[-40px]">
          <Image
            className=""
            src="./individual-hero.svg"
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
