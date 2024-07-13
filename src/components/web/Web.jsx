import Image from "next/image";
import React from "react";

const Web = () => {
  return (
    <div className="">
      <div className="bg-[url(/left-bg.svg)] bg-cover bg-center bg-[#10091B] bg-blend-screen lg:flex lg:flex-row flex-col items-center justify-center gap-[80px] py-4">
        <div>
          <Image
            className=""
            src="./web-img.svg"
            alt="Next.js Logo"
            width={363}
            height={377}
          />
        </div>
        <div>
          <h1 className="text-[40px] lg:w-[442px] font-600 md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
            Web3 events, just for you!
          </h1>
          <p className="w-[442px] opacity-70 pt-6 pb-14">
            Ready to embark on unforgettable event journeys? Explore the Coalesy
            platform, discover upcoming events, and join a community that
            celebrates the power of shared experiences. We&apos;re more than just
            tickets; we&apos;re a platform built for event enthusiasts like you!
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

      <div className="bg-[url(/right-bg.svg)] bg-cover bg-center bg-[#10091B] bg-blend-normal">
        <div className="lg:flex lg:flex-row flex-col items-center justify-center gap-[80px]">
          <div className="">
            <h1 className="text-[40px] font-600 lg:w-[442px] md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
              Meet your favorite influencers, anywhere!
            </h1>
            <p className="w-[442px] opacity-70 pt-6 pb-14">
              Ready to embark on unforgettable event journeys? Explore the
              Coalesy platform, discover upcoming events, and join a community
              that celebrates the power of shared experiences. We&apos;re more than
              just tickets; we&apos;re a platform built for event enthusiasts like
              you!
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
              src="./meet.svg"
              alt="Next.js Logo"
              width={363}
              height={377}
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-row flex-col items-center py-20 justify-center gap-[80px]">
        <div className="bg-[#443448] p-4 rounded-md">
            <Image
              className=""
              src="./buy.svg"
              alt="Next.js Logo"
              width={329}
              height={342}
            />
          </div>
          <div className="">
            <h1 className="text-[40px] font-600 lg:w-[442px] md:w-[400px] w-[350px] lg:leading-[44px] leading-[33px]">
            Buy & sell NFT tickets on Coalesy
            </h1>
            <p className="w-[442px] opacity-70 pt-6 pb-14">
            Buy tickets directly from creators, access exclusive content, and potentially resell your tickets on the secondary market. Coalesy fosters a secure and user-friendly environment for buying and selling NFT tickets.
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
      </div>
    </div>
  );
};

export default Web;
