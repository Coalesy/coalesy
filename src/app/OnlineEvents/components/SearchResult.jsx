import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdFilterList } from "react-icons/md";
import Image from "next/image";
import game from "../Images/ds3-tool.svg";
import music from "../Images/playlist-02.svg";

export const SearchResult = () => {
  return (
    <div className="col-span-2 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5 items-center">
          <MdFilterList />
          <p>ALL</p>
        </div>
        <p>Count</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5 items-center">
          <Image src={game} width={20} height={20} alt="game" />
          <p>Gaming</p>
        </div>
        <p>Count</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5 items-center">
          <RiGraduationCapLine />
          <p>Entertainment</p>
        </div>
        <p>Count</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5 items-center">
          <Image src={music} width={20} height={20} alt="game" />
          <p>Music</p>
        </div>
        <p>Count</p>
      </div>
    </div>
  );
};
