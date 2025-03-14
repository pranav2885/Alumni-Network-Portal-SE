import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import avatar from "../../assets/avatar.png";
const testimonials = [
  {
    name: "John Doe",
    message: "This alumni network helped me land my dream job!",
    img: avatar,
  },
  {
    name: "Jane Smith",
    message: "Amazing mentorship opportunities through this portal.",
    img: avatar,
  },
  {
    name: "Robert Brown",
    message:
      "Attending the alumni meetups helped me build lifelong connections.",
    img: avatar,
  },
];

const images = [
  "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_480809979e920a7d60dc93e8dd166c6f.png",
  "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_be99d4a197b5e1bf0b3329beb8579cb5.png",
  "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_71788d24f2b98738428ad9a650b1abee.png",
  "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_9310ff27ca1bd3413200003f13f1310f.png",
];

const testimonialTemplate = (testimonial) => (
  <div className="p-6 text-center bg-white shadow-lg rounded-lg">
    <img
      src={testimonial.img}
      alt={testimonial.name}
      className="w-24 h-24 rounded-full mx-auto mb-4"
    />
    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
    <p className="text-sm text-gray-500 italic mt-2">"{testimonial.message}"</p>
  </div>
);

const Testimonials = () => {
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
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Alumni Testimonials
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Hear from our alumni on how this platform has helped them.
      </p>
      <Carousel
        value={testimonials}
        itemTemplate={testimonialTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        autoplayInterval={3000}
        circular
      />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-12 mb-6">
        Photo Gallery
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Memories from past alumni meetups and events.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <Card key={index} className="overflow-hidden shadow-lg">
            <img
              src={src}
              alt={`Event ${index + 1}`}
              className="w-full h-40 object-cover"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
