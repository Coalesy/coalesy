import Image from 'next/image'

const SolutionContent = () => {
  return (
    <div className="absolute left-0 flex flex-col justify-center items-center top-[73px] w-full h-[300px] bg-[#10091B] z-50 border-t border-b border-[#282232]">
        
        <div className='w-[40%]'>

        <h1 className='text-[20px] font-bold mb-8'>Solutions</h1>

            <div className='flex gap-16'>

            <div className='flex flex-col gap-10'>
              <a href='/individuals' className="text-white flex items-start gap-4">
              <Image src="/for-individuals.svg" width={30} height={30} alt="for-individuals"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>For individuals</h1>
                <p className='text-white opacity-70'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>

              <a href='/developers' className="text-white flex items-start gap-4">
              <Image src="/for-developers.svg" width={30} height={30} alt="for-developers"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>For developers</h1>
                <p className='text-white opacity-70'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>
            </div>

            <div className='flex flex-col gap-10'>
              <a href='/businesses' className="text-white flex items-start gap-4">
              <Image src="/for-creators.svg" width={30} height={30} alt="for-creators"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>For creators</h1>
                <p className='text-white opacity-70'>Discover unique experiences, connect with creators you love</p>
              </div>
              </a>
            </div>
              
          </div>
      </div>
    </div>
  );
};

export default SolutionContent;



  