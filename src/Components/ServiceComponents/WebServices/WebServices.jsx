import React from 'react'
import Section1Image from './Section1Image'
import Websites from '../../TechnologiesComponent/Websites'
import RightSection from './RightSection'
import WebDescription from './WebDescription'
import WebFaqs from './WebFaqs'
import MachineSection1 from '../MachineLearningServices.jsx/MachineSection1'

function WebServices() {
  return (
    <div className='lg:px-24 px-4  lg:py-46 py-16 flex flex-col lg:flex-row items-start justify-evenly gap-24'>
    <div className='lg:w-[65%] w-full space-y-12'>
      <MachineSection1/>
      <div className='w-[80%] mx-auto lg:mt-24 mt-12'>
        <Websites/>
      </div>
      <WebDescription/>
      <WebFaqs/>
    </div>
    <div className='lg:w-[30%] w-full'>
      <RightSection/>
    </div>
    </div>
  )
}

export default WebServices
