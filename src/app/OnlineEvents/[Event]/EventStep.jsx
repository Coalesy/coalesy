import React from "react";
import { EventSteps } from "./EventSteps";
const EventStepList = [
  {
    Activity: "Introduction to Solana foundation",
  },
  {
    Activity: "Business proposal",
  },
  {
    Activity: "Developer onboarding",
  },
  {
    Activity: "Token distribution - Testnet",
  },
  {
    Activity: "Q/A from the community",
  },
];

export const EventStep = () => {
  return (
    <div className="flex flex-col gap-7">
      <h3 className="leading-[24.2px] text-lg font-bold">Event Breakdown</h3>
      <div className="flex flex-col gap-5">
        {EventStepList.map((item, index) => (
          <EventSteps key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};
