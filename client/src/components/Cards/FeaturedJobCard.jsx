import React from "react";

export default function FeaturedJobCard({ job }) {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">
        {job.title} at {job.company}
      </h3>
      <p className="text-gray-700 font-medium">{job.salary}</p>
      <p className="text-gray-600">{job.perks.join(" | ")}</p>
      <a
        href={job.applyLink}
        className="mt-2 inline-block text-blue-600 font-semibold hover:underline"
      >
        Apply Now →
      </a>
    </div>
  );
}
