import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/individuals/hero/Hero";
import Benefits from "@/components/individuals/benefits/Benefits";
import Features from "@/components/individuals/features/Features";
import Possible from "@/components/possible/Possible";
import Future from "@/components/future/Future";
import Footer from "@/components/Footer";



function page() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Features />
        <Possible />
        <Future />
        <Footer />
    </div>
  )
}

export default page
