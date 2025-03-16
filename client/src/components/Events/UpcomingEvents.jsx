import EventCard from "../Cards/EventCard";
// 📅 UpcomingEvents Component
const events = [
  {
    id: 1,
    name: "Alumni Networking Meetup",
    date: "August 25, 2024",
    time: "6:00 PM - 9:00 PM",
    venue: "SRM University Auditorium",
    description: "An evening to reconnect, share experiences, and expand your network with fellow alumni.",
    link: "/register",
  },
  {
    id: 2,
    name: "Career Growth Webinar",
    date: "September 5, 2024",
    time: "4:00 PM - 5:30 PM",
    venue: "Online (Zoom)",
    description: "Expert panelists discuss career strategies and industry trends. Q&A session included!",
    link: "/register",
  },
  {
    id: 3,
    name: "Homecoming Gala 2024",
    date: "October 15, 2024",
    time: "7:00 PM - 11:00 PM",
    venue: "Grand Hyatt Ballroom",
    description: "A grand celebration with music, awards, and memories. Dress up and enjoy the night!",
    link: "/register",
  },
  
];

const UpcomingEvents = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">🎉 Upcoming Events</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
