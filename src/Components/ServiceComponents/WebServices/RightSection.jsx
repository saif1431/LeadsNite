import React from 'react'
import { Link } from 'react-router-dom'
import { BiRightArrowAlt } from 'react-icons/bi'

function RightSection() {
  const handleBookNow = () => {
    window.open('https://calendly.com/leadsnite-portfolio/30min', '_blank');
  };

  return (
    <div className='flex flex-col items-center gap-6 '>
      <div className='bg-[#EAF1FA] w-full px-8 flex flex-col py-16 rounded-lg space-y-4'>
        <h2 className='text-3xl font-satochi font-bold'>Need Help?</h2> 
        <p className='text-md font-medium'>Forget Forms. Call us Instead. Contact us directly for prompt support, no waiting.</p>
        <div className=''>
          <p className='lg:text-4xl text-3xl font-bold py-3'>+92 325 5176508</p>
          <a className='text-lg text-underline' href="mailto:contact@leadsnite.com">contact@leadsnite.com</a>
        </div>
          <a href="tel:+923255176508" className="btn w-fit">
                     CHAT NOW
                  </a>
      </div>
      
      <div>
        <h3 className='text-3xl font-bold'>OR</h3>
      </div>
      
      <div className='bg-[#EAF1FA] w-full px-8 flex flex-col py-16 rounded-lg space-y-4'>
        <h2 className='text-3xl font-satochi font-bold'>Plan Meet?</h2> 
        <p className='text-md font-medium'>Running Short on Time? Schedule a Meeting for Your Convenience.</p>
        <button 
          onClick={handleBookNow}
          className='btn w-fit mt-4'
        >
          Book Now
        </button>
      </div>
       <div>
        <h3 className='text-3xl font-bold'>OR</h3>
      </div>
      <div className="bg-[#EAF1FA] w-full px-8 flex flex-col py-16 rounded-lg space-y-4">
                <div className="relative">
                  {/* Background Decoration */}
                  <div className="absolute inset-0  rounded-3xl"></div>
                  
                  <div className="relative  ">
                    <h2 style={{fontWeight:'900 !important'}} className="text-3xl font-satochi font-bold mb-6">
                      Ready to Start <span className='span'>Your Project?</span>
                    </h2>
                    <p className="text-md text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                 Every great product begins with a single conversation. Share your goals with us today, and let’s start building your success story
                    </p>
                    
                    
                    <div className="flex flex-wrap gap-3  items-center">
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
    </div>
  )
}

export default RightSection