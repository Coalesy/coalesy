import Hero from '@/components/creators/hero/Hero'
import Tickets from '@/components/creators/ticket/Ticket'
import Footer from '@/components/Footer'
import Future from '@/components/future/Future'
import Choose from '@/components/individuals/choose/Choose'
import Navbar from '@/components/navbar/Navbar'
import Possible from '@/components/possible/Possible'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Choose/>
      <Tickets/>
      <Possible/>
      <Future/>
      <Footer/>
    </div>
  )
}

export default page