"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ShowUpcoming = () => {
  const [activeButton, setActiveButton] = useState("All");

  const buttons = [
    { label: "All", bgColor: "#FF5B96" },
    { label: "Upcoming", bgColor: "#282232" },
    { label: "Latest", bgColor: "#282232" },
    { label: "All-time high", bgColor: "#282232" },
    { label: "All-time low", bgColor: "#282232" },
  ];

  const collections = [
    {
      bg: "/collection1.svg",
      icon: "/trust-wallet.svg",
      title: "Trust Wallet Pass",
      items: "Total items: 6,890",
      href: "/trust-wallet",
    },
    {
      bg: "/collection2.svg",
      icon: "/solana-monkey.svg",
      title: "Solana Monkey",
      items: "Total items: 6,890",
      href: "/solana-monkey", // Add the link for this collection
    },
    {
      bg: "/collection3.svg",
      icon: "/nft-dexer.svg",
      title: "Coalesy NFT Dexer",
      items: "Total items: 6,890",
      href: "/coalesy-nft-dexer", // Add the link for this collection
    },
    {
      bg: "/collection4.svg",
      icon: "/metamask.svg",
      title: "Metamask Pass",
      items: "Total items: 6,890",
      href: "/metamask-pass", // Add the link for this collection
    },
  ];

  const renderCollections = (type) => {
    const maxCollections = type === "All" ? 16 : 12;
    const selectedCollections = [];

    for (let i = 0; i < maxCollections; i++) {
      selectedCollections.push(collections[i % collections.length]);
    }

    return selectedCollections.map((collection, index) => (
      <div key={index} className="relative h-[292px] w-[245px] p-6 rounded-md">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-md opacity-40"
          style={{ backgroundImage: `url(${collection.bg})` }}
        ></div>
        <div className="relative z-10">
          <div className="absolute top-36">
            <Image
              src={collection.icon}
              alt={collection.title}
              width={40}
              height={40}
            />
            <Link href={collection.href}>
              <h1 className="text-[18px] font-[600]">{collection.title}</h1>
              <p className="opacity-80 text-[12px]">{collection.items}</p>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="flex gap-3 items-center">
        <Link href={"/nft/marketplace"}>
          <p className="opacity-70 text-[14px] cursor-pointer">Marketplace</p>
        </Link>
        <p className="text-[18px]">&gt;</p>
        <p className="cursor-pointer text-[14px]">All collections</p>
      </div>

      <h1 className="text-[35px] py-[10px] font-[600]">
        Browse all collections
      </h1>

      <p className="text-[14px] opacity-80">
        Showing all the list of all collections
      </p>

      <div className="my-[30px] flex gap-2">
        {buttons.map((button) => (
          <button
            key={button.label}
            className={`h-[40px] py-3 px-10 flex items-center justify-center rounded-md ${
              activeButton === button.label ? "bg-[#FF5B96]" : "bg-[#282232]"
            }`}
            onClick={() => setActiveButton(button.label)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {renderCollections(activeButton)}
      </div>

      <div className="py-[50px] flex gap-2 items-center justify-center">
        <div className="bg-[#FF5B96] text-[12px] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          1
        </div>

        <div className="bg-[#282232] text-[12px] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          2
        </div>
        <div className="bg-[#282232] text-[12px] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          3
        </div>
        <div className="bg-[#282232] text-[12px] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          4
        </div>
        <div className="bg-[#282232] text-[12px] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          5
        </div>
        <div className="bg-[#282232] text-[12px] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          6
        </div>
        <div className="bg-[#282232] text-[12px] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          7
        </div>
        <div className="text-center">...</div>
        <div className="text-center">250</div>
        <div className="bg-[#FF5B96] text-center w-[30px] h-[30px] p-2 rounded-full flex items-center justify-center">
          <Image src="/arrow-right.svg" alt="Nft Card" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default ShowUpcoming;
