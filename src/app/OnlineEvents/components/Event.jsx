import Image from "next/image";
import React from "react";

export const Event = ({ logo, icon, EventName, Description, date, Title }) => {
  return (
    <div className="flex gap-8">
      <Image src={logo} alt={EventName} />
      <div className="flex flex-col gap-4">
        <div className="flex gap">
          <Image src={icon} alt="icon" height={20} width={20} />
          <h3 className="font-bold text-white ">{Title}</h3>
        </div>
        <h3 className="font-bold text-white text-lg">{EventName}</h3>
        <p className="text-white opacity-70">{Description}</p>
        <small className="text-white opacity-70">{date}</small>
      </div>
    </div>
  );
};
