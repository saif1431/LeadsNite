

import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function LetsTalk() {
  return (
<div className="text-center bg-secondary pt-16 px-4">
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0  rounded-3xl"></div>
            
            <div className="relative py-16 px-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-md text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our proven process can bring your vision to life. 
                Get in touch today for a free consultation and project estimate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                onClick={() => window.scrollTo(0, 0)}
                to="/about-us" className="btn2">
                  About Us
                </Link>
                <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/contactUs" className="btn flex items-center">
                  Lets Talk
                  <BiRightArrowAlt className="ml-2 text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div> 
  )
}

export default LetsTalk
