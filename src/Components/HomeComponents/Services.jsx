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
    title: "AI Agents",
    imageUrl: "/servicesImg/img2.png",
    description: "In the world of AI agents, there are many hurdles to overcome. We often face problems with integration compatibility, ensuring agent reliability.",
    route: "/services/ai-agents"
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
    title: "UI UX Design",
    imageUrl: "/servicesImg/3.png",
    description: "Our UI/UX design service focuses on creating intuitive, engaging, and user-friendly digital experiences. We blend creativity with functionality to design interfaces.",
    route: "/services/ui&ux-design"
  },
  {
    id: 5,
    title: "SaaS Development",
    imageUrl: "/servicesImg/1.png",
    description: "Our SaaS solutions help businesses move faster, reduce costs, and scale easily by providing cloud-based applications that are accessible anytime, anywhere. ",
    route: "/services/SaaS-development"
  },
  {
    id: 6,
    title: "MVP Development",
    imageUrl: "/servicesImg/2.png",
    description: "Our MVP (Minimum Viable Product) development service helps startups and businesses quickly transform ideas into functional products with essential features.",
    route: "/services/mvp-development"
  },
];

const ServiceCard = ({ 
  title, 
  description, 
  imageUrl, 
  route, 
  showDescription = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const handleClick = () => {
    navigate(route);
    // ensure new page is shown from top (works reliably after navigation)
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      // extra safety for some browsers
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  };

  return (
    <div 
      onClick={handleClick}
      className={`group cursor-pointer mt-6 overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl  lg:py-8 bg-white rounded-3xl
       `}
    >
      <div className="py-10 px-8  ">
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
        <h3 className="text-xl mt-3 font-bold ">{title}</h3>
        
      </div>
    </div>
  );
};

const Services = ({ showDescriptions = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`  mt-6  py-26 ${isHomePage ? '   h-fit   bg-secondary' : 'rounded-3xl lg:px-12 bg-image  px-4'}`}>
      <h2 className={`text-3xl font-bold mb-12 text-center ${isHomePage ? 'lg:text-3xl  ' : 'text-4xl '}`}>
        {isHomePage ? "Find the Perfect Service" : "Here's What Sets Us Apart"}
      </h2>
      
      <div className="grid grid-cols-1 max-w-7xl mx-auto px-4 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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