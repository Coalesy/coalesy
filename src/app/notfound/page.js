import React from 'react'

const page = () => {
  return (
    <div  className=" bg-[url(/background.svg)] flex flex-col overflow-hidden justify-start items-center h-[100vh] bg-cover bg-center bg-[#10091B] bg-blend-normal">

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col h-[100vh] justify-center items-center gap-2 mb-[40px] text-center ">
            <h1 className="text-[32px] md:text-[50px] tracking-[-2px] leading-[60px] font-bold">Coming soon</h1>
            <p className="text-[16px] font-normal opacity-70 tracking-[-1px] mb-6">Nothing to see here. We&apos;re working on the page</p>
            
            <div className="flex flex-row justify-center items-center gap-4 mb-[40px] text-center text-[14px] tracking-[-0.2px] font-semibold ">
                <a href='/' alt='' className="px-10 py-3 border border-[#FF5B96] text-[#FF5B96]  rounded-[5px]">Back to home</a>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default page