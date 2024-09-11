import React from 'react'
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

function Features() {
  return (

<div>

  <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

    <Image
      src="/own.svg"
      alt="create-ticket"
      width={500}
      height={500}
    />
    
    <div className="flex flex-col w-[65%]">
      <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Own Your Ticket, Own the Experience</h1>
      <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Coalesy goes beyond traditional tickets. Our NFTs (non-fungible tokens) are more than just entry passes – they&apos;re dynamic assets that unlock a world of benefits.</p>
    </div>
        
  </div>


    <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

      <div className="flex flex-col w-[65%]">
        <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Vote on the Future</h1>
        <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">For high-tier NFT tickets, gain voting rights on future events and platform features. Help shape the direction of Coalesy and the future of Web3 experiences.</p>
      </div>

      <Image
        src="/vote.svg"
        alt="market-tools"
        width={500}
        height={500}
      />
        
    </div>
      

</div>
  )
}

export default Features