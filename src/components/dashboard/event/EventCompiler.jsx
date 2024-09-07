"use client";
import React, { useState } from "react";
import EventPhase from "./EventPhase";
import EventFaq from "./EventFaq";
import EventOrganizers from "./EventOrganizers";
import EventDetails from "./EventDetails";
import { questions } from "../nfts/Create";
// import Collections from "./Collections";
// import Earnings from "./Earnings";
// import Links from "./Links";
// import Settings from "./Settings";
// import Items from "./Items";

const EventCompiler = ({ setIsActive }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState([0]);
  const nftHeadrs = ["Details", "Phase", "FAQ", "Organizers", "Media", "Link"];

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
      component: <EventDetails handleChangeStep={handleChangeStep} />,
    },
    {
      component: <EventPhase handleChangeStep={handleChangeStep} />,
    },
    {
      component: <EventFaq handleChangeStep={handleChangeStep} />,
    },
    {
      component: <EventOrganizers handleChangeStep={handleChangeStep} />,
    },
    //   {
    //     component: <Settings handleChangeStep={handleChangeStep} />,
    //   },
    //   {
    //     component: <Items handleChangeStep={handleChangeStep} />,
    //   },
  ];

  const totalSteps = nftcomponent.length;
  //
  return (
    <div className="flex  mt-10 gap-10">
      <div className="w-[60%] flex flex-col gap-7">
        <div className="">
          <div className="flex items-center text-sm gap-1">
            <span
              onClick={() => setIsActive(false)}
              className="text-white cursor-pointer opacity-70"
            >
              Events
            </span>
            <span className="text-white">{">"}</span>
            <span className="text-white">Create event</span>
          </div>
        </div>
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
                    !isVisited &&
                    "bg-white bg-opacity-10 border border-white border-opacity-20"
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
      <div className="w-[40%] flex flex-col gap-4">
        <video src="" controls className="h-[170px]"></video>
        <div className="flex flex-col gap-5">
          <h1 className="text-[20px]">Related questions</h1>
          <div className="flex flex-col gap-4">
            {questions.map((question, i) => (
              <span key={i} className="text-white text-sm opacity-70">
                {question}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCompiler;
