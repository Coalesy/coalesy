"use client";
import React, { useState } from "react";
import Collections from "./Collections";
import Earnings from "./Earnings";
import Links from "./Links";
import Settings from "./Settings";
import Items from "./Items";

const CreateNft = () => {
  const [active, setActive] = useState(0);
  const nftHeadrs = ["Collection", "Earnings", "Links", "Settings", "Item"];
  const nftcomponent = [
    {
      component: <Collections />,
    },
    {
      component: <Earnings />,
    },
    {
      component: <Links />,
    },
    {
      component: <Settings />,
    },
    {
      component: <Items />,
    },
  ];
  const handleSwitchNftTab = (i) => {
    setActive(i);
  };
  return (
    <div className="w-[60%]">
      <div className="flex items-center justify-between">
        {nftHeadrs.map((header, i) => (
          <div
            onClick={() => handleSwitchNftTab(i)}
            className="flex cursor-pointer items-center gap-2"
            key={i}
          >
            <span
              className="flex items-center justify-center h-[30px] w-[30px] rounded-full text-white"
              style={{
                background:
                  "linear-gradient(90deg, #FF5B96 0%, #FF93FF 63.47%, #742998 85.23%)",
              }}
            >
              {i + 1}
            </span>
            <span className="text-white">{header}</span>
          </div>
        ))}
      </div>
      <div className="">{nftcomponent[active].component}</div>
    </div>
  );
};

export default CreateNft;
