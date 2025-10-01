import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define your card data array (can be moved to a separate file)
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    imageUrl: "/servicesImg/img1.png",
    description: "Website development involves creating and designing web pages. It combines coding skills with creativity to build user-friendly websites",
    technologies: ["/New/New/Website/1.png", "/New/New/Website/2.png", "/New/New/Website/3.png", "/New/New/Website/4.png", "/New/New/Website/5.png", "/New/New/Website/8.png",  "/New/New/Website/7.png", "/New/New/Website/6.png", "/New/New/Website/9.png", "/New/New/Website/10.png", "/New/New/Website/11.png",],
    route: "/services/web-development"
  },
  {
    id: 2,
    title: "AI Agents",
    imageUrl: "/servicesImg/img2.png",
    description: "In the world of AI agents, there are many hurdles to overcome. We often face problems with integration compatibility and reliability.",
    technologies: ["/New/New/AI agents/ai agents (1).png", "/New/New/AI agents/ai agents (2).png", "/New/New/AI agents/ai agents (3).png", "/New/New/AI agents/ai agents (4).png", "/New/New/AI agents/ai agents (5).png", "/New/New/AI agents/ai agents (6).png", "/New/New/AI agents/ai agents (7).png", "/New/New/AI agents/ai agents (8).png", "/New/New/AI agents/ai agents (9).png", "/New/New/AI agents/ai agents (10).png", "/New/New/AI agents/ai agents (11).png",],

    route: "/services/ai-agents"
  },
  {
    id: 3,
    title: "App Development",
    imageUrl: "/servicesImg/img3.png",
    description: "App development involves creating software applications for mobile devices or computers, enabling users to perform various tasks.",
    technologies: ["/New/New/Mobile Application/1.png", "/New/New/Mobile Application/2.png", "/New/New/Mobile Application/3.png", "/New/New/Mobile Application/4.png", "/New/New/Mobile Application/5.png", "/New/New/Mobile Application/6.png", "/New/New/Mobile Application/7.png", "/New/New/Mobile Application/8.png", "/New/New/Mobile Application/9.png", "/New/New/Mobile Application/10.png", "/New/New/Mobile Application/11.png",],
    route: "/services/app-development"
  },
  {
    id: 4,
    title: "UI UX Design",
    imageUrl: "/servicesImg/3.png",
    description: "Our UI/UX design service focuses on creating intuitive, engaging, and user-friendly digital experiences with creativity.",
    technologies: ["/New/New/UI UX/ui ux (1).png", "/New/New/UI UX/ui ux (2).png", "/New/New/UI UX/ui ux (3).png", "/New/New/UI UX/ui ux (4).png", "/New/New/UI UX/ui ux (5).png", "/New/New/UI UX/ui ux (6).png", "/New/New/UI UX/ui ux (7).png", ],
    route: "/services/ui&ux-design"
  },
  {
    id: 5,
    title: "SaaS Development",
    imageUrl: "/servicesImg/1.png",
    description: "Our SaaS solutions help businesses move faster, reduce costs, and scale easily by providing cloud-based applications.",
    technologies: ["/New/New/Mobile Application/1.png", "/New/New/Mobile Application/2.png", "/New/New/Mobile Application/3.png", "/New/New/Mobile Application/4.png", "/New/New/Mobile Application/5.png", "/New/New/Mobile Application/6.png", "/New/New/Mobile Application/7.png", "/New/New/Mobile Application/8.png", "/New/New/Mobile Application/9.png", "/New/New/Mobile Application/10.png", "/New/New/Mobile Application/11.png",],
    route: "/services/SaaS-development"
  },
  {
    id: 6,
    title: "MVP Development",
    imageUrl: "/servicesImg/2.png",
    description: "Our MVP development service helps startups and businesses quickly transform ideas into functional products with essential features.",
    technologies: ["/New/New/MVP/mvp (1).svg", "/New/New/MVP/mvp (3).svg", "/New/New/MVP/mvp (4).svg", "/New/New/MVP/mvp (5).svg", "/New/New/MVP/mvp (6).svg", "/New/New/MVP/mvp (7).svg", "/New/New/MVP/mvp (8).svg", "/New/New/MVP/mvp (9).svg", "/New/New/MVP/mvp (10).svg", "/New/New/MVP/mvp (11).svg", "/New/New/MVP/mvp (12).svg",],
    route: "/services/mvp-development"
  },
];

const ServiceCard = ({ 
  title, 
  description, 
  imageUrl, 
  technologies,
  route, 
}) => {
  const navigate = useNavigate();

  
  const handleClick = () => {
    navigate(route);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  };

  return (
    <div 
      onClick={handleClick}
      className="group mt-6 cursor-pointer overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl bg-white rounded-3xl"
    >
      <div className="py-8 px-8">
        {/* Image at top - small */}
        <div className="flex items-center gap-4 justify-start mb-6">
          <img 
            src={imageUrl} 
            alt={`${title} service`}
            className="w-12 h-12 object-contain"
          />
           <h3 className="text-2xl font-bold text-start mb-3">{title}</h3>
        </div>
        
        {/* Title */}
       
        
        {/* Description - 2 lines */}
        <p className="text-gray-600 text-sm text-start mb-6 line-clamp-3">
          {description}
        </p>
        
        {/* Technologies images */}
        <div className="grid lg:grid-cols-6  grid-cols-4  gap-3 mb-4">
          {technologies && technologies.map((tech, index) => (
            <img 
              key={index}
              src={tech} 
              alt="technology"
              className="w-8 h-8 object-contain"
            />
          ))}
        </div>
        
        {/* Read More button */}
        <button 
          onClick={handleClick}
          className=" text-[#01ACE4]   mt-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const ServicesCard = ({ showDescriptions = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`mt-6 py-26 ${isHomePage ? 'h-fit bg-secondary' : 'rounded-3xl lg:px-12 bg-image px-4'}`}>
      <h2 style={{fontWeight:'800'}} className={`title2 headingFont2 ${isHomePage ? 'lg:text-3xl' : 'text-4xl'}`}>
        {isHomePage ? "Find the Perfect Service" : "Here's What Sets Us Apart"}
      </h2>
      
      <div className="grid grid-cols-1 max-w-7xl mx-auto px-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map(card => (
          <ServiceCard 
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            technologies={card.technologies}
            route={card.route}
            showDescription={showDescriptions}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;