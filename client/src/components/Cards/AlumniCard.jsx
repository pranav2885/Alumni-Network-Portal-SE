import { Link } from "react-router-dom";
import user from '../../assets/user.png'
const AlumniCard = ({ alumni }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        src={user}
        alt={alumni.name}
        className="w-20 h-20 object-cover rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold text-center mt-2">{alumni.name}</h3>
      <p className="text-gray-500 text-center">
        {alumni.company} - {alumni.position}
      </p>
      <p className="text-gray-400 text-sm text-center">
        {alumni.graduationYear} Batch
      </p>

      <Link
        to={`/alumni/${alumni.id}`}
        className="block mt-3 text-blue-600 text-center hover:underline"
      >
        View Profile →
      </Link>
    </div>
  );
};

export default AlumniCard;
