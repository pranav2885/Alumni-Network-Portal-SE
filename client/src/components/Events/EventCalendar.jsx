import { useState } from "react";

const events = [
  { id: 1, name: "Alumni Networking Meetup", date: "2024-08-25", type: "Networking", venue: "SRM University Auditorium" },
  { id: 2, name: "Career Growth Webinar", date: "2024-09-05", type: "Webinar", venue: "Online (Zoom)" },
  { id: 3, name: "Homecoming Gala", date: "2024-10-15", type: "Reunion", venue: "Grand Hyatt Ballroom" },
  { id: 4, name: "Tech Fest 2024", date: "2024-11-10", type: "Fest", venue: "SRM Campus Grounds" },
];

const EventCalendar = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter((event) => event.type === filter);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">📅 Event Calendar</h2>

      {/* Filter Dropdown */}
      <div className="text-center mb-6">
        <label className="mr-2 text-lg font-medium">Filter by:</label>
        <select 
          className="p-2 border rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Events</option>
          <option value="Networking">Networking</option>
          <option value="Webinar">Webinar</option>
          <option value="Reunion">Reunion</option>
          <option value="Fest">Fest</option>
        </select>
      </div>

      {/* Event List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-700">{event.venue}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-500 text-white rounded">{event.type}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No events found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
