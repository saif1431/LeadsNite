"use client"

import { useState } from "react"
import { motion, AnimatePresence, time } from "framer-motion"
import Button from "../../ResuseableComponents/Button"
import { Link } from "react-router-dom"

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("marketing")

  // Pricing data for Marketing tab
  const marketingPricing = {
    free: {
      name: "Development",
      price: "20",
      description: " Custom website development tailored to your needs - responsive design, backend setup, and modern frameworks",
      time : " Hour",
      features: [],
    },
    basic: {
      name: "Optimization",
      price: "12",
      time: " Hour",
      description: " Website speed, SEO, security, and performance tuning to ensure your site runs smoothly and ranks better.",
      features: [],
    },
  }

  // Pricing data for Optimize tab
  const optimizePricing = {
    free: {
      name: "Development",
      price: "25",
      description: " End-to-end mobile app development — from UI/UX to backend APIs — built for startups and businesses.",
      time : "Hour",
      features:  [],
    },
    basic: {
      name: "Premium Launch",
      price: "1200",
      description: " A complete, production-ready mobile app with advanced features, integrations, and scalability to support growth.",
       time : "Project",
      features: [],
    },
  }

  // Get the current pricing data based on active tab
  const pricingData = activeTab === "marketing" ? marketingPricing : optimizePricing

  return (
    <div className="bg-secondary  flex items-center justify-between px-4 lg:px-24 md:px-16 md:py-36 py-12">
      <div className=" w-full max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left side content */}
        <div className="lg:max-w-md lg:px-6 w-full"> 
          <h1 className="text-3xl md:text-4xl text-center lg:text-start font-bold text-gray-900 mb-8">Committed to giving the best price</h1>

          {/* Tab control */} 
          <div className="bg-blue-100 rounded-full p-1 flex items-center justify-center w-fit mx-auto lg:mx-0">
            <button
              className={`px-6 py-3 hidden lg:block cursor-pointer rounded-full text-md font-medium transition-colors ${
                activeTab === "marketing" ? "bg-blue-500 text-white" : "text-gray-700 "
              }`}
              onClick={() => setActiveTab("marketing")}
            >
              Web Developer
            </button>
            <button
              className={`px-6 py-3 hidden lg:block cursor-pointer rounded-full text-md  font-medium transition-colors ${
                activeTab === "optimize" ? "bg-blue-500 text-white" : "text-gray-700 "
              }`}
              onClick={() => setActiveTab("optimize")}
            >
              App Developer
            </button>
             <button
              className={`px-6 py-3 lg:hidden block cursor-pointer rounded-full text-md font-medium transition-colors ${
                activeTab === "marketing" ? "bg-blue-500 text-white" : "text-gray-700 "
              }`}
              onClick={() => setActiveTab("marketing")}
            >
              Web Dev
            </button>
            <button
              className={`px-6 py-3 lg:hidden block cursor-pointer rounded-full text-md  font-medium transition-colors ${
                activeTab === "optimize" ? "bg-blue-500 text-white" : "text-gray-700 "
              }`}
              onClick={() => setActiveTab("optimize")}
            >
              App Dev
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
              className="flex flex-col gap-3 lg:flex-row "
            >
              {/* Free plan card */}
              <div className="border border-black rounded-lg   px-12  py-14 w-full max-w-sm  md:mb-0 lg:mr-12 relative z-10">
                <div className="">
                  <h3 className="text-2xl font-semibold mb-4">{pricingData.free.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-gray-900 text-2xl font-medium">$</span>
                    <span className="text-gray-900 text-5xl font-bold">{pricingData.free.price}</span>
                    <span className=" text-md font-semibold ml-2">/ {pricingData.free.time}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-md mt-12 mb-8">{pricingData.free.description}</p>

           <Link to='/ContactUs'>
              <Button children="Lets Talk"/>
           </Link>

                {pricingData.free.features.map((feature, index) => (
                  <p key={index} className="text-gray-900 font-medium mt-4">
                    {feature}
                  </p>
                ))}
              </div>

              {/* Basic plan card */}
              <div className=" rounded-lg border border-black  px-12  py-14 w-full max-w-sm lg:right-[12%] md:relative md:top-12  z-20">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4">{pricingData.basic.name}</h3>
                  <div className="flex items-baseline space-y-3">
                    {/* show small "From" label only for the optimize (App Development) tab */}
                    {activeTab === "optimize" && (
                      <span className="text-sm font-semibold text-gray-500 mr-2 self-start">From</span>
                    )}
                    <span className="text-gray-900 text-2xl font-medium">$</span>
                    <span className="text-gray-900 text-5xl font-bold">{pricingData.basic.price}</span>
                    <span className=" text-md font-semibold ml-2">/ {pricingData.basic.time}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-md mb-10">{pricingData.basic.description}</p>

                   <Link to='/ContactUs'>
              <Button children="Lets Talk"/>
           </Link>

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
