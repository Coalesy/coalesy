
import Header from '@/components/events/header/Header';
import Filter from '@/components/events/all-filter/Filter';
import React from 'react'
import EventDetailsCompiler from '@/components/events/event-details/EventDetailsCompiler';

function page() {
  return (
    <div>
      <Header />
      <Filter />
      <EventDetailsCompiler/>
    </div>
  )
}

export default page;
