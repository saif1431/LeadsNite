import React from 'react';

const logos = [
  '/brandLogo/logo1.png',
  '/brandLogo/logo2.png',
  '/brandLogo/logo3.png',
  '/brandLogo/logo4.png',
  '/brandLogo/logo5.png',
  '/brandLogo/logo6.png',
  '/brandLogo/logo7.png',
  '/brandLogo/logo8.png',
  '/brandLogo/logo9.png',
  '/brandLogo/logo10.png',
  '/brandLogo/logo11.png',
  '/brandLogo/logo12.png',
  '/brandLogo/logo13.png',
  '/brandLogo/14.png',
  '/brandLogo/15.png',
  '/brandLogo/16.png',
  '/brandLogo/17.png',
  '/brandLogo/18.png',
  '/brandLogo/19.png',
];


const BrandLogos = () => {
  const duplicated = [...logos, ...logos];
  const duration = 60; // bigger = slower
  const gap = 150; // px between logos
  const slotMinWidth = 140; // consistent slot width to avoid seam

  return (
    <div
      className="relative max-w-6xl mx-auto w-full py-4 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-transparent to-white/50 z-10 pointer-events-none" />

      <style>{`
        @keyframes scrollLogosML {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); } /* move exactly one set width */
        }

        .ml-scroll-track {
          display: flex;
          gap: ${gap}px;
          align-items: center;
          width: max-content;
          will-change: transform;
          animation: scrollLogosML ${duration}s linear infinite;
          transform: translate3d(0,0,0);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .ml-logo-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: ${slotMinWidth}px;
        }

        .ml-logo-item img {
          display: block;
          height: 42px;
          width: auto;
          object-fit: contain;
          opacity: 0.95;
          transition: opacity .2s ease;
          -webkit-user-drag: none;
          user-select: none;
          pointer-events: none;
        }
      `}</style>

      <div className="ml-scroll-track" aria-hidden>
        {duplicated.map((logo, idx) => (
          <div className="ml-logo-item" key={idx}>
            <img src={logo} alt={`ml logo ${idx % logos.length + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos; 
