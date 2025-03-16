import React from "react";
import { Link } from "react-router-dom";
export default function EventCard({ event }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{event.name}</h3>
      <p className="text-gray-600">
        {event.date} • {event.time}
      </p>
      <p className="text-gray-700 font-medium mt-1">{event.venue}</p>
      <p className="text-gray-500 mt-2">{event.description}</p>
      <Link
        to={event.link}
        className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Register Now →
      </Link>
    </div>
  );
}   
