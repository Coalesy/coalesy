import React from "react";
import { Img } from "../Img";

const Hero = () => {
  return (
    <div  className=" bg-[url(/first-bg.svg)] bg-cover bg-center bg-[#10091B] bg-blend-normal">
      <div className="pt-48 ">
        {/* <div class="  lg:h-[100vh] h-auto flex items-center justify-center relative"> */}
          {/* <div class="absolute  opacity-95 w-full h-full inset-0"></div> */}
          <div className=" ">
            <h1 className="text-[var(--text-color)] text-[45px] font-bold text-center lg:leading-[56px] md:  py-[20px]">
              Connect, Engage, Earn <br /> with{" "}
              <span className="text-[#FF93FF]">Coalesy</span>
            </h1>
            <p className="text-[var(--text-color)] lg:w-[617px] md:w-[450px] w-[350px] text-center opacity-70 m-auto">
              Tired of boring events? Coalesy changes the game! Discover unique
              experiences, connect with creators you love, and even invest in
              the future of events. 
            </p>

            <div className="flex items-center justify-center gap-[40px] my-[30px]">
              <button className="bg-[#FF5B96] text-white py-[8px] px-[24px] rounded-md w-[205px] cursor-pointer">
                Explore events
              </button>
              <button className="border-[1px] border-[#FF5B96] text-white py-[8px] px-[24px] rounded-md w-[205px] cursor-pointer">
                Visit marketplace
              </button>
            </div>

            <div className="flex justify-center">
              <Img
                darkModeSrc={"./hero-img.svg"}
                lightModeSrc={"./hero-img.svg"}
                src=""
                alt="Next.js Logo"
                width={821}
                height={484}
              />
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Hero;
