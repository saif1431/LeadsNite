import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function GraphicsDescription() {
  return (
 <div className='space-y-12'>
        <div className='space-y-4'>
              <h1 className='text-4xl font-bold'>SaaS (Software as a Service)</h1>
              <p className='text-primary font-semibold'>Our SaaS solutions help businesses move faster, reduce costs, and scale easily by providing cloud-based applications that are accessible anytime, anywhere. With a focus on reliability, security, and performance, we design SaaS products that streamline operations, improve collaboration, and deliver a seamless user experience.
</p>
        </div>
        <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
              <div className='lg:w-[50%] w-full'>
                    <h2 className='text-3xl font-bold'>Included Services</h2>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                        Custom SaaS Development

 
                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                        Cloud Integration & Migration
                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                        API Development & Integration

                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                       Subscription & Billing Management

  
                    </p>
                    <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                          <IoMdCheckmark className='text-blue-600' />
                      SaaS Maintenance & Support
                    </p>
              </div>
              <div className='lg:w-[50%] w-full space-y-4'>
                    <h1 className='text-3xl font-bold'>The Challange
  </h1>
  <p className='font-medium leading-relaxed'>Building and maintaining SaaS products comes with unique challenges such as ensuring scalability, managing subscriptions, and keeping data secure in the cloud. Many businesses also struggle with integrating SaaS solutions into existing systems while maintaining high performance and reliability.
</p>
              </div>
        </div>
  
        <div className='space-y-4'>
              <h1 className='text-3xl font-bold'>
  What we do?</h1>
  <p className='font-medium text-primary'>We address these challenges by leveraging cloud technologies, secure architectures, and agile development practices. Our team ensures that your SaaS product is scalable, cost-effective, and easy to maintain. From initial design to deployment and post-launch support, we provide end-to-end SaaS development tailored to your business needs. With our solutions, you can focus on growth while we handle the technology.
</p>
        </div>
      </div>
  )
}

export default GraphicsDescription
