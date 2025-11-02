import React, { useEffect, useState } from 'react';
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [popup, setPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Only validate email since that's the only field in formData
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit attempt"); // Debug
    
    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending form data:", formData); // Debug
      
      const response = await fetch("https://formspree.io/f/xzzjznrv", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      console.log("Response:", response.status, response.ok); // Debug

      if (response.ok) {
        console.log("Success! Showing popup"); // Debug
        setPopup(true);
        setFormData({ email: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };



  // Auto-close popup after 5 seconds
  useEffect(() => {
    if (popup) {
      console.log("Popup is now visible"); // Debug
      const timer = setTimeout(() => {
        console.log("Auto-closing popup"); // Debug
        setPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  return (
    <div className="relative mt-24">
      {/* Footer Content */}
      <footer className="relative md:px-6 py-12 bg-[#00A9E0] text-white px-4 xl:px-24 z-10">
        <div className="flex flex-col lg:mt-4 xl:mt-0 gap-4 xl:flex-row justify-between mb-4">
          <div className=" lg:w-1/2  w-full mb-8 md:mb-0">
            <div className="">
              <a href="/" className="text-2xl font-bold text-blue-600">
                <img 
                  className='w-24' 
                  src='/logo.png' 
                  alt="Logo" 
                />
              </a>
            </div>
            <h2 className="text-xl mt-2 font-semibold">
              Turn Your Startup into Success Story!
            </h2>
            <p className="text-sm xl:w-[400px] mt-2">We develop smart digital solutions that help businesses grow, from modern web and mobile apps to powerful AI-driven platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:mt-8 xl:mt-0">
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <ul className="lg:space-y-2">
                <li><a href="/services" className="hover:underline">Service</a></li>
                <li><a href="/about-us" className="hover:underline">About Us</a></li>
                <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                <li><a href="/reviews" className="hover:underline">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/web-development" className="hover:underline">Web Development</a></li>
                <li><a href="/services/ai-agents" className="hover:underline">AI Agents</a></li>
                <li><a href="/services/app-development" className="hover:underline">App Development</a></li>
                <li><a href="/services/ui&ux-design" className="hover:underline">UI UX Design</a></li>
                <li><a href="/services/SaaS-development" className="hover:underline">SaaS Development</a></li>
                <li><a href="/services/mvp-development" className="hover:underline">MVP Development</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@leadsnite.com" className="hover:underline">
                   contact@leadsnite.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923255176508" className="hover:underline">
                    Phone: +92 325 5176508
                  </a>
                </li>
                <li>
                     <a target='_blank' href="https://www.linkedin.com/company/leadsnite/" className="text-white hover:text-gray-900 transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <p className="mb-4">Join Us to remain update</p>
              
            
              <div className=" flex">
                <div className='bg-white lg:w-[95%] w-[70%] rounded-l-md'>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="px-2 h-full rounded-l-md text-black outline-none "
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <button
                type='submit'
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className=" bg-blue-700 px-2 py-3 rounded-r-md hover:bg-blue-800 disabled:bg-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "..." : ""}</span>
                  <ArrowRight className={`h-4 w-4 text-white ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="bg-black py-4 px-4 md:px-8">
        <div className="max-w-7xl text-white space-x-4 mx-auto flex justify-center">
       <p>All rights reserved &copy; {new Date().getFullYear()} LeadsNite</p>
        </div>
      </div>
      
      {/* Success Popup */}
      {popup && (
        <div className="fixed inset-0 backdrop-blur-md  bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white border border-gray-300 p-8 rounded-xl shadow-2xl text-center space-y-6 max-w-md w-full">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-green-600">Success!</h3>
            <p className="text-gray-600 text-lg">
              Thank you for subscribing! We'll keep you updated with our latest news.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setPopup(false)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;