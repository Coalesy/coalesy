import React from "react";

const Choose = () => {
  return (
    <div>
      <div className="bg-[#282232] lg:h-[511px] h-auto w-full py-7 items-center lg:gap-[50px] justify-center lg:flex lg:flex-row flex-col ">
        <div>
          <h1 className="text-[40px] w-[470px] leading-[45px] pb-5 font-[600]">
            Why choosing Coalesy as your event platform
          </h1>
          <button className="bg-[#10091B] px-[25px] py-[10px] w-[205px] rounded-md">
            Find out
          </button>
        </div>
        <div>
          <div className="flex pb-4 gap-2">
            <p className="mt-[5px]">01.</p>
            <h1 className="font-[600] text-[16px]">
              Turn Participation into Rewards
            </h1>
          </div>
          <p className="opacity-70 lg:w-[548px] text-[14px] w-auto">
            Coalesy rewards your event spirit! By attending sessions,
            interacting with creators, and contributing to the community, you
            earn platform tokens.
          </p>
          <div className="border-b border-white my-[40px] opacity-10"></div>
          <div className="flex pb-4 gap-2">
            <p className="mt-[5px]">02.</p>
            <h1 className="font-[600] text-[16px]">
              Discover Events You&apos;ll Love
            </h1>
          </div>
          <div className="border-b border-white my-[20px] opacity-10"></div>
          <div className="flex pb-4 gap-2">
            <p className="mt-[5px]">03.</p>
            <h1 className="font-[600] text-[16px]">
            Connect with Your Tribe
            </h1>
          </div>
          <div className="border-b border-white my-[20px] opacity-10"></div>
          <div className="flex pb-4 gap-2">
            <p className="mt-[5px]">04.</p>
            <h1 className="font-[600] text-[16px]">
            Be a Part of the Future
            </h1>
          </div>
          <div className="border-b border-white my-[20px] opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
