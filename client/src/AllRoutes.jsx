import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import AlumniDirectory from "./pages/AlumniDirectory";
import About_Us from "./pages/About_Us";
import Events from "./pages/Events";
import Job_Board from "./pages/Job_Board";
import Profile from "./pages/Profile";
import Threads from "./pages/Threads";
import CreateThread from "./pages/CreateThread";
import ThreadDetail from "./pages/ThreadDetail";
import { Link } from "react-router-dom";

export default function AllRoutes() {
  const user = useSelector((state) => state.auth.userData);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alumni-directory" element={<AlumniDirectory />} />
      <Route path="/about-us" element={<About_Us />} />
      <Route path="/events" element={<Events />} />
      <Route path="/threads" element={<Threads />} />
      <Route path="/threads/create" element={<CreateThread />} />
      <Route path="/threads/:id" element={<ThreadDetail />} />
      <Route path="/jobs" element={<Job_Board />} />
      <Route path="/threads" element={<Threads />} />
      {user?.email && <Route path="/profile" element={<Profile />} />}
    </Routes>
  );
}
