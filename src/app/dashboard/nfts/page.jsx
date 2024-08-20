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
        <div className='ml-10 mt-14'>
          <div className="flex w-full items-center justify-between">
            <h1 className="text-[20px] font-[700]">All NFTs</h1>
            <button
              onClick={() => setIsActiveComponent(true)}
              className="py-2 px-5 text-sm rounded bg-[#FF5B96]"
            >
              Create Collection
            </button>
          </div>
          <div className="mt-8">
            <DataTable/>
          </div>
        </div>
      )}
    </section>
  );
};

export default NftsPage;
