import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function AppDescription() {
  return (
 <div className='space-y-12'>
       <div className='space-y-4'>
             <h1 className='text-4xl font-satochi font-bold'>App Development</h1>
             <p className='text-primary font-semibold'>Our app development service brings your ideas to life, creating intuitive and user-friendly applications tailored to your needs. From concept to deployment, we guide you through every step of the process, ensuring a seamless and engaging user experience.</p>
       </div>
       <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
             <div className='lg:w-[50%] w-full'>
                   <h2 className='text-3xl font-satochi font-bold'>Included Services</h2>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                        Performance Optimization

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                         API Integration
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                         App Prototyping
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                       Accessibility Compliance
 
                   </p>
             </div>
             <div className='lg:w-[50%] w-full space-y-4'>
                   <h1 className='text-3xl font-satochi font-bold'>The Challange
 </h1>
 <p className='font-medium leading-relaxed'>App development presents various challenges, including compatibility across multiple platforms, ensuring security and meeting user expectations for performance and functionality. The rapidly evolving mobile landscape necessitates staying updated with the latest technologies and trends.</p>
             </div>
       </div>
 
       <div className='space-y-4'>
             <h1 className='text-3xl font-satochi font-bold'>
 What we do?</h1>
 <p className='font-medium text-primary'>We Overcome these challenges by employing cutting-edge technologies and industry best practices. Our team works closely with you to conceptualize and design an app that aligns with your vision and objectives. Through rigorous testing and optimization, we ensure that your app delivers a smooth and reliable experience to users. With our expertise, you can overcome hurdles and launch a successful app that resonates with your audience.</p>
       </div>
     </div>
  )
}

export default AppDescription
 
