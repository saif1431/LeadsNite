import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    route: "/services/web-development"
  },
  {
    id: 2,
    title: "Mobile Apps",
    imageUrl: "/servicesImg/img2.png",
    route: "/services/mobile-apps"
  },
  {
    id: 3,
    title: "UI/UX Design",
    imageUrl: "/servicesImg/img3.png",
    route: "/services/ui-ux-design"
  },
  {
    id: 4,
    title: "UI/UX Design",
    imageUrl: "/servicesImg/img4.png",
    route: "/services/ui-ux-design"
  },
  {
    id: 5,
    title: "UI/UX Design",
    imageUrl: "/servicesImg/img5.png",
    route: "/services/ui-ux-design"
  },
  {
    id: 6,
    title: "UI/UX Design",
    imageUrl: "/servicesImg/img6.png",
    route: "/services/ui-ux-design"
  },
];

const ServicesCard = ({ title, description, imageUrl, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer rounded-4xl overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl p-6  bg-white"
    >
      
      <div className="p-8 space-y-6">
           <div className='flex items-center justify-between mb-4'>
                 <img 
          src={imageUrl} 
          alt={`${title} service`}  // Improved alt text
          className="w-24 h-24 object-cover "
        />
        {/* <ImArrowUpRight className='text-3xl text-[#2667FF]' /> */}
        <img className='w-10 h-10' src={arrow} alt="" />

           </div>
        <h3 className="text-xl  font-bold text-gray-800 mt-12">{title}</h3>
      </div>
    </div>
  );
};

const ServiceCard = () => {
  return (
    <div className="container bg-secondary mt-6 mx-auto lg:px-24 px-6 py-12">
      <h2 className="lg:text-4xl text-2xl font-bold text-center mb-12">Find the Perfect Service
</h2>
      
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map(card => (  // Changed from cardData to servicesData
          <ServiceCard 
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            route={card.route}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;  // Changed from Services to ServicesGrid 
