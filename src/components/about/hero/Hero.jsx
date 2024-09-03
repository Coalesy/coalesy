import React from 'react'

const Hero = () => {
  return (
    <div className='h-[100vh] w-full'>
        <div className=" bg-[url(/about-hero.svg)] bg-no-repeat rounded-[10px] w-full h-[100vh] bg-right flex flex-col items-start p-8 justify-center">
        
        <div className='footer-container w-full'>
          <h1 className="text-[50px] lg:w-[442px] font-bold md:w-[400px] w-[350px] tracking-[-1px] lg:leading-[55px] leading-[33px]">
            We&apos;re building the future of connection
          </h1>
          <p className="w-[442px] text-[16px] tracking-[-0.2px] opacity-70 pt-6 pb-14">
          The world of events is evolving, and Coalesy is here to guide you on this exciting journey. We are a revolutionary Web3 ticketing platform that unlocks a universe of possibilities for individuals, businesses and developers .
          </p>
          <a href='#' alt='' className="px-14 py-5 text-[14px] font-medium tracking-[-0.2px] bg-[#FF5B96] rounded-[5px]">Read whitepaper</a>

        </div>
        
      </div>
    </div>
  )
}

export default Hero