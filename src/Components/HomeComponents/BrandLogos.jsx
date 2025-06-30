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
];

const BrandLogos = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="relative mt-12 w-[90%] mx-auto overflow-hidden py-8"
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
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-12">
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
