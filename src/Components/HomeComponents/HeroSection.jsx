import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '/backgroundImg1.png';

function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Increased stagger for slower sequence
      },
    },
  };

  const headingVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5, // Slower duration
        ease: "easeOut",
        delay: 0.5, // Added delay for heading
      },
    },
  };

  const paragraphVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5, // Slower duration
        ease: "easeOut",
        delay: 1.0, // Added delay for paragraphs
      },
    },
  };

  // Variants for the individual paragraph lines
  const lineVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1.5, // Additional delay for the second line
      },
    },
  };

  return (
    <section 
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-opacity-50"></div>
      
      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl leading-tight md:text-6xl font-bold mb-4"
          variants={headingVariants}
        >
          Turn Your Startup into <br />
          Success Story!
        </motion.h1>
        
        <motion.div 
          className='mt-5'
          variants={paragraphVariants}
        >
          <motion.p 
            className="text-xl md:text-3xl font-semibold mb-4 max-w-2xl"
            variants={lineVariants}
          >
            Got a dream, Got a plan, but No Experts
          </motion.p>
          <motion.p 
            className='text-xl md:text-3xl font-semibold'
            variants={{
              ...lineVariants,
              visible: {
                ...lineVariants.visible,
                transition: {
                  ...lineVariants.visible.transition,
                  delay: 2.0, // Even more delay for the last line
                }
              }
            }}
          >
            We're here for you!
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;