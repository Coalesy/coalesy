"use client";


const Possible = () => {

  return (
    <div className="px-56 py-8 footer-container">
      <div>
        <h1 className="w-[424px] text-[40px] font-600 lg:leading-[44px] tracking-tight font-bold leading-[33px]">
          We&apos;ve made it possible, everytime!
        </h1>
        <p className="w-[424px] py-[28px]">
          Explore the Coalesy platform, discover upcoming events, and join a community.
        </p>
        <button className="bg-[#FF5B96] text-[14px] tracking-[-0.2px] font-semibold text-white py-[16px] px-[24px] rounded-md w-[205px] cursor-pointer">
          Get started
        </button>
      </div>

      <div className="top-[-5%]">
        <div>
          {/* This will be the toggle arrow */}
        </div>
        
        <div className="flex gap-10 justify-end items-center">
          <div className="bg-[#282232] w-[350px] h-[450px] rounded-[10px] flex flex-col justify-center items-center">container 1</div>
          <div className="bg-[#282232] w-[350px] h-[450px] rounded-[10px] flex flex-col justify-center items-center">container 2</div>
        </div>
      </div>

      
    </div>
  );
};

export default Possible;
