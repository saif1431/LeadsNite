import React, { useState } from 'react';
import Websites from '../TechnologiesComponent/Websites';
import MobileApps from '../TechnologiesComponent/MobileApps';
import MachineLearning from '../TechnologiesComponent/MachineLearning';
import DigitalMarketing from '../TechnologiesComponent/DigitalMarketing';
import UiDesign from '../TechnologiesComponent/UiDesign';
import MvpService from '../TechnologiesComponent/MvpService';



function Technologies() {
  const [activeTab, setActiveTab] = useState('website');

  const commissionRates = [
    {
      id: 1,
      tier: 'Standard Rate',
      rate: '15%',
    },
    {
      id: 2,
      tier: 'Premium Rate',
      rate: '25%',
    },
    {
      id: 3,
      tier: 'Enterprise Rate',
      rate: '35%',
    },
  ];

  const qualificationCriteria = [
    {
      id: 1,
      title: 'Business registered in Europe',
    },
    {
      id: 2,
      title: 'Two or more years of operation',
    },
    {
      id: 3,
      title: 'Experience with small-batch production',
    },
  ];

  const emailTemplates = [
    {
      id: 1,
      name: 'Order Confirmation',
      subject: 'Your Order Has Been Confirmed',
    },
    {
      id: 2,
      name: 'Prototype Feedback Request',
      subject: 'Feedback Request for Prototype',
    },
    {
      id: 3,
      name: 'Payout Processed',
      subject: 'Your Payout Has Been Processed',
    },
  ];

  return (
    <div className='  '>
      <h1 className='title'>Technologies We Use
</h1>
 
    <div className="bg-white w-full flex items-center justify-center lg:h-[300px] h-fit py-12">
  
      <div className="lg:max-w-8xl mx-auto lg:py-12  px-4 w-full">
        {/* Header Tabs */}
        <div className="lg:flex grid grid-cols-3 justify-items-center justify-center px-4 lg:gap-28 gap-2 mb-6  text-lg ">
          <button
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 flex   cursor-pointer whitespace-nowrap transition-colors  ${ 
              activeTab === 'website'
                ? 'text-[#01ACE4] border-b-2 w-12 flex items-center justify-center border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4]  w-12 flex items-center justify-center hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveTab('mobileApp')}
            className={`px-4 py-2 cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'mobileApp'
                ? 'text-[#01ACE4] w-12 flex items-center justify-center  border-b-2 border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] w-12 flex items-center justify-center hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => setActiveTab('machineLearning')}
            className={`px-4 py-2 cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'machineLearning'
                ? 'text-[#01ACE4] border-b-2 w-12 flex items-center justify-center border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] w-12 flex items-center justify-center hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            AI Agents
          </button>
          <button
            onClick={() => setActiveTab('digitalMarketing')}
            className={`px-4 py-2 cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'digitalMarketing'
                ? 'text-[#01ACE4] border-b-2 w-12 flex items-center justify-center border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] w-12 flex items-center justify-center hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            UI/UX Design
          </button>
          <button
            onClick={() => setActiveTab('uiDesign')}
            className={`px-4 py-2 cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'uiDesign'
                ? 'text-[#01ACE4] border-b-2 w-12 flex items-center justify-center border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] w-12 flex items-center justify-center hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
           SaaS
          </button>
          <button
            onClick={() => setActiveTab('mvp')}
            className={`px-4 py-2 cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'mvp'
                ? 'text-[#01ACE4] border-b-2 w-12 flex items-center justify-center border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] w-12 flex items-center justify-center hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
           MVP
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-md p-4">
          {/* Render Components Based on Active Tab */}
          {activeTab === 'website' && <Websites data={commissionRates} />}
          {activeTab === 'mobileApp' && <MobileApps data={commissionRates} />} {/* Assuming similar data structure */}
          {activeTab === 'machineLearning' && <MachineLearning data={qualificationCriteria} />}
          {activeTab === 'digitalMarketing' && <DigitalMarketing data={emailTemplates} />}
          {activeTab === 'uiDesign' && <UiDesign data={emailTemplates} />} {/* Assuming similar data structure */}
          {activeTab === 'mvp' && <MvpService data={emailTemplates} />} {/* Assuming similar data structure */}
        </div>
      </div>
    </div>
       </div>
  );
}

export default Technologies;