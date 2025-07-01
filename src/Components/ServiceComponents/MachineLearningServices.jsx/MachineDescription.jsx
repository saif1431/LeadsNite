import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function MachineDescription() {
  return (
 <div className='space-y-12'>
       <div className='space-y-4'>
             <h1 className='text-4xl font-bold'>Machine Learning</h1>
             <p className='text-primary font-semibold'>Our machine learning service empowers your business to make smarter decisions and predictions based on data analysis. By utilizing advanced algorithms, we extract valuable insights from your data to optimize processes and enhance performance.</p>
       </div>
       <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
             <div className='lg:w-[50%] w-full'>
                   <h2 className='text-3xl font-bold'>Included Services</h2>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                         Data Mining

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                         Web Scraping
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                         Chat Bots
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                       Open AI
 
                   </p>
             </div>
             <div className='lg:w-[50%] w-full space-y-4'>
                   <h1 className='text-3xl font-bold'>The Challange
 </h1>
 <p className='font-medium leading-relaxed'>In the world of machine learning, there are many hurdles to overcome. We often face problems with the quality of data and deciding which algorithms to use. Plus, setting up and keeping machine learning systems running smoothly can be tricky with technology always changing,</p>
             </div>
       </div>
 
       <div className='space-y-4'>
             <h1 className='text-3xl font-bold'>
 What we do?</h1>
 <p className='font-medium text-primary'>We address these challenges head-on by leveraging our expertise in data analysis and algorithm development. Our tailored solutions ensure that your data is clean and reliable, maximizing the effectiveness of predictive modeling. Furthermore, we optimize performance to ensure seamless integration and operation of ML systems within your business infrastructure. With our assistance, you can overcome obstacles and achieve your objectives with confidence.</p>
       </div>
     </div>
  )
}

export default MachineDescription
