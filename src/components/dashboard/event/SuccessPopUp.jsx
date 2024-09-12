import Image from "next/image";
import React from "react";
import { TbCopy } from "react-icons/tb";

export const SuccessDeploy = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={
        "h-screen fixed bg-[rgba(0,0,0,0.2)] top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center"
      }
    >
      <div
        className={`${
          isOpen ? " translate-y-0" : " translate-y-[-1000%]"
        } transition-transform duration-500 bg-[#0a0511] shadow gap-4 flex items-center justify-center flex-col rounded-2xl max-w-[400px] px-4 w-full h-[350px]`}
      >
        <Image
          src={"/assets/dashboard/Vector(2).svg"}
          alt="logo"
          height={50}
          width={50}
          priority
        />
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[25px]">Event created successfully</h2>
          <p className="text-sm opacity-70">
            We&apos;ve successfully created your event. You can preview or copy
            the link and send to anyone.
          </p>
          <div className="flex items-center gap-3 my-4">
            <input
              type="url"
              placeholder="e.g https://instagram.com/coalesynft"
              className="bg-white w-[95%] bg-opacity-10 text-white rounded border-none outline-none py-[10px] px-[15px]"
            />
            <button className="w-[5%]">
              <TbCopy />
            </button>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-sm w-[40%] bg-white bg-opacity-10 py-2 px-8 rounded"
            >
              Close
            </button>
            <button
              className="py-2 px-8 rounded w-[60%] bg-[#FF5B96] text-white text-sm"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
