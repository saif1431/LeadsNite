import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/TechnologiesLogo/websiteLogo/angular.png',
  '/TechnologiesLogo/websiteLogo/essential.png',
  '/TechnologiesLogo/websiteLogo/javascript.png',
  '/TechnologiesLogo/websiteLogo/jquery.png',
  '/TechnologiesLogo/websiteLogo/mysql.png',
  '/TechnologiesLogo/websiteLogo/nodejs.png',
  '/TechnologiesLogo/websiteLogo/php.png',
  '/TechnologiesLogo/websiteLogo/pngwing.png',
  '/TechnologiesLogo/websiteLogo/react.png',
  '/TechnologiesLogo/websiteLogo/woo-commerce.png',
  '/TechnologiesLogo/websiteLogo/wp-form.png',
  '/TechnologiesLogo/websiteLogo/yoast.png',


  // Add more logos as needed
];

const Websites = () => {
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

export default Websites;





