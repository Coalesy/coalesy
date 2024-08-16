"use client";
import React from "react";
import DashboardChart from "./DashboardChart";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <section className="md:ml-10 flex items-center gap-10 h-screen flex-row justify-between">
      <div className="w-[60%]">
        <h2 className="text-white text-[20px] mb-8">All overview</h2>
        <div className="">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="text-[18px] text-white opacity-70">
                Estimate balance
              </h2>
              <div className="flex items-center gap-5">
                <h1 className="text-white text-[30px]">$10.7k</h1>
                <span className="text-[#00FFB2] text-sm">1.3%</span>
                <span className="opacity-70 text-sm text-white">Today</span>
              </div>
            </div>
            <div className="">
              <button></button>
            </div>
          </div>
          <DashboardChart />
        </div>
      </div>
      <div className="w-[40%] flex flex-col gap-5">
        <DashboardCard text={"Total collections"} value={"10"} />
        <DashboardCard text={"Total event created"} value={"40"} />
        <DashboardCard text={"Total atendees"} value={"560"} />
      </div>
    </section>
  );
};

export default Dashboard;
