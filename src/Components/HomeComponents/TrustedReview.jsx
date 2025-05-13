import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/reviewImg/img1.png',
  '/reviewImg/img2.png',
  '/reviewImg/img3.png',
  '/reviewImg/img4.png',

  // Add more logos as needed
];

const TrustedReview = () => {
  // Duplicate the logos array to create seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
      <div className='bg-white py-12'>
                <div className='text-center text-4xl font-bold '> 
            <h1>Trusted Reviews</h1>
      </div>
     
    <div className="relative mt-6 lg:w-[90%] w-full mx-auto overflow-hidden py-8 ">
  
      <div className="" />
      
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
          <div key={index} className="border border-black rounded-lg gap-4 flex-shrink-0 ml-6 p-2 lg:w-[50%] w-full">
            <img 
              src={logo} 
              alt={`Client logo ${index % logos.length + 1}`} 
              className="lg:h-80 w-full  object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>

    </div>
     </div>
  );
};

export default TrustedReview;





