import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function DigitalDescription() {
  return (
 <div className='space-y-12'>
       <div className='space-y-4'>
             <h1 className='text-4xl font-bold'>MVP Development</h1>
             <p className='text-primary font-semibold'>Our MVP (Minimum Viable Product) development service helps startups and businesses quickly transform ideas into functional products with essential features. By focusing on core functionality, we allow you to validate your concept, attract early users, and secure investment — all while saving time and reducing costs.
</p>
       </div>
       <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
             <div className='lg:w-[50%] w-full'>
                   <h2 className='text-3xl font-bold'>Included Services</h2>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                       Product Strategy & RoadMapping

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                       Wireframing & Prototyping

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                     Rapid App & Web Development

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                     MVP Testing & Validation

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                   Iteration & Scaling Support
                   </p>
             </div>
             <div className='lg:w-[50%] w-full space-y-4'>
                   <h1 className='text-3xl font-bold'>The Challange
 </h1>
 <p className='font-medium leading-relaxed'>Launching a new product can be risky, time-consuming, and costly. Many businesses struggle with deciding which features to include, how to validate their ideas, and how to balance speed with quality. Without the right approach, there’s a risk of spending heavily on a product that doesn’t meet market needs.</p>
             </div>
       </div>
 
       <div className='space-y-4'>
             <h1 className='text-3xl font-bold'>
 What we do?</h1>
 <p className='font-medium text-primary'>We tackle these challenges by focusing on lean development principles. Our team helps you identify the must-have features, build a functional MVP quickly, and test it with real users. This ensures you receive valuable feedback early on, allowing you to improve and scale the product with confidence. With our approach, you minimize risks, save resources, and accelerate your time-to-market.
</p>
       </div>
     </div>
  )
}

export default DigitalDescription
