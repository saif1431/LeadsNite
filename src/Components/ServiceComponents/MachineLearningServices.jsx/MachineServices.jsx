import React from 'react'
import MachineDescription from './MachineDescription'
import Websites from '../../TechnologiesComponent/Websites'
import RightSection from '../WebServices/RightSection'
import MachineFaqs from './MachineFaqs'
import Section1Image from '../WebServices/Section1Image'
import MachineLearning from '../../TechnologiesComponent/MachineLearning'


function MachineServices() {
  return (
       <div className='lg:px-24 px-4  lg:py-46 py-16 flex flex-col lg:flex-row items-start justify-evenly gap-24'>
    <div className='lg:w-[65%] w-full space-y-12'>
      <Section1Image/>
      <div className='w-[80%] mx-auto lg:mt-24 mt-12'>
        <MachineLearning/>
      </div>
      <MachineDescription/>
      <MachineFaqs/>
    </div>
    <div className='lg:w-[30%] w-full'>
      <RightSection/>
    </div>
    </div>
  )
}

export default MachineServices
