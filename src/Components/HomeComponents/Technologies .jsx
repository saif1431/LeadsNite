import React, { useState } from 'react';
import Websites from '../TechnologiesComponent/Websites';
import MobileApps from '../TechnologiesComponent/MobileApps';
import MachineLearning from '../TechnologiesComponent/MachineLearning';
import DigitalMarketing from '../TechnologiesComponent/DigitalMarketing';
import UiDesign from '../TechnologiesComponent/UiDesign';

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
    <div>
      <h1 className='lg:text-4xl text-2xl font-bold text-center'>Technologies We Use
</h1>
 
    <div className="bg-white w-full flex items-center justify-center lg:h-[300px] h-fit py-12">
  
      <div className="max-w-7xl mx-auto lg:py-12  px-4 w-full">
        {/* Header Tabs */}
        <div className="flex lg:items-center lg:justify-center lg:gap-14 gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 font-medium whitespace-nowrap transition-colors ${
              activeTab === 'website'
                ? 'text-[#01ACE4] border-b-2 border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveTab('mobileApp')}
            className={`px-4 py-2 font-medium whitespace-nowrap transition-colors ${
              activeTab === 'mobileApp'
                ? 'text-[#01ACE4] border-b-2 border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => setActiveTab('machineLearning')}
            className={`px-4 py-2 font-medium whitespace-nowrap transition-colors ${
              activeTab === 'machineLearning'
                ? 'text-[#01ACE4] border-b-2 border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setActiveTab('digitalMarketing')}
            className={`px-4 py-2 font-medium whitespace-nowrap transition-colors ${
              activeTab === 'digitalMarketing'
                ? 'text-[#01ACE4] border-b-2 border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            Digital Marketing
          </button>
          <button
            onClick={() => setActiveTab('uiDesign')}
            className={`px-4 py-2 font-medium whitespace-nowrap transition-colors ${
              activeTab === 'uiDesign'
                ? 'text-[#01ACE4] border-b-2 border-[#01ACE4]'
                : 'text-gray-600 hover:text-[#01ACE4] hover:border-b-2 hover:border-[#01ACE4]'
            }`}
          >
            UI Design
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
        </div>
      </div>
    </div>
       </div>
  );
}

export default Technologies;