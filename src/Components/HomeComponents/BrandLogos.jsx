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
  '/brandLogo/14.png',
  '/brandLogo/15.png',
  '/brandLogo/16.png',
  '/brandLogo/17.png',
  '/brandLogo/18.png',
  '/brandLogo/19.png',
];

const BrandLogos = () => {
  const duplicatedLogos = [...logos, ...logos];
  const speed = window.innerWidth < 768 ? 30 : 20; 


  return (
    <div
      className="relative lg:mt-18 w-[90%] mx-auto overflow-hidden py-8"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 10%, black 25%, black 75%, rgba(0,0,0,0.6) 90%, transparent 100%)',
      }}
    >
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 lg:px-12 px-4">
            <img
              src={logo}
              alt={`Client logo ${index % logos.length + 1}`}
              className="h-10 object-contain transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandLogos; 
