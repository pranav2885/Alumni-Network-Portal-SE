import React from "react";
import { Link } from "react-router-dom";
export default function InternshipCard({ internship }) {
  return (
     <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{internship.name}</h3>
      <p className="text-gray-600">{internship.venue}</p> {/* Company Name */}
      <p className="text-gray-700 font-medium mt-1">
        🎯 {internship.date} | 💰 {internship.time}
      </p>
      <p className="text-gray-500 mt-2">{internship.description}</p>
      <Link
        to={internship.link}
        className="mt-4 inline-block bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition"
      >
        Apply Now →
      </Link>
    </div>
  );
}
