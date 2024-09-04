import Image from "next/image";
import React from "react";

const EventDetails = ({ filterEvent }) => {
  return (
    <div>
      <div>
        {filterEvent.map((event, i) => (
          <div key={i}>
            <Image src={""} alt="logo" height={100} width={100} priority />
            <div>
              <span>{event.title}</span>
              <span>{event.description}</span>
              <span>{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
