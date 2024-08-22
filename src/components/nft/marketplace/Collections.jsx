import React from 'react'
import { TbArrowRight } from 'react-icons/tb'
import UpcomingEvent from './UpcomingEvent'
import TopCollections from './TopCollections'
import TopHolders from './TopHolders'

function Collections() {
  return (
    <div className='container'>

      <UpcomingEvent />
      <TopCollections />

      <TopHolders />
    </div>
  )
}

export default Collections