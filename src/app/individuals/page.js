import Hero from '@/components/individuals/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import Features from '@/components/individuals/features/Features'
import Benefits from '@/components/individuals/benefits/Benefits'
import Possible from '@/components/possible/Possible'
import Future from '@/components/future/Future'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Benefits />
        <Features />
        <Possible />
        <Future />
        <Footer />
    </div>
  )
}

export default page