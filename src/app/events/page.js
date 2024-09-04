'use client'
import Header from '@/components/events/header/Header';
import Filter from '@/components/events/all-filter/Filter';
import { useState } from 'react';
import Footer from '@/components/Footer';
import React from 'react'
import CategoryFilter from '../../components/events/event-details/CategoryFilter';
import EventList from '../../components/events/event-details/EventList';
import { eventsData } from '../../components/events/event-details/data';

function page() {

  const categories = ['All', 'Gaming', 'Entertainment', 'Payment', 'DAO', 'Blockchain', 'More'];
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div>
      <Header />
      <Filter />
      <div className="flex footer-container">
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <EventList events={eventsData} activeCategory={activeCategory} />
    </div>
    <Footer />
    </div>
  )
}

export default page;
