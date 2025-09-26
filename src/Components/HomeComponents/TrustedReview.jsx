import React from 'react';

const TrustedReview = () => {
  const logos = [
    '/reviewImg/img1.png',
    '/reviewImg/img2.png',
    '/reviewImg/img3.png',
    '/reviewImg/img4.png',
    '/reviewImg/img5.png',
    '/reviewImg/img6.png',
    '/reviewImg/img7.png',
    '/reviewImg/img8.png',
    '/reviewImg/img9.png',
    '/reviewImg/img10.png',
    '/reviewImg/img11.png',
    '/reviewImg/img12.png',
    '/reviewImg/img13.png',
    '/reviewImg/img14.png',
    '/reviewImg/img15.png',
    '/reviewImg/img16.png',
    '/reviewImg/img17.png',
    '/reviewImg/img18.png',
    '/reviewImg/img19.png',
    '/reviewImg/img20.png', 
  ];

  return (
    <div className="bg-white py-12">
      <div className="lg:text-4xl text-2xl font-bold text-center mb-8">
        <h1>Trusted Reviews</h1>
      </div>

      <div className="relative mt-6 w-full overflow-hidden py-8">
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-20%); }
          }
          
          .scroll-track {
            display: flex;
            gap: 16px;
            animation: scroll 25s linear infinite;
            width: max-content;
          }
          
          .scroll-track:hover {
            animation-play-state: paused;
          }
          
          .review-card {
            width: 550px;
            height: 250px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 16px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s ease;
          }
          
          .review-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
          
          .review-card img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }
          
          .review-card:hover img {
            opacity: 1;
          }
        `}</style>
        
        <div className="scroll-track">
          {/* First set */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="review-card">
              <img
                src={logo}
                alt={`Review ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="review-card">
              <img
                src={logo}
                alt={`Review ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedReview;