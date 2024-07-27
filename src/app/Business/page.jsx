import React from "react";
import { Nft } from "./Components/Nft";
import solana20 from "./Images/Rectangle 86.svg";
import bnb from "./Images/Rectangle 87.svg";
const NFTList = [
  {
    item: "Solana Monkey",
    chain: "Solana - SOL20",
    logo: "/sol.svg",
    image: solana20,
    vol: 50.28,
    floor: 0.28,
    sales: 105.8,
    owners: 609,
    listed: 80,
  },
  {
    item: "Biance Lab HK",
    chain: "BNB - BEP20",
    logo: "/bnb.svg",
    image: bnb,
    vol: 109.15,
    floor: 5.8,
    sales: 230.9,
    owners: 1200,
    listed: 60,
  },
];
const BusinessDashboard = () => {
  return (
    <div className="col-span-4 w-full">
      <div className="flex justify-between items-center mb-10">
        <h2>NFT</h2>
        <button className="bg-[#FF5B96] text-center rounded-[10px] py-[8px] px-[28px]  text-white lg:block hidden ">
          Create Collection
        </button>
      </div>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-[#443448]  ">
            <th colspan="2" className="p-6 col">
              Items
            </th>
            <th className="p-3 border">Total Vol</th>
            <th className="p-3 border">floor</th>
            <th className="p-3  border">Sales</th>
            <th className="p-3  border"> Owner</th>
            <th className="p-3  border">Listed</th>
          </tr>
        </thead>
        <tbody>
          {NFTList.map((item) => (
            <Nft key={item.item} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessDashboard;
