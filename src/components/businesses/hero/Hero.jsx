import React from 'react'

const Hero = () => {
  return (
    <div className='h-[100vh] w-full'>
        <div className=" bg-[url(/business-hero.svg)] bg-no-repeat rounded-[10px] w-full h-[100vh] bg-right bg-contain flex flex-col items-start p-8 justify-center">
        
        <div className='footer-container flex flex-col justify-center w-full'>
          <h1 className="text-[50px] lg:w-[442px] font-bold md:w-[400px] w-[350px] tracking-[-1px] lg:leading-[55px] leading-[33px]">
          Make It Happen with <span>Coalesy!</span>
          </h1>
          <p className="w-[442px] text-[16px] tracking-[-0.2px] opacity-70 pt-6 pb-14">
          Reach a wider audience, create a buzz, and sell out your next event with Coalesy.
          </p>
          <a href='#' alt='' className="px-14 py-5 text-[14px] font-medium tracking-[-0.2px] w-[220px] text-center bg-[#FF5B96] rounded-[5px]">Create ticket</a>

        </div>
        
      </div>
    </div>
  )
}

export default Hero