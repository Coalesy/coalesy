
import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/developers/hero/Hero";
import Benefits from "@/components/developers/benefits/Benefits";
import Features from "@/components/developers/features/Features";
import Possible from "@/components/possible/Possible";
import Future from "@/components/future/Future";
import Footer from "@/components/Footer";

const DeveloperPage = () => {
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

export default DeveloperPage