import { Carousel } from "primereact/carousel";
import avatar from "../../assets/avatar.png";
const alumniData = [
  {
    name: "Pushyami",
    img: avatar,
    position: "CEO at XYZ Corp",
  },
  {
    name: "Abhigna",
    img: avatar,
    position: "Software Engineer at Google",
  },
  {
    name: "Sathvik",
    img: avatar,
    position: "Data Scientist at Amazon",
  },
  {
    name: "Mohan Satya Venkat",
    img: avatar,
    position: "CEO at XYZ Corp",
  },
  {
    name: "Pranav",
    img: avatar,
    position: "Software Engineer at Google",
  },
  {
    name: "Bhavya Sree",
    img: avatar,
    position: "Data Scientist at Amazon",
  },
];

const alumniTemplate = (alumni) => (
  <div className="p-4 text-center border mr-3 ml-3 bg-white shadow-lg rounded-lg">
    <img
      src={alumni.img}
      alt={alumni.name}
      className="w-32 h-32 rounded-full mx-auto mb-4 border-2 p-1"
    />
    <h3 className="text-lg font-semibold">{alumni.name}</h3>
    <p className="text-sm text-gray-500 w-full truncate whitespace-nowrap overflow-hidden">
      {alumni.position}
    </p>
  </div>
);

const Featured_Alumni = () => {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Featured Alumni
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Meet some of our distinguished alumni making an impact worldwide.
      </p>

      {/* Alumni Carousel */}
      <Carousel
        value={alumniData}
        itemTemplate={alumniTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        autoplayInterval={3000}
        circular
      />
    </div>
  );
};

export default Featured_Alumni;
