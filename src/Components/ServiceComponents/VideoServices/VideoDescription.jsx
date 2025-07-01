import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function VideoDescription() {
  return (
 <div className='space-y-12'>
        <div className='space-y-4'>
              <h1 className='text-4xl font-bold'>Video Editing</h1>
              <p className='text-primary font-semibold'>Our video editing service offers professional, polished results for your multimedia projects. With expertise in editing software and creative flair, we transform raw footage into captivating visual narratives, tailored to your needs.</p>
        </div>
        <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
              <div className='lg:w-[50%] w-full'>
                    <h2 className='text-3xl font-bold'>Included Services</h2>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                        Editing Expertise
                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                        Creative Enhancement
                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                       Multimedia Integration

                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                     Professional Finish
                    </p>
              </div>
              <div className='lg:w-[50%] w-full space-y-4'>
                    <h1 className='text-3xl font-bold'>The Challange
  </h1>
  <p className='font-medium leading-relaxed'>Video editing presents a myriad of challenges, including managing large volumes of footage, ensuring seamless transitions, and maintaining visual consistency. Additionally, achieving the desired aesthetic while adhering to project deadlines can be demanding.</p>
              </div>
        </div>
  
        <div className='space-y-4'>
              <h1 className='text-3xl font-bold'>
  What we do?</h1>
  <p className='font-medium text-primary'>We take on these challenges by combining technical proficiency with artistic vision. Our skilled editors meticulously craft each frame, ensuring smooth transitions and cohesive storytelling. With our expertise, we enhance your footage to captivate your audience and convey your message effectively. Whether it’s a promotional video, a documentary, or a creative project, we deliver professional results that exceed expectations.</p>
        </div>
      </div>
  )
}

export default VideoDescription
