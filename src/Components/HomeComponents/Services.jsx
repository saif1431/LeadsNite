import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { ImArrowUpRight } from "react-icons/im";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ServicesCard from './ServicesCard';


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
         
        </div>
        {showDescription && (
          <p className="text-gray-600 ">{description}</p>
        )}
        <h3 className="text-xl mt-3 font-bold ">{title}</h3>
        
      </div>
    </div>
  );
};

const Services = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div >
      <h2 className={`text-3xl font-satochi font-bold mb-12 text-center ${isHomePage ? 'lg:text-3xl  ' : 'text-4xl '}`}>
        {isHomePage ? "Find the Perfect Service" : "Here's What Sets Us Apart"}
      </h2>
      <div >
       <ServicesCard/>
      </div>
    </div>
  );
};

export default Services;