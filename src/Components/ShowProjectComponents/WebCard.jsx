import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WebCard() {
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allCards = [
    { id: 8, title: "Ecommerece Website", description: "ElectroMart is a full-featured e-commerce site crafted to make buying electronics simple and satisfying. ", image: "/Projects/Website/Ecommerece/E Commerce Website.webp" },
    { id: 9, title: "Rent a Car Website", description: "CarMaxel is a vibrant online platform crafted for car buyers, simplifying vehicle shopping with ease. ", image: "/Projects/Website/Ecommerece/E Commerce Website.webp" },
    { id: 10, title: "Tour Booking Website ", description: "Travolo is a dynamic travel platform crafted to make trip planning effortless and exciting", image: "/Projects/Website/Tour Booking/Tour Booking.webp" },
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
              const slug = createSlug(card.title);
              navigate(`/web-projects/${slug}`);
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
        <div className="text-center mt-8">
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

export default WebCard;