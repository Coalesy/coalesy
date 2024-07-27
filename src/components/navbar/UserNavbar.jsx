"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Img } from "../Img";

export default function UserNavbar({ icon, handleClickToggle }) {
  const [product, setProduct] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navproduct, setNavProduct] = useState(false);
  const [navsolutions, setNavSolutions] = useState(false);
  const [about, setAbout] = useState(false);

  const handleProduct = () => {
    setProduct(!product);
  };

  const handleSolutions = () => {
    setSolutions(!solutions);
  };

  const handleAbout = () => {
    setAbout(!about);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleclose = () => {
    setToggleMenu(false);
  };

  // 1
  useEffect(() => {
    const closeShowOptions = (e) => {
      if (!e.target.closest(".open")) {
        setProduct(false);
      }
    };
    document.body.addEventListener("click", closeShowOptions);
    return () => {
      document.body.removeEventListener("click", closeShowOptions);
    };
  }, []);

  // 2
  useEffect(() => {
    const closeShowOptions = (e) => {
      if (!e.target.closest(".open")) {
        setSolutions(false);
      }
    };
    document.body.addEventListener("click", closeShowOptions);
    return () => {
      document.body.removeEventListener("click", closeShowOptions);
    };
  }, []);

  // 3
  useEffect(() => {
    const closeShowOptions = (e) => {
      if (!e.target.closest(".open")) {
        setAbout(false);
      }
    };
    document.body.addEventListener("click", closeShowOptions);
    return () => {
      document.body.removeEventListener("click", closeShowOptions);
    };
  }, []);

  // 3
  useEffect(() => {
    const closeShowOptions = (e) => {
      if (!e.target.closest(".open")) {
        setNavProduct(false);
      }
    };
    document.body.addEventListener("click", closeShowOptions);
    return () => {
      document.body.removeEventListener("click", closeShowOptions);
    };
  }, []);

  // 4
  useEffect(() => {
    const closeShowOptions = (e) => {
      if (!e.target.closest(".open")) {
        setNavSolutions(false);
      }
    };
    document.body.addEventListener("click", closeShowOptions);
    return () => {
      document.body.removeEventListener("click", closeShowOptions);
    };
  }, []);

  const handleNavProduct = () => {
    setNavProduct(!navproduct);
  };
  const handleNavSolutions = () => {
    setNavSolutions(!navsolutions);
  };

  return (
    <div className=" fixed w-full z-50 bg-[#10091B] text-white py-4 px-[100px] justify-between items-center flex gap-[50px] h-[94px]">
      <div>
        <Link href={"/"}>
          <Image
            className=""
            src="./coalesy-logo.svg"
            alt="Next.js Logo"
            width={91}
            height={23}
          />
        </Link>
      </div>
      <div className="flex gap-[35px] items-center">
        <div
          onClick={handleProduct}
          className="lg:flex items-center lg:flex-row gap-2 relative cursor-pointer hidden"
        >
          <p>Products</p>

          {product && (
            <div className=" bg-[#10091B] ">
              <div className="absolute bg-[#10091B] rounded-md top-[50px] text-white p-6 w-[1100px] h-[400px]  shadow-xl grid grid-cols-2 items-center justify-center ">
                <Link href={"/multi-currency"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./find-events.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Find events
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/virtual-card"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./nft-mkt.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        NFT marketplace
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/exchange-money"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./voting.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Voting
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/money-transfer"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./hardware.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Hardware
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div
          onClick={handleSolutions}
          className="lg:flex items-center lg:flex-row gap-2 relative cursor-pointer hidden"
        >
          <p>Solutions</p>

          {solutions && (
            <div className=" bg-[#10091B] ">
              <div className="absolute bg-[#10091B] rounded-md top-[50px] text-white p-6 w-[1100px] h-[400px]  shadow-xl grid grid-cols-2 items-center justify-center ">
                <Link href={"/individuals"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./for-individuals.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        For individuals
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/virtual-card"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./for-creators.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        For creators
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/exchange-money"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./for-developers.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        For developers
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div
          onClick={handleAbout}
          className="lg:flex items-center lg:flex-row gap-2 relative cursor-pointer hidden"
        >
          <p>About</p>

          {about && (
            <div className=" bg-[#10091B] ">
              <div className="absolute bg-[#10091B] rounded-md top-[50px] text-white p-6 w-[1100px] h-[400px]  shadow-xl grid grid-cols-2 items-center justify-center ">
                <Link href={"/multi-currency"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./about-coalesy.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        About coalesy
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/virtual-card"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./work-with-us.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Work with us
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/exchange-money"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./support-center.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Support center
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href={"/money-transfer"}>
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        className=""
                        src="./community.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Community
                      </h1>
                      <p className="text-[14px] text-[var(--text-color)] opacity-70">
                        Discover unique experiences, connect with creators you
                        love.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div>
          <p>Documentation</p>
        </div>
      </div>

      <div className="flex gap-[35px] items-center">
        <div className="h-10 w-10 rounded-full bg-[#443448] grid place-content-center">
          <Image src="/sol.svg" />
        </div>
        <div className="lg:block hidden text-2xl" onClick={handleClickToggle}>
          {icon ? <BsMoon /> : <BsSun />}
        </div>

        <div className="bg-[#FF5B96] text-center rounded-[10px] py-[8px] px-[28px]  text-white lg:block hidden ">
          <Image src={"/profile.sbg"} alt="avater" />
        </div>
      </div>
    </div>
  );
}
