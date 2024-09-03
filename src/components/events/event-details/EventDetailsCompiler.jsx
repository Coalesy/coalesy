"use client";
import React, { useEffect, useState } from "react";
import EventPanel from "./EventPanel";
import EventDetails from "./EventDetails";
import { eventData } from "./data";

const EventDetailsCompiler = () => {
  const [events, setEvents] = useState(eventData);
  const [label, setLabel] = useState("");

  const handleGetLabel = (value) => {
    setLabel(value);
  };

  useEffect(() => {
    const filterEvent = events.filter((e) => {
      const matchesEvent = label === "All" || e.category === label;
      return matchesEvent;
    });
    setEvents(filterEvent)
  }, [eventData]);

  return (
    <div className="flex items-center gap-2">
      <EventPanel handleGetLabel={handleGetLabel} />
      <EventDetails filterEvent={events} />
    </div>
  );
};

export default EventDetailsCompiler;
