import React from 'react'
import AboutUsSection1 from '../Components/AboutUsComponent/AboutUsSection1'
import AboutUsSection2 from '../Components/AboutUsComponent/AboutUsSection2'
import AboutTestimonial from '../Components/AboutUsComponent/AboutTestimonial'
import TeamMembers from '../Components/AboutUsComponent/TeamMembers'

function AboutUsPage() {
  return (
    <div className=''>
      <AboutUsSection1/>
      <TeamMembers/>
      <AboutUsSection2/>
      <AboutTestimonial/>
    </div>
  )
}

export default AboutUsPage
