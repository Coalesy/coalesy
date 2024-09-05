import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[100vh] w-full'>
        <div className=" bg-[url(/individual-hero.svg)] bg-no-repeat rounded-[10px] w-full h-[100vh] b-cover bg-right flex flex-col items-start p-8 justify-center">
        
        <div className='footer-container flex flex-col justify-center w-full'>
          <h1 className="text-[50px] lg:w-[442px] font-bold md:w-[400px] w-[350px] tracking-[-1px] lg:leading-[55px] leading-[33px]">
          Get front row with <span>Coalesy!</span>
          </h1>
          <p className="w-[442px] text-[16px] tracking-[-0.2px] opacity-70 pt-6 pb-14">
          Never miss out on the fun again! ‍♀️ Coalesy connects you to events you&apos;ll love.
          </p>
          <a href='#' alt='' className="px-14 py-5 text-[14px] w-[220px] font-medium tracking-[-0.2px] text-center bg-[#FF5B96] rounded-[5px]">Explore events</a>

        </div>
        
      </div>
    </div>
  )
}

export default Hero