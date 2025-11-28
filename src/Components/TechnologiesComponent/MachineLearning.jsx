import React from "react";

const logos = [
  "/New/New/AI agents/aiagents1.webp",
  "/New/New/AI agents/aiagents2.webp",
  "/New/New/AI agents/aiagents3.webp",
  "/New/New/AI agents/aiagents4.webp",
  "/New/New/AI agents/aiagents5.webp",
  "/New/New/AI agents/aiagents6.webp",
  "/New/New/AI agents/aiagents7.webp",
  "/New/New/AI agents/aiagents8.webp",
  "/New/New/AI agents/aiagents9.webp",
  "/New/New/AI agents/aiagents10.webp",
  "/New/New/AI agents/aiagents11.webp",
  "/New/New/AI agents/aiagents12.webp",
];

const MachineLearning = () => {
  const duplicated = [...logos, ...logos];
  const duration = 30; // bigger = slower
  
  const slotMinWidth = 140; // consistent slot width to avoid seam

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
        @keyframes scrollLogosML {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); } /* move exactly one set width */
        }

        .ml-scroll-track {
          display: flex;
         gap:1rem;
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

export default MachineLearning;






