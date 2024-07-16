"use client";

import Image from "next/image";
import React, { useState } from "react";

const Possible = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    {
      image: "/regen.svg",
      title: "Amazing events with talented people",
      description: "(For Individuals Interested in Investment) Explore investment and sponsorship opportunities in the booming Web3 event space.",
    },
    {
      image: "/stride.svg",
      title: "Best of all web3 event platforms",
      description: "(For Individuals Interested in Investment) Explore investment and sponsorship opportunities in the booming Web3 event space.",
    },
    {
      image: "/stride.svg",
      title: "Third Event",
      description: "(For Individuals Interested in Investment) Explore investment and sponsorship opportunities in the booming Web3 event space.",
    },
    {
      image: "/regen.svg",
      title: "Fourth event",
      description: "(For Individuals Interested in Investment) Explore investment and sponsorship opportunities in the booming Web3 event space.",
    },
    {
      image: "/regen.svg",
      title: "Fifth event title",
      description: "(For Individuals Interested in Investment) Explore investment and sponsorship opportunities in the booming Web3 event space.",
    },
    {
      image: "/stride.svg",
      title: "Sixth event title",
      description: "(For Individuals Interested in Investment) Explore investment and sponsorship opportunities in the booming Web3 event space.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % contents.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + contents.length) % contents.length);
  };

  const nextIndex = (currentIndex + 1) % contents.length;

  return (
    <div className="px-56 py-8">
      <div>
        <h1 className="w-[424px] text-[40px] font-600 lg:leading-[44px] leading-[33px]">
          We&apos;ve made it possible, everytime!
        </h1>
        <p className="w-[424px] py-[28px]">
          Explore the Coalesy platform, discover upcoming events, and join a community.
        </p>
        <button className="bg-[#FF5B96] font-semibold text-white py-[16px] px-[24px] rounded-md w-[205px] cursor-pointer">
          Get started
        </button>
      </div>

      <div className="">
        <div className="flex gap-2 py-4 justify-end">
          <div onClick={handlePrevious} className="cursor-pointer">
            <Image
              src="/rounded-left.svg"
              alt="Previous"
              width={42}
              height={42}
            />
          </div>
          <div onClick={handleNext} className="cursor-pointer">
            <Image
              src="/rounded-right.svg"
              alt="Next"
              width={42}
              height={42}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <div className="bg-[#443448] p-4 rounded-md w-[318px] flex flex-col">
            <div className="flex justify-start items-start">
              <Image
                src={contents[currentIndex].image}
                alt="Event Logo"
                width={158}
                height={60}
              />
            </div>
            <div>
              <h1 className="text-[25px] font-600 w-[250px] leading-[33px] py-8">
                {contents[currentIndex].title}
              </h1>
              <p className="w-[241px] opacity-70">
                {contents[currentIndex].description}
              </p>
            </div>
          </div>

          <div className="bg-[#443448] p-4 rounded-md w-[318px] flex flex-col">
            <div className="flex justify-start items-start">
              <Image
                src={contents[nextIndex].image}
                alt="Event Logo"
                width={158}
                height={60}
              />
            </div>
            <div>
              <h1 className="text-[25px] font-600 w-[250px] leading-[33px] py-8">
                {contents[nextIndex].title}
              </h1>
              <p className="w-[241px] opacity-70">
                {contents[nextIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possible;
