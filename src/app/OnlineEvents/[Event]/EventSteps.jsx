import React from "react";

export const EventSteps = ({ Activity, index }) => {
  return (
    <div className="flex gap-[10px] items-center">
      <p className="h-10 w-10 p-3 bg-[#443448] grid place-content-center rounded-full">
        {index + 1}
      </p>
      <div className="flex gap-[5px] flex-col">
        <h3 className="text-sm opacity-70 leading-4">PHASE{index}</h3>
        <p className="leading-6">{Activity}</p>
      </div>
    </div>
  );
};
