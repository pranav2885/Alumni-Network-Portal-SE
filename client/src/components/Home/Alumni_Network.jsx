import { Card } from "primereact/card";
import { FaUserFriends, FaBriefcase, FaCalendarCheck } from "react-icons/fa";

const Alumni_Network = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        About the Alumni Network
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Our alumni portal connects graduates, fosters mentorship, and creates
        lifelong relationships.
      </p>

      {/* Benefits */}
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        <Card className="shadow-lg p-6 flex flex-col items-center bg-white">
          <FaUserFriends className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold">Networking Opportunities</h3>
          <p className="text-gray-600 text-sm">
            Connect with alumni from diverse fields.
          </p>
        </Card>

        <Card className="shadow-lg p-6 flex flex-col items-center bg-white">
          <FaBriefcase className="text-5xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold">Job Referrals & Mentorship</h3>
          <p className="text-gray-600 text-sm">
            Find job openings and career guidance.
          </p>
        </Card>

        <Card className="shadow-lg p-6 flex flex-col items-center bg-white">
          <FaCalendarCheck className="text-5xl text-red-600 mb-4" />
          <h3 className="text-xl font-semibold">Exclusive Alumni Events</h3>
          <p className="text-gray-600 text-sm">
            Attend meetups, reunions, and webinars.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Alumni_Network;
