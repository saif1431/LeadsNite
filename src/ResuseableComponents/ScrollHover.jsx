import React, { useRef } from "react";

// Single Scrollable Image Card
const ScrollImageCard = ({ image, title }) => {
  const imageContainerRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollBackInterval = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const startScrolling = () => {
    setIsHovered(true);
    const container = imageContainerRef.current;
    clearInterval(scrollBackInterval.current);
    scrollInterval.current = setInterval(() => {
      if (
        container.scrollTop + container.clientHeight <
        container.scrollHeight
      ) {
        container.scrollTop += 2;
      }
    }, 16);
  };

  const stopScrolling = () => {
    setIsHovered(false);
    const container = imageContainerRef.current;
    clearInterval(scrollInterval.current);
    scrollBackInterval.current = setInterval(() => {
      if (container.scrollTop > 0) {
        container.scrollTop -= 2;
      } else {
        clearInterval(scrollBackInterval.current);
      }
    }, 16);
  };

  return (
    <div className="flex flex-col items-start">
      <div
        className="h-[500px] overflow-hidden rounded-lg border-4 border-black mx-auto my-4 cursor-pointer relative"
        onMouseEnter={startScrolling}
        onMouseLeave={stopScrolling}
      >

{/* Overlay */}
{!isHovered && (
 <div >
   <div style={{background: "linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} className="absolute mx-auto top-64 inset-0 h-fit w-fit py-3 px-8 flex flex-col items-center justify-end z-10 ease-in transition-opacity duration-900">
    <span className="text-white text-xl font-semibold mb-2">Hover and Scroll it</span>
    <svg
      className="w-8 h-8 text-white animate-bounce"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
 </div>
)}

        <div
          ref={imageContainerRef}
          className="w-full h-full overflow-y-scroll scroll-smooth no-scrollbar"
        >
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>
      <h3 className="text-lg text-start font-semibold">{title}</h3>
    </div>
  );
};

// Grid of Multiple Cards
const ScrollImageBoxGrid = () => {
  const dummyCards = [
    { id: 1, image: "/landingpage.png", title: "The Huddle" },
    { id: 2, image: "/landingpage.png", title: "The Huddle" },
    { id: 3, image: "/landingpage.png", title: "The Huddle" },

  ];

  return (
   <div className="mt-28">
    <h2 className="lg:text-4xl text-2xl font-bold text-center">Page Previews
</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 ">
      {dummyCards.map((card) => (
        <ScrollImageCard key={card.id} image={card.image} title={card.title} />
      ))}
    </div>
   </div>
  );
};

export default ScrollImageBoxGrid;
