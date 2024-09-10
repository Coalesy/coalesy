import Image from "next/image";
import React from "react";

const Tickets = () => {
  return (
    <div>
      <div className="bg-[url(/left-bg.svg)] bg-cover bg-center bg-[#10091B] bg-blend-screen lg:flex lg:flex-row flex-col items-center justify-center gap-[80px] py-4">
        <div>
          <Image
            className=""
            src="./nft-ticket.svg"
            alt="Next.js Logo"
            width={363}
            height={377}
          />
        </div>
        <div>
          <h1 className="text-[40px] lg:w-[442px] font-[600] md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
          Effortless NFT Ticket Creation
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
          Coalesy empowers creators to craft remarkable experiences, and a key aspect is seamless NFT ticket creation. Our user-friendly platform streamlines the process, putting you in complete control.
          </p>
          <div className="gap-2 flex items-center">
            <p>Learn More</p>
            <Image
              className=""
              src="./arrow-right.svg"
              alt="Next.js Logo"
              width={17}
              height={17}
            />
          </div>
        </div>
      </div>

      <div className="bg-[url(/right-bg.svg)] bg-cover bg-center bg-[#10091B] bg-blend-screen lg:flex lg:flex-row flex-col items-center justify-center gap-[80px] py-4">
        <div>
          <h1 className="text-[40px] lg:w-full font-[600] md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
          Targeted marketing tools
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
          Reach the right audience with laser precision. Coalesy&apos;s tools help you target potential attendees based on interests and past event participation.
          </p>
          <div className="gap-2 flex items-center">
            <p>Learn More</p>
            <Image
              className=""
              src="./arrow-right.svg"
              alt="Next.js Logo"
              width={17}
              height={17}
            />
          </div>
        </div>
        <div>
          <Image
            className=""
            src="./marketing-tools.svg"
            alt="Next.js Logo"
            width={363}
            height={377}
          />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
