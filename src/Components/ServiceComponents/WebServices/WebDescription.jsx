import React from 'react'
import { IoMdCheckmark } from "react-icons/io";


function WebDescription() {
  return (
    <div className='space-y-12'>
      <div className='space-y-4'>
            <h1 className='text-4xl font-satochi font-bold'>Website Development</h1>
            <p className='text-primary font-semibold'>Our website development service helps you create a fantastic online space for your business. We design websites that look great and are easy for people to use. Our goal is to make sure your website represents your brand well and gets your message across effectively to your customers.</p>
      </div>
      <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
            <div className='lg:w-[50%] w-full'>
                  <h2 className='text-3xl font-satochi font-bold'>Included Services</h2>
                  <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                        <IoMdCheckmark className='text-blue-600' />
                        Custom Solutions
                  </p>
                  <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                        <IoMdCheckmark className='text-blue-600' />
                        Responsive Design
                  </p>
                  <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                        <IoMdCheckmark className='text-blue-600' />
                        E-commerce Integration
                  </p>
                  <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                        <IoMdCheckmark className='text-blue-600' />
                        Speed Optimization

                  </p>
            </div>
            <div className='lg:w-[50%] w-full space-y-4'>
                  <h1 className='text-3xl font-satochi font-bold'>The Challange
</h1>
<p className='font-medium leading-relaxed'>Building a website presents challenges. Ensuring it looks good on various devices, safeguarding it from hackers, and optimizing its visibility on search engines are key concerns. Additionally, maintaining its speed and smooth operation can be complex at times.</p>
            </div>
      </div>

      <div className='space-y-4'>
            <h1 className='text-3xl font-satochi font-bold'>
What we do?</h1>
<p className='font-medium text-primary'>We solve these challenges by using the latest design techniques and tools. Our websites are designed to work perfectly on phones, tablets, and computers. We make sure your website stays safe and protected from cyber threats. With our help, your website will be easy to manage, and we can even add online stores if you want to sell things. We’re here to make sure your website represents your business well and helps you connect with your customers effectively.</p>
      </div>
    </div>
  )
}

export default WebDescription
