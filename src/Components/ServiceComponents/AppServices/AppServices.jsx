import React from 'react'
import RightSection from '../WebServices/RightSection'
import AppDescription from './AppDescription'
import AppFaqs from './AppFaqs'
import AppSection1 from './AppSection1'
import MobileApps from '../../TechnologiesComponent/MobileApps'

function AppServices() {
  return (
<div className='max-w-7xl mx-auto  px-4  lg:py-46 py-16 flex flex-col lg:flex-row items-start justify-evenly gap-24'>
    <div className='lg:w-[65%] w-full space-y-12'>
      <AppSection1/>
      <div className='w-[80%] mx-auto lg:mt-24 mt-12'>
        <MobileApps/>
      </div>
      <AppDescription/>
      <AppFaqs/>
    </div>
    <div className='lg:w-[30%] w-full'>
      <RightSection/>
    </div>
    </div>
  )
}

export default AppServices
