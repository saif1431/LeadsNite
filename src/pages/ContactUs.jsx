import React, { useEffect, useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedinIn } from 'react-icons/fa';
import ResponseTimeSection from '../Components/ContactComponents/ResponseTimeSection';
import ContactFaqs from '../Components/ContactComponents/ContactFaqs';
import { useLocation } from 'react-router-dom';




function ContactUs({padding = "px-4"}) {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const location = useLocation();

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

    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
 
    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field";
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
        setFormData({ name: "", email: "", message: "" });
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
    <>
      <div className={`${padding} max-w-7xl lg:h-[70vh] mx-auto lg:py-32 py-12 gap-10 px-4  flex flex-col md:flex-row lg:items-center justify-between relative`} 
           style={{backgroundImage: "url(/map.png)"}}>
       
       <div className="bg-white lg:w-[45%] md:w-[50%] w-full shadow-xl py-10 lg:px-16 space-y-6 px-6">
        <h2 className="lg:text-4xl text-3xl font-satochi font-bold">Let's Talk Business</h2>

      

        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-b border-gray-300 w-full outline-none px-2 py-3 focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-b border-gray-300 w-full outline-none px-2 py-3 focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              className="border-b border-gray-300 w-full outline-none px-2 py-3 focus:border-blue-500 resize-none"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn w-full lg:w-fit flex items-center justify-center gap-2 mx-auto"
          >
            <BsFillSendFill className={isSubmitting ? "animate-pulse" : ""} />
            {isSubmitting ? "Sending..." : "Get in Touch"}
          </button>
        </div>
      </div>

        <div className='space-y-8'>
              <h1 className='lg:text-4xl text-3xl font-satochi font-bold'>Contact Information</h1>
              <p className='flex flex-col gap-1'>
                    <span>Unlock the door to connect with ease!</span>
                    <span>Reach out via any of the channels below</span>
              </p>
              
<div className='flex items-start flex-col lg:flex-row lg:gap-24 gap-6'>
     <div className='space-y-6'>
           <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Phone</h4>
                <a href="tel:+923255176508" className="hover:underline">
                    Phone: +92 325 5176508
                  </a>
        </div>
        <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Official Email</h4>
        <a href="mailto:contact@leadsnite.com" className="hover:underline">
                   contact@leadsnite.com
                  </a>
        </div>
     </div>
     <div className='space-y-6'>
          <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Location</h4>
              <span className='text-lg'>Wah Cantt, Pakistan</span>
        </div>

        <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Follow Us</h4>
              <div className='flex items-center gap-4'>
                    <a target='_blank' href="https://www.linkedin.com/company/leadsnite/" rel="noopener noreferrer">
                      <FaLinkedinIn className='text-5xl rounded-md border-2 border-black p-2 hover:text-[#03ABE4] hover:border-[#03ABE4] transition-colors'/>
                    </a>
              </div>
        </div>
     </div>
</div>
        </div>
      </div>

      {/* Success Popup - Fixed positioning */}
      {popup && (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white border border-gray-300 p-8 rounded-xl shadow-2xl text-center space-y-6 max-w-md w-full ">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-green-600">Success!</h3>
            <p className="text-gray-600 text-lg">
              Your message has been sent successfully! We'll get back to you soon.
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

{location.pathname === "/ContactUs" && (
        <>
          <ResponseTimeSection />
          <ContactFaqs />
        </>
      )}
    </>
  );
}

export default ContactUs;