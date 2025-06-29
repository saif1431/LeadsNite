import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '/backgroundImg1.png';
import img1 from '/HomeImage/1-1.jpg';
import img2 from '/HomeImage/d1.jpg';
import img3 from '/HomeImage/d2.jpg';

function HeroSection() {
  // Original text animations (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const headingVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const paragraphVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1.0,
      },
    },
  };

  const lineVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1.5,
      },
    },
  };

  // New image animations only
  const img2Animation = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 2.0
      }
    }
  };

  const img1Animation = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 2.3
      }
    }
  };

  const img3Animation = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 2.6
      }
    }
  };

  return (
    <div className='md:h-[160vh] h-[90vh] xl:h-[150vh] bg-none '>
      <section 
        className="relative h-[80vh] md:h-[158vh] lg:h-[160vh] xl:h-[145vh] bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-[55%] text-center px-4 text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="lg:text-6xl text-3xl leading-tight md:text-6xl font-bold mb-4"
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
              className="text-lg md:text-3xl font-semibold mb-4 max-w-2xl"
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
                    delay: 2.0,
                  }
                }
              }}
            >
              We're here for you!
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      
      <div className='relative'>
        <motion.div 
          className='absolute lg:bottom-84 bottom-16  z-10 left-1 lg:left-64 bg-white lg:w-[10%] w-[30%] p-1 border rounded-xl lg:rounded-3xl overflow-hidden border-gray-100'
          initial="hidden"
          animate="visible"
          variants={img2Animation}
        >
          <img src={img2} alt="" />
        </motion.div>
        
        <motion.img 
          className='absolute  shadow-lg rounded-lg bottom-1  left-1/2 lg:transform -translate-x-1/2 lg:w-[60%] w-[90%]'
          src={img1} 
          alt=""
          initial="hidden"
          animate="visible"
          variants={img1Animation}
        />
        
        <motion.div 
          className='absolute z-10 left-1/2 transform -translate-x-1/2 bg-white lg:w-[20%] w-[40%]  -bottom-20 p-1 border rounded-3xl overflow-hidden border-gray-100 shadow-md'
          initial="hidden"
          animate="visible"
          variants={img3Animation}
        >
          <img className='w-full' src={img3} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;