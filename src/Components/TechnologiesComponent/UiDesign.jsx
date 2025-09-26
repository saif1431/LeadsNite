import React from 'react';


const logos = [
  "/New/New/Mobile Application/1.png",
  "/New/New/Mobile Application/2.png",
  "/New/New/Mobile Application/3.png",
  "/New/New/Mobile Application/4.png",
  "/New/New/Mobile Application/5.png",
  "/New/New/Mobile Application/6.png",
  "/New/New/Mobile Application/7.png",
  "/New/New/Mobile Application/8.png",
  "/New/New/Mobile Application/9.png",
  "/New/New/Mobile Application/10.png",
  "/New/New/Mobile Application/11.png",
  "/New/New/Mobile Application/12.png",
  "/New/New/Mobile Application/13.png",
  "/New/New/Mobile Application/14.png",
   "/New/New/Website/1.png",
  "/New/New/Website/2.png",
  "/New/New/Website/3.png",
  "/New/New/Website/4.png",
  "/New/New/Website/5.png",
  "/New/New/Website/6.png",
  "/New/New/Website/7.png",
  "/New/New/Website/8.png",
  "/New/New/Website/9.png",
  "/New/New/Website/10.png",
  "/New/New/Website/11.png",
  "/New/New/Website/12.png",
  "/New/New/Website/13.png",
  "/New/New/Website/14.png",
  "/New/New/Website/15.png",
  "/New/New/Website/16.png",
  "/New/New/Website/17.png",
  "/New/New/Website/18.png",
  "/New/New/Website/19.png",
  "/New/New/Website/20.png",
  "/New/New/Website/21.png",
  // Add more logos as needed
];

const UiDesign = () => {
  const duplicated = [...logos, ...logos];
  const duration = 80; // bigger = slower (adjust to taste)
  const gap = 64; // gap between logos in px
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
          gap: ${gap}px;
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

export default UiDesign;





 
 
 
 
