import React, { useState, useEffect } from 'react';

const ClientReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState('next');
  const [imageLoaded, setImageLoaded] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Reordered logos array - you can change the order as needed
  const logos = [
    '/reviewImg/img14.png',
    '/reviewImg/img11.png',
    '/reviewImg/img2.png',
    '/reviewImg/img5.png',
    '/reviewImg/img4.png',
    '/reviewImg/img3.png',
    '/reviewImg/img8.png',
    '/reviewImg/img7.png',
    '/reviewImg/img9.png',
    '/reviewImg/img6.png',
    '/reviewImg/img10.png',
    '/reviewImg/img12.png',
    '/reviewImg/img1.png',
    '/reviewImg/img13.png',
    '/reviewImg/img15.png',
    '/reviewImg/img17.png',
    '/reviewImg/img16.png',
    '/reviewImg/img18.png',
    '/reviewImg/img20.png',
    '/reviewImg/img19.png',
  ];

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 9;
  const totalPages = Math.ceil(logos.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentLogos = logos.slice(startIndex, startIndex + itemsPerPage);

  // Preload next page images
  useEffect(() => {
    const nextPageStart = startIndex + itemsPerPage;
    const nextPageEnd = nextPageStart + itemsPerPage;
    const nextPageImages = logos.slice(nextPageStart, nextPageEnd);

    nextPageImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentPage, itemsPerPage, startIndex]);

  // Reset to first page when screen size changes
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const handlePrev = () => {
    setDirection('prev');
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="title font-satochi">
        <h1 className='title'>Trusted Reviews</h1>
      </div>

      <div className="relative mt-6 w-full max-w-[1400px] mx-auto px-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute cursor-pointer left-3 lg:left-0 top-20 lg:top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:bg-gray-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Previous"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="lg:w-6 w-4 lg:h-6 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute cursor-pointer right-3 lg:right-0 top-16 lg:top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:bg-gray-100 transition-all hover:scale-110 active:scale-95"
          aria-label="Next"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="lg:w-6 w-4 h-4 lg:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Masonry Layout with CSS Columns */}
        <div className="px-12 py-8 overflow-hidden">
          <div 
            key={currentPage}
            className={`gap-5 animate-fadeSlide ${
              direction === 'next' ? 'animate-slideInRight' : 'animate-slideInLeft'
            } ${isMobile ? 'flex flex-col' : 'columns-1 md:columns-2 lg:columns-3'}`}
          >
            {currentLogos.map((logo, index) => (
              <div
                key={startIndex + index}
                className={`mb-5 animate-fadeIn ${!isMobile && 'break-inside-avoid'}`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="relative w-full border border-gray-300 rounded-lg bg-white overflow-hidden">
                  {/* Loading Skeleton */}
                  {!imageLoaded[startIndex + index] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center min-h-[200px]">
                      <svg 
                        className="w-10 h-10 text-gray-400" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                    </div>
                  )}
                  
                  {/* Actual Image */}
                  <img
                    src={logo}
                    alt={`Review ${startIndex + index + 1}`}
                    onLoad={() => handleImageLoad(startIndex + index)}
                    className={`w-full h-auto object-contain p-4 transition-all duration-300 ${
                      imageLoaded[startIndex + index] ? 'opacity-100' : 'opacity-0'
                    } hover:scale-105`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentPage ? 'next' : 'prev');
                setCurrentPage(index);
              }}
              className={`h-2  hidden lg:block rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-gray-800 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ClientReviews;