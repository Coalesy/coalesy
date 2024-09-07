import React from "react";
import Minting from "./Minting";
import WhiteList from "./WhiteList";

const Settings = ({ handleChangeStep }) => {
  const handleNext = () => {
    handleChangeStep();
  };
  return (
    <div className="">
      <Minting />
      <WhiteList />
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

export default Settings;
