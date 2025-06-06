import { Link } from 'react-router-dom';

import hero1 from '../assets/stockphoto-1.jpeg';
import hero2 from '../assets/stockphoto-2.jpeg';
import hero3 from '../assets/stockphoto-3.jpeg';

const carouselImages = [hero1, hero2, hero3];

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center px-6 py-16 bg-green-100">
      
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary max-w-2xl mx-auto lg:mx-0">
          Healthcare Patient Management System Using MongoDB
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Healthcare providers must manage a wide range of patient data, including personal information,
          medical history, test results, prescriptions, doctor notes, and appointment logs. This project
          utilizes MongoDB, a document-oriented NoSQL database ideal for handling complex and variable medical records.
        </p>

        <Link to="/register">
          <button className="mt-8 btn btn-primary">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Carousel */}
      <div className="hidden lg:flex h-[28rem] carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image}
              className="rounded-box h-full w-80 object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hero;
