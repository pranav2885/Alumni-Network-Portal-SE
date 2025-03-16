import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">🤝 Get Involved</h2>
      <p className="text-lg text-gray-700 mb-8">Want to contribute to alumni events? Join us as a volunteer, organizer, or sponsor an event!</p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Become an Organizer */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Become an Event Organizer</h3>
          <p className="text-gray-600 mb-4">Help plan and manage alumni gatherings and reunions.</p>
          <Link to="/organize" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Apply Now →
          </Link>
        </div>

        {/* Sponsor an Event */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Sponsor an Event</h3>
          <p className="text-gray-600 mb-4">Support our events by becoming a valued sponsor.</p>
          <Link to="/sponsor" className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
            Become a Sponsor →
          </Link>
        </div>

        {/* Join Event Committee */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Join the Event Committee</h3>
          <p className="text-gray-600 mb-4">Work behind the scenes to make events successful.</p>
          <Link to="/committee" className="inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Join Us →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
