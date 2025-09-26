import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ClientCount = () => {
  const stats = [
    { id: 1, value: 130, suffix: '+', label: 'Client Count' },
    { id: 4, value: 97, suffix: '%', label: ' Project Completion' },
    { id: 2, value: 98, suffix: '%', label: 'Client Satisfaction' },
    { id: 3, value: 18, suffix: '%', label: ' Referral Rate' },
  ];

  const [counters, setCounters] = useState(
    stats.map(stat => ({ ...stat, currentValue: 0 }))
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jab element 50% visible ho jaye tab animation start kare
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      {
        threshold: 0.3, // 30% element visible hone par trigger
        rootMargin: '0px 0px -10% 0px' // Bottom se 10% margin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2.5; // seconds
    const interval = 16; // ms (approx 60fps)
    const steps = (duration * 1000) / interval;
    
    const animations = stats.map(stat => {
      const stepValue = stat.value / steps;
      let currentStep = 0;
      let currentValue = 0;

      const intervalId = setInterval(() => {
        currentStep++;
        
        // Easing function for smooth animation (ease-out effect)
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        currentValue = Math.min(
          Math.floor(easedProgress * stat.value),
          stat.value
        );

        setCounters(prev => prev.map(item => 
          item.id === stat.id ? { ...item, currentValue } : item
        ));

        if (currentStep >= steps) {
          clearInterval(intervalId);
          // Final value set karne ke liye
          setCounters(prev => prev.map(item => 
            item.id === stat.id ? { ...item, currentValue: stat.value } : item
          ));
        }
      }, interval);

      return intervalId;
    });

    return () => animations.forEach(clearInterval);
  };

  return (
    <div className='w-full px-4 h-fit max-w-7xl mx-auto'>
      <div 
        ref={sectionRef}
        className="md:py-24 py-12 rounded-2xl"
        style={{
          background: 'linear-gradient(90deg, #2667FF 20%, #6C19EF 100%)'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {counters.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: hasAnimated ? 1 : 0, 
                y: hasAnimated ? 0 : 30 
              }}
              transition={{ 
                duration: 0.6, 
                delay: hasAnimated ? stat.id * 0.15 : 0,
                ease: "easeOut"
              }}
              className="text-center p-6"
            >
              <div className="text-6xl font-bold text-white mb-2">
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hasAnimated && stat.currentValue === stat.value ? [1, 1.1, 1] : 1 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 2.8 // Counting complete hone ke baad
                  }}
                >
                  {stat.currentValue}
                </motion.span>
                <span className="text-white ml-1">{stat.suffix}</span>
              </div>
              <div className="text-white font-medium text-lg opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCount;