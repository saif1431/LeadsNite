import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { ImArrowUpRight } from "react-icons/im";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import arrow from '/arrow.png';


// Define your card data array (can be moved to a separate file)
const servicesData = [  // Changed from Services to servicesData
  {
    id: 1,
    title: "Web Development",
    imageUrl: "/servicesImg/img1.png",
    description: "Website development involves creating and designing web pages. It combines coding skills with creativity to build user-friendly and visually appealing websites",
    route: "/services/web-development"
  },
  {
    id: 2,
    title: "Machine Learning",
    imageUrl: "/servicesImg/img2.png",
    description: "Machine learning is an artificial intelligence technique where systems learn from data and improve over time without being explicitly programmed.",
    route: "/services/machine-learning"
  },
  {
    id: 3,
    title: "App Development",
    imageUrl: "/servicesImg/img3.png",
    description: "App development involves creating software applications for mobile devices or computers, enabling users to perform various tasks or access specific services",
    route: "/services/app-development"
  },
  {
    id: 4,
    title: "Video Editing",
    imageUrl: "/servicesImg/img4.png",
    description: "Video editing involves manipulating and rearranging video footage to create a desired final product, such as movies, commercials, or social media content.",
    route: "/services/video-editing"
  },
  {
    id: 5,
    title: "Graphic Designing",
    imageUrl: "/servicesImg/img5.png",
    description: "Graphic designing is the art of visual communication using images, typography, and layout techniques to convey ideas effectively and creatively.",
    route: "/services/graphic-designing"
  },
  {
    id: 6,
    title: "Digital Marketing",
    imageUrl: "/servicesImg/img6.png",
    description: "Graphic designing is the art of visual communication using images, typography, and layout techniques to convey ideas effectively and creatively.",
    route: "/services/digital-marketing"
  },
];

const ServiceCard = ({ 
  title, 
  description, 
  imageUrl, 
  route, 
  showDescription = false,
  // showBorder = true 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const handleClick = () => {
    navigate(route);
  };

  return (
    <div 
      onClick={handleClick}
      className={`group cursor-pointer mt-6 overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl lg:px-3 lg:py-8 bg-white rounded-3xl
       `}
    >
      <div className="py-10 px-8 ">
        <div className={`flex items-start    justify-between  ${isHomePage ? 'mb-14' : 'mb-6  '}`}>
          <img 
            src={imageUrl} 
            alt={`${title} service`}
            className="w-25 h-25 object-cover"
          />
          <img className='w-10 h-10' src={arrow} alt="arrow" />
        </div>
        {showDescription && (
          <p className="text-gray-600 ">{description}</p>
        )}
        <h3 className="text-xl font-bold ">{title}</h3>
        
      </div>
    </div>
  );
};

const Services = ({ showDescriptions = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`  mt-6  py-18 ${isHomePage ? 'px-4  h-fit lg:px-38 md:px-20 bg-secondary' : 'rounded-3xl lg:px-12 bg-image  px-4'}`}>
      <h2 className={`text-3xl font-bold mb-12 text-center ${isHomePage ? 'lg:text-3xl  ' : 'text-4xl '}`}>
        {isHomePage ? "Find the Perfect Service" : "Here's What Sets Us Apart"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicesData.map(card => (
          <ServiceCard 
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            route={card.route}
            showDescription={showDescriptions}
            showBorder={!isHomePage}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;