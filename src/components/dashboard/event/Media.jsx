import React from "react";

const Media = ({ handleChangeStep }) => {
  const handleNext = () => {
    handleChangeStep();
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-col gap-3">
        <h2>Logo image</h2>
        <div className="h-[122px] bg-white bg-opacity-10 rounded w-full flex items-center justify-center">
          <input
            type="file"
            id="file"
            className="hidden"
            placeholder="Upload your logo"
          />
          <label htmlFor="file" className="text-sm">
            <span className="text-white opacity-30">
              Drag and drop image or
            </span>
            <span className="opacity-[100%!important]">browse</span>
          </label>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h2>Cover image</h2>
        <div className="h-[122px] bg-white bg-opacity-10 rounded w-full flex items-center justify-center">
          <input
            type="file"
            id="file"
            className="hidden"
            placeholder="Upload your logo"
          />
          <label htmlFor="file" className="text-sm">
            <span className="text-white opacity-30">
              Drag and drop image or
            </span>
            <span className="opacity-[100%!important]">browse</span>
          </label>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h2>Event Intro. Video (optional)</h2>
        <div className="h-[122px] bg-white bg-opacity-10 rounded w-full flex items-center justify-center">
          <input
            type="file"
            id="file"
            className="hidden"
            placeholder="Upload your logo"
          />
          <label htmlFor="file" className="text-sm">
            <span className="text-white opacity-30">
              Drag and drop image or
            </span>
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

export default Media;
