import Image from "next/image";
import React from "react";
import { Socials } from "./Socials";

export const EventsFoot = () => {
  return (
    <div className="footer-container">
      <div className="grid grid-cols-2 items-center  pt-[122px] pb-[59px]">
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-white font-bold">Subscribe to Our Newsletter</h2>
          <small className="text-white opacity-50">
            Stay updated with our weekly newsletter to your inbox
          </small>
        </div>
        <div className="flex gap-2.5">
          <input
            type="email"
            placeholder="Enter your Email"
            className="rounded-lg bg-[#443448] px-4"
          />
          <button className="bg-[#FF5B96] text-center rounded-[10px] py-[8px] px-[28px]  text-white lg:block hidden ">
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-[86px] pb-[76px]">
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-bold text-lg">Products</h2>
          <ul className="flex flex-col gap-5 opacity-80">
            <li>Find Events</li>
            <li>NFT Marketplace</li>
            <li>Voting</li>
            <li>Hardware</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-bold text-lg">Solutions</h2>
          <ul className="flex flex-col gap-5 opacity-80">
            <li>For Individuals</li>
            <li>For Creators</li>
            <li>For investors</li>
            <li>For Developers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-bold text-lg">Products</h2>
          <ul className="flex flex-col gap-5 opacity-80">
            <li>Find Events</li>
            <li>NFT Marketplace</li>
            <li>Voting</li>
            <li>Hardware</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-bold text-lg">About</h2>
          <ul className="flex flex-col gap-5 opacity-80">
            <li>About Coalesy</li>
            <li>Career</li>
            <li>Support</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-bold text-lg">Developer</h2>
          <ul className="opacity-80">
            <li>Documentation</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <Image src={"/coalesy-logo"} alt="logo" width={194} height={54} />
        <div className="flex gap-5">
          <p>Privacy & Policy</p>
          <div />
          <p>Terms of Service</p>
        </div>
        <Socials />
      </div>
    </div>
  );
};
