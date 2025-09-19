import React from 'react'
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi'



function JoinUs() {
  return (
    <div className='bg-white max-w-7xl mx-auto h-fit  px-6 md:py-32 py-12   '>
        <div className='text-center'>
           <h1 className='text-3xl md:text-4xl font-bold text-center mb-4'>Why LeadsNite</h1>
           <p>All the advantages of partnering with us.</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
          <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
          </div>
          <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
          </div>
          <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200'>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto consequatur accusantium laudantium aut.</li>
          </div>
        </div>

        <div className='flex items-center justify-center mt-12'>
          <button style={{borderRadius: '9999px'}} className='btn rounded-full flex items-center gap-3'>Lets Talk 
            <span><BiRightArrowAlt className="text-xl" /></span>
          </button>
        </div>
    </div>
  )
}

export default JoinUs
