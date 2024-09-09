"use client";

import React from "react";
import { TbArrowRight } from "react-icons/tb";
import Countdown from "react-countdown";
import { upcomingEvent } from "./data";
import Link from "next/link";

function UpcomingEvent() {
  const Completionist = () => <span>Event Started</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span className="text-white">
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full py-6">
        <div>
          <h2 className="text-[40px] font-[700]">Upcoming Collections</h2>
          <p className="text-[16px] ">
            Showing the list of all the upcoming collections{" "}
          </p>
        </div>
        <Link href={"/ShowUpcoming"}>
          <div className="flex bg-[#282232] w-[226px] h-[56px] rounded-[1px] justify-center cursor-pointer items-center">
            <p>Show all upcoming</p>
            <TbArrowRight />
          </div>
        </Link>
      </div>
      <div>
        <div className="grid py-10 grid-cols-2 gap-6">
          {upcomingEvent.map((d, i) => (
            <div
              key={i}
              className="h-[392px] rounded-[10px] bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${d.img})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

              {/* Content at the bottom */}
              <div className="absolute bottom-6 left-6 right-0 p-4 flex items-center justify-between z-10">
                <div className="flex flex-col gap-4">
                  <img
                    src={d.logo}
                    className="h-10 w-10 rounded-full mr-2"
                    alt={d.name}
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-white text-[25px] tracking-[-1px] font-semibold">
                      {d.name}
                    </h2>
                    <div className="flex items-center gap-4">
                      <p className="text-white text-[14px] tracking-[-0.5px] text-opacity-70">
                        Price:{" "}
                        <span className="text-white font-[700]">{d.price}</span>
                      </p>
                      <p className="text-white text-[14px] tracking-[-0.5px] text-opacity-70">
                        Items:{" "}
                        <span className="text-white font-[700]">{d.items}</span>
                      </p>
                      <p className="text-white text-[14px] tracking-[-0.5px] text-opacity-70">
                        Minted:{" "}
                        <span className="text-white font-[700]">
                          {d.minted}
                        </span>
                      </p>
                    </div>
                    <div className="text-white bg-[#0A0511] w-[184px] h-[41px] flex gap-2 items-center justify-center rounded-md text-[14px] tracking-[-0.5px] text-opacity-70">
                      Start:
                      <span className="text-white font-[700]">
                        {" "}
                        <Countdown
                          className="text-white font-[700]"
                          date={
                            Date.now() +
                            parseInt(d.countdown.split(" ")[0], 10) *
                              24 *
                              60 *
                              60 *
                              1000
                          }
                          renderer={renderer}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvent;
