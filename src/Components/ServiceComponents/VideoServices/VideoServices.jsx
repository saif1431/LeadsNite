import React from 'react'
import RightSection from '../WebServices/RightSection'
import VideoDescription from './VideoDescription'
import VideoSection1 from './VideoSection1'
import VideoFaqs from './VideoFaqs'
import UiDesign from '../../TechnologiesComponent/UiDesign'

function VideoServices() {
  return (
     <div className='max-w-7xl mx-auto px-4  lg:py-46 py-16 flex flex-col lg:flex-row items-start justify-evenly gap-24'>
    <div className='lg:w-[65%] w-full space-y-12'>
      <VideoSection1/>
      <div className='w-[80%] mx-auto lg:mt-24 mt-12'>
        <UiDesign/>
      </div>
      <VideoDescription/>
      <VideoFaqs/>
    </div>
    <div className='lg:w-[30%] w-full'>
      <RightSection/>
    </div>
    </div>
  )
}

export default VideoServices
