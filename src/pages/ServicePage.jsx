import React from 'react'
import ServiceSection1 from '../Components/ServiceComponents/ServiceSection1'
import Services from '../Components/HomeComponents/Services'

function ServicePage() {
  return (
    <div className='max-w-7xl mx-auto lg:px-8 px-4 py-6'>
<ServiceSection1/>
<Services showDescriptions={true}/>
    </div>
  )
}

export default ServicePage
