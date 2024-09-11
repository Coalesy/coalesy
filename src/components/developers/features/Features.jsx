import React from 'react'
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

function Features() {
  return (

<div>

  <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

    <Image
      src="/detailed-documentation.svg"
      alt="create-ticket"
      width={500}
      height={500}
    />
    
    <div className="flex flex-col w-[65%]">
      <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Powerful Ticketing APIs</h1>
      <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Access a comprehensive suite of APIs for NFT ticket discovery, purchase, and management functionalities.</p>
    </div>
        
  </div>


    <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

      <div className="flex flex-col w-[65%]">
        <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Detailed Documentation</h1>
        <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Coalesy provides clear and concise documentation to guide you through the integration process.</p>
      </div>

      <Image
        src="/powerful-api.svg"
        alt="market-tools"
        width={500}
        height={500}
      />
        
    </div>
      

</div>
  )
}

export default Features