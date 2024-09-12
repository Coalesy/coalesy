"use client"
import { eventsData } from '@/components/events/event-details/data';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const EventDetail = ({ eventType }) => {
  const router = useRouter();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    
    if (id) {
      const foundEvent = eventsData.find(event => event.id === parseInt(id) && event.type === eventType);
      setEvent(foundEvent);
    }
  }, [eventType]);

  if (!event) {
    return (
      <div>
        <div className='bg-[url(/solana-hack.svg)] h-[250px] w-full bg-no-repeat bg-[100%] bg-cover'></div>
        <div className='w-full footer-container -translate-y-10'>
          <div className='bg-[#0A0511] rounded-full p-5 w-[120px] flex flex-row items-center justify-center'>
            <img src='/solana.svg' className="h-[80px]" />
          </div>
        </div>
        <p>hello</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-row gap-8">
      {/* Left Side */}
      <div className="w-1/3">
        <CompanyDetails event={event} />
        <EventProgram programs={event.programs} />
        <Accordion questions={event.questions} />
      </div>

      {/* Right Side */}
      <div className="w-2/3">
        <EventActions />
        <EventIntro videoUrl="/placeholder-video.mp4" />
        <Tags tags={event.tags} />
        <Category category={event.category} />
        <Language language={event.language} />
        <ResourceLinks resources={event.resources} />
        <EventOrganizers organizers={event.organizers} />
      </div>
    </div>
  );
};

export default EventDetail;
