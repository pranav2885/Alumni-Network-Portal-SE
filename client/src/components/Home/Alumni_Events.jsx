import { useState, useEffect } from "react";
import { Card } from "primereact/card";

const events = [
  {
    title: "Annual Alumni Meetup 2025",
    date: "2025-06-30T18:00:00",
    location: "College Auditorium",
    description:
      "Reconnect with batchmates and faculty at our annual alumni gathering.",
  },
  {
    title: "Webinar: Career Growth in Tech",
    date: "2025-07-10T14:00:00",
    location: "Online - Zoom",
    description:
      "Learn from top industry experts on how to grow your career in tech.",
  },
];

const CountdownTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft ? (
    <div className="text-center mt-4 text-lg font-semibold text-blue-600">
      {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
      {timeLeft.seconds}s
    </div>
  ) : (
    <div className="text-red-600 text-center mt-4 font-semibold">
      Event Started!
    </div>
  );
};

const Alumni_Events = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Upcoming Events
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Stay updated with our latest alumni reunions, webinars, and networking
        events.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="shadow-lg p-6 bg-white text-left">
            <h3 className="text-xl font-semibold text-gray-800">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{event.location}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
            <CountdownTimer eventDate={event.date} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Alumni_Events;
