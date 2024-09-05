'use client'
import { useRouter } from 'next/navigation';
import { eventsData } from '../../../components/events/event-details/data';
import React from 'react';

const EventDetail = ({ eventType }) => {
  const router = useRouter();
  const id = router.query;

  const event = eventsData.find((event) => event.id === parseInt(id) && event.eventType === eventType);


  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 p-4">
        {/* Company Info */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <img src={event.icons} alt={event.projectName} className="h-[50px] rounded-lg mb-2" />
          <h3 className="text-2xl font-bold">{event.projectName}</h3>
          {event.verified && <span className="text-blue-500">Verified</span>}
          <p className="mt-2">{event.description}</p>
          <p className="mt-2">Total Joined: {event.totalJoined}</p>
          <p className="mt-2">Type: {event.eventType}</p>
          <p className="mt-2">Date: {event.date}</p>
          <p className="mt-2">Time: {event.time}</p>
        </div>

        {/* Event Program */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-bold mb-2">Event Program</h4>
          {event.programs.map((program, index) => (
            <div key={index} className="mb-2">
              <p>{index + 1}. {program.title}</p>
            </div>
          ))}
        </div>

        {/* Common Questions */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-xl font-bold mb-2">Common Questions</h4>
          {event.questions.map((question, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{question.question}</p>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/3 p-4">
        {/* Join & Share Buttons */}
        <div className="mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Connect</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Share Event</button>
        </div>

        {/* Event Intro */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-bold mb-2">Event Intro</h4>
          <video src={event.videoShowreel} controls className="w-full rounded-lg" />
        </div>

        {/* Tags */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-bold mb-2">Tags</h4>
          <div className="flex flex-wrap">
            {event.tags.map((tag, index) => (
              <span key={index} className="bg-gray-600 text-white px-2 py-1 rounded-lg mr-2 mb-2">{tag}</span>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-bold mb-2">Category</h4>
          <p>{event.category}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-bold mb-2">Language</h4>
          <p>{event.language}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-bold mb-2">Resource Links</h4>
          <div className="flex flex-col">
            {event.resources.map((resource, index) => (
              <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-400">{resource.name}</a>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-xl font-bold mb-2">Event Organizers</h4>
          {event.organizers.map((organizer, index) => (
            <div key={index} className="flex items-center mb-2">
              <img src={organizer.picture} alt={organizer.name} className="h-10 w-10 rounded-full mr-2" />
              <div>
                <p>{organizer.name}</p>
                <p className="text-gray-400">{organizer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
