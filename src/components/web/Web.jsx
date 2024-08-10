import Image from "next/image";
import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";

const Web = () => {
  return (
    <div className="">

        <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

        <Image
          src="/web3-event.svg"
          alt="web3 event"
          width={500}
          height={500}
        />
         
         <div className="flex flex-col w-[65%]">
          <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Web3 events, just for you!</h1>
          <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Ready to embark on unforgettable event journeys?  Explore the Coalesy platform, discover upcoming events, and join a community that celebrates the power of shared experiences.  We're more than just tickets; we're a platform built for event enthusiasts like you!</p>

          <a href="#" className='text-[14px] flex gap-2 font-medium tracking-[-0.5px]'>Learn more <TbArrowNarrowRight className="text-[24px] opacity-70" /></a>
         </div>
            
        </div>


        <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

          <div className="flex flex-col w-[65%]">
            <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Meet your favorite influencers, anywhere!</h1>
            <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Ready to embark on unforgettable event journeys?  Explore the Coalesy platform, discover upcoming events, and join a community that celebrates the power of shared experiences.  We're more than just tickets; we're a platform built for event enthusiasts like you!</p>

            <a href="#" className='text-[14px] flex gap-2 font-medium tracking-[-0.5px]'>Learn more <TbArrowNarrowRight className="text-[24px] opacity-70" /></a>
          </div>

          <Image
            src="/meet.svg"
            alt="meet"
            width={500}
            height={500}
          />
            
          </div>


          <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

            <Image
              src="/buy.svg"
              alt="buy ticket"
              width={500}
              height={500}
            />
            
            <div className="flex flex-col w-[65%]">
              <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Buy & sell NFT tickets on Coalesy</h1>
              <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Buy tickets directly from creators, access exclusive content, and potentially resell your tickets on the secondary market. Coalesy fosters a secure and user-friendly environment for buying and selling NFT tickets.</p>

              <a href="#" className='text-[14px] flex gap-2 font-medium tracking-[-0.5px]'>Learn more <TbArrowNarrowRight className="text-[24px] opacity-70" /></a>
            </div>
                
          </div>

                      
                
    </div>
  );
};

export default Web;
