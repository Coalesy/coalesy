'use client'
import React from 'react'
import { useState } from 'react';
import Accordion from '@/components/accordion/Accordion'

function Benefits() {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className='bg-[#282232] h-[450px] w-full flex items-center'>
      <div className='footer-container w-full flex gap-14'>
        <div className='w-[42%]'>
            <h1 className='text-[40px] font-bold tracking-[-1px] mb-14 leading-tight'>Why choosing Coalesy as your event platform</h1>
            <div> <a href='/notfound' alt='' className="px-14 py-5 bg-[#10091B] rounded-[5px]">Learn more</a> </div>
        </div>

        <div>
            
        <div className="w-full">
            <Accordion
                number="01"
                question="Simplified User Experience"
                answer="Offer your users a frictionless ticketing experience. They can purchase Coalesy NFT tickets directly from your platform, eliminating the need to switch between websites."
                isOpen={openIndex === 1}
                onClick={() => toggleAccordion(1)}
            />
            <Accordion
                number="02"
                question="Increased Engagement"
                answer="Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without writing your own CSS."
                isOpen={openIndex === 2}
                onClick={() => toggleAccordion(2)}
            />
            <Accordion
                number="03"
                question="Be at the Forefront of Web3"
                answer="An accordion is a UI component that allows users to toggle the visibility of sections of content."
                isOpen={openIndex === 3}
                onClick={() => toggleAccordion(3)}
            />
            <Accordion
                number="04"
                question="Dedicated Developer Support Team"
                answer="An accordion is a UI component that allows users to toggle the visibility of sections of content."
                isOpen={openIndex === 4}
                onClick={() => toggleAccordion(4)}
            />
        </div>
                
        </div>
      </div>
    </div>
  )
}

export default Benefits
