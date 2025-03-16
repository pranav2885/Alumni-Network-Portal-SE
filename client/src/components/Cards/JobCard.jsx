import React from "react";

export default function JobCard({ job }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <div className="flex items-center mb-4">
        <img
          src={job.logo}
          alt={job.company}
          className="w-12 h-12 rounded-lg mr-3"
        />
        <h3 className="text-xl font-semibold">{job.title}</h3>
      </div>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-gray-700 font-medium mt-1">{job.salary}</p>
      <p className="text-gray-600">📅 Deadline: {job.deadline}</p>
      <p className="mt-2 text-gray-500">
        ✅ {job.experience} | 🔹 {job.skills.join(", ")}
      </p>
      <a
        href={job.applyLink}
        className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Apply Now →
      </a>
    </div>
  );
}
