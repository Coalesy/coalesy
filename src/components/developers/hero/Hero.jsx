import React from 'react'

const Hero = () => {
  return (
    <div className='h-[100vh] w-full'>
        <div className=" bg-[url(/developers-hero.svg)] bg-no-repeat rounded-[10px] w-full h-full bg-right flex flex-col items-start p-8 justify-center">
        
        <div className='footer-container w-full'>
          <h1 className="text-[50px] lg:w-[442px] font-bold md:w-[400px] w-[350px] tracking-[-1px] lg:leading-[55px] leading-[33px]">
            Powerful Web3 Ticketing APIs
          </h1>
          <p className="w-[442px] text-[16px] tracking-[-0.2px] opacity-70 pt-6 pb-14">
           Share your creations, collaborate with other innovators, and push the boundaries of event technology together.
          </p>
          <a href='#' alt='' className="px-14 py-5 text-[14px] font-medium tracking-[-0.2px] bg-[#FF5B96] rounded-[5px]">Read docs</a>

        </div>
        
      </div>
    </div>
  )
}

export default Hero