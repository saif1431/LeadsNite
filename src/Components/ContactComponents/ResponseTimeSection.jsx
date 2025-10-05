import React from 'react'

function ResponseTimeSection() {
  return (
<div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='md:py-18 py-12  rounded-2xl'
        style={{
    background: 'linear-gradient(90deg, #2667FF 20%, #6C19EF 100%)'
  }}
        >
          <h2 className='text-center text-white lg:text-4xl text-3xl font-bold mb-12 font-satochi'>Our Response Time</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Email Response */}
            <div className='text-center space-y-4'>
              <div className='text-4xl font-bold text-white '>
                &lt; 1h
              </div>
              <div className='text-white text-md'>
                Email Response
              </div>
            </div>

            {/* Support Available */}
            <div className='text-center space-y-4'>
              <div className='text-4xl font-bold text-white '>
                24/7
              </div>
              <div className='text-white text-md'>
                Support Available
              </div>
            </div>

            {/* Project Proposal */}
            <div className='text-center space-y-4'>
              <div className='text-4xl font-bold text-white '>
                24h
              </div>
              <div className='text-white text-md'>
                Project Proposal
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ResponseTimeSection
