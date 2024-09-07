import React from "react";

const EventDetails = ({ handleChangeStep }) => {
    const handleNext = () => {
        handleChangeStep();
      };
  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full flex flex-col gap-2">
        <label className="text-sm opacity-70" htmlFor="">
          Event name
        </label>
        <input
          type="text"
          placeholder="Binance Token NFT"
          className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
        />
      </div>
      <div className="relative w-full flex flex-col gap-2">
        <label className="text-sm opacity-70" htmlFor="">
          Description
        </label>
        <textarea
          type="text"
          placeholder="Talk about your NFT..."
          className="bg-white w-full h-[83px] bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
        />
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

export default EventDetails;
