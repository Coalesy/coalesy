
import Hero from '@/components/developers/hero/Hero'
import Tickets from '@/components/developers/ticket/Ticket'
import Footer from '@/components/Footer'
import Future from '@/components/future/Future'
import Choose from '@/components/individuals/choose/Choose'
import Navbar from '@/components/navbar/Navbar'
import Possible from '@/components/possible/Possible'
import React from 'react'

const DeveloperPage = () => {
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

export default DeveloperPage