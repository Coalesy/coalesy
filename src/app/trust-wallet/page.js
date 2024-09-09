import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TrustWallet from '@/components/nft/marketplace/TrustWallet'
import Sidebar from '@/components/nft/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className=''>
        <TrustWallet/>
        </div>
        <div className='footer-container'>
            <Sidebar/>
        </div>
        <Footer/>
    </div>
  )
}

export default page