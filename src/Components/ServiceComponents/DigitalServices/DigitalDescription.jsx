import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function DigitalDescription() {
  return (
 <div className='space-y-12'>
       <div className='space-y-4'>
             <h1 className='text-4xl font-bold'>Digital marketing</h1>
             <p className='text-primary font-semibold'>Our digital marketing service propels your brand to the forefront of the online landscape, connecting you with your target audience effectively. Through strategic planning and innovative tactics, we enhance your online presence and drive tangible results for your business.</p>
       </div>
       <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
             <div className='lg:w-[50%] w-full'>
                   <h2 className='text-3xl font-bold'>Included Services</h2>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                        Advertisement Campaigns

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                        Content Creation
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                     Social Media Management
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                     SEO Optimization
                   </p>
             </div>
             <div className='lg:w-[50%] w-full space-y-4'>
                   <h1 className='text-3xl font-bold'>The Challange
 </h1>
 <p className='font-medium leading-relaxed'>Digital marketing is hard because things keep changing. It’s tough to stand out online and keep people interested. Plus, figuring out if your marketing is working, tracking performance and measuring ROIs can be really tricky, especially for small businesses.</p>
             </div>
       </div>
 
       <div className='space-y-4'>
             <h1 className='text-3xl font-bold'>
 What we do?</h1>
 <p className='font-medium text-primary'>We tackle these challenges by crafting tailored digital marketing strategies that resonate with your audience and align with your business goals. Our expertise in social media management and SEO ensures that your brand remains visible and relevant. Through targeted PPC campaigns and compelling content creation, we drive traffic and conversions, ultimately helping you achieve measurable success in the digital realm. With our guidance, you can navigate the complexities of digital marketing with ease and achieve sustainable growth for your business.</p>
       </div>
     </div>
  )
}

export default DigitalDescription
