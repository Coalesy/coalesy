import Image from "next/image";
import React from "react";

const Tickets = () => {
  return (
    <div>
      <div className="bg-[url(/left-bg.svg)] bg-cover bg-center bg-[#10091B] bg-blend-screen lg:flex lg:flex-row flex-col items-center justify-center gap-[80px] py-4">
        <div>
          <Image
            className=""
            src="./powerful-ticket.svg"
            alt="Next.js Logo"
            width={363}
            height={377}
          />
        </div>
        <div>
          <h1 className="text-[40px] lg:w-[442px] font-[600] md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
          Powerful Ticketing APIs
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
          Access a comprehensive suite of APIs for NFT ticket discovery, purchase, and management functionalities.
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
          <h1 className="text-[40px] lg:w-[420px] font-[600] md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
          Detailed Documentation
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
          Coalesy provides clear and concise documentation to guide you through the integration process.
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
            src="./detailed-documentation.svg"
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
