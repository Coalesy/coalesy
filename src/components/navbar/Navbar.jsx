"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Img } from "../Img";

export default function Navbar({ icon, handleClickToggle }) {
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
    <div className="fixed w-full z-50 bg-[#10091B] text-white py-4 px-[100px] justify-between items-center flex gap-[50px] h-[94px]">
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
                    Discover unique experiences, connect with creators you love.
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
                    Discover unique experiences, connect with creators you love.
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
                    Discover unique experiences, connect with creators you love.
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
                    Discover unique experiences, connect with creators you love.
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
                   Discover unique experiences, connect with creators you love.
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
                   Discover unique experiences, connect with creators you love.
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
                   Discover unique experiences, connect with creators you love.
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
                  Discover unique experiences, connect with creators you love.
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
                  Discover unique experiences, connect with creators you love.
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
                  Discover unique experiences, connect with creators you love.
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
                  Discover unique experiences, connect with creators you love.
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
        <div className="lg:block hidden text-2xl" onClick={handleClickToggle}>
          {icon ? <BsMoon /> : <BsSun />}
        </div>

        <div className="bg-[#FF5B96] text-center rounded-[10px] py-[8px] px-[28px]  text-white lg:block hidden ">
          <p>Connect Wallet</p>
        </div>
      </div>

      {/* MOBILE NAV */}

      <div
        onClick={handleToggleMenu}
        className="lg:hidden flex items-center gap-4 block"
      >
        <div className="block lg:hidden text-2xl" onClick={handleClickToggle}>
          {icon ? <BsMoon /> : <BsSun />}
        </div>
        <Image
          className=""
          src="./toggle-btn.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
        />
      </div>
      {toggleMenu && (
        <div className="lg:hidden block left-0 top-0 absolute w-full h-[100vh] bg-black px-[30px]">
          <div className="flex w-full justify-between py-[20px]">
            <Image
              className=""
              src="./TULU_PURSE_ICON.svg"
              alt="Next.js Logo"
              width={123}
              height={36}
            />

            <Image
              onClick={handleclose}
              className=" cursor-pointer"
              src="./tabler-icon-x.svg"
              alt="Next.js Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col justify-between h-[80vh]">
            <div>
              <div onClick={handleNavProduct}>
                <div className="flex items-center justify-between py-[15px]">
                  <p className="text-[17px]">Products</p>
                  <Image
                    className=""
                    src="./tabler-icon-chevron-down.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                </div>
                {navproduct && (
                  <div>
                    <Link href={"/multi-currency"}>
                      <div className="flex gap-[5px] items-center ">
                        <Image
                          className=""
                          src="./multi-currency.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Multi-currency</h1>
                          <p className="text-[12px] opacity-50">
                            Manage diverse currencies with our innovative
                            service
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/virtual-card"}>
                      <div className="flex gap-[5px] items-center ">
                        <Image
                          className=""
                          src="./virtual-card.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Virtual card</h1>
                          <p className="text-[12px] opacity-50">
                            Secure online payments with the Tulu Purse virtual
                            card
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/exchange-money"}>
                      <div className="flex gap-[5px] items-center ">
                        <Image
                          className=""
                          src="./exchange-money.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Exchange money</h1>
                          <p className="text-[12px] opacity-50">
                            Easily exchange between Currencies
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/money-transfer"}>
                      <div className="flex gap-[5px] items-center ">
                        <Image
                          className=""
                          src="./resp1.svg"
                          alt="Next.js Logo"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Money transfer</h1>
                          <p className="text-[12px] opacity-50">
                            Send money anywhere, anytime with Tulu Purse
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/expense-management"}>
                      <div className="flex gap-[5px] items-center ">
                        <Image
                          className=""
                          src="./expense-management.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">
                            Expense management
                          </h1>
                          <p className="text-[12px] opacity-50">
                            Control your Spending through expense management
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <div onClick={handleNavSolutions}>
                <div className="flex items-center justify-between py-[15px]">
                  <p className="text-[17px]">Solutions</p>
                  <Image
                    className=""
                    src="./tabler-icon-chevron-down.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                </div>
                {navsolutions && (
                  <div>
                    <Link href={"/individual"}>
                      <div className="flex gap-[5px] items-center ">
                        <Image
                          className=""
                          src="./individuals.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Individual</h1>
                          <p className="text-[15px] opacity-50">
                            Secure online payments with Tulupay
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/freelancers"}>
                      <div className="flex gap-[5px] items-center my-[20px]">
                        <Image
                          className=""
                          src="./freelancers.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Freelancers</h1>
                          <p className="text-[15px] opacity-50">
                            Handle projects and client interactions with
                            optimised solutions
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/travellers"}>
                      <div className="flex gap-[5px] items-center ">
                        <Image
                          className=""
                          src="./travellers.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Travellers</h1>
                          <p className="text-[15px] opacity-50">
                            Cost-effective & secure exchange for a better travel
                            experience at all locations
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/creatives"}>
                      <div className="flex gap-[5px] items-center my-[20px]">
                        <Image
                          className=""
                          src="./creatives.svg"
                          alt="Next.js Logo"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <h1 className=" text-[#FFD900]">Creatives</h1>
                          <p className="text-[15px] opacity-50">
                            Simple Global financial solutions for creatives
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <div className="py-[15px]">
                <div className="flex items-center justify-between gap-2">
                  <p>Support</p>
                  <Image
                    className=""
                    src="./tabler-icon-help.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-[#0F0F0F] text-center py-[6px]  w-[119px] px-[20px] text-[#FFD900] rounded-[10px]">
                Login
              </button>

              <div className="bg-[#FFD900] w-[119px] text-center rounded-[10px] py-[6px] px-[20px]  text-black">
                <p>Register</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
