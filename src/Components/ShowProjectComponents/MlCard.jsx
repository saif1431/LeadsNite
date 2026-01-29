import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MlCard() {
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allCards = [
    { id: 15, title: "AI Career Compass", description: "This workflow automates job hunting by scraping LinkedIn daily with AI-generated alternate titles and multi-keyword searches, ", image: "/Projects/AI agents/AI Career Compass/projectImg6.png" },
    { id: 16, title: "AI-Powered WhatsApp HR Assistant", description: "This workflow transforms WhatsApp into an intelligent HR assistant powered by LLM and automation. It captures incoming messages, ", image: "/Projects/AI agents/AI-Powered WhatsApp HR Assistant/projectImg1.png" },
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
              window.scrollTo(0, 0); // top pe scroll
              const slug = createSlug(card.title);
              navigate(`/ai-agents/${slug}`); // id ke sath navigate
            }}
            className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={card.image} alt={card.title} className="w-full object-cover h-96" />
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
            className="btn"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default MlCard;
