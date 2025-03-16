import React from "react";
import HeroSection from "../components/Events/HeroSection";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import EventCalendar from "../components/Events/EventCalendar";
import GetInvolved from "../components/Events/GetInvolved";
import FAQs from "../components/Events/FAQs";
import Contact from "../components/Events/Contact";
import PastEvents from "../components/Events/PastEvents";
import FeaturedEvent from "../components/Events/FeaturedEvent";

export default function Events() {
  return (
    <div>
      <HeroSection />
      <UpcomingEvents />
      <PastEvents />
      <FeaturedEvent />
      <EventCalendar />
      <GetInvolved />
      <FAQs />
      <Contact />
    </div>
  );
}
