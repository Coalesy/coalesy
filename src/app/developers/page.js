import Benefits from '@/components/developers/benefits/Benefits'
import Features from '@/components/developers/features/Features'
import Hero from '@/components/developers/hero/Hero'
import Possible from "@/components/possible/Possible";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Future from "@/components/future/Future";
import React from 'react'

function page() {
  return (
    <div>

        <Navbar/>
        <Hero />
        <Benefits />
        <Features />
        <Possible/>
        <Future/>
        <Footer/>



    </div>
  )
}

export default page