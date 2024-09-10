import Image from "next/image";
import React from "react";

const Future = () => {
  return (
<<<<<<< HEAD
    <div className="footer-container ">
      <div className="pt-[80px] flex justify-center items-center pb-14">
        <h1 className="text-[40px] font-bold tracking-[-1px] w-[70%] text-center">
=======
    <div className="py-6">
      <div>
        <h1 className="text-[40px] font-[600] text-center">
>>>>>>> ff61c7bf661108d7b61323210e13bb04ced6ab7b
          The future is here, Take control
        </h1>
      </div>

      <div className="w-full px-56 flex justify-center gap-8 mt-12 footer-container">

        <div className="bg-[url(/explore-bg.svg)] bg-repeat rounded-[10px] w-full h-[450px] bg-cover flex flex-col items-start p-8 justify-end">
          <h1 className="opacity-80 text-[14px] font-medium tracking-[-0.2px]">Individuals</h1>
          <h1 className="w-full text-[20px] font-bold leading-[25px] py-[15px] tracking-[-0.5px]">
            Explore available events
          </h1>
          <p className="w-full tracking-[-0.2px] text-[14px] opacity-70">
            Explore the Coalesy platform, discover upcoming events, and join a
            community.
          </p>
          <div className="gap-2 text-[14px] font-medium flex items-center pt-12">
            <p>Learn more</p>
            <Image
              className=""
              src="./arrow-right.svg"
              alt="Next.js Logo"
              width={17}
              height={17}
            />
          </div>
        </div>

        <div className="bg-[url(/create-bg.svg)] bg-no-repeat rounded-[10px] bg-cover w-full h-[450px] flex flex-col items-start p-8 justify-end">
          <h1 className="opacity-80 text-[14px] font-medium tracking-[-0.2px]">Businesses</h1>
          <h1 className="w-full text-[20px] font-bold leading-[25px] py-[15px] tracking-[-0.5px]">
          Start creating your events
          </h1>
          <p className="w-full tracking-[-0.2px] text-[14px] opacity-70 ">
          Explore the Coalesy platform, discover upcoming events, and join a community.
          </p>
          <div className="gap-2 text-[14px] font-medium flex items-center pt-12">
            <p>Learn more</p>
            <Image
              className=""
              src="./arrow-right.svg"
              alt="Next.js Logo"
              width={17}
              height={17}
            />
          </div>
        </div>

        <div className="bg-[url(/build-bg.svg)] bg-no-repeat rounded-[10px] bg-cover w-full h-[450px] flex flex-col items-start p-8 justify-end">
          <h1 className="opacity-80 text-[14px] font-medium tracking-[-0.2px]">Developers</h1>
          <h1 className="w-full text-[20px] font-bold leading-[25px] py-[15px] tracking-[-0.5px]">
          Build the futures of web3 events
          </h1>
          <p className="w-full tracking-[-0.2px] text-[14px] opacity-70">
          Explore the Coalesy platform, discover upcoming events, and join a community.
          </p>
          <div className="gap-2 text-[14px] font-medium flex items-center pt-12">
            <p>Learn more</p>
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
