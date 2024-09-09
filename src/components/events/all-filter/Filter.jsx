'use client'
import Image from 'next/image'
import { useState, React } from 'react'
import DateDrop from './DateDrop';
import EventType from './EventType';

function Filter() {

    const [showPopup, setShowPopup] = useState(false);
    const [showDrop, setShowDrop] = useState(false);

    const handleShow = () => {
        setShowPopup(!showPopup);
    }
  
    const handleDrop = () => {
        setShowDrop(!showDrop);
    }
    
  
    
  return (
    <div className='footer-container flex flex-row items-center justify-center gap-4'>

      <div className='bg-[#282232] h-[50px] px-4 flex flex-row items-center] w-[50%] gap-2 rounded-[5px]'>
        <Image src='./search.svg' width={24} height={24} />
        <input type='search' placeholder='Search for categories, keywords' className='bg-transparent tracking-tight outline-none w-full text-white' />
      </div>

      <div onClick={handleShow} className='bg-[#282232] z-50 flex flex-row items-center cursor-pointer justify-between px-4 h-[50px] w-[20%] rounded-[5px]'>
        {
            showPopup && <DateDrop /> 
        }
         <p className='text-white opacity-70'>Sort by</p>
         <Image src='./sort.svg' width={24} height={24} />
      </div>

      <div  onClick={handleDrop} className='bg-[#282232] flex z-50 filter-blur flex-row items-center cursor-pointer justify-between px-4 h-[50px] w-[30%] rounded-[5px]'>
      {
            showDrop && <EventType /> 
        }
        <p className='text-white opacity-70'>Event type</p>
        <Image src='./sort.svg' width={24} height={24} />
      </div>

    </div>
  )
}

export default Filter
