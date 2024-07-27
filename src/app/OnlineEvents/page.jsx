import React from "react";
import { Events } from "./components/Events";
import { SearchResult } from "./components/SearchResult";

const OnlineEventpage = () => {
  return (
    <div className=" grid place-items-center">
      <section className="bg-gradient-to-r from-[#FF5B96] via-[#FF93FF] to-[#742998] w-full grid place-items-center pb-24 pt-40">
        <div className="footer-container">
          <h2 className="font-bold text-[40px] text-center">
            Find your Events on Coalesy
          </h2>
          <p className="text-center text-lg">
            From gaming, to entertainment, to learning, there&apos;s an events
            for you
          </p>
        </div>
      </section>
      <div className="flex gap-[45px] pt-12 footer-container">
        <input
          placeholder="search for categories keywords"
          className="w-[572px] h-[56px] rounded-lg bg-[#443448] px-4"
        />
        <div className="flex gap-[14px]">
          <select
            placeholder="Search by"
            name="search"
            id=""
            className="w-[192px] h-[56px] bg-[#443448] rounded-lg"
          ></select>
          <button className="w-[192px] h-[56px] bg-[#443448] rounded-lg">
            Event Type
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 footer-container">
        <SearchResult />
        <Events />
      </div>
    </div>
  );
};

export default OnlineEventpage;
