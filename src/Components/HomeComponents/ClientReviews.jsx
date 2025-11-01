import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientReviews = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const logos = [
     "/reviewImg/fiver/Web Dev/1.webp",
      "/reviewImg/fiver/Web Dev/2.webp",
      "/reviewImg/fiver/Web Dev/3.webp",
      "/reviewImg/fiver/Web Dev/4.webp",
      "/reviewImg/fiver/Web Dev/5.webp",
      "/reviewImg/fiver/Web Dev/6.webp",
      "/reviewImg/fiver/Web Dev/7.webp",
      "/reviewImg/fiver/Web Dev/8.webp",
      "/reviewImg/fiver/Web Dev/9.webp",
      "/reviewImg/fiver/Web Dev/10.webp",
      "/reviewImg/fiver/Web Dev/11.webp",
      "/reviewImg/fiver/Web Dev/12.webp",
      "/reviewImg/fiver/Web Dev/13.webp",
      "/reviewImg/fiver/Web Dev/14.webp",
      "/reviewImg/fiver/Web Dev/15.webp",
      "/reviewImg/fiver/Web Dev/16.webp",
      "/reviewImg/fiver/Web Dev/17.webp",
      "/reviewImg/fiver/Web Dev/18.webp",
      "/reviewImg/fiver/Web Dev/19.webp",
      "/reviewImg/fiver/Web Dev/20.webp",
      "/reviewImg/fiver/Web Dev/21.webp",
      "/reviewImg/fiver/Web Dev/22.webp",
      "/reviewImg/fiver/Web Dev/23.webp",
      "/reviewImg/fiver/Web Dev/24.webp",
      "/reviewImg/fiver/Web Dev/25.webp",
      "/reviewImg/fiver/Web Dev/26.webp",
      "/reviewImg/fiver/Web Dev/27.webp",
      "/reviewImg/fiver/Web Dev/28.webp",
      "/reviewImg/fiver/Web Dev/29.webp",
      "/reviewImg/fiver/App Dev/1.webp",
      "/reviewImg/fiver/App Dev/2.webp",
      "/reviewImg/fiver/App Dev/3.webp",
      "/reviewImg/fiver/App Dev/4.webp",
      "/reviewImg/fiver/App Dev/5.webp",
      "/reviewImg/fiver/App Dev/6.webp",
      "/reviewImg/fiver/App Dev/7.webp",
      "/reviewImg/fiver/App Dev/8.webp",
      "/reviewImg/fiver/App Dev/9.webp",
      "/reviewImg/fiver/App Dev/10.webp",
      "/reviewImg/fiver/App Dev/11.webp",
      "/reviewImg/fiver/App Dev/12.webp",
      "/reviewImg/fiver/App Dev/13.webp",
      "/reviewImg/fiver/App Dev/14.webp",
      "/reviewImg/fiver/App Dev/15.webp",
      "/reviewImg/fiver/App Dev/16.webp",
      "/reviewImg/fiver/App Dev/17.webp",
      "/reviewImg/fiver/App Dev/18.webp",
      "/reviewImg/fiver/App Dev/20.webp",
      "/reviewImg/fiver/App Dev/21.webp",
      "/reviewImg/fiver/App Dev/22.webp",
      "/reviewImg/fiver/App Dev/23.webp",
      "/reviewImg/fiver/App Dev/24.webp",
      "/reviewImg/fiver/App Dev/25.webp",
      "/reviewImg/fiver/App Dev/26.webp",
      "/reviewImg/fiver/App Dev/27.webp",
      "/reviewImg/fiver/App Dev/28.webp",
      "/reviewImg/fiver/App Dev/29.webp",
      "/reviewImg/fiver/AI Agents/1.webp",
      "/reviewImg/fiver/AI Agents/2.webp",
      "/reviewImg/fiver/AI Agents/3.webp",
      "/reviewImg/fiver/AI Agents/4.webp",
      "/reviewImg/fiver/AI Agents/5.webp",
      "/reviewImg/fiver/AI Agents/6.webp",
      "/reviewImg/fiver/AI Agents/7.webp",
      "/reviewImg/fiver/AI Agents/8.webp",
      "/reviewImg/fiver/AI Agents/9.webp",
      "/reviewImg/fiver/AI Agents/10.webp",
      "/reviewImg/fiver/AI Agents/11.webp",
      "/reviewImg/fiver/AI Agents/12.webp",
      "/reviewImg/fiver/AI Agents/13.webp",
      "/reviewImg/fiver/AI Agents/14.webp",
      "/reviewImg/fiver/AI Agents/15.webp",
      "/reviewImg/fiver/AI Agents/16.webp",
      "/reviewImg/fiver/AI Agents/17.webp",
      "/reviewImg/fiver/AI Agents/18.webp",
      "/reviewImg/fiver/AI Agents/19.webp",
      "/reviewImg/fiver/AI Agents/20.webp"
  ];

  // For mobile: single column with all images
  const allImagesExtended = [...logos, ...logos, ...logos];
  
  // Divide images into 3 columns for desktop
  const column1 = [];
  const column2 = [];
  const column3 = [];
  
  logos.forEach((logo, index) => {
    if (index % 3 === 0) column1.push(logo);
    else if (index % 3 === 1) column2.push(logo);
    else column3.push(logo);
  });

  // Triple each column for seamless loop
  const extendedColumn1 = [...column1, ...column1, ...column1];
  const extendedColumn2 = [...column2, ...column2, ...column2];
  const extendedColumn3 = [...column3, ...column3, ...column3];

  return (
    <div className="bg-white min-h-screen py-12 overflow-hidden">
      <div className="text-center mb-18">
        <h1 className="title">Trusted Reviews</h1>
      </div>

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-33.333%); }
          100% { transform: translateY(0); }
        }

        .scroll-up {
          animation: scroll-up 300s linear infinite;
        }

        .scroll-down {
          animation: scroll-down 330s linear infinite;
        }

        .scroll-up:hover,
        .scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile: Single Column */}
        <div className="md:hidden h-[700px] overflow-hidden">
          <div className="scroll-up">
            {allImagesExtended.map((logo, index) => (
              <div
                key={`mobile-${index}`}
                className="mb-6"
              >
                <div 
                  className="border border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(logo)}
                >
                  <img
                    src={logo}
                    alt={`Review ${index + 1}`}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Three Columns */}
        <div className="hidden md:grid overflow-hidden grid-cols-3 gap-6  ">
          {/* Column 1: Scroll Up */}
          <div className="overflow-hidden mt-10 h-[600px]">
            <div className="scroll-up">
              {extendedColumn1.map((logo, index) => (
                <div
                  key={`col1-${index}`}
                  className="mb-6"
                >
                  <div 
                    className="border border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedImage(logo)}
                  >
                    <img
                      src={logo}
                      alt={`Review ${index + 1}`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Scroll Down (with top offset) */}
          <div className="overflow-y-hidden  h-[600px] ">
            <div className="scroll-down">
              {extendedColumn2.map((logo, index) => (
                <div
                  key={`col2-${index}`}
                  className="mb-6"
                >
                  <div 
                    className="border border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedImage(logo)}
                  >
                    <img
                      src={logo}
                      alt={`Review ${index + 1}`}
                      className="w-full h-full object-cover p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Scroll Up */}
          <div className="overflow-hidden mt-10 h-[600px]">
            <div className="scroll-up">
              {extendedColumn3.map((logo, index) => (
                <div
                  key={`col3-${index}`}
                  className="mb-6"
                >
                  <div 
                    className="border border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedImage(logo)}
                  >
                    <img
                      src={logo}
                      alt={`Review ${index + 1}`}
                      className="w-full h-full object-cover p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
   
      </div>

  

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-xl bg-opacity-75 border border-gray-400 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged review"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}


          <div className='flex items-center justify-center mt-0'>
        <Link 
        onClick={() => window.scrollTo(0, 0)}
        className='btn' to='/reviews'>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ClientReviews;