"use client";
import React, { useState } from "react";
import { SuccessDeploy } from "./SuccessPopUp";

const EventLink = ({ handleChangeStep }) => {
  const [openComplete, setOpenComplete] = useState(false);
  const handleNext = () => {
    setOpenComplete(true);
  };
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="relative w-full flex flex-col gap-2">
        <label className="text-sm opacity-70" htmlFor="">
          Website link
        </label>
        <input
          type="url"
          placeholder="e.g https://coalesy.com/"
          className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
        />
      </div>
      <div className="relative w-full flex flex-col gap-2">
        <label className="text-sm opacity-70" htmlFor="">
          Twitter link
        </label>
        <input
          type="url"
          placeholder="e.g https://x.com/coalesynft"
          className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
        />
      </div>
      <div className="relative w-full flex flex-col gap-2">
        <label className="text-sm opacity-70" htmlFor="">
          Discord link
        </label>
        <input
          type="url"
          placeholder="e.g https://discord.com/coalesynft"
          className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
        />
      </div>
      <div className="relative w-full flex flex-col gap-2">
        <label className="text-sm opacity-70" htmlFor="">
          Instagram link
        </label>
        <input
          type="url"
          placeholder="e.g https://instagram.com/coalesynft"
          className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
        />
      </div>
      <div className="flex mt-4 justify-end">
        <button
          onClick={handleNext}
          className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm"
        >
          Publish
        </button>
      </div>
      {openComplete&&<SuccessDeploy isOpen={openComplete} setIsOpen={setOpenComplete} />}
    </div>
  );
};

export default EventLink;
