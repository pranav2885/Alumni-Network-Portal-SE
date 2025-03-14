import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AlumniDirectory from "./pages/AlumniDirectory";
import About_Us from "./pages/About_Us";
import Events from "./pages/Events";
import Job_Board from "./pages/Job_Board";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alumni-directory" element={<AlumniDirectory />} />
      <Route path="/about-us" element={<About_Us />} />
      <Route path="/events" element={<Events />} />
      <Route path="/jobs" element={<Job_Board />} />
    </Routes>
  );
}
