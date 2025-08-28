import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppCard() {
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allCards = [
    { id: 3, title: "E-commerce App", description: "Build modern responsive websites with React and Node.js.", image: "https://leadsnite.com/wp-content/uploads/2025/07/Ashley-768-x-640-px-1.png" },
    { id: 4, title: "Food Delivery App", description: "Create cross-platform mobile apps with React Native.", image: "https://leadsnite.com/wp-content/uploads/2025/07/Ashley-768-x-640-px-4.jpg" },
    { id: 5, title: "LMS App", description: "AI-powered solutions to automate tasks and predictions.", image: "https://leadsnite.com/wp-content/uploads/2025/07/Ashley-768-x-640-px.jpg" },
    { id: 6, title: "Education App", description: "Professional video editing for brands and creators.", image: "https://leadsnite.com/wp-content/uploads/2025/07/Ashley-768-x-640-px.png" },
    { id: 7, title: "Blogging App", description: "Boost your business with SEO & social media campaigns.", image: "https://leadsnite.com/wp-content/uploads/2024/02/4.-Web-Casestudy-768x640.png" }
  ];

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
              navigate(`/app-projects/${card.id}`); // id ke sath navigate
            }}
            className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={card.image} alt={card.title} className="w-full object-cover" />
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
