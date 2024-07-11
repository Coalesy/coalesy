import React from 'react';
import Image from 'next/image';
import { TbSearch } from "react-icons/tb"

function Navbar() {
    return (
        <div className="container flex justify-between items-center py-2 bg-[#10091B]">
            <Image src="/logo.svg" alt="Logo" width={100} height={50} />
            <div className="flex gap-10">
                <div className='bg-[#443448] rounded-[5px]  px-4 w-[280px] flex items-center gap-2'>
                    <TbSearch className='w-[20px] h-[20px] text-white text-opacity-30 '/>
                    <input className='outline-none text-[14px] text-white text-opacity-30 bg-transparent' type="text" placeholder="Search for NFT" />
                </div>
                <div className='bg-[#443448] px-3 rounded-[5px] py-2 flex items-center gap-4'>
                    <button className="text[14px] bg-[#FF5B96] py-3 tracking-[-2%] font-semibold px-5 rounded-[3px]">All chains</button>
                    <Image src="/btc.svg" width={24} height={24} />
                    <Image src="/eth.svg" width={24} height={24} />
                    <Image src="/sol.svg" width={24} height={24} />
                    <Image src="/matic.svg" width={24} height={24} />
                    <Image src="/avax.svg" width={24} height={24} />
                    <Image src="/bnb.svg" width={24} height={24} />
                </div>
            </div>

            <button className="text[15px] :hover:bg-[#FF93FF] bg-[#FF5B96] tracking-[-2%] py-5 px-16 rounded-[5px] font-semibold">Connect wallet</button>
        </div>
    );
}

export default Navbar;