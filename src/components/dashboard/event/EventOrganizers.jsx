import React from "react";

const EventOrganizers = ({ handleChangeStep }) => {
  const handleNext = () => {
    handleChangeStep();
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center w-full gap-4">
        <div className="relative w-1/2 flex flex-col gap-2">
          <label className="text-sm opacity-70" htmlFor="">
            First name
          </label>
          <input
            type="text"
            placeholder="e.g Jays"
            className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
          />
        </div>
        <div className="relative w-1/2 flex flex-col gap-2">
          <label className="text-sm opacity-70" htmlFor="">
            Last name
          </label>
          <input
            type="text"
            placeholder="e.g Alimi"
            className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
          />
        </div>
      </div>
      <div className="flex items-center w-full gap-4">
        <div className="relative w-1/2 flex flex-col gap-2">
          <label className="text-sm opacity-70" htmlFor="">
            Email address
          </label>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
          />
        </div>
        <div className="relative w-1/2 flex flex-col gap-2">
          <label className="text-sm opacity-70" htmlFor="">
            Role
          </label>
          <input
            type="text"
            placeholder="e.g Software enginneer"
            className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <h2>Profile image</h2>
        <div className="h-[122px] bg-white bg-opacity-10 rounded w-full flex items-center justify-center">
          <input
            type="file"
            id="file"
            className="hidden"
            placeholder="Upload your logo"
          />
          <label htmlFor="file" className="text-sm">
            <span className="text-white opacity-30">Upload your file or</span>
            <span className="opacity-[100%!important]">browse</span>
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

export default EventOrganizers;
