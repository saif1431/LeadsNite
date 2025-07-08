"use client"

import { useState } from "react"
import { motion, AnimatePresence, time } from "framer-motion"
import Button from "../../ResuseableComponents/Button"

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("marketing")

  // Pricing data for Marketing tab
  const marketingPricing = {
    free: {
      name: "FREE",
      price: "0",
      description: "You pay for the ads, we manage the rest. Profits will be split",
      time : " Month",
      features: [],
    },
    basic: {
      name: "Basic",
      price: "299",
      time: " Month",
      description: "We run ads for you and manage your social media",
      features: ["Free Copywriting"],
    },
  }

  // Pricing data for Optimize tab
  const optimizePricing = {
    free: {
      name: "Basic",
      price: "25",
      description: "We will Optimize your WordPress website or Bubble.io App",
      time : "Optimization",
      features: [],
    },
    basic: {
      name: "Premium",
      price: "95",
      description: "We will Optimize your Coded website or App.",
       time : "Optimization",
      features: ["Free Responsive",],
    },
  }

  // Get the current pricing data based on active tab
  const pricingData = activeTab === "marketing" ? marketingPricing : optimizePricing

  return (
    <div className="bg-blue-50  flex items-center justify-center px-4 lg:px-36 md:px-16 md:py-24 py-12">
      <div className=" w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left side content */}
        <div className="max-w-sm w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Committed to giving the best price</h1>

          {/* Tab control */}
          <div className="bg-blue-100 rounded-full p-1 flex w-fit">
            <button
              className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                activeTab === "marketing" ? "bg-blue-500 text-white" : "text-gray-700 "
              }`}
              onClick={() => setActiveTab("marketing")}
            >
              Marketing
            </button>
            <button
              className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                activeTab === "optimize" ? "bg-blue-500 text-white" : "text-gray-700 "
              }`}
              onClick={() => setActiveTab("optimize")}
            >
              Optimize
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 lg:flex-row"
            >
              {/* Free plan card */}
              <div className="border border-black rounded-lg   px-12  py-14 w-full max-w-sm  md:mb-0 md:mr-16 relative z-10">
                <div className="">
                  <h3 className="text-2xl font-semibold mb-4">{pricingData.free.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-gray-900 text-2xl font-medium">$</span>
                    <span className="text-gray-900 text-7xl font-bold">{pricingData.free.price}</span>
                    <span className=" text-lg font-semibold ml-2">/ {pricingData.free.time}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-md mt-12 mb-8">{pricingData.free.description}</p>

              <Button children="Contact Us"/>

                {pricingData.free.features.map((feature, index) => (
                  <p key={index} className="text-gray-900 font-medium mt-4">
                    {feature}
                  </p>
                ))}
              </div>

              {/* Basic plan card */}
              <div className=" rounded-lg border border-black  p-14 w-full max-w-sm lg:right-[12%] md:relative md:top-12  z-20">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4">{pricingData.basic.name}</h3>
                  <div className="flex items-baseline space-y-3">
                    <span className="text-gray-900 text-2xl font-medium">$</span>
                    <span className="text-gray-900 text-7xl font-bold">{pricingData.basic.price}</span>
                    <span className=" text-lg font-semibold ml-2">/ {pricingData.free.time}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-md mb-10">{pricingData.basic.description}</p>

             <Button children="Contact Us"/>

                {pricingData.basic.features.map((feature, index) => (
                  <p key={index} className="text-lg font-medium mt-2">
                    {feature}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
