import React, { useState } from 'react';

const ClientReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  // Reordered logos array - you can change the order as needed
  const logos = [
    '/reviewImg/img14.png',
    '/reviewImg/img11.png',   // Swapped with img2
    '/reviewImg/img2.png',   // Swapped with img3
    '/reviewImg/img5.png',   // Swapped with img4
    '/reviewImg/img4.png',   // Swapped with img5
    '/reviewImg/img3.png',
    '/reviewImg/img8.png',   // Swapped with img7
    '/reviewImg/img7.png',   // Swapped with img8
    '/reviewImg/img9.png',
    '/reviewImg/img6.png',  // Swapped with img10
    '/reviewImg/img10.png',  // Swapped with img11
    '/reviewImg/img12.png',
    '/reviewImg/img1.png',  // Swapped with img13
    '/reviewImg/img13.png',  // Swapped with img14
    '/reviewImg/img15.png',
    '/reviewImg/img17.png',  // Swapped with img16
    '/reviewImg/img16.png',  // Swapped with img17
    '/reviewImg/img18.png',
    '/reviewImg/img20.png',  // Swapped with img19
    '/reviewImg/img19.png',  // Swapped with img20
  ];

  const totalPages = Math.ceil(logos.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentLogos = logos.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors"
          aria-label="Previous"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors"
          aria-label="Next"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Masonry Layout with CSS Columns */}
        <div className="px-12 py-8">
          <div 
            className="columns-1 md:columns-2 lg:columns-3 gap-5"
          >
            {currentLogos.map((logo, index) => (
              <div
                key={startIndex + index}
                className="break-inside-avoid mb-5"
              >
                <img
                  src={logo}
                  alt={`Review ${startIndex + index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-contain border border-gray-300 rounded-lg p-4 bg-white"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentPage === index ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;