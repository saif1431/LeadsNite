import React from 'react'
import RightSection from '../WebServices/RightSection'
import Websites from '../../TechnologiesComponent/Websites'
import DigitalSection1 from './DigitalSection1'
import DigitalDescription from './DigitalDescription'
import DigitalFqs from './DigitalFqs'
import MvpService from '../../TechnologiesComponent/MvpService'


function DigitalServices() {
  return (
  <div className='max-w-7xl mx-auto px-4  lg:py-46 py-16 flex flex-col lg:flex-row items-start justify-evenly gap-24'>
    <div className='lg:w-[60%] w-full space-y-12'>
      <DigitalSection1/>
      <div className='w-[80%] mx-auto lg:mt-24 mt-12'>
        <MvpService/>
      </div>
      <DigitalDescription/>
      <DigitalFqs/>
    </div>
    <div className='lg:w-[40%] w-full'>
      <RightSection/>
    </div>
    </div>
  )
}

export default DigitalServices
