import React from "react";

const DashboardCard = ({ text, value }) => {
  return (
    <div className="border border-white w-full border-opacity-10 rounded-xl p-10 flex items-center justify-center">
      <div className="flex items-center flex-col gap-1">
        <span className="text-sm opacity-70 text-white">{text}</span>
        <h2 className="text-[20px]">{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
