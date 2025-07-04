import React, { useRef } from "react";

const ScrollImageBox = () => {
  const imageContainerRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollBackInterval = useRef(null);

  const startScrolling = () => {
    const container = imageContainerRef.current;

    // Stop any existing upward scroll if it's going
    clearInterval(scrollBackInterval.current);

    scrollInterval.current = setInterval(() => {
      if (
        container.scrollTop + container.clientHeight <
        container.scrollHeight
      ) {
        container.scrollTop += 2; // Scroll down slowly
      }
    }, 16); // 60fps
  };

  const stopScrolling = () => {
    const container = imageContainerRef.current;

    // Stop the downward scroll
    clearInterval(scrollInterval.current);

    // Start scrolling back up smoothly
    scrollBackInterval.current = setInterval(() => {
      if (container.scrollTop > 0) {
        container.scrollTop -= 2; // Scroll up slowly
      } else {
        clearInterval(scrollBackInterval.current);
      }
    }, 16);
  };

  return (
    <div
      className="w-[400px] h-[300px] overflow-hidden rounded-lg border-4 border-black mx-auto my-10 cursor-pointer"
      onMouseEnter={startScrolling}
      onMouseLeave={stopScrolling}
    >
      <div
        ref={imageContainerRef}
        className="w-full h-full overflow-y-scroll scroll-smooth no-scrollbar"
      >
        <img
          src="/landingpage.png"
          alt="Landing"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ScrollImageBox;
