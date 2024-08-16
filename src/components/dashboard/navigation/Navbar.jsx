import Image from "next/image";
import React from "react";
import { TbBell, TbChevronDown, TbSearch } from "react-icons/tb";
import { MdOutlineLightMode } from "react-icons/md";
import { TbUserCircle } from "react-icons/tb";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="hidden"></div>
          <div className="">
            <div className="h-10 bg-white flex items-center w-[100%] gap-1 py-2 px-4 bg-opacity-10 rounded">
              <span>
                <TbSearch />
              </span>
              <input
                type="text"
                className="h-full bg-transparent border-none outline-none text-sm"
                placeholder="Search here"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center text-xl gap-4">
          <span className="p-2 flex items-center rounded-full bg-white bg-opacity-10">
            <Image
              src={"/assets/dashboard/5426 1.svg"}
              alt=""
              height={20}
              width={20}
              priority
            />
            <span className="text-white text-[15px]">
              <TbChevronDown />
            </span>
          </span>
          <span className=" text-white">
            <TbBell />
          </span>
          <span className=" text-white">
            <MdOutlineLightMode />
          </span>
          <span className="p-2 flex items-center text-white rounded-full bg-white bg-opacity-10">
            <TbUserCircle />
            <span className="text-white text-[15px]">
              <TbChevronDown />
            </span>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
