import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import Hero from '@/components/about/hero/Hero'
import MissionVision from '@/components/about/mission-vision/MissionVision'

function page() {
  return (
    <div>
        <Navbar />
        <Hero />
        <MissionVision />
    </div>
  )
}

export default page