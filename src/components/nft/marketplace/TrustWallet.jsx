"use client";

import Link from "next/link";
import React from "react";

const TrustWallet = () => {
  return (
    <div className="relative h-[320px] bg-[url('/trust-bg.svg')] bg-cover bg-center opacity-40 p-6">
      <div className="absolute top-0 left-0 right-0 p-6 footer-container">
        <div className="flex gap-3 items-center">
          <Link href={"/nft/marketplace"}>
            <p className="text-[14px] cursor-pointer">Marketplace</p>
          </Link>
          <p className="text-[18px]">&gt;</p>
          <p className="cursor-pointer text-[14px]">Trust Wallet Pass</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 footer-container">
        <div>
          <h1 className="text-[35px] font-[600]">Trust Wallet Pass</h1>
        </div>
        <div className="mt-[30px] flex gap-10">
          <div>
            <p className="text-[14px] opacity-60">Total Supply</p>
            <h1 className="text-[25px] font-[600] opacity-90">4,890</h1>
          </div>
          <div>
            <p className="text-[14px] opacity-60">Total VOL</p>
            <h1 className="text-[25px] font-[600] opacity-90">$458.0K</h1>
          </div>
          <div>
            <p className="text-[14px] opacity-60">Owners</p>
            <h1 className="text-[25px] font-[600] opacity-90">4,450</h1>
          </div>
          <div>
            <p className="text-[14px] opacity-60">Used</p>
            <h1 className="text-[25px] font-[600] opacity-90">55%</h1>
          </div>
          <div>
            <p className="text-[14px] opacity-60">Floor price</p>
            <h1 className="text-[25px] font-[600] opacity-90">20.8 SOL</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustWallet;
