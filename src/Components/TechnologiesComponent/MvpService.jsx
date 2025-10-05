import React from 'react'

const logos = [
  "/New/New/MVP/mvp (1).svg",
      "/New/New/MVP/mvp (2).svg",
      "/New/New/MVP/mvp (3).svg",
      "/New/New/MVP/mvp (4).svg",
      "/New/New/MVP/mvp (5).svg",
      "/New/New/MVP/mvp (6).svg",
      "/New/New/MVP/mvp (7).svg",
      "/New/New/MVP/mvp (8).svg",
      "/New/New/MVP/mvp (9).svg",
      "/New/New/MVP/mvp (10).svg",
      "/New/New/MVP/mvp (11).svg",
      "/New/New/MVP/mvp (12).svg",
      "/New/New/MVP/mvp (13).svg",
      "/New/New/MVP/mvp (14).svg",
      "/New/New/MVP/mvp (15).svg",
      "/New/New/MVP/mvp (16).svg",
      "/New/New/MVP/mvp (17).svg",
];


function MvpService() {
const duplicated = [...logos, ...logos];
  const duration = 40; // bigger = slower (adjust to taste)
   // gap between logos in px
  const slotMinWidth = 140; // ensures consistent width to avoid seams

  return (
    <div
      className="relative max-w-4xl mx-auto w-full py-4 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-transparent to-white/50 z-10 pointer-events-none" />

      <style>{`
        @keyframes scrollLogos {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); } /* move exactly one set width */
        }

        .mobile-scroll-track {
          display: flex;
          
          align-items: center;
          width: max-content;
          will-change: transform;
          animation: scrollLogos ${duration}s linear infinite;
          transform: translate3d(0,0,0);
          backface-visibility: hidden;
        }

        .mobile-logo-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: ${slotMinWidth}px;
        }

        .mobile-logo-item img {
          display: block;
          height: 48px;
          width: auto;
          object-fit: contain;
          opacity: 0.95;
          transition: opacity .2s ease;
          -webkit-user-drag: none;
          user-select: none;
          pointer-events: none;
        }
      `}</style>

      <div className="mobile-scroll-track" aria-hidden>
        {duplicated.map((logo, idx) => (
          <div className="mobile-logo-item" key={idx}>
            <img src={logo} alt={`mobile logo ${idx % logos.length + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MvpService
