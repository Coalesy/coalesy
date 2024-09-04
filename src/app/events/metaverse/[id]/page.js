"use client"
import { eventsData } from '@/components/events/event-details/data';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
// import { eventsData } from '../../../data/eventsData';

const MetaverseEventDetail = () => {
  const router = useRouter();
  const id  = router.query;

  const event = eventsData.find(event => event.id === parseInt(id) && event.category === 'Online');

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <div className="flex items-center gap-4 mb-4">
        <img src={event.icons} alt={event.projectName} className="h-10" />
        <h2 className="text-xl font-medium">{event.projectName}</h2>
        {event.verified && <span className="text-blue-500">Verified</span>}
      </div>
      <p className="text-lg mb-4">{event.description}</p>
      <div className="text-md text-gray-600">
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Status: {event.status}</p>
      </div>
      {/* Online event-specific details can be added here */}
    </div>
  );
};

export default MetaverseEventDetail;
