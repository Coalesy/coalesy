import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, activeCategory }) => {
  const filteredEvents = events.filter(event => 
    activeCategory === 'All' || event.category === activeCategory
  );

  return (
    <div className="w-3/4 p-4">
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p>No events found in this category.</p>
      )}
    </div>
  );
};

export default EventList;
