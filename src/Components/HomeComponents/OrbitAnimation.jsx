"use client"

import { Settings, FileText, Rocket, HandshakeIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function OrbitAnimation() {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      icon: <Settings className="w-10 h-10" />,
      gradient: true,
    },
    {
      number: "02",
      title: "Design Ideation",
      icon: <FileText className="w-10 h-10" />,
      gradient: false,
    },
    {
      number: "03",
      title: "Development Phase",
      icon: <Rocket className="w-10 h-10" />,
      gradient: true,
    },
    {
      number: "04",
      title: "Quality Assured",
      icon: <HandshakeIcon className="w-10 h-10" />,
      gradient: false,
    },
  ];

  return (
    <div className="container mx-auto lg:px-10 px-4 py-16 max-w-8xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How We Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-8">
              {/* Main circle */}
              <motion.div
                className={`w-32 h-32 rounded-full flex items-center justify-center ${
                  step.gradient
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-white border-2 border-blue-200 text-blue-500"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.icon}
              </motion.div>

              {/* Small rotating circle using Framer Motion */}
              <motion.div
                className={`absolute w-4 h-4 rounded-full ${
                  step.gradient ? "bg-white border border-blue-300" : "bg-blue-500"
                }`}
                initial={{ rotate: 0, x: 0, y: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                  top: "16px", // Position at the top edge of the large circle
                  left: "8px", // Center horizontally (half of 128px width)
                  transformOrigin: "60px 48px", // Center of the large circle (x: 64px, y: 48px)
                }}
              />
            </div>

            <div className="text-center relative">
              <div className="counting text-7xl font-thin text-gray-200 mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}