import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ClientCount = () => {
  const stats = [
    { id: 1, value: 500, suffix: '+', label: 'Client Count' },
    { id: 2, value: 99, suffix: '%', label: 'Client Satisfaction' },
    { id: 3, value: 31, suffix: '%', label: 'Referral Rate' },
    { id: 4, value: 97, suffix: '%', label: 'Project Completion' },
  ];

  const [counters, setCounters] = useState(
    stats.map(stat => ({ ...stat, currentValue: 0 }))
  );

  useEffect(() => {
    const duration = 2; // seconds
    const interval = 16; // ms (approx 60fps)
    const steps = (duration * 1000) / interval;
    
    const animations = stats.map(stat => {
      const stepValue = stat.value / steps;
      let currentStep = 0;
      let currentValue = 0;

      const intervalId = setInterval(() => {
        currentStep++;
        currentValue = Math.min(
          Math.floor(currentStep * stepValue),
          stat.value
        );

        setCounters(prev => prev.map(item => 
          item.id === stat.id ? { ...item, currentValue } : item
        ));

        if (currentStep >= steps) {
          clearInterval(intervalId);
        }
      }, interval);

      return intervalId;
    });

    return () => animations.forEach(clearInterval);
  }, []);

  return (
    <div   className="lg:px-24 lg:w-[85%] w-full mx-auto   md:py-24 py-12  rounded-2xl"
  style={{
    background: 'linear-gradient(90deg, #2667FF 20%, #6C19EF 100%)'
  }}>
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {counters.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-6xl font-bold text-white">
                {stat.currentValue}
                <span className="text-white">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-white font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCount;


