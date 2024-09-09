import React from 'react'
import { TbArrowRight } from 'react-icons/tb'
import { topHolders } from './data'

function TopHolders() {
    const data = topHolders;
    return (
        <div>
            <div className='flex justify-between items-center w-full py-6'>
                <div>
                    <h2 className='text-[40px] font-[700]'>Top Holders</h2>
                    <p className='text-[16px]'>Showing all top buyers in the marketplace</p>
                </div>
                <div className='flex bg-[#282232] w-[226px] h-[56px] rounded-[1px] justify-center cursor-pointer items-center'>
                    <p>Show all holders</p>
                    <TbArrowRight />
                </div>
            </div>
            <div className='grid py-10 grid-cols-4 gap-6'>
                {data.map((d, i) => (
                    <div 
                        key={i} 
                        className='h-[392px] rounded-[10px] bg-cover bg-center relative overflow-hidden' 
                        style={{ backgroundImage: `url(${d.img})` }}>
                        
                        {/* Gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>

                        {/* Content at the bottom */}
                        <div className='absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between z-10'>
                            <div className='flex flex-col gap-4'>
                                <img src={d.img} className='h-10 w-10 rounded-full mr-2' alt={d.name} />
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-white text-[20px] tracking-[-1px] font-semibold'>{d.name}</h2>
                                    <p className='text-white text-[14px] tracking-[-0.5px] text-opacity-70'>Total Holdings: {d.items}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopHolders
