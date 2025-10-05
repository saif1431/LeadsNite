import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function VideoDescription() {
  return (
 <div className='space-y-12'>
        <div className='space-y-4'>
              <h1 className='text-4xl font-satochi font-bold'>UI/UX</h1>
              <p className='text-primary font-semibold'>Our UI/UX design service focuses on creating intuitive, engaging, and user-friendly digital experiences. We blend creativity with functionality to design interfaces that not only look appealing but also ensure smooth interactions. By understanding user behavior and business needs, we deliver designs that enhance usability, accessibility, and overall customer satisfaction.
</p>
        </div>
        <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
              <div className='lg:w-[50%] w-full'>
                    <h2 className='text-3xl font-satochi font-bold'>Included Services</h2>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                        Wireframing & Prototyping

                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                        Mobile & Web App Design

                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                      User Research & Testing


                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                     Branding & Visual Identity

                    </p>
              </div>
              <div className='lg:w-[50%] w-full space-y-4'>
                    <h1 className='text-3xl font-satochi font-bold'>The Challange
  </h1>
  <p className='font-medium leading-relaxed'>In the world of UI/UX, one of the biggest challenges is balancing aesthetics with usability. Businesses often struggle with designing interfaces that are both visually appealing and easy to navigate. Additionally, with technology constantly evolving, keeping designs relevant and user-centered can be difficult.
</p>
              </div>
        </div>
  
        <div className='space-y-4'>
              <h1 className='text-3xl font-satochi font-bold'>
  What we do?</h1>
  <p className='font-medium text-primary'>We tackle these challenges by combining design thinking, user research, and the latest design trends. Our process ensures that every design is intuitive, accessible, and aligned with your business goals. From wireframes to high-fidelity prototypes, we deliver solutions that elevate user experiences. With our UI/UX expertise, your business can stand out in the digital space and build lasting connections with users.
</p>
        </div>
      </div>
  )
}

export default VideoDescription
