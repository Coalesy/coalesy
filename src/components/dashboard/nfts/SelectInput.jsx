import Image from "next/image";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export const SelectInput = ({
  src,
  coin,
  pair,
  dropdown: dropdownData,
  handleClick,
  active,
  className,
}) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <div
        onClick={() => setShowInput(!showInput)}
        className="w-full py-2 px-3 cursor-pointer bg-white bg-opacity-10 flex items-center justify-between rounded"
      >
        <div className="flex items-center gap-2">
          <Image alt="logo" src={src} height={30} width={30} priority />
          <span className="text-[14px] text-white">{coin}</span>
          <span className="opacity-50 text-white text-[12px]">{pair}</span>
        </div>
        <span className="text-white">
          <BiChevronDown />
        </span>
      </div>
      {showInput && (
        <div className="bg-white bg-opacity-10 z-[1000] w-full flex gap-4 flex-col mt-3 absolute p-3 rounded-3xl">
          {dropdownData.map((drd, i) => (
            <div className="" key={i}>
              <div
                onClick={() => {
                  handleClick(i), setShowInput(false);
                }}
                className="flex items-center  cursor-pointer justify-between"
              >
                <div className="flex items-center gap-2">
                  <Image
                    alt="logo"
                    src={drd.icon}
                    height={30}
                    width={30}
                    priority
                  />
                  <span className="text-[14px] text-white">{drd.short_name}</span>
                  <span className="opacity-50 text-white text-[12px]">
                    {drd.coin_name}
                  </span>
                </div>
                <div className="border border-white border-opacity-40 rounded-full p-[2px]">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      active === i && "bg-[#FF5B96]"
                    } `}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
