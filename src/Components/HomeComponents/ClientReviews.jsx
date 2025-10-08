import React from 'react';

const ClientReviews = () => {
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

  // Divide images into 3 columns
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Trusted Reviews</h1>
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
          animation: scroll-up 30s linear infinite;
        }

        .scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .scroll-up:hover,
        .scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[700px]">
          {/* Column 1: Scroll Up */}
          <div className="overflow-hidden h-full">
            <div className="scroll-up">
              {extendedColumn1.map((logo, index) => (
                <div
                  key={`col1-${index}`}
                  className="mb-6"
                >
                  <div className="border border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-shadow h-40">
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
          <div className="overflow-y-hidden h-[650px] md:mt-16">
            <div className="scroll-down">
              {extendedColumn2.map((logo, index) => (
                <div
                  key={`col2-${index}`}
                  className="mb-6"
                >
                  <div className="border border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-shadow h-40">
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

          {/* Column 3: Scroll Up */}
          <div className="overflow-hidden h-full">
            <div className="scroll-up">
              {extendedColumn3.map((logo, index) => (
                <div
                  key={`col3-${index}`}
                  className="mb-6"
                >
                  <div className="border border-gray-300 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-shadow h-40">
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
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;