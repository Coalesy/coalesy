import Image from "next/image";
import React from "react";

const Platform = () => {
  return (
    <div className=" footer-container ">
      <div className="pt-[50px]">
        <h1 className="text-[40px] font-bold w-[357px] lg:leading-[44px] leading-[33px] tracking-[-1px]">
          A Web3 Platform for Everyone
        </h1>
        <p className="w-[442px] text-[16px] opacity-70 py-6 tracking-[-0.5px]">
          Explore the Coalesy platform, discover upcoming events, and join a
          community.
        </p>
      </div>

      <div className="bg-cover bg-center bg-blend-screen pt-10 pb-[80px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div className="bg-[#282232] p-10 rounded-md">
            <Image
              src="/main-arrow.svg"
              alt="Next.js Logo"
              width={41}
              height={38}
            />
            <h2 className="text-[20px] tracking-[-0.8px] leading-[27px] font-medium py-[20px]">
              Uncover a World of Events
            </h2>
            <p className="text-[14px] tracking-[-0.2px] opacity-70">
              Explore a diverse and curated selection of events across various
              categories, from electrifying concerts and insightful conferences.
            </p>
          </div>

          <div className="bg-[#282232] p-10 rounded-md">
            <Image
              src="/main-arrow.svg"
              alt="Next.js Logo"
              width={41}
              height={38}
            />
            <h2 className="text-[20px] tracking-[-0.8px] leading-[27px] font-medium py-[20px]">
              NFT Ticketing with Exclusive Perks
            </h2>
            <p className="text-[14px] tracking-[-0.2px] opacity-70">
              Go beyond basic attendance with Coalesy&apos;s innovative NFT
              ticketing system. Unlock exclusive content, early access,
              priority seating, meet-and-greet opportunities.
            </p>
          </div>

          <div className="bg-[#282232] p-10 rounded-md">
            <Image
              src="/main-arrow.svg"
              alt="Next.js Logo"
              width={41}
              height={38}
            />
            <h2 className="text-[20px] tracking-[-0.8px] leading-[27px] font-medium py-[20px]">
              Secure and Transparent Platform
            </h2>
            <p className="text-[14px] tracking-[-0.2px] opacity-70">
              Coalesy prioritizes security and transparency. Utilize secure
              crypto wallets for transactions and benefit from a clear view of
              event details.
            </p>
          </div>

          <div className="bg-[#282232] p-10 rounded-md">
            <Image
              src="/main-arrow.svg"
              alt="Next.js Logo"
              width={41}
              height={38}
            />
            <h2 className="text-[20px] tracking-[-0.8px] leading-[27px] font-medium py-[20px]">
              Community of Event Enthusiasts
            </h2>
            <p className="text-[14px] tracking-[-0.2px] opacity-70">
              Connect with like-minded individuals who share your passions.
              Build lasting friendships, network with others in your field.
            </p>
          </div>

          <div className="bg-[#282232] p-10 rounded-md">
            <Image
              src="/main-arrow.svg"
              alt="Next.js Logo"
              width={41}
              height={38}
            />
            <h2 className="text-[20px] tracking-[-0.8px] leading-[27px] font-medium py-[20px]">
              Invest in Your <br /> Passions
            </h2>
            <p className="text-[14px] tracking-[-0.2px] opacity-70">
              Explore a diverse and curated selection of events across various
              categories, from electrifying concerts and insightful conferences.
            </p>
          </div>

          <div className="bg-[#282232] p-10 rounded-md">
            <Image
              src="/main-arrow.svg"
              alt="Next.js Logo"
              width={41}
              height={38}
            />
            <h2 className="text-[20px] tracking-[-0.8px] leading-[27px] font-medium py-[20px]">
              Always Evolving & Innovating
            </h2>
            <p className="text-[14px] tracking-[-0.2px] opacity-70">
            We&apos;re dedicated to continuous innovation, ensuring you have access to the most cutting-edge tools and features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
