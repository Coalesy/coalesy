import React from 'react'
import { TbSearch } from 'react-icons/tb'

const Navbar = () => {
  return (
    <header>
      <nav className='flex items-center justify-between'>
        <div className="flex items-center">
          <div className="hidden"></div>
          <div className="">
            <div className="h-10 bg-white flex items-center gap-1 py-2 px-4 bg-opacity-10 rounded">
              <span><TbSearch/></span>
              <input type="text" className='h-full bg-transparent border-none outline-none text-sm' placeholder='Search here' />
            </div>
          </div>
        </div>
        <div className=""></div>
      </nav>
    </header>
  )
}

export default Navbar