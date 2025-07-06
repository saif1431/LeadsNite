"use client";

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
    <div className="mx-auto px-4 lg:px-36 md:px-16 lg:py-18 md-12 max-w-8xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How We Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const isHoverOnly =
            step.title === "Design Ideation" || step.title === "Quality Assured";

          return (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-8">
                {/* Main circle */}
                <motion.div
                  className={`w-34 h-34 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step.gradient
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-white border-2 border-blue-200 text-blue-500"
                  }`}
                >
                  {step.icon}
                </motion.div>

                {/* Orbiting circle logic */}
                {isHoverOnly ? (
                  // Hidden by default, appears and rotates on hover
                  <motion.div
                    className={`absolute w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      step.gradient
                        ? "bg-white border border-blue-300"
                        : "bg-blue-500"
                    }`}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{
                      top: "16px",
                      left: "8px",
                      transformOrigin: "60px 48px",
                    }}
                  />
                ) : (
                  // Always visible and rotating
                  <motion.div
                    className={`absolute w-4 h-4 rounded-full ${
                      step.gradient
                        ? "bg-white border border-blue-300"
                        : "bg-blue-500"
                    }`}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{
                      top: "16px",
                      left: "8px",
                      transformOrigin: "60px 48px",
                    }}
                  />
                )}
              </div>

              {/* Centered line between number and title */}
             <div className="text-center relative flex flex-col items-center w-full">
  <div className="relative flex items-center justify-center w-full mb-6">
    <div className="flex-grow h-[1px] mt-10 bg-gray-300"></div>
   <div className="counting text-7xl font-thin text-gray-200">{step.number}</div>


    <div className="flex-grow h-[1px] mt-10 bg-gray-200"></div>
  </div>
  <h3 className="text-xl font-bold">{step.title}</h3>
</div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
