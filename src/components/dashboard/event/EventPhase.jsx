"use client";
import React, { useState } from "react";
import PhaseMinting from "./PhaseMinting";

const EventPhase = ({ handleChangeStep }) => {
  const [openMint, setOpenMint] = useState(false);
  const handleNext = () => {
    handleChangeStep();
  };
  return (
    <div className="">
      {openMint ? (
        <div className="">
          <PhaseMinting handleNext={handleNext} />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="relative w-full flex flex-col gap-2">
            <label className="text-sm opacity-70" htmlFor="">
              Name
            </label>
            <input
              type="text"
              placeholder="Phase 1"
              className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
            />
          </div>
          <div className="relative w-full flex flex-col gap-2">
            <label className="text-sm opacity-70" htmlFor="">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Introduction to Solana foundation"
              className="bg-white w-full h-[83px] bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
            />
          </div>
          <div className="flex mt-5 justify-end">
            <button
              onClick={() => setOpenMint(true)}
              className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPhase;
