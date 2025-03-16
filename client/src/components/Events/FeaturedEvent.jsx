const featuredEvent = {
  name: "🔥 Alumni Sports Fest 2025",
  date: "March 10, 2025",
  venue: "SRM University Sports Complex",
  description: "A fun-filled sports fest for all alumni. Compete, network, and relive your college days!",
  highlights: ["🏀 Basketball Tournament", "⚽ Football Matches", "🏅 Relay Races", "🎤 Live DJ Night"],
  image: "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_b99322940817cfbfcf474cbffc989f94.png",
  link: "/register",
};

const FeaturedEvent = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">⭐ Featured Event of the Month</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img src={featuredEvent.image} alt="Featured Event" className="w-64 h-48 object-cover rounded-md" />
        
        <div>
          <h3 className="text-2xl font-semibold">{featuredEvent.name}</h3>
          <p className="text-gray-700 mt-2">📅 {featuredEvent.date} | 📍 {featuredEvent.venue}</p>
          <p className="text-gray-600 mt-2">{featuredEvent.description}</p>

          {/* Event Highlights */}
          <ul className="mt-3 text-gray-600">
            {featuredEvent.highlights.map((highlight, index) => (
              <li key={index}>✅ {highlight}</li>
            ))}
          </ul>

          <a href={featuredEvent.link} className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Register Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
