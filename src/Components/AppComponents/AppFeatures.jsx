import React from 'react'
import { GrOptimize } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";

function AppFeatures() {
  return (
      <div className='mt-28'>
           <h2 className='lg:text-4xl text-2xl font-bold text-center'>Key Features</h2>

    <div className='mt-12 flex items-center justify-between gap-12 flex-col lg:flex-row'>
      <div className='lg:w-[50%] w-full'>
<h2 className='text-xl font-bold'>Carefully executed features</h2>
<div className='flex items-center space-x-4 mt-6'>
      <div className='border border-gray-300 w-fit p-4 rounded-full'>
        <GrOptimize className=' text-xl' />
      </div>
      <div className='space-y-1'>
            <h4 className='font-semibold'>High Optimized</h4>
            <p className='text-primary leading-tight lg:w-[60%]'>Our app features high optimization for performance and speed.</p>
      </div>
</div>
<div className='flex items-center space-x-4 mt-6'>
      <div className='border border-gray-300 w-fit p-4 rounded-full'>
        <FaRegLightbulb className=' text-xl' />
      </div>
      <div className='space-y-1'>
            <h4 className='font-semibold'>Modern Specifications</h4>
            <p className='text-primary leading-tight lg:w-[60%]'>Our app is built with modern specifications to ensure compatibility and performance.</p>
      </div>
</div>
<div className='flex items-center space-x-4 mt-6'>
      <div className='border border-gray-300 w-fit p-4 rounded-full'>
        <CiSettings className=' text-2xl' />
      </div>
      <div className='space-y-1'>
            <h4 className='font-semibold'>Unlimited Functionality</h4>
            <p className='text-primary leading-tight lg:w-[60%]'>Our app features unlimited functionality to meet all user needs.</p>
      </div>
</div>
      </div>
      <div className='lg:w-[50%] bg-gray-200 p-2 rounded-lg w-full'>
<img className='rounded-lg w-full' src="https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" />
      </div>
    </div>

    </div>
  )
}

export default AppFeatures
