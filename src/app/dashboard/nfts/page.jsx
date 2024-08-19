"use client";
import Create from "@/components/dashboard/nfts/Create";
import DataTable from "@/components/dashboard/nfts/DataTable";
import Nfts from "@/components/dashboard/nfts/Nfts";
import React, { useState } from "react";

const NftsPage = () => {
  const [isActiveComponent, setIsActiveComponent] = useState(false);

  return (
    <section className="">
      {isActiveComponent ? (
        <Create setIsActive={setIsActiveComponent} />
      ) : (
        <div className="">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-[20px]">All NFTs</h1>
            <button
              onClick={() => setIsActiveComponent(true)}
              className="py-2 px-5 text-sm rounded bg-[#FF5B96]"
            >
              Create Collection
            </button>
          </div>
          <div className="">
            <DataTable/>
          </div>
        </div>
      )}
    </section>
  );
};

export default NftsPage;
