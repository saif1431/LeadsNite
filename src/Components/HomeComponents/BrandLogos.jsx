import React from 'react';

const logos = [
  '/brandLogo/Flair Collective (1).webp',
  '/brandLogo/Flair Collective (2).webp',
  '/brandLogo/Flair Collective (3).webp',
  '/brandLogo/Flair Collective (4).webp',
  '/brandLogo/Flair Collective (5).webp',
  '/brandLogo/Flair Collective (6).webp',
  '/brandLogo/Flair Collective (7).webp',
  '/brandLogo/Flair Collective (8).webp',
  '/brandLogo/Flair Collective (9).webp',
  '/brandLogo/Flair Collective (10).webp',
  '/brandLogo/Flair Collective.webp',
  '/brandLogo/N-Logo (1).webp',
  '/brandLogo/N-Logo (2).webp',
  '/brandLogo/N-Logo (3).webp',
  '/brandLogo/N-Logo (4).webp',
  '/brandLogo/N-Logo (5).webp',
  '/brandLogo/N-Logo (6).webp',
  '/brandLogo/N-Logo (7).webp',
  '/brandLogo/N-Logo (8).webp',
  '/brandLogo/N-Logo (9).webp',
  '/brandLogo/N-Logo (10).webp',
  '/brandLogo/N-Logo (11).webp',

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
