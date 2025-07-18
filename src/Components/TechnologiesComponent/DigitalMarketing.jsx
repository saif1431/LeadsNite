import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/TechnologiesLogo/DigitalLogo/1.jpg',
  '/TechnologiesLogo/DigitalLogo/2.png',
  '/TechnologiesLogo/DigitalLogo/5.png',  
  '/TechnologiesLogo/DigitalLogo/6.png',
  '/TechnologiesLogo/DigitalLogo/7.png',
  '/TechnologiesLogo/DigitalLogo/10.png',
  '/TechnologiesLogo/DigitalLogo/11.png',
  '/TechnologiesLogo/DigitalLogo/12.png',
  '/TechnologiesLogo/DigitalLogo/13.png',
  '/TechnologiesLogo/DigitalLogo/8.png',
  '/TechnologiesLogo/DigitalLogo/9.png',
  '/TechnologiesLogo/DigitalLogo/3.svg',
  '/TechnologiesLogo/DigitalLogo/4.svg',


  // Add more logos as needed
];

const DigitalMarketing = () => {
  // Duplicate the logos array to create seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative max-w-4xl mx-auto w-full py-4 overflow-hidden  "
    style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-white-50 via-transparent to-white-50 z-10 pointer-events-none" />
      
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-100%'], // Moves from 0 to -100% of container width
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity, // Infinite loop
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-20">
            <img 
              src={logo} 
              alt={`Client logo ${index % logos.length + 1}`} 
              className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DigitalMarketing;





 
 
 
