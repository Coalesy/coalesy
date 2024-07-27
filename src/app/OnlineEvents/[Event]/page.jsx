import React from "react";
import { EventsList } from "../components/EventData";
import { EventIntro } from "./EventIntro";
import { EventSteps } from "./EventSteps";
import { Faqs } from "./Faqs";
import { Social } from "./Socials";
import owner1 from "../Images/owner.svg";
import { EventsFoot } from "./EventsFoot";
import Image from "next/image";
import solbg from "../Images/solbg.svg";
import { EventStep } from "./EventStep";

const SingleEvent = ({ params }) => {
  // const ResourceLinks = [...Socials].unshift();
  const DesiredEvent = EventsList.find(
    (item) => item.EventName === "Bitcoin halving meetup"
  );
  console.log({ ...DesiredEvent });
  if (!DesiredEvent) {
    return <div className="text-white pt-48">Event not found</div>;
  }
  return (
    <div>
      <Image src={solbg} alt="bg" />
      {/* style={{ backgroundImage: `url(${solbg.src})` }}
        className="relative pt-48 z-4   bg-cover bg-center"
      /> */}
      <div className="footer-container p-10">
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-4">
            <EventIntro {...DesiredEvent} />
            <EventStep />
            <Faqs />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <button className="bg-[#FF5B96] text-center rounded-[10px] py-[8px] px-[28px]  text-white">
                Buy Ticket
              </button>
              <button className="bg-[#443448] text-center rounded-[10px] py-[8px] px-[28px]  text-white ">
                Share Event
              </button>
            </div>
            <div>
              <h3>Event Intro</h3>
              <video></video>
            </div>
            <div className="flex flex-col gap-6 mb-3">
              <h3 className="font-bold text-lg">Tags</h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 items-center">
                <p className="p-[8px_10px] rounded-lg bg-[#443448]">
                  BlockChain Developer
                </p>
                <p className="p-[8px_10px] rounded-lg bg-[#443448] text-sm">
                  Solidity
                </p>
                <p className="p-[8px_10px] rounded-lg bg-[#443448] text-sm">
                  BlockChain
                </p>
                <p className="p-[8px_10px] rounded-lg bg-[#443448] text-sm">
                  Layer 1.0
                </p>
              </div>
            </div>
            <div className="grid flex-col gap-6 justify-start mb-3">
              <h3 className="font-bold text-lg">Language</h3>
              <p className="p-[8px_10px] rounded-lg bg-[#443448] justify-start text-sm">
                English
              </p>
            </div>
            <div className="grid flex-col gap-6 justify-start mb-3">
              <h3 className="font-bold text-lg">Resource Links</h3>
              <div className="flex">
                {Social.map((item, index) => (
                  <Image src={item.Icon} key={index} alt={index} />
                ))}
              </div>
            </div>
            <div className="grid flex-col gap-6 justify-start mb-3">
              <h3>Organizers</h3>
              <div className="flex gap-4">
                <Image src={owner1} alt="owner" />
                <div>
                  <p>Name</p>
                  <p>role</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
