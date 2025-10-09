import React, { useState } from 'react';

export default function ReviewsGrid({
  id,
  title,
  subtitle,
  images,
  altPrefix = 'Review',
  backgroundClass = '',
}) {
  const IMAGES_PER_ROW_PAIR = 14; // 7 images per row, 2 rows = 14
  const [visiblePairs, setVisiblePairs] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const onImgError = (e) => {
    e.currentTarget.src = '/placeholder.svg';
    e.currentTarget.alt = 'Placeholder image';
  };

  const totalPairs = Math.ceil(images.length / IMAGES_PER_ROW_PAIR);

  const handleLoadMore = () => {
    setVisiblePairs((prev) => prev + 1);
  };

  const visibleImageSets = Array.from({ length: visiblePairs }, (_, i) => 
    images.slice(i * IMAGES_PER_ROW_PAIR, (i + 1) * IMAGES_PER_ROW_PAIR)
  );

  return (
    <section id={id} className={`py-20 scroll-mt-20 ${backgroundClass}`}>
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }
          .scrolling-track-left {
            animation: scroll-left 10s linear infinite;
          }
          .scrolling-track-left:hover {
            animation-play-state: paused;
          }
          .scrolling-track-right {
            animation: scroll-right 10s linear infinite;
          }
          .scrolling-track-right:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        <h2 className="title">{title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{subtitle}</p>

        <div className="overflow-hidden">
          {visibleImageSets.map((imageSet, pairIndex) => {
            // Triple the images for seamless infinite loop
            const extendedSet = [...imageSet, ...imageSet, ...imageSet];
            const halfLength = Math.ceil(extendedSet.length / 2);
            const row1Images = extendedSet.slice(0, halfLength);
            const row2Images = extendedSet.slice(halfLength);

            return (
              <div key={`pair-${pairIndex}`} className="space-y-6 mb-8">
                {/* Row 1: Scrolling Left */}
                <div className="flex scrolling-track-left gap-4">
                  {row1Images.map((src, index) => (
                    <div key={`${id}-p${pairIndex}-r1-${index}`} className="flex-shrink-0 w-96 h-64">
                      <div 
                        className="w-full h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                      >
                        <img 
                          src={src || '/placeholder.svg'} 
                          alt={`${altPrefix} ${index + 1}`} 
                          className="w-full h-full object-contain p-1" 
                          onError={onImgError} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2: Scrolling Right */}
                <div className="flex scrolling-track-right gap-4">
                  {row2Images.map((src, index) => (
                    <div key={`${id}-p${pairIndex}-r2-${index}`} className="flex-shrink-0 w-96 h-64">
                      <div 
                        className="w-full h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                      >
                        <img 
                          src={src || '/placeholder.svg'} 
                          alt={`${altPrefix} ${halfLength + index + 1}`} 
                          className="w-full h-full object-contain p-1" 
                          onError={onImgError} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {visiblePairs < totalPairs && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore} 
              className="btn"
            >
              Load More Reviews
            </button>
          </div>
        )}

        {/* Image Popup Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 backdrop-blur-xl border border-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Enlarged review"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}