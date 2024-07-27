import { Event } from "./Event";
import { EventsList } from "./EventData";
import React from "react";

export const Events = () => {
  return (
    <div className="flex flex-col gap-5 col-span-4">
      {EventsList.map((event, index) => {
        return <Event key={index} {...event} />;
      })}
    </div>
  );
};
