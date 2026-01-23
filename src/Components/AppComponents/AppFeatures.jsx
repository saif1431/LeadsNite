import React from 'react'
import { GrOptimize } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";

function AppFeatures({ features, featureImage }) {

      const iconMap = {
            "GrOptimize": <GrOptimize className=' text-xl' />,
            "FaRegLightbulb": <FaRegLightbulb className=' text-xl' />,
            "CiSettings": <CiSettings className=' text-2xl' />
      };

      if (!features || features.length === 0) return null;

      return (
            <div className='mt-28'>
                  <h2 className='lg:text-4xl text-2xl font-bold text-center'>Key Features</h2>

                  <div className='mt-12 flex items-center justify-between gap-12 flex-col lg:flex-row'>
                        <div className='lg:w-[50%] w-full'>
                              <h2 className='text-xl font-bold'>Carefully executed features</h2>

                              {features.map((feature, index) => (
                                    <div key={index} className='flex items-center space-x-4 mt-6'>
                                          <div className='border border-gray-300 w-fit p-4 rounded-full'>
                                                {iconMap[feature.icon]}
                                          </div>
                                          <div className='space-y-1'>
                                                <h4 className='font-semibold'>{feature.title}</h4>
                                                <p className='text-primary leading-tight lg:w-[80%]'>{feature.description}</p>
                                          </div>
                                    </div>
                              ))}

                        </div>
                        <div className='lg:w-[50%] bg-gray-200 p-2 rounded-lg w-full'>
                              <img className='rounded-lg w-full' src={featureImage} alt="App Features" />
                        </div>
                  </div>

            </div>
      )
}

export default AppFeatures
