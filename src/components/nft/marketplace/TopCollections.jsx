import React from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { topCollections } from './data';
import Image from 'next/image';

function TopCollections() {
    const data = topCollections;
    return (
        <div>
            <div className='flex justify-between items-center w-full py-6'>
                <div>
                    <h2 className='text-[40px] font-[700]'>Top Collections</h2>
                    <p className='text-[16px]'>Showing all top collections</p>
                </div>
                <div className='flex bg-[#282232] w-[226px] h-[56px] rounded-[1px] justify-center cursor-pointer items-center'>
                    <p>Show all collections</p>
                    <TbArrowRight />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-y-10 gap-x-5 py-10'>
                {data.map((d, i) => (
                    <div key={i} className='flex items-center'>
                        <div className='flex w-full h-[100px] bg-[#282232] rounded-[10px]'>
                            <img 
                                src={d.img} 
                                alt={d.name} 
                                className='w-[100px] h-[100px] object-cover rounded-l-[10px]'
                            />
                            <div className='flex flex-col bg-[#282232] justify-center pl-4'>
                                <h3 className='text-[16px] tracking-[-1px] font-[700]'>{d.title}</h3>
                                <p className='text-[14px] tracking-[-0.5px] font-[400]'>{d.items} items</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopCollections;
