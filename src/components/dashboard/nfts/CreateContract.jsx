"use client";
import React, { useState } from "react";
import { Deploy } from "./dropdowns/Deploy";
import { SelectInput } from "./SelectInput";
import { selectCoin } from "./selectData";

const CreateContract = ({ setIsCreateComponent }) => {
  const [active, setActive] = useState({
    coin: 0,
    network: 0,
  });
  const [isDeploy, setIsDeploy] = useState(false);
  const [isDeployComplete, setIsDeployComplete] = useState(false);
  const handleSelectCoin = (i) => {
    setActive({
      ...active,
      coin: i,
    });
  };

  const handleDeploy = () => {
    setIsDeploy(true);
    setTimeout(() => {
      setIsDeployComplete(true);
    }, 3000);
  };
  return (
    <div className="w-[60%] flex flex-col gap-5">
      <h1>Create Contract</h1>
      <div className="flex flex-col gap-9">
        <div className="relative flex  gap-4 ">
          <span className="flex items-center justify-center h-[30px] w-[30px] rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20">
            1
          </span>
          <div className="w-[95%] flex flex-col gap-6">
            <h2>Logo Image</h2>
            <div className="h-[79px] bg-white bg-opacity-10 rounded w-full flex items-center justify-center">
              <input
                type="file"
                id="file"
                className="hidden"
                placeholder="Upload your logo"
              />
              <label htmlFor="file" className="text-sm opacity-30">
                Upload your file
              </label>
            </div>
          </div>
        </div>
        <div className="relative flex  gap-4 ">
          <div className="w-[5%]">
            <span className="flex items-center justify-center h-[30px] w-[30px] rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20">
              2
            </span>
          </div>
          <div className="w-[95%] flex flex-col gap-6">
            <h2>Contract Details</h2>
            <div className="flex items-center w-full gap-2">
              <div className="relative w-[60%] flex flex-col gap-2">
                <label className="text-sm opacity-70" htmlFor="">
                  Collection name
                </label>
                <input
                  type="text"
                  placeholder="Bianance Token NFT"
                  className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
                />
              </div>
              <div className="relative w-[40%] flex flex-col gap-2">
                <label className="text-sm opacity-70" htmlFor="">
                  Symbol
                </label>
                <input
                  type="text"
                  placeholder="BTF"
                  className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
                />
              </div>
            </div>
            <div className="relative w-full flex flex-col gap-2">
              <label className="text-sm opacity-70" htmlFor="">
                Supply
              </label>
              <input
                type="text"
                placeholder="0"
                className="bg-white w-full bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
              />
            </div>
          </div>
        </div>
        <div className="relative flex  gap-4 ">
          <span className="flex items-center justify-center h-[30px] w-[30px] rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20">
            3
          </span>
          <div className="w-[95%] flex flex-col gap-6">
            <h2 className="text-[16px]">Blockchain</h2>
            <SelectInput
              src={selectCoin[active.coin].icon}
              coin={selectCoin[active.coin].short_name}
              handleClick={handleSelectCoin}
              pair={selectCoin[active.coin].coin_name}
              dropdown={selectCoin}
              active={active.coin}
            />
            <div className="flex items-center gap-3 mt-5 justify-end">
              <span className="text-white text-sm opacity-70">
                {selectCoin[active.coin].short_name} Transaction fee is ~ 0.20{" "}
                {selectCoin[active.coin].short_name}
              </span>
              <button
                onClick={handleDeploy}
                className="py-2 px-8 rounded bg-[#FF5B96] text-white text-sm"
              >
                Deploy
              </button>
            </div>
          </div>
        </div>
      </div>

      <Deploy
        isOpen={isDeploy}
        setIsDeploy={setIsDeploy}
        setIsCreateComponent={setIsCreateComponent}
        isComplete={isDeployComplete}
      />
    </div>
  );
};

export default CreateContract;
