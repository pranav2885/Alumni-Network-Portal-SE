import { Card } from "primereact/card";
import avatar from "../../assets/avatar.png";
const news = [
  {
    title: "New Research Center Inaugurated",
    date: "June 15, 2025",
    description:
      "Our college recently inaugurated a new AI research center to promote innovation.",
  },
  {
    title: "Alumni Meetup in Dubai",
    date: "July 1, 2025",
    description:
      "Join us for an exclusive alumni networking event in Dubai this summer.",
  },
];

const alumniSpotlights = [
  {
    name: "John Doe",
    story:
      "John Doe, a 2010 graduate, is now the CEO of a leading tech company.",
    img: avatar,
  },
  {
    name: "Jane Smith",
    story:
      "Jane Smith, an AI researcher, has been recognized for her contributions to deep learning.",
    img: avatar,
  },
];

const NewsSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Latest News & Announcements
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {news.map((item, index) => (
          <Card key={index} className="shadow-lg p-6 bg-white text-left">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-12 mb-6">
        Alumni Spotlights
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {alumniSpotlights.map((alumni, index) => (
          <Card key={index} className="p-6 bg-white text-center shadow-lg">
            <img
              src={alumni.img}
              alt={alumni.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{alumni.name}</h3>
            <p className="text-gray-600">{alumni.story}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
