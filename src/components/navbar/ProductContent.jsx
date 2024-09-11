import Image from 'next/image'

const ProductContent = () => {
  return (
    <div className="absolute left-0 flex flex-col justify-center items-center top-[73px] w-full h-[380px] bg-[#10091B] z-50 border-t border-b border-[#282232]">
        
        <div className='w-[40%]'>

        <h1 className='text-[20px] font-bold mb-8'>Products</h1>

            <div className='flex gap-16'>

            <div className='flex flex-col gap-10'>
              <a href='/events' className="text-white flex items-start gap-4">
              <Image src="/find-events.svg" width={30} height={30} alt="findevent"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>Find events</h1>
                <p className='text-white opacity-70 text-[12px]'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>

              <a href='/notfound' className="text-white flex items-start gap-4">
              <Image src="/voting.svg" width={30} height={30} alt="findevent"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>Voting</h1>
                <p className='text-white opacity-70 text-[12px]'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>
            </div>

            <div className='flex flex-col gap-10'>
              <a href='/nft/marketplace' className="text-white flex items-start gap-4">
              <Image src="/nft-mkt.svg" width={30} height={30} alt="findevent"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>NFT marketplace</h1>
                <p className='text-white opacity-70 text-[12px]'>Discover unique experiences, connect with creators you love</p>
              </div>
              </a>

              <a href='/notfound' className="text-white flex items-start gap-4">
              <Image src="/hardware.svg" width={30} height={30} alt="findevent"/>
              <div className='flex flex-col'>
                <h1 className='text-[16px] font-semibold'>Hardware</h1>
                <p className='text-white opacity-70 text-[12px]'>Discover unique experiences, connect with creators you love.</p>
              </div>
              </a>
            </div>
              
          </div>
      </div>
    </div>
  );
};

export default ProductContent;



