import React from 'react';

const logos = [
  '/brandLogo/logo1.webp',
  '/brandLogo/logo2.webp',
  '/brandLogo/logo5.webp',
  '/brandLogo/logo5.webp',
  '/brandLogo/logo3.webp',
  '/brandLogo/logo4.webp',
  '/brandLogo/logo4.webp',
  '/brandLogo/logo5.webp',
  '/brandLogo/logo6.webp',
  '/brandLogo/logo7.webp',
  '/brandLogo/logo8.webp',
  '/brandLogo/logo9.webp',
  '/brandLogo/logo10.webp',
  '/brandLogo/logo11.webp',
  '/brandLogo/logo12.webp',
  '/brandLogo/logo13.webp',
  '/brandLogo/14.webp',
  '/brandLogo/15.webp',
  '/brandLogo/16.webp',
  '/brandLogo/17.webp',
  '/brandLogo/18.webp',
  '/brandLogo/19.webp',
];


const BrandLogos = () => {
  const duplicated = [...logos, ...logos];
  const duration = 60; // bigger = slower
  const slotMinWidth = 140; // consistent slot width to avoid seam

  return (
    <div
      className="relative  w-full py-4 overflow-hidden"
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

        .ml-scroll-tracks {
          display: flex;
          gap: 5rem;
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

      <div className="ml-scroll-tracks" aria-hidden>
        {duplicated.map((logo, idx) => (
          <div className="ml-logo-item" key={idx}>
            <img src={logo} alt={`ml logo ${idx % logos.length + 1}`} width="140" height="42" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos; 
