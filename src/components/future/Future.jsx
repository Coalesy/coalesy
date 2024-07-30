import Image from "next/image";
import React from "react";

const Future = () => {
  return (
    <div className="py-6">
      <div>
        <h1 className="text-[40px] font-[600] text-center">
          The future is here, Take control
        </h1>
      </div>

      <div className="px-56 flex gap-3 mt-12">

        <div className="bg-[url(/explore-bg.svg)] h-[393px] w-[295px] flex flex-col items-start p-8 justify-end">
          <h1 className="opacity-70">Individuals</h1>
          <h1 className="w-[209px] text-[20px] font-bold leading-[25px] py-[15px]">
            Explore available events
          </h1>
          <p className="w-[213px] opacity-70">
            Explore the Coalesy platform, discover upcoming events, and join a
            community.
          </p>
          <div className="gap-2 flex items-center pt-12">
            <p>Learn More</p>
            <Image
              className=""
              src="./arrow-right.svg"
              alt="Next.js Logo"
              width={17}
              height={17}
            />
          </div>
        </div>

        <div className="bg-[url(/create-bg.svg)] h-[393px] w-[295px] flex flex-col items-start p-8 justify-end">
          <h1 className="opacity-70">Businesses</h1>
          <h1 className="w-[209px] text-[20px] font-bold leading-[25px] py-[15px]">
          Start creating your events
          </h1>
          <p className="w-[213px] opacity-70">
          Explore the Coalesy platform, discover upcoming events, and join a community.
          </p>
          <div className="gap-2 flex items-center pt-12">
            <p>Learn More</p>
            <Image
              className=""
              src="./arrow-right.svg"
              alt="Next.js Logo"
              width={17}
              height={17}
            />
          </div>
        </div>

        <div className="bg-[url(/build-bg.svg)] h-[393px] w-[295px] flex flex-col items-start p-8 justify-end">
          <h1 className="opacity-70">Developers</h1>
          <h1 className="w-[209px] text-[20px] font-bold leading-[25px] py-[15px]">
          Build the futures of web3 events
          </h1>
          <p className="w-[213px] opacity-70">
          Explore the Coalesy platform, discover upcoming events, and join a community.
          </p>
          <div className="gap-2 flex items-center pt-12">
            <p>Learn More</p>
            <Image
              className=""
              src="./arrow-right.svg"
              alt="Next.js Logo"
              width={17}
              height={17}
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Future;
