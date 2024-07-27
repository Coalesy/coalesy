import Image from "next/image";
import React from "react";

export const BusinessNavbar = () => {
  return (
    <div className="flex justify-between items-center container py-[25px]">
      <div className="flex gap-[108px]">
        <Image src="./coalesy-logo.svg" width={92} height={23} />
        <input
          type="text"
          placeholder="search"
          className="w-[316px] bg-[#443448] rounded-lg p-[8px_18px]"
        />
      </div>
      <div></div>
    </div>
  );
};
