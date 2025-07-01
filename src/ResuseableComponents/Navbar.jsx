import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaTimes, FaBars } from 'react-icons/fa';
import logo from '/logo.png';
import altLogo from '/AboutImage/logo2.png'; // Import your alternative logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if current route is home
  const isHome = location.pathname === '/';
  // Check if current route is any other page
  const isOtherPage = !isHome;

  return (
    <>
      <nav className={` py-5 px-8 lg:px-46 md:px-20 flex items-center justify-between ${ isHome ? 'bg-primary text-white  shadow-md' : 'bg-white text-black'} `}>
        {/* Left Side - Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img 
              className='w-24' 
              src={isHome ? logo : altLogo} 
              alt="Logo" 
            />
          </Link>
        </div>

        {/* Center - Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex text-xl space-x-12 mx-auto">
          <Link 
            to="/services" 
            className={`font-bold transition ease-in duration-100 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/about-us" 
            className={`font-bold transition ease-in duration-100 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/about-us" 
            className={`font-bold transition ease-in duration-100 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`font-bold transition ease-in duration-200 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side - LinkedIn Logo */}
        <div className="hidden md:block flex-shrink-0">
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none ${
            isHome ? 'text-white' : 'text-blue-100'
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#00ACE4] shadow-md ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 border-b border-gray-500 pt-2 pb-4 space-y-4">
          <Link 
            to="/services" 
            className={`block font-medium py-2 ${
              isHome ? 'text-white hover:text-black' : 'text-blue-100 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="" 
            className={`block font-medium py-2 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/about-us" 
            className={`block font-medium py-2 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`block font-medium py-2 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`block font-medium py-2 ${
              isHome ? 'text-white hover:text-black' : 'text-black hover:text-[#00A9E0]'
            }`}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;