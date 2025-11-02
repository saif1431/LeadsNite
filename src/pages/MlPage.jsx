import React from 'react'
import ServiceLayout from './ServiceLayout'
import MachineLearning from '../Components/TechnologiesComponent/MachineLearning'
import {  mlData } from "./serviceData";

function MlPage() {
  return (
    <div className='lg:px-38 px-4 md:px-20 lg:py-18 py-4'>
      <ServiceLayout data={mlData} />
      <div className="bg-secondary py-3 rounded-lg space-y-8 mt-12">
        <h2 className="text-2xl font-bold text-center">Technology Used</h2>
        <div>
          <MachineLearning />
        </div>
      </div>
    </div>
  )
}

export default MlPage
