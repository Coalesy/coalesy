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
            <div> <a href='#' alt='' className="px-14 py-5 bg-[#10091B] rounded-[5px]">Create events</a> </div>
        </div>

        <div>
            
        <div className="w-full">
            <Accordion
                number="01"
                question="Host captivating events"
                answer="From intimate workshops to global conferences, Coalesy provides the tools to bring your ideas to life."
                isOpen={openIndex === 1}
                onClick={() => toggleAccordion(1)}
            />
            <Accordion
                number="02"
                question="Manage your audience"
                answer="Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without writing your own CSS."
                isOpen={openIndex === 2}
                onClick={() => toggleAccordion(2)}
            />
            <Accordion
                number="03"
                question="Monetize your passion"
                answer="An accordion is a UI component that allows users to toggle the visibility of sections of content."
                isOpen={openIndex === 3}
                onClick={() => toggleAccordion(3)}
            />
            <Accordion
                number="04"
                question="Investment opportunity"
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
