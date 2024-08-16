import React from "react";
import Sidebar from "./navigation/Sidebar";
import Navbar from "./navigation/Navbar";

export const AppWrapper = ({ children }) => {
  return (
    <section className="container mx-auto">
      <div className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Navbar />
          <div className="">{children}</div>
        </div>
      </div>
    </section>
  );
};
