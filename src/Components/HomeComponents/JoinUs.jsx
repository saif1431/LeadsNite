import React from 'react'
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'



function JoinUs() {
  return (
    <div className='px-4 md:px-6  h-fit max-w-7xl mx-auto  md:py-32 py-12   '>
        <div className='text-center'>
           <h1 className='title font-[Satoshi]'>Why LeadsNite</h1>
           <p>All the advantages of partnering with us.</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8 justify-items-center items-stretch'>
          <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform space-y-4 duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li><span className='font-bold'>NDA by Default</span> — your work stays private; repos are private; creds are encrypted</li>
<li><span className='font-bold'>Compliance Ready </span> — we align with SOC2/ISO controls if you provide them.</li>
<li><span className='font-bold'>Safe Access</span> — least-privilege principle + Infrastructure-as-Code standards.
</li>
          </div>
           <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform space-y-4 duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li><span className='font-bold'>Senior-Led Teams</span> — every client-facing engineer has 5+ years’ experience.
</li>
<li><span className='font-bold'>Fast Reviews </span> — PRs reviewed within 12h, 4h/day guaranteed overlap.</li>
<li><span className='font-bold'>Work-for-Hire IP</span> — you own the code and outcomes.
</li>
          </div>
         <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform space-y-4 duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li><span className='font-bold'>Top 1% Engineers</span> —  pass live coding → system design → references.
</li>
<li><span className='font-bold'>Product-Driven Startups</span> —  built for teams of 25 employees.</li>
<li><span className='font-bold'>Modern Stacks </span> —  Vue/Nuxt, Python/Django/FastAPI, Java/Spring, PHP/Laravel, AWS/GCP (no WordPress/CodeIgniter)
</li>
          </div>
        </div>

        <div className='flex items-center justify-center mt-12'>
          <Link to='contactUs'  className='btn rounded-full flex items-center gap-3'>Lets Talk 
            <span><BiRightArrowAlt className="text-xl" /></span>
          </Link>
        </div>
    </div>
  )
}

export default JoinUs
