import React from "react";
import home from "../Images/home-01.svg";
import Events from "../Images/user-multiple-02.svg";
import Nft from "../Images/setting-done-04.svg";
import vote from "../Images/rocket-01.svg";
import Image from "next/image";

export const SideBar = () => {
  return (
    <div className="col-span-2 flex flex-col gap-[54px]">
      <div className="flex gap-4 items-center">
        <Image src={home} alt="home" />
        <p>Home</p>
      </div>
      <div className="flex gap-4 items-center">
        <Image src={Nft} alt="nft" />
        <p>NFTs</p>
      </div>
      <div className="flex gap-4 items-center">
        <Image src={Events} alt="event" />
        <p>Events</p>
      </div>
      <div className="flex gap-4 items-center">
        <Image src={vote} alt="vote" />
        <p>Vote</p>
      </div>
    </div>
  );
};
