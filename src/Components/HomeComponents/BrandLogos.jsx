import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/brandLogo/logo1.png',
  '/brandLogo/logo2.png',
  '/brandLogo/logo3.png',
  '/brandLogo/logo4.png',
  '/brandLogo/logo5.png',
  '/brandLogo/logo6.png',
  '/brandLogo/logo7.png',
  '/brandLogo/logo8.png',
  '/brandLogo/logo9.png',
  '/brandLogo/logo10.png',
  '/brandLogo/logo11.png',
  '/brandLogo/logo12.png',
  '/brandLogo/logo13.png',

  // Add more logos as needed
];

const BrandLogos = () => {
  // Duplicate the logos array to create seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative mt-6 w-[90%] mx-auto overflow-hidden py-8 ">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 z-10 pointer-events-none" />
      
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
          <div key={index} className="flex-shrink-0 px-12">
            <img 
              src={logo} 
              alt={`Client logo ${index % logos.length + 1}`} 
              className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandLogos;


