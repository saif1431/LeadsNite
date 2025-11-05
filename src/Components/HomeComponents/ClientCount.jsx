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
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
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
    const duration = 2; // seconds
    const interval = 16; // ms (approx 60fps)
    const steps = (duration * 1000) / interval;
    
    let currentStep = 0;

    const intervalId = setInterval(() => {
      currentStep++;
      
      // Easing function for smooth animation (ease-out effect)
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      // Sab counters ko ek sath update karo
      setCounters(prev => prev.map(stat => ({
        ...stat,
        currentValue: Math.min(
          Math.floor(easedProgress * stat.value),
          stat.value
        )
      })));

      if (currentStep >= steps) {
        clearInterval(intervalId);
        // Final values set karo
        setCounters(prev => prev.map(stat => ({
          ...stat,
          currentValue: stat.value
        })));
      }
    }, interval);

    return () => clearInterval(intervalId);
  };

  return (
    <div className='w-full px-4 h-fit max-w-7xl mx-auto'>
      <div 
        ref={sectionRef}
        className="md:py-24 py-12 rounded-2xl"
        style={{
          background: 'linear-gradient(90deg, #03ABE4 20%, #222222 100%'
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
                delay: 0,
                ease: "easeOut"
              }}
              className="text-center p-6"
            >
              <div className="lg:text-6xl text-4xl font-bold text-white mb-2">
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hasAnimated && stat.currentValue === stat.value ? [1, 1.1, 1] : 1 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 2
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