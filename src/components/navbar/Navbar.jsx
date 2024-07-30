'use client'
import { useState, useEffect, useRef } from 'react';
import ProductContent from './ProductContent';
import SolutionContent from './SolutionContent';
import AboutContent from './AboutContent';
import Image from 'next/image'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const dropdownRef = useRef(null);

  const handleClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bg-[#10091B] h-[10vh] w-full justify-center flex items-center z-50">
      <div className=" container flex justify-between items-center space-x-4  p-4 ">

        <a href='/'>
          <Image
            src="/logo.svg"
            width={100}
            height={50}
            alt="Logo"
          />
        </a>

        <div className='flex justify-center items-center gap-16'>

        <div className="relative" onClick={() => handleClick('Product')}>
          <div className="cursor-pointer text-[14px]">Products</div>
        </div>
        <div className="relative" onClick={() => handleClick('Solution')}>
          <div className="cursor-pointer text-[14px]">Solutions</div>
        </div>
        <div className="relative" onClick={() => handleClick('About')}>
          <div className="cursor-pointer text-[14px]">About</div>
        </div>
        <div className="relative">
          <a href="#" className="cursor-pointer text-[14px]">Documentation</a>
        </div>
      </div>
      <div ref={dropdownRef}>
        {activeItem === 'Product' && <ProductContent />}
        {activeItem === 'Solution' && <SolutionContent />}
        {activeItem === 'About' && <AboutContent />}
      </div>

      <div>
        <a href='' alt='' className="text[15px] :hover:bg-[#FF93FF] bg-[#FF5B96] tracking-[-2%] py-3 px-12 rounded-[5px] font-semibold">Connect wallet</a>
      </div>
      </div>

      
      
      
    </div>
  );
};

export default Navbar;

