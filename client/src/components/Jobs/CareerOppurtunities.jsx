import React from "react";
import EventCard from "../Cards/EventCard";
import InternshipCard from "../Cards/InternshipCard";

// Dummy Data for Events
const events = [
  {
    id: 1,
    name: "LinkedIn Growth & Job Search",
    date: "Aug 15, 2025",
    time: "5:00 PM IST",
    venue: "Online Webinar",
    description: "Learn how to optimize your LinkedIn for job search and networking.",
    link: "#",
  },
  {
    id: 2,
    name: "Tech Hiring Fair 2025",
    date: "Sep 10, 2025",
    time: "10:00 AM IST",
    venue: "Virtual Job Fair",
    description: "Connect with recruiters from Google, Microsoft, and more!",
    link: "#",
  },
];

// Dummy Data for Internships & Freelance
const internships = [
  {
    id: 1,
    name: "Web Dev Internship",
    date: "6 Months",
    time: "₹25K Stipend",
    venue: "Microsoft",
    description: "Gain experience working with real-world projects.",
    link: "#",
  },
  {
    id: 2,
    name: "Graphic Designer - Freelance",
    date: "3 Months",
    time: "₹30K Stipend",
    venue: "Adobe",
    description: "Freelance opportunity to work on creative projects.",
    link: "#",
  },
];

const CareerOpportunities = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">🎟️ Networking & Career Events</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-12 mb-6">🎓 Internships & Freelance Opportunities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
    </div>
  );
};

export default CareerOpportunities;
