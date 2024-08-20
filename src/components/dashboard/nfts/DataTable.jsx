import React from "react";
import { data } from "./data";
import Image from "next/image";

const DataTable = () => {
  return (
    <table className="w-full">
      <thead className="bg-white bg-opacity-10">
        <tr>
          <th className="pl-3">
            <span className="flex w-[30%] text-white opacity-70 font-[400] text-xs py-3 text-center ">
              Items
            </span>
          </th>
          <th className="text-left">
            <span className=" w-[20%] text-white opacity-70 font-[400] text-xs py-3 ">
              Total vol.
            </span>
          </th>
          <th className="text-left">
            <span className=" w-[10%] text-white opacity-70 font-[400] text-xs py-3 ">
              Floor
            </span>
          </th>
          <th className="text-left ">
            <span className=" w-[10%] text-white opacity-70 font-[400] text-xs py-3 ">
              Sales
            </span>
          </th>
          <th className="">
            <span className=" w-[10%] text-white opacity-70 font-[400] text-xs py-3">
              Owners
            </span>
          </th>
          <th className="">
            <span className=" w-[10%] text-white opacity-70 font-[400] text-xs py-3">
              Listed
            </span>
          </th>
          <th className="">
            <span className=" w-[10%] text-white opacity-70 font-[400] text-xs py-3"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i} className=" border-b border-white border-opacity-5">
            <td className="font-medium w-[30%] py-5 pl-3  whitespace-nowrap text-white">
              <div className="flex items-center gap-2">
                <Image
                  src={d.item.image}
                  height={58}
                  width={89}
                  priority
                  alt="logo"
                />
                <div className="flex flex-col">
                  <h2 className="text-sm">{d.item.title}</h2>
                  <span className="text-white opacity-70">
                    <span className="text-white text-xs">
                      {d.item.short_name}
                    </span>
                    <span className="text-white text-xs">{d.item.pair}</span>
                  </span>
                </div>
              </div>
            </td>
            <td className="w-[20%] py-5 text-center">
              <div className="flex items-center gap-1">
                <Image
                  src={d.total_volume.image}
                  height={20}
                  width={20}
                  priority
                  alt="logo"
                />
                <span className="text-white text-sm">
                  {d.total_volume.value}
                </span>
              </div>
            </td>
            <td className="w-[10%] py-5 text-center">
              <div className="flex items-center gap-1">
                <Image
                  src={d.floor.image}
                  height={20}
                  width={20}
                  priority
                  alt="logo"
                />
                <span className="text-white text-sm">{d.floor.value}</span>
              </div>
            </td>
            <td className="w-[10%] py-5 text-center">
              <div className="flex items-center gap-1">
                <Image
                  src={d.sales.image}
                  height={20}
                  width={20}
                  priority
                  alt="logo"
                />
                <span className="text-white text-sm">{d.sales.value}</span>
              </div>
            </td>
            <td className="w-[10%] py-5 text-center text-sm">{d.owner}</td>
            <td className="w-[10%] py-5 text-center text-sm">{d.listed}</td>
            <td className="w-[10%] py-5 text-center text-sm">
              <button className="border-none outline-none">...</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
