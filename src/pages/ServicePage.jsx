import React from 'react'
import ServiceSection1 from '../Components/ServiceComponents/ServiceSection1'
import Services from '../Components/HomeComponents/Services'

function ServicePage() {
  return (
    <div className='lg:px-24 px-2  py-6'>
<ServiceSection1/>
<Services showDescriptions={true}/>
    </div>
  )
}

export default ServicePage
