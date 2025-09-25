import React, { useState } from 'react';
import Button from '../ResuseableComponents/Button';
import { BsFacebook, BsFillSendFill, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ResponseTimeSection from '../Components/ContactComponents/ResponseTimeSection';
import ContactFaqs from '../Components/ContactComponents/ContactFaqs';

function ContactUs({padding}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    form: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
        form: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
      form: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Please fill out this field';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please fill out this field';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please fill out this field';
      isValid = false;
    }

    if (!isValid) {
      newErrors.form = 'One or more fields have an error. Please check and try again.';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
  };

  return (
    <>
      <div className={`${padding} max-w-7xl mx-auto lg:py-32 py-12 gap-6 flex flex-col md:flex-row items-center  justify-between`} style={{backgroundImage: "url(/map.png)"}}>
        <form onSubmit={handleSubmit} className='bg-white  shadow-xl py-32 px-16 space-y-6'>
          <h2 className='lg:text-4xl text-3xl font-bold'>Ask us Anything</h2>
          
          <div>
            <input 
              type="text" 
              name="name"
              placeholder='Name' 
              className='border-b border-gray-300 w-full outline-none px-2 py-2' 
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='w-full'>
              <input 
                type="text" 
                name="email"
                placeholder='Email*' 
                className='border-b border-gray-300 w-full outline-none px-2 py-2' 
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className='w-full'>
              <input 
                type="text" 
                name="phone"
                placeholder='Phone' 
                className='border-b border-gray-300 w-full outline-none px-2 py-2' 
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
          
          <div>
            <textarea 
              name="message"
              className='border-b border-gray-300 w-full outline-none px-2 py-2' 
              placeholder='Tell Us About Project'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          
          
          <button 
            type="submit"
            className='px-8 flex items-center gap-4 py-4 text-lg font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-all ease-in duration-200'
          >
            <BsFillSendFill />
            Get in Touch
          </button>
          {errors.form && (
            <p className=" border-2 p-4 border-amber-300 text-sm mt-1">{errors.form}</p>
          )}
        </form>

        <div className='space-y-8'>
              <h1 className='lg:text-4xl text-3xl font-bold'>Contact Information</h1>
              <p className='flex flex-col gap-1'>
                    <span>Unlock the door to connect with ease!
</span>
<span>Reach out via any of the channels below</span>
              </p>
<div className='flex items-start flex-col lg:flex-row lg:gap-24 gap-6'>
     <div className='space-y-6'>
           <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Phone</h4>
              <span className='text-lg'>+92 325 5176508</span>
        </div>
        <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Official Email
</h4>
              <span className='text-lg'>contact@leadsnite.com</span>
        </div>
     </div>
     <div className='space-y-6'>
          <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Location
</h4>
              <span className='text-lg'>Wah Cantt, Pakistan

</span>
        </div>

        <div className='space-y-4'>
              <h4 className='font-bold text-xl'>Follow Us
</h4>
              <div className='flex items-center gap-4'>
                    {/* <FaFacebookF  className='text-5xl rounded-md border-2 border-black p-2 hover:text-[#01ACE4] hover:border-[#01ACE4]' />
                    <FaXTwitter   className='text-5xl rounded-md border-2 border-black p-2 hover:text-[#01ACE4] hover:border-[#01ACE4]'  />
                    <FaInstagram  className='text-5xl rounded-md border-2 border-black p-2 hover:text-[#01ACE4] hover:border-[#01ACE4]' /> */}
                    <a target='_blank' href="https://www.linkedin.com/company/leadsnite/">
                      <FaLinkedinIn   className='text-5xl rounded-md border-2 border-black p-2 hover:text-[#01ACE4] hover:border-[#01ACE4]'/>
                    </a>
              </div>
        </div>
     </div>
</div>
        </div>
      </div>

      {/* Response Time Section */}
     <ResponseTimeSection/>
     <ContactFaqs/>
    </>
  );
}

export default ContactUs;