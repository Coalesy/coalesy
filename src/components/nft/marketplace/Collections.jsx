import React from 'react'
import { TbArrowRight } from 'react-icons/tb'

function Collections() {
  return (
    <div className='container'>
        <div className='flex justify-between items-center w-full py-6'>
            <div>
                <h2 className='text-[40px] font-[700]'>Upcoming Collections</h2>
                <p className='text-[16px] '>Showing the list of all the upcoming collections</p>
            </div>
            <div className='flex items-center'>
                <p>Show all upcoming</p>
                <TbArrowRight />
            </div>
        </div>
    </div>
  )
}

export default Collections