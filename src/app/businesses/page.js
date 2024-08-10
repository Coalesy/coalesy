import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/businesses/hero/Hero";
import Benefits from "@/components/businesses/benefits/Benefits";
import Features from "@/components/businesses/features/Features";
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
