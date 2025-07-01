import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function GraphicsDescription() {
  return (
 <div className='space-y-12'>
        <div className='space-y-4'>
              <h1 className='text-4xl font-bold'>Graphic Designing</h1>
              <p className='text-primary font-semibold'>Our graphic design service brings your creative vision to life with stunning visuals that captivate your audience. Whether it’s designing logos, brochures, or social media graphics, we combine artistic flair with technical expertise to deliver impactful designs tailored to your brand.</p>
        </div>
        <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
              <div className='lg:w-[50%] w-full'>
                    <h2 className='text-3xl font-bold'>Included Services</h2>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                         Logo Design
 
                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                         Brochure Design

                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                         Social Media Graphics

                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                       Branding Collateral
  
                    </p>
              </div>
              <div className='lg:w-[50%] w-full space-y-4'>
                    <h1 className='text-3xl font-bold'>The Challange
  </h1>
  <p className='font-medium leading-relaxed'>Graphic design presents various challenges, from ensuring consistency across different platforms to striking the right balance between creativity and functionality. Additionally, keeping up with design trends and software advancements can be daunting.</p>
              </div>
        </div>
  
        <div className='space-y-4'>
              <h1 className='text-3xl font-bold'>
  What we do?</h1>
  <p className='font-medium text-primary'>We address these challenges by collaborating closely with clients to understand their vision and objectives. Our team stays updated on the latest design trends and tools, ensuring that your designs are modern and relevant. We prioritize clear communication and feedback throughout the design process to ensure that the final product exceeds expectations. With our expertise, you can confidently showcase your brand with visually compelling designs that resonate with your audience.</p>
        </div>
      </div>
  )
}

export default GraphicsDescription
