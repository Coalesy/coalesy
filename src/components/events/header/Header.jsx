
import React from 'react'

function Header() {
  return (
    <div className='bg-[url(/eventheader.svg)] w-full bg-[100%] mb-[60px] bg-cover bg-no-repeat h-[320px]'>
        <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='text-[40px] font-bold text-white tracking-[-1.5px]'>Find your events on Coalesy</h1>
            <p className='text-[16px tracking-[0.5px]]'>From gaming, to entertainment, to learning, there's an events for you.</p>
        </div>
    </div>
  )
}

export default Header
