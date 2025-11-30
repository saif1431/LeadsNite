import React from 'react'
import { TiTick } from "react-icons/ti";
import img from '/AboutImage/img6.png'

function AboutUsSection2() {
  return (
    <div className='bg-[#EAF1FA]  mt-18  px-4  py-24'>
    <div className='flex flex-col lg:flex-row max-w-7xl mx-auto items-start justify-between lg:px-8 px-4'>
        <div className='lg:w-[70%] w-full'>
            <h2 className='text-3xl font-bold font-satochi'>What Sets us Apart</h2>
            <div className=' mt-12'>
                 <div className='flex items-start gap-8'>
                   <div className='rounded-full p-3 check-list '>
                        <TiTick className='text-white text-3x' />
                  </div>
                  <div className='space-y-4'>
                    <h5 className='text-xl font-bold'>Free Consultation
</h5>
                  <p className='lg:w-[80%] font-medium leading w-full'>Unlike others, we offer startups a complimentary consultation to discuss your ideas and strategies, helping you plan the best path forward—no payment required.</p>
                  </div>
                 </div>
                 <hr className='mt-4 border-gray-300 w-[60%]' />
                  <div className='flex  items-start gap-8 mt-6'>
                   <div className='rounded-full p-3 check-list '>
                        <TiTick className='text-white ' />
                  </div>
                  <div className='space-y-4'>
                    <h5 className='text-xl font-bold'>Special Deals
</h5>
                  <p className='lg:w-[80%] font-medium leading w-full'>We offer special discounts and customized packages for new clients, ensuring they receive exceptional value</p>
                  </div>
                 </div>
            </div>
      </div>
      <div className='lg:w-[65%] relative w-full lg:text-end  flex flex-col mt-12 justify-between lg:mt-0' >
        <h2 className='text-2xl  font-bold'>"Empowering Dreams, Igniting Success"</h2>
        <p className='lg:text-3xl text-2xl font-medium mt-3 '>SINCE 2018</p>
      <div className=''>
          <img className='lg:w-[80%] xl:w-[100%] lg:absolute  lg:top-[23rem] xl:top-[8rem]' src={img} alt="" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUsSection2
