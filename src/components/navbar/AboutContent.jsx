import Image from 'next/image'

const AboutContent = () => {
  return (
    <div className="absolute left-0 flex flex-col justify-center items-center top-[73px] w-full h-[380px] bg-[#10091B] z-50 border-t border-b border-[#282232]">
        
        <div className='w-[40%]'>

        <h1 className='text-[20px] font-bold mb-8'>About</h1>

            <div className='flex gap-16'>

            <div className='flex flex-col gap-10'>
              <a href='#' className="text-white flex items-start gap-4">
              <Image src="/about-coalesy.svg" width={30} height={30} alt="about-coalesy"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>About Coalesy</h1>
                <p className='text-white opacity-70 text-[13px]'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>

              <a href='#' className="text-white flex items-start gap-4">
              <Image src="/support-center.svg" width={30} height={30} alt="support-center"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>Support center</h1>
                <p className='text-white opacity-70 text-[13px]'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>
            </div>

            <div className='flex flex-col gap-10'>
              <a href='#' className="text-white flex items-start gap-4">
              <Image src="/work-with-us.svg" width={30} height={30} alt="work-with-us"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>Work with us</h1>
                <p className='text-white opacity-70 text-[13px]'>Discover unique experiences, connect with creators you love</p>
              </div>
              </a>

              <a href='#' className="text-white flex items-start gap-4">
              <Image src="/community.svg" width={30} height={30} alt="community"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>Community</h1>
                <p className='text-white opacity-70 text-[12px]'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>
            </div>
              
          </div>
      </div>
    </div>
  );
};

export default AboutContent;


