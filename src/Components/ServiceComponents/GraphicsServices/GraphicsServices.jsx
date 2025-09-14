import React from 'react'
import RightSection from '../WebServices/RightSection'
import GraphicsSection1 from './GraphicsSection1'
import GraphicsDescription from './GraphicsDescription'
import GraphicsFaqs from './GraphicsFaqs'
import DigitalMarketing from '../../TechnologiesComponent/DigitalMarketing'

function GraphicsServices() {
  return (
  <div className='max-w-7xl mx-auto px-4  lg:py-46 py-16 flex flex-col lg:flex-row items-start justify-evenly gap-24'>
    <div className='lg:w-[65%] w-full space-y-12'>
      <GraphicsSection1/>
      <div className='w-[80%] mx-auto lg:mt-24 mt-12'>
        <DigitalMarketing/>
      </div>
      <GraphicsDescription/>
      <GraphicsFaqs/>
    </div>
    <div className='lg:w-[30%] w-full'>
      <RightSection/>
    </div>
    </div>
  )
}

export default GraphicsServices
