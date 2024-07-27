import Navbar from "@/components/navbar/Navbar";
import { EventsFoot } from "./[Event]/EventsFoot";

export default function OnlineEventsLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <EventsFoot />
    </div>
  );
}
