import React from 'react'
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

function Features() {
  return (

<div>

  <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

    <Image
      src="/create-ticket.svg"
      alt="create-ticket"
      width={500}
      height={500}
    />
    
    <div className="flex flex-col w-[65%]">
      <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Effortless NFT Ticket Creation</h1>
      <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Coalesy empowers creators to craft remarkable experiences, and a key aspect is seamless NFT ticket creation. Our user-friendly platform streamlines the process, putting you in complete control.</p>

      <a href="#" className='text-[14px] flex gap-2 font-medium tracking-[-0.5px]'>Learn more <TbArrowNarrowRight className="text-[24px] opacity-70" /></a>
    </div>
        
  </div>


    <div className="footer-container h-[600px] gap-[100px] flex justify-between items-center">

      <div className="flex flex-col w-[65%]">
        <h1 className="text-[40px] font-bold tracking-[-2px] w-[80%] mb-4">Targeted marketing tools</h1>
        <p className="text-[16px] font-normal tracking-[-0.5px] opacity-70 mb-10 ">Reach the right audience with laser precision. Coalesy&apos;s tools help you target potential attendees based on interests and past event participation.</p>

        <a href="#" className='text-[14px] flex gap-2 font-medium tracking-[-0.5px]'>Learn more <TbArrowNarrowRight className="text-[24px] opacity-70" /></a>
      </div>

      <Image
        src="/market-tools.svg"
        alt="market-tools"
        width={500}
        height={500}
      />
        
    </div>
      

</div>
  )
}

export default Features