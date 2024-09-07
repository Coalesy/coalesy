"use client";
import React, { useState } from "react";
import Collections from "./Collections";
import Earnings from "./Earnings";
import Links from "./Links";
import Settings from "./Settings";
import Items from "./Items";

const CreateNft = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState([0]);
  const nftHeadrs = ["Collection", "Earnings", "Links", "Settings", "Item"];


  const handleChangeStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep < totalSteps) {
      setCurrentStep(nextStep);
      if (!visitedSteps.includes(nextStep)) {
        setVisitedSteps((prevSteps) => [...prevSteps, nextStep]);
      }
    }
  };

  const handleStepClick = (step) => {
    if (visitedSteps.includes(step)) {
      setCurrentStep(step);
    }
  };
  const nftcomponent = [
    {
      component: <Collections handleChangeStep={handleChangeStep} />,
    },
    {
      component: <Earnings handleChangeStep={handleChangeStep} />,
    },
    {
      component: <Links handleChangeStep={handleChangeStep} />,
    },
    {
      component: <Settings handleChangeStep={handleChangeStep} />,
    },
    {
      component: <Items handleChangeStep={handleChangeStep} />,
    },
  ];

  const totalSteps = nftcomponent.length;

  
  return (
    <div className="w-[60%]">
      <div className="flex items-center justify-between">
        {nftHeadrs.map((header, i) => {
          const isVisited = visitedSteps.includes(i);
          return (
            <button
              disabled={!isVisited}
              onClick={() => handleStepClick(i)}
              className="flex cursor-pointer items-center gap-2"
              key={i}
            >
              <span
                className={` ${
                  isVisited &&
                  "bg-transparent border border-white border-opacity-20"
                }  flex items-center justify-center h-[30px] w-[30px] rounded-full text-white`}
                style={{
                  background: `${
                    isVisited &&
                    "linear-gradient(90deg, #FF5B96 0%, #FF93FF 63.47%, #742998 85.23%)"
                  }`,
                  border: ``,
                }}
              >
                {i + 1}
              </span>
              <span className="text-white text-[16px]">{header}</span>
            </button>
          );
        })}
      </div>
      <div className="">{nftcomponent[currentStep].component}</div>
    </div>
  );
};

export default CreateNft;
