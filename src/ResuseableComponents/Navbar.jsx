import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTimes, FaBars } from 'react-icons/fa';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#00ACE4] shadow-md py-5 px-8 lg:px-46 md:px-20   flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img className='w-24' src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Center - Navigation Links (hidden on mobile) */}
        <div className="hidden  md:flex text-xl space-x-12 mx-auto">
          <Link to="/" className="text-white hover:text-black font-bold">
            Services
          </Link>
          <Link to="/about" className="text-white hover:text-black font-bold">
            Projects
          </Link>
          <Link to="/services" className="text-white hover:text-black font-bold">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-black font-bold">
            Contact Us
          </Link>
        </div>

        {/* Right Side - LinkedIn Logo */}
        <div className="hidden md:block flex-shrink-0">
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-black transition"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#00ACE4] shadow-md ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 border-b border-gray-500 pt-2 pb-4 space-y-4">
          <Link 
            to="/" 
            className="block text-white hover:text-black font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="block text-white hover:text-black font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/services" 
            className="block text-white hover:text-black font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block text-white hover:text-black font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-white hover:text-black font-medium py-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;