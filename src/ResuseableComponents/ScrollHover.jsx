import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../pages/serviceData";

// Function to convert title to URL-friendly slug
const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// Single Scrollable Image Card
const ScrollImageCard = ({ image, title }) => {
  const imageContainerRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollBackInterval = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const startScrolling = () => {
    setIsHovered(true);
    const container = imageContainerRef.current;
    clearInterval(scrollBackInterval.current);
    scrollInterval.current = setInterval(() => {
      if (
        container.scrollTop + container.clientHeight <
        container.scrollHeight
      ) {
        container.scrollTop += 2;
      }
    }, 16);
  };

  const stopScrolling = () => {
    setIsHovered(false);
    const container = imageContainerRef.current;
    clearInterval(scrollInterval.current);
    scrollBackInterval.current = setInterval(() => {
      if (container.scrollTop > 0) {
        container.scrollTop -= 2;
      } else {
        clearInterval(scrollBackInterval.current);
      }
    }, 16);
  };

  return (
    <div className="flex flex-col items-start">
      <div
        className="h-[500px] overflow-hidden rounded-lg border-4 border-black mx-auto my-4 cursor-pointer relative"
        onMouseEnter={startScrolling}
        onMouseLeave={stopScrolling}
      >
        {/* Overlay */}
        {!isHovered && (
          <div>
            <div 
              style={{background: "linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} 
              className="absolute mx-auto top-96 inset-0 h-fit w-fit py-2 px-6 flex flex-col items-center justify-end rounded-lg z-10 ease-in transition-opacity duration-900"
            >
              <span className="text-white text-lg font-semibold mb-2">Hover or Scroll</span>
              <svg
                className="w-8 h-8 text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}

        <div
          ref={imageContainerRef}
          className="w-full h-full overflow-y-scroll scroll-smooth no-scrollbar"
        >
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>
      <h3 className="text-lg text-start font-semibold">{title}</h3>
    </div>
  );
};

// Grid of Multiple Cards
const ScrollImageBoxGrid = () => {
  const { slug } = useParams();
  
  // Find project by matching slug
  const project = allProjects.find(
    (p) => createSlug(p.hero.title) === slug
  );

  // If no project found or no gallery, return null or a message
  if (!project || !project.gallery || project.gallery.length === 0) {
    return null;
  }

  return (
    <div className="mt-28">
      <h2 className="lg:text-4xl text-2xl font-bold text-center">
        Page Previews
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {project.gallery.map((image, index) => (
          <ScrollImageCard 
            key={index} 
            image={image} 
            title={`Page ${index + 1}`}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollImageBoxGrid;