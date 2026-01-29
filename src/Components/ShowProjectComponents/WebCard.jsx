import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WebCard() {
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allCards = [
    { id: 8, title: "Ecommerece Website", description: "ElectroMart is a full-featured e-commerce site crafted to make buying electronics simple and satisfying. ", image: "/Projects/Website/Ecommerece/projectImg3.webp" },
    { id: 9, title: "Rent a Car Website", description: "CarMaxel is a vibrant online platform crafted for car buyers, simplifying vehicle shopping with ease. ", image: "/HomeImage/projectImg2.webp" },
    { id: 10, title: "Tour Booking Website ", description: "Travolo is a dynamic travel platform crafted to make trip planning effortless and exciting", image: "/Projects/Website/Tour Booking/projectImg5.webp" },
    { id: 11, title: "Greytag Website ", description: "Greytag is a modern fashion eCommerce web application designed to deliver a seamless shopping experience", image: "/Projects/Website/web 1/thumnial.webp" },
    { id: 12, title: "Doorstep Repair Website ", description: "Doorstep Repair is a professional HVAC service web platform built to showcase air conditioning,", image: "/Projects/Website/web 2/thumnail.webp" },
    { id: 13, title: "Rooflex Website ", description: "Rooflex is a modern real estate web platform designed to showcase premium properties through a user-friendly interface", image: "/Projects/Website/web 3/thumnail.webp" },
    { id: 14, title: "Texora Website ", description: "Texora is a modern textile manufacturing web platform designed to present industrial capabilities,", image: "/Projects/Website/web 4/thumnail.webp" },
    { id: 26, title: "Medicare Website ", description: "Medicare is a modern healthcare web platform designed to present medical services, departments", image: "/Projects/Website/web 5/thumnail.webp" },
    { id: 27, title: "GlobalNest Website ", description: "GlobalNest is a modern travel booking web application crafted to inspire exploration and simplify tour discovery.", image: "/Projects/Website/web 11/thumnail.webp" },
    { id: 28, title: "Wayo Website ", description: "TWayo is a modern hostel and short-stay booking web application designed to make travel accommodation simple,", image: "/Projects/Website/web 12/thumnail.webp" },
    { id: 29, title: "Learnivo Website ", description: "Learnivo is a modern online learning web platform designed to connect students with expert-led courses and resources.", image: "/Projects/Website/web 13/thumnail.webp" },
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
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCards.slice(0, visible).map((card) => (
          <div
            key={card.id}
            onClick={() => {
              window.scrollTo(0, 0);
              const slug = createSlug(card.title);
              navigate(`/web-projects/${slug}`);
            }}
            className="cursor-pointer bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={card.image} alt={card.title} className="w-full object-fit h-96" />
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