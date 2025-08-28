import React, { useRef } from "react";

// Single Scrollable Image Card
const ScrollImageCard = ({ image, title }) => {
  const imageContainerRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollBackInterval = useRef(null);

  const startScrolling = () => {
    const container = imageContainerRef.current;
    clearInterval(scrollBackInterval.current); // stop upward scroll
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
    const container = imageContainerRef.current;
    clearInterval(scrollInterval.current); // stop downward scroll
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
        className=" h-[500px] overflow-hidden rounded-lg border-4 border-black mx-auto my-4 cursor-pointer"
        onMouseEnter={startScrolling}
        onMouseLeave={stopScrolling}
      >
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
    { id: 4, image: "/landingpage.png", title: "The Huddle" },
    { id: 5, image: "/landingpage.png", title: "The Huddle" },
    { id: 6, image: "/landingpage.png", title: "The Huddle" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {dummyCards.map((card) => (
        <ScrollImageCard key={card.id} image={card.image} title={card.title} />
      ))}
    </div>
  );
};

export default ScrollImageBoxGrid;
