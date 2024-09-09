"use client";
import React, { useState } from "react";
import { SelectInput } from "./SelectInput";
import { selectCoin } from "./selectData";

const Collections = ({ handleChangeStep }) => {
  const [active, setActive] = useState(0);
  const handleSelectCoin = (i) => {
    setActive(i);
  };
  const handleNext = () => {
    handleChangeStep();
  };
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm opacity-70">Choose collection</span>
        <SelectInput
          src={selectCoin[active].icon}
          coin={selectCoin[active].short_name}
          handleClick={handleSelectCoin}
          pair={selectCoin[active].coin_name}
          dropdown={selectCoin}
          active={active}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="" className="text-sm opacity-70">
          Upload image
        </label>
        <div className="h-[79px] bg-white bg-opacity-10 rounded w-full flex items-center justify-center">
          <input
            type="file"
            id="file"
            className="hidden"
            placeholder="Upload your logo"
          />
          <label htmlFor="file" className="text-sm ">
            <span className="text-white opacity-30">Drag and drop or</span>{" "}
            <span>browse</span>
          </label>
        </div>
      </div>
      <div className="flex mt-5 justify-end">
        <button
          onClick={handleNext}
          className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Collections;
