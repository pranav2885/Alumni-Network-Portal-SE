import React from "react";
import HeroSection from "../components/Home/Hero_Section";
import Alumni_Network from "../components/Home/Alumni_Network";
import Featured_Alumni from "../components/Home/Featured_Alumni";
import Alumni_Events from "../components/Home/Alumni_Events";
import Testimonials from "../components/Home/Testimonials";
import CallToAction from "../components/Home/CallToAction";
import NewsSection from "../components/Home/NewsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Alumni_Network />
      <Featured_Alumni />
      <Alumni_Events />
      <Testimonials />
      {/* <CallToAction/> */}
      <NewsSection />
    </div>
  );
}
