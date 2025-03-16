const pastEvents = [
  {
    id: 1,
    name: "🎤 Tech Talk with Alumni Leaders",
    date: "December 2024",
    description: "An inspiring evening with industry leaders from Google, Microsoft, and Tesla.",
    takeaways: ["✅ 200+ Attendees", "✅ 5 Panelists", "✅ Networking Sessions"],
    testimonials: [
      { name: "Rahul M.", text: "Absolutely amazing! The insights were invaluable." },
      { name: "Sneha K.", text: "Loved the networking sessions! Can't wait for the next one." },
    ],
    images: [
      "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_f6f0e2273f9aaeb524cddd9e4bb300e0.png",
      "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_908ce4fd5d73bf222cd868724dc3148b.png",
    //   "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_82cdad5328c0f86691f48848a9196da9.png",
    ],
  },
  {
    id: 2,
    name: "🏆 Annual Alumni Awards 2024",
    date: "September 2024",
    description: "Recognizing outstanding alumni contributions and achievements.",
    takeaways: ["🏅 10 Award Categories", "🎉 500+ Attendees", "🍽️ Gala Dinner"],
    testimonials: [
      { name: "Amit P.", text: "Truly inspiring to see alumni making a difference." },
      { name: "Priya D.", text: "Such a well-organized and memorable evening!" },
    ],
    images: [
      "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_a4153387a5c0a90dbbb5df5f35e92c94.png",
      "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_6452f58fcc1a17a8ec6767a13a31d1de.png",
    //   "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_c653a0fb117bc534fc17e8469e7ba4bc.jpeg",
    ],
  },
];

const PastEvents = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">📸 Past Events Highlights</h2>

      {pastEvents.map((event) => (
        <div key={event.id} className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold">{event.name} ({event.date})</h3>
          <p className="text-gray-700 mt-2">{event.description}</p>
          
          {/* Takeaways */}
          <ul className="mt-2 text-gray-600">
            {event.takeaways.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Image Gallery */}
          <div className="flex gap-4 mt-4">
            {event.images.map((img, index) => (
              <img key={index} src={img} alt="Event" className="w-32 h-24 object-cover rounded-md" />
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-4">
            <h4 className="font-semibold">💬 Testimonials:</h4>
            {event.testimonials.map((testimonial, index) => (
              <p key={index} className="text-gray-500 italic mt-1">
                "{testimonial.text}" - <span className="font-semibold">{testimonial.name}</span>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastEvents;
