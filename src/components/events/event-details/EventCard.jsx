import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const EventCard = ({ event }) => {
  const eventType = event.type.toLowerCase(); // Use the event type for routing

  return (
    <Link href={`/events/${eventType}/${event.id}`}>
      <div className="bg-transparent rounded-lg shadow-md p-4 mb-4 flex gap-12 w-full flex-row items-center justify-start cursor-pointer">
        <img src={event.image} alt={event.title} className="rounded-lg h-48 object-cover" />
        <div className="mt-4">
          <div className="flex gap-3 items-center justify-start">
            <img src={event.icons} alt={event.title} className="rounded-lg h-[35px] object-cover" />
            <h3 className="text-[16px] font-medium">{event.projectName}</h3>
            {event.verified && <FaCheckCircle className="text-blue-500" />}
          </div>
          <h4 className="text-[25px] font-medium mt-1">{event.title}</h4>
          <p className="text-[14px] opacity-70 mt-2">{event.description}</p>
          <div className="mt-4 flex items-center text-[14px] gap-2">
            <span className='text-white opacity-70'>{event.date}</span>
            <span className='text-white opacity-70'>{event.time}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
