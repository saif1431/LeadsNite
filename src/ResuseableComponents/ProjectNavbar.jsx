import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaTimes, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // Added for animations
import logo from '/logo.png';
import altLogo from '/AboutImage/logo2.png';

const ProjectNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const menuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <div className='bg-primary'>
      <nav className={`py-5 px-4 max-w-9xl mx-auto lg:px-38 md:px-20 flex items-center justify-between ${isHome ? 'bg-primary text-white shadow-md' : 'bg-white text-black'}`}>
        {/* Logo */}
        <div className="">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img 
              className='w-24' 
              src={isHome ? logo : altLogo} 
              alt="Logo" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-xl space-x-12 mx-auto">
          <Link 
            to="/app-development" 
            className={`font-bold transition ease-in duration-100 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            App Development
          </Link>
          <Link 
            to="/web-development" 
            className={`font-bold transition ease-in duration-100 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            Web Development
          </Link>
          <Link 
            to="/machine-learning" 
            className={`font-bold transition ease-in duration-100 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            Machine Learning
          </Link>
      
        </div>
 <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`  transition ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            <FaLinkedin className="text-3xl" />
          </a>
        {/* LinkedIn & Mobile Menu Button */}
        <div className="flex items-center justify-between ">
         
          <button 
            className={`md:hidden focus:outline-none ${
              isHome ? 'text-white' : 'text-black'
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="lg:text-3xl text-2xl transition-transform duration-300" />
            ) : (
              <FaBars className="lg:text-3xl text-2xl transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Smooth Transitions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`md:hidden bg-[#00ACE4] shadow-md overflow-hidden ${
              isHome ? 'bg-primary' : 'bg-white'
            }`}
          >
            <motion.div 
              className="px-4 pt-2 pb-4 space-y-4"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              <motion.div variants={linkVariants}>
                <Link 
                  to="/app-development" 
                  className={`block font-medium py-2 ${
                    isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  App Development
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link 
                  to="web-development" 
                  className={`block font-medium py-2 ${
                    isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link 
                  to="/machine-learning" 
                  className={`block font-medium py-2 ${
                    isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Machine Learning
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectNavbar;
