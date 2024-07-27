import Image from "next/image";
import React from "react";

export const EventIntro = ({
  icon,
  EventName,
  Description,
  members,
  currentStatus,
  date,
  Title,
  coin,
}) => {
  return (
    <div>
      {/* <Image src={solbg} alt="coin-logo" width={25} height={25} /> */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-[11px] items-center">
          <Image src={icon} alt="coin-logo" width={25} height={25} />
          <p className="font-bold text-3xl">
            {Title}-{EventName}
          </p>
        </div>
        <p className="text-sm opacity-70">{Description}</p>
        <div className="flex gap-6 ">
          <p className="text-sm opacity-70">560,000 joined</p>
          <p className="text-sm opacity-70">Physical</p>
          <p className="text-sm opacity-70">{date}</p>
        </div>
      </div>
    </div>
  );
};
