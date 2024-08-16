"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  const sideBarData = [
    {
      url: "/dashboard",
      name: "Home",
      icon: "/assets/dashboard/home-01.svg",
    },
    {
      url: "/dashboard/nfts",
      name: "NFTs",
      icon: "/assets/dashboard/setting-done-04.svg",
    },
    {
      url: "/dashboard/events",
      name: "Events",
      icon: "/assets/dashboard/user-multiple-02.svg",
    },
    {
      url: "/dashboard/vote",
      name: "Vote",
      icon: "/assets/dashboard/rocket-01.svg",
    },
  ];
  return (
    <aside className="h-screen">
      <div className="h-[20vh]">
        <Image src={"/logo.svg"} alt="logo" height={100} width={100} priority />
      </div>
      <div className="flex h-[80vh] flex-col gap-5">
        {sideBarData.map((item, index) => (
          <Link key={index} href={item.url}>
            <div
              className={`flex ${
                pathName === item.url && "bg-white rounded bg-opacity-10"
              } py-3 px-3 items-center  gap-4`}
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <span className="text-white">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
