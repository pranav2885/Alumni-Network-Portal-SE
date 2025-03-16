import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div 
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?event,people')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          🎉 Stay Connected with Alumni Events!
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          Experience reunions, industry insights, and career networking. Build meaningful connections and cherish old memories.
        </p>
        <Link 
          to="/events" 
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
        >
          Join Now →
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
