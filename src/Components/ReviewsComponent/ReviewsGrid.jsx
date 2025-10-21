import React, { useState, useEffect, useRef } from 'react';

export default function ReviewsGrid({
  id,
  title,
  subtitle,
  images,
  altPrefix = 'Review',
  backgroundClass = '',
}) {
  const IMAGES_PER_ROW_PAIR = 30;
  const [visiblePairs, setVisiblePairs] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const rowRefs = useRef([]);

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

  useEffect(() => {
    const cleanupFunctions = [];

    const scrollRow = (element, direction) => {
      if (!element) return;
      
      let scrollPosition = direction === 'right' ? element.scrollWidth / 2 : 0;
      let animationId;
      let isPaused = false;
      const speed = 0.3; // Adjust speed: higher = faster (0.3 = slow, 0.5 = medium, 1 = fast)

      const animate = () => {
        if (!isPaused) {
          if (direction === 'left') {
            // LEFT: 0 → scrollWidth/2
            scrollPosition += speed;
            if (scrollPosition >= element.scrollWidth / 2) {
              scrollPosition = 0;
            }
          } else {
            // RIGHT: scrollWidth/2 → 0
            scrollPosition -= speed;
            if (scrollPosition <= 0) {
              scrollPosition = element.scrollWidth / 2;
            }
          }
          element.scrollLeft = scrollPosition;
        }
        animationId = requestAnimationFrame(animate);
      };

      const handleMouseEnter = () => { isPaused = true; };
      const handleMouseLeave = () => { isPaused = false; };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      animationId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationId);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    // Setup scrolling for all visible rows
    rowRefs.current.forEach((ref, index) => {
      if (ref) {
        // Alternating: even index = left, odd index = right
        const direction = index % 2 === 0 ? 'left' : 'right';
        const cleanup = scrollRow(ref, direction);
        cleanupFunctions.push(cleanup);
      }
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup?.());
    };
  }, [visiblePairs]);

  return (
    <>
      <section id={id} className={`py-20 scroll-mt-20 ${backgroundClass}`}>
        <div className="container mx-auto">
          <h2 className="title">{title}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{subtitle}</p>

          <div className="overflow-hidden space-y-6">
            {visibleImageSets.map((imageSet, pairIndex) => {
              const halfLength = Math.ceil(imageSet.length / 2);
              
              // Triple the images for ultra-smooth infinite loop
              const row1Base = imageSet.slice(0, halfLength);
              const row1Images = [...row1Base, ...row1Base, ...row1Base];
              
              const row2Base = imageSet.slice(halfLength);
              const row2Images = [...row2Base, ...row2Base, ...row2Base];

              return (
                <React.Fragment key={`pair-${pairIndex}`}>
                  {/* Row 1: Scrolling LEFT → */}
                  <div 
                    ref={(el) => (rowRefs.current[pairIndex * 2] = el)}
                    className="flex gap-4 overflow-x-hidden"
                    style={{ scrollBehavior: 'auto' }}
                  >
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

                  {/* Row 2: Scrolling ← RIGHT */}
                  <div 
                    ref={(el) => (rowRefs.current[pairIndex * 2 + 1] = el)}
                    className="flex gap-4 overflow-x-hidden"
                    style={{ scrollBehavior: 'auto' }}
                  >
                    {row2Images.map((src, index) => (
                      <div key={`${id}-p${pairIndex}-r2-${index}`} className="flex-shrink-0 w-96 h-64">
                        <div 
                          className="w-full h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => setSelectedImage(src)}
                        >
                          <img 
                            src={src || '/placeholder.svg'} 
                            alt={`${altPrefix} ${halfLength + index + 1}`} 
                            className="w-full cursor-pointer h-full object-contain p-1" 
                            onError={onImgError} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
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
              className="fixed inset-0 cursor-pointer bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute cursor-pointer top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
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
    </>
  );
}