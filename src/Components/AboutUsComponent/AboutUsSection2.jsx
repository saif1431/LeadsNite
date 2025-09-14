import React from 'react'
import { TiTick } from "react-icons/ti";
import img from '/AboutImage/img6.png'

function AboutUsSection2() {
  return (
    <div className='bg-[#EAF1FA]   px-4  py-24'>
    <div className='flex flex-col lg:flex-row max-w-7xl mx-auto items-start justify-between'>
        <div className='lg:w-[70%] w-full'>
            <h2 className='text-3xl font-bold'>What Sets us Apart</h2>
            <div className=' mt-12'>
                 <div className='flex items-start gap-8'>
                   <div className='rounded-full check-list flex items-center justify-center lg:w-[70px] lg:h-[53px] w-[75px] h-[30px]'>
                        <TiTick className='text-white text-xl' />
                  </div>
                  <div className='space-y-4'>
                    <h5 className='text-xl font-bold'>Free Marketing</h5>
                  <p className='lg:w-[50%] font-medium leading w-full'>Unlike others, we provide startups with complimentary marketing services, where they only pay for ads.</p>
                  </div>
                 </div>
                 <hr className='mt-4 border-gray-300 w-[60%]' />
                  <div className='flex items-start gap-8 mt-6'>
                   <div className='rounded-full check-list flex items-center justify-center lg:w-[70px] lg:h-[53px] w-[75px] h-[30px]'>
                        <TiTick className='text-white text-xl' />
                  </div>
                  <div className='space-y-4'>
                    <h5 className='text-xl font-bold'>Special Deals
</h5>
                  <p className='lg:w-[50%] font-medium leading w-full'>We offer special discounts and customized packages for new clients, ensuring they receive exceptional value</p>
                  </div>
                 </div>
            </div>
      </div>
      <div className='lg:w-[65%] w-full text-end relative flex flex-col mt-12 lg:mt-0' >
        <h2 className='text-2xl  font-bold'>"Empowering Dreams, Igniting Success"</h2>
        <p className='text-3xl font-medium mt-3 '>SINCE 2018</p>
      <div className='lg:absolute top-20 right-0 w-[100%]'>
          <img className='w-[100%]' src={img} alt="" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUsSection2
