"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";

const dataItems = [
  { id: 1, name: "Item 1", categories: ["Listed", "Most selling"] },
  { id: 2, name: "Item 2", categories: ["Listed"] },
  { id: 3, name: "Item 3", categories: ["Most selling"] },
  { id: 4, name: "Item 4", categories: ["Most buying"] },
  { id: 5, name: "Item 5", categories: ["Listed", "Most buying"] },
  { id: 6, name: "Item 6", categories: ["Low price"] },
  { id: 7, name: "Item 7", categories: ["Most selling", "Low price"] },
  { id: 8, name: "Item 8", categories: ["High price"] },
  { id: 9, name: "Item 9", categories: ["Listed", "High price"] },
  { id: 10, name: "Item 10", categories: ["Low to high"] },
  { id: 11, name: "Item 11", categories: ["Most selling", "Low to high"] },
  { id: 12, name: "Item 12", categories: ["Most buying", "Low to high"] },
  { id: 13, name: "Item 13", categories: ["Low price", "High to low"] },
  { id: 14, name: "Item 14", categories: ["High to low"] },
  { id: 15, name: "Item 15", categories: ["Category 8"] },
];

const categories = [
  "All items",
  "Listed",
  "Most selling",
  "Most buying",
  "Low-price",
  "High-price",
  "Low to high",
  "High to low",
];



const Sidebar = ({ categories, setCategory, selectedCategory }) => {
  const getCategoryClass = (category) => {
    if (selectedCategory === category) {
      return "bg-[#FF5B96]";
    }
    return "bg-transparent";
  };

  return (
    <div className="text-white w-64 min-h-screen p-4">
      <div className="flex justify-between items-center">
        <h1>Filters</h1>
        <div className="bg-[#FF5B96] p-[6px] rounded-md w-fit h-fit">
          <FaArrowLeft />
        </div>
      </div>
      <div className="bg-[#443448] rounded-[5px] my-3  px-4 py-2 flex items-center gap-2">
        <TbSearch className="w-[20px] h-[20px] text-white text-opacity-30 " />
        <input
          className="outline-none text-[14px] text-white text-opacity-30 bg-transparent"
          type="text"
          placeholder="Search anything"
        />
      </div>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer relative"
            onClick={() => setCategory(category)}
          >
            <span
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white ${getCategoryClass(
                category
              )}`}
            ></span>
            <span className="ml-8 text-white">{category}</span>
          </li>
        ))}
        <div className="my-[15px]">
          Price
          <div className="flex gap-2 items-center mt-[10px]">
            <button className="bg-[#443448] text-center w-[60px] h-fit p-2 rounded-md text-[12px] opacity-50">
              MIN
            </button>
            <div>
              <Image src="/convert.svg" alt="Swap" width={20} height={20} />
            </div>

            <button className="bg-[#443448] text-center w-[60px] h-fit p-2 rounded-md text-[12px] opacity-50">
              MAX
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

const MainContent = ({ data, selectedCategory }) => {
  const filteredData =
    selectedCategory === "All items"
      ? data
      : data.filter((item) => item.categories.includes(selectedCategory));

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-12">
        <button className="bg-[#FF5B96] py-2 px-6 rounded-md">All items</button>
        <button className="bg-[#FFFFFF1A] py-2 px-6 rounded-md">
          Activity
        </button>
      </div>
      {filteredData.map((item) => (
        <div key={item.id} className=" p-2 mb-2">
          <div className="flex gap-5">
            <div>
              <Image
                src="/trust.svg"
                alt="Ticket id"
                width={315}
                height={290}
              />
              <div className="flex items-center justify-between mt-[15px]">
                <h1 className="text-lg font-bold ">Trust wallet #001</h1>
                <div className="border rounded-[20px] p-2 flex gap-1 w-fit h-fit">
                  <Image src="/tier.svg" alt="Tier 1" width={10} height={14} />
                  <h1>Tier 1</h1>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-[10px]">
                <Image src="/owned.svg" alt="owner" width={22} height={22} />
                <h1 className="text-lg font-bold ">Owned by Kimiko Tanaka</h1>
              </div>
              <div className="flex items-center justify-between mb-[24px]">
                <div className="flex gap-2">
                  <Image
                    src="/solana.svg"
                    alt="Solana"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-lg font-bold ">38.80 SOL</h1>
                </div>
                <div className=" rounded-[7px] justify-center items-center bg-[#FF5B96] p-2 flex gap-1 w-[100px] h-fit">
                  <h1>Buy</h1>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/trust.svg"
                alt="Ticket id"
                width={315}
                height={290}
              />
              <div className="flex items-center justify-between mt-[15px]">
                <h1 className="text-lg font-bold ">Trust wallet #001</h1>
                <div className="border rounded-[20px] p-2 flex gap-1 w-fit h-fit">
                  <Image src="/tier.svg" alt="Tier 1" width={10} height={14} />
                  <h1>Tier 1</h1>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-[10px]">
                <Image src="/owned.svg" alt="owner" width={22} height={22} />
                <h1 className="text-lg font-bold ">Owned by Kimiko Tanaka</h1>
              </div>
              <div className="flex items-center justify-between mb-[24px]">
                <div className="flex gap-2">
                  <Image
                    src="/solana.svg"
                    alt="Solana"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-lg font-bold ">38.80 SOL</h1>
                </div>
                <div className=" rounded-[7px] justify-center items-center bg-[#FF5B96] p-2 flex gap-1 w-[100px] h-fit">
                  <h1>Buy</h1>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/trust.svg"
                alt="Ticket id"
                width={315}
                height={290}
              />
              <div className="flex items-center justify-between mt-[15px]">
                <h1 className="text-lg font-bold ">Trust wallet #001</h1>
                <div className="border rounded-[20px] p-2 flex gap-1 w-fit h-fit">
                  <Image src="/tier.svg" alt="Tier 1" width={10} height={14} />
                  <h1>Tier 1</h1>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 my-[10px]">
                <Image src="/owned.svg" alt="owner" width={22} height={22} />
                <h1 className="text-lg font-bold ">Owned by Kimiko Tanaka</h1>
              </div>
              <div className="flex items-center justify-between mb-[24px]">
                <div className="flex gap-2">
                  <Image
                    src="/solana.svg"
                    alt="Solana"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-lg font-bold ">38.80 SOL</h1>
                </div>
                <div className=" rounded-[7px] justify-center items-center bg-[#FF5B96] p-2 flex gap-1 w-[100px] h-fit">
                  <h1>Buy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

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

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All items");

  return (
    <div className="flex">
      <Sidebar
        categories={categories}
        setCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <MainContent data={dataItems} selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
