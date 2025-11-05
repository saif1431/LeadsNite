import React, { useState } from 'react';
import WebCard from '../Components/ShowProjectComponents/WebCard';
import AppCard from '../Components/ShowProjectComponents/AppCard';
import MlCard from '../Components/ShowProjectComponents/MlCard';

function ShowProject() {
  const [activeTab, setActiveTab] = useState('website');

  return (
    <div className='lg:px-38 px-4 md:px-20 lg:py-18 py-4'>
      <h1 className='lg:text-4xl text-2xl font-bold text-center'>Check our Completed Projects
</h1>
 
    <div className="bg-white w-full flex items-center justify-center    py-12">
  
      <div className="max-w-7xl mx-auto lg:py-12 px-4 w-full">
        {/* Header Tabs */}
        <div className="flex lg:items-center lg:justify-end  gap-6 mb-6 flex-wrap text-lg ">
          <button
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 whitespace-nowrap transition-colors  ${
              activeTab === 'website'
                ? 'btn2 '
                : 'btn'
            }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveTab('mobileApp')}
            className={`px-4 py-2  whitespace-nowrap transition-colors ${
              activeTab === 'mobileApp'
                ? 'btn2'
                : 'btn'
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => setActiveTab('machineLearning')}
            className={`px-4 py-2  whitespace-nowrap transition-colors ${
              activeTab === 'machineLearning'
                ? 'btn2'
                : 'btn  '
            }`}
          >
            Ai Agents
          </button>
       
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-md">
          {/* Render Components Based on Active Tab */}
          {activeTab === 'website' && <WebCard/>}
          {activeTab === 'mobileApp' && <AppCard/>}
          {activeTab === 'machineLearning' && <MlCard/>}
        </div>
      </div>
    </div>
       </div>
  );
}

export default ShowProject
