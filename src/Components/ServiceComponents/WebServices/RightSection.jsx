import React from 'react'
import { Link } from 'react-router-dom'

function RightSection() {
  const handleBookNow = () => {
    window.open('https://calendly.com/leadsnite-portfolio/30min', '_blank');
  };

  return (
    <div className='flex flex-col items-center gap-6 '>
      <div className='bg-[#EAF1FA] px-8 flex flex-col py-16 rounded-lg space-y-4'>
        <h2 className='text-3xl font-satochi font-bold'>Need Help?</h2> 
        <p className='text-md font-medium'>Forget Forms. Call us Instead. Contact us directly for prompt support, no waiting.</p>
        <div className=''>
          <p className='lg:text-4xl text-3xl font-bold py-3'>+92 325 5176508</p>
          <a className='text-lg text-underline' href="mailto:contact@leadsnite.com">contact@leadsnite.com</a>
        </div>
        <Link to='/contactUs' className='btn w-fit mt-4 '>ChatNow</Link>
      </div>
      
      <div>
        <h3 className='text-3xl font-bold'>OR</h3>
      </div>
      
      <div className='bg-[#EAF1FA] px-8 flex flex-col py-16 rounded-lg space-y-4'>
        <h2 className='text-3xl font-satochi font-bold'>Plan Meet?</h2> 
        <p className='text-md font-medium'>Running Short on Time? Schedule a Meeting for Your Convenience.</p>
        <button 
          onClick={handleBookNow}
          className='btn w-fit mt-4'
        >
          Book Now
        </button>
      </div>
    </div>
  )
}

export default RightSection