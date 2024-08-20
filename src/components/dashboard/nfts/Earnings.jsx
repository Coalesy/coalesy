"use client";
import React, { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

const Earnings = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="relative w-full flex flex-col gap-2">
        <label htmlFor="" className="text-sm opacity-70">
          Specify your commission
        </label>
        <div className="py-[10px] flex items-center justify-between px-[15px] bg-white bg-opacity-10 rounded">
          <button
            onClick={() =>
              counter > 0 && setCounter((prevCounter) => prevCounter - 1)
            }
            className="bg-transparent border-none outline-none"
          >
            <TbMinus />
          </button>
          <span className="text-white">{counter}.0%</span>
          <button
            onClick={() => setCounter((prevCounter) => prevCounter + 1)}
            className="bg-transparent border-none outline-none"
          >
            <TbPlus />
          </button>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-2">
        <label className="text-sm opacity-70" htmlFor="">
          Enter wallet address
        </label>
        <input
          type="url"
          placeholder="e.g 0xhddhsdhsdgsdsdk..."
          className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
        />
      </div>
      <div className="flex mt-5 justify-end">
        <button className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default Earnings;
