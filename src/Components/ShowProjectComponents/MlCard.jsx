import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MlCard() {
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allCards = [
    { id: 15, title: "Advancing Liver Segmentation with Deep Learning", description: "Build modern responsive websites with React and Node.js.", image: "/mlImage/1.png" },
    { id: 16, title: "Enhancing Electricity Demand Forecasting", description: "Create cross-platform mobile apps with React Native.", image: "/mlImage/2.png" },
    { id: 17, title: "Air Quality Prediction Using Machine Learning", description: "AI-powered solutions to automate tasks and predictions.", image: "/mlImage/3.png" },
    { id: 18, title: "Customer Segmentation", description: "Professional video editing for brands and creators.", image: "/mlImage/4.png" },
    { id: 19, title: "Enhancing Recommender Systems", description: "Boost your business with SEO & social media campaigns.", image: "/mlImage/5.png" },
    { id: 20, title: "Email Communication", description: "Boost your business with SEO & social media campaigns.", image: "/mlImage/6.png" },
    { id: 21, title: "Customer Segmentation", description: "Boost your business with SEO & social media campaigns.", image: "/mlImage/7.png" },
  ];

  const handleLoadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="p-6">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCards.slice(0, visible).map((card) => (
          <div
            key={card.id}
            onClick={() => {
              window.scrollTo(0, 0); // top pe scroll
              navigate(`/projects/${card.id}`); // id ke sath navigate
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

export default MlCard;
