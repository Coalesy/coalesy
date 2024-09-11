import React from 'react'
import Image from 'next/image';

function Footer() {
  return (

    <div className='footer-container'>

      {/* FIRST SECTION */}
      
      <div className=' footer-container flex flex-row justify-between items-center'>
        <div className='flex flex-col gap-2 w-f'>
          <h1 className='text-[30px] font-semibold tracking-[-3%]'>Suscribe to our newsletter</h1>
          <p className='tracking-tight text-[15px] opacity-70'>Stay updated with our weekly newsletter to your inbox</p>
        </div>

        <div className='flex flex-row gap-4 pt-[80px]'>
          <div className='bg-[#282232] rounded-[5px]  px-4 py-4 w-[280px] flex '>
            <input className='outline-none text-[14px] text-white text-opacity-30 bg-transparent' type="email" placeholder="Email address" /> 
          </div>
          <button className="text[15px] :hover:bg-[#FF93FF] bg-[#FF5B96] py-5 px-16 rounded-[5px] font-semibold">Subscribe</button>
        </div>

      </div>

      
      <div className='border-b border-white my-[40px] opacity-10'></div>

      {/* SECOND SECTION */}

      <div className='footer-container flex flex-row justify-start gap-[150px] '>
        <div>
          <h1 className='text-[16px] font-semibold tracking-[-2%] pb-[15px]'>Products</h1>
          <div className='flex flex-col gap-4'>
            <a href='/events' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Find events</a>
            <a href='/nft/marketplace' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>NFT marketplace</a>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Voting</a>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Hardware</a>
          </div>
        </div>

        <div>
          <h1 className='text-[16px] font-semibold tracking-[-2%] pb-[15px]'>Solutions</h1>
          <div className='flex flex-col gap-4'>
            <a href='/individuals' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>For individuals</a>
            <a href='/businesses' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>For creators</a>
            <a href='/developers' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>For developers</a>
          </div>
        </div>

        <div>
          <h1 className='text-[16px] font-semibold tracking-[-2%] pb-[15px]'>Company</h1>
          <div className='flex flex-col gap-4'>
            <a href='/about' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>About Coalesy</a>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Career</a>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Suppport</a>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Community</a>
          </div>
        </div>
        
        <div>
          <h1 className='text-[16px] font-semibold tracking-[-2%] pb-[15px]'>Developers</h1>
          <div className='flex flex-col gap-4'>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Documentation</a>
          </div>
        </div>
      
      </div>

      <div className='border-b border-white mt-[80px] mb-[30px] opacity-10'></div>

      {/* THIRD SECTION */}

      <div className='footer-container'>
        <div className='flex flex-row  justify-between items-center'>

          <Image src="/logoicon.svg" width={30} height={30} alt='logo'/>

          <div className='flex flex-row gap-4'>
            <p className='text-[15px] opacity-30 tracking-tight'>© 2024 Coalesy.com. All rights reserved.</p>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Terms of service</a>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Whitepaper</a>
            <a href='/notfound' className='text-[15px] opacity-70 tracking-tight hover:text-[#FF5B96]'>Cookie settings</a>
          </div>

          <div className='flex flex-row gap-4'>
            <a href='#' className=''><Image src="/discord.svg" width={24} height={24} alt='social'/></a>
            <a href='#' className=''><Image src="/telegram.svg" width={24} height={24} alt='social'/></a>
            <a href='https://x.com/coalesynft' target='blank' className=''><Image src="/twitter.svg" width={24} height={24} alt='social'/></a>
            <a href='#' className=''><Image src="/instagram.svg" width={24} height={24} alt='social'/></a>
            <a href='#' className=''><Image src="/youtube.svg" width={24} height={24} alt='social'/></a>
            <a href='#' className=''><Image src="/medium.svg" width={24} height={24} alt='social'/></a>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
