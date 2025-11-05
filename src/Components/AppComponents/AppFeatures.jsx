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
            <h4 className='font-semibold'>Smart Personalized Feed</h4>
            <p className='text-primary leading-tight lg:w-[60%]'>Our feed learns tastes and suggests daily recipes you'll actually make.</p>
      </div>
</div>
<div className='flex items-center space-x-4 mt-6'>
      <div className='border border-gray-300 w-fit p-4 rounded-full'>
        <FaRegLightbulb className=' text-xl' />
      </div>
      <div className='space-y-1'>
            <h4 className='font-semibold'>Weekly Meal Planner</h4>
            <p className='text-primary leading-tight lg:w-[60%]'>Plan meals on a visual calendar, add recipes to days and save special menus.</p>
      </div>
</div>
<div className='flex items-center space-x-4 mt-6'>
      <div className='border border-gray-300 w-fit p-4 rounded-full'>
        <CiSettings className=' text-2xl' />
      </div>
      <div className='space-y-1'>
            <h4 className='font-semibold'>Easy Profile & Privacy</h4>
            <p className='text-primary leading-tight lg:w-[60%]'>Manage account, adjust dietary settings, control privacy and reach support.</p>
      </div>
</div>
      </div>
      <div className='lg:w-[50%] bg-gray-200 p-2 rounded-lg w-full'>
<img className='rounded-lg w-full' src="/Projects/Mobile Application/YumBites/App Portfolio Thumbnail.webp" alt="" />
      </div>
    </div>

    </div>
  )
}

export default AppFeatures
