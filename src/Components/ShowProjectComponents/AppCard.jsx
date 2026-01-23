import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppCard() {
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allCards = [
    { id: 3, title: "YumBite App", description: "We built YumBites, a mobile app that blends culinary curiosity with useful tech to make cooking joyful. ", image: "/Projects/Mobile Application/YumBites/projectImg4.webp" },
    { id: 4, title: "SafeBite App", description: "SafeBite is a smart gluten-free companion app designed to help users make confident food choices every day. ", image: "/Projects/Mobile Application/project 1/thumnail.png" },
    { id: 5, title: "Cart n Mart App", description: "Cart n Mart is a smart grocery delivery mobile application designed to simplify everyday shopping. ", image: "/Projects/Mobile Application/project 2/thumnail.png" },
    { id: 6, title: "CampusKart App", description: "CampusKart is a unified campus commerce platform designed to streamline everyday student needs.", image: "/Projects/Mobile Application/project 3/thumnai.png" },
    { id: 7, title: "LifeLine Connect App", description: "LifeLine Connect is a real-time emergency response platform designed to bridge the gap between patients.", image: "/Projects/Mobile Application/project 4/thumnail.png" },
    { id: 17, title: "Culina App", description: "Culina is a thoughtfully crafted mobile experience designed for today’s food enthusiasts. ", image: "/Projects/Mobile Application/project 5/thumnail.png" },
    { id: 18, title: "FlowRider Smart Delivery Companion App", description: "FlowRider is a modern rider-focused delivery management application built to streamline last-mile logistics. ", image: "/Projects/Mobile Application/project 6/thumnail.png" },
  ];

  // Function to convert title to URL-friendly slug
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-');      // Replace multiple hyphens with single hyphen
  };

  const handleLoadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCards.slice(0, visible).map((card) => (
          <div
            key={card.id}
            onClick={() => {
              window.scrollTo(0, 0);
              // top pe scroll
              const slug = createSlug(card.title);
              navigate(`/app-projects/${slug}`); // id ke sath navigate
            }}
            className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={card.image} alt={card.title} className="w-full object-fill h-96" />
            <div className="p-4 space-y-4">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < allCards.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default AppCard;
