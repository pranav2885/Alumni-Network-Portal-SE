import { Button } from "primereact/button";
import { FaUsers, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://srmap.edu.in/wp-content/uploads/2024/09/DSC00354-scaled.jpg')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
          Stay Connected, Stay Inspired
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fadeInUp max-w-2xl mx-auto">
          Join our alumni network to reconnect with peers, share career
          opportunities, and participate in exclusive events.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 animate-fadeInUp">
          <Button
            label="Join Now"
            className="border border-white px-6 py-2 rounded-lg bg-amber-50 text-black font-semibold transition-all"
          />
          {/* <Button
            label="Login"
            className="border border-white px-6 py-2 rounded-lg bg-transparent hover:bg-gray-800 text-white font-semibold transition-all"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
