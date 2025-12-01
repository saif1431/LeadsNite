

import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function LetsTalk() {
  return (
<div className="text-center bg-white pt-16 px-4">
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0  rounded-3xl"></div>
            
            <div className="relative py-16 ">
              <h1 style={{fontWeight:'900 !important'}} className="title2 mb-6">
                Ready to Start <span className='span'>Your Project?</span>
              </h1>
              <p className="text-md text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
           Every great product begins with a single conversation. Share your goals with us today, and let’s start building your success story
              </p>
              
              
              <div className="flex flex-wrap gap-3 justify-center items-center">
                <Link 
                onClick={() => window.scrollTo(0, 0)}
                to="/about-us" className="btn2 w-full lg:w-fit">
                  About Us
                </Link>
                <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/contact-us" className="btn w-full lg:w-fit  flex items-center text-center justify-center">
                  Let's Talk
                  <BiRightArrowAlt className="ml-2 text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div> 
  )
}

export default LetsTalk
