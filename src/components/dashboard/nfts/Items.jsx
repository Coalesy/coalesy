import React from "react";
import { TbHelpCircle } from "react-icons/tb";

const Items = ({ handleChangeStep }) => {
  const handleNext = () => {
    handleChangeStep();
  };
  return (
    <div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="" className="text-sm opacity-70">
          Upload your items
        </label>
        <div className="h-[122px] bg-white bg-opacity-10 rounded w-full flex items-center justify-center">
          <input
            type="file"
            id="file"
            className="hidden"
            placeholder="Upload your logo"
          />
          <label htmlFor="file" className="text-sm ">
            <span className="text-white opacity-30">
              Drag and drop .CSV file or
            </span>{" "}
            <span className="text-[#FF5B96]">browse</span>
          </label>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <span className="text-white">
          <TbHelpCircle size={24} />
        </span>
        <span className="opacity-70 text-sm text-white">
          Please preview your items and edit before publishing. Once you
          published, you won&apos;t be able to edit again.
        </span>
      </div>
      <div className="flex mt-7 items-center gap-4 justify-end">
        <button className="py-2 px-5 rounded bg-white bg-opacity-10 text-sm">
          Preview
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-5 bg-[#FF5B96] rounded text-sm text-white"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Items;
