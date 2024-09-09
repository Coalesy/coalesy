"use client";
import EventCompiler from "@/components/dashboard/event/EventCompiler";
import DashboardCard from "@/components/dashboard/home/DashboardCard";
import Create from "@/components/dashboard/nfts/Create";
import DataTable from "@/components/dashboard/nfts/DataTable";
import React, { useState } from "react";

const EventPage = () => {
  const [isActiveComponent, setIsActiveComponent] = useState(false);

  return (
    <section className="ml-10">
      {isActiveComponent ? (
        <EventCompiler setIsActive={setIsActiveComponent} />
      ) : (
        <div className=" mt-14">
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
            <DashboardCard text={"All events"} value={"120"} />
            <DashboardCard text={"Total attendees"} value={"1,670"} />
            <DashboardCard text={"Past events"} value={"10"} />
          </div>
          <div className="flex w-full items-center mt-7 justify-between">
            <h1 className="text-[20px] font-[700]">All Events</h1>
            <button
              onClick={() => setIsActiveComponent(true)}
              className="py-2 px-5 text-sm rounded bg-[#FF5B96]"
            >
              Create event
            </button>
          </div>
          <div className="mt-8">
            <DataTable />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventPage;
