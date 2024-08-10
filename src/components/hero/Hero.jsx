import React from "react";

const Hero = () => {
  return (
    <div  className=" bg-[url(/first-bg.svg)] flex flex-col justify-start pt-[220px] items-center h-[1150px] bg-cover bg-center bg-[#10091B] bg-blend-normal">

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2 mb-[40px] w-[55%] text-center ">
            <h1 className="text-[32px] md:text-[50px] tracking-[-2px] leading-[60px] font-bold">Connect, Engage, Earn with Coalesy</h1>
            <p className="text-[16px] font-normal opacity-70 tracking-[-1px]">Tired of boring events? Coalesy changes the game! Discover unique experiences, connect with creators you love, and even invest in the future of events. </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 mb-[40px] text-center text-[14px] tracking-[-0.2px] font-semibold ">
          <a href='#' alt='' className="px-14 py-5 bg-[#FF5B96] rounded-[5px]">Explore events</a>
          <a href='#' alt='' className="px-14 py-5 border border-[#FF5B96] text-[#FF5B96]  rounded-[5px]">Visit marketplace</a>
        </div>
      </div>

      <iframe className=" mx-[25px] md:mt-[30px] md:w-[900px] md:h-[500px] rounded-[5px] md:rounded-[10px]"
      src="https://www.youtube.com/watch?v=jCMU4qw6LqI&list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY&index=6"
      frameborder="0"
      allowfullscreen
    />
      
      </div>
  );
};

export default Hero;
