import React from "react";

const DataTable = () => {
  return (
    <table className="w-full">
      <thead className="bg-white bg-opacity-10">
        <tr>
          <th>
            <span class="flex w-[40%] text-white opacity-70 items-center">Items</span>
          </th>
          <th>
            <span class="flex w-[10%] text-white opacity-70 items-center">Total vol.</span>
          </th>
          <th>
            <span class="flex w-[10%] text-white opacity-70 items-center">Floor</span>
          </th>
          <th>
            <span class="flex w-[10%] text-white opacity-70 items-center">Sales</span>
          </th>
          <th>
            <span class="flex w-[10%] text-white opacity-70 items-center">Owners</span>
          </th>
          <th>
            <span class="flex w-[10%] text-white opacity-70 items-center">Listed</span>
          </th>
          <th>
            <span class="flex w-[10%] text-white opacity-70 items-center"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="font-medium w-[40%]  whitespace-nowrap text-white">
            Apple Inc.
          </td>
          <td className="w-[10%]">AAPL</td>
          <td className="w-[10%]">$192.58</td>
          <td className="w-[10%]">$3.04T</td>
          <td className="w-[10%]">$3.04T</td>
          <td className="w-[10%]">$3.04T</td>
          <td className="w-[10%]">$3.04T</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
