import React from 'react'
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'



function JoinUs() {
  return (
    <div className='px-4 md:px-6  h-fit max-w-7xl mx-auto  md:py-32 py-12   '>
        <div className='text-center'>
           <h1 className='title font-[Satoshi]'>Why LeadsNite?</h1>
           <p>All the advantages of partnering with us.</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8 justify-items-center items-stretch'>
          <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform space-y-4 duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li><span className='font-bold'>NDA by Default</span> — All work stays confidential; private repos and encrypted keep your data secure.</li>
<li><span className='font-bold'>Compliance Ready </span> — We easily align with SOC2 or ISO standards when you share your compliance controls.
</li>
<li><span className='font-bold'>Safe Access</span> — We apply least-privilege access and Infrastructure-as-Code to ensure full system safety.
</li>
          </div>
           <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform space-y-4 duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li><span className='font-bold'>Senior-Led Teams</span> — Every developer you meet has 5+ years’ experience and strong delivery track records.

</li>
<li><span className='font-bold'>Fast Reviews </span> — All pull requests are reviewed within 12 hours; we guarantee 4-hour daily overlap</li>
<li><span className='font-bold'>Work-for-Hire IP</span> — You fully own every line of code and all outcomes delivered through our projects.

</li>
          </div>
         <div className='group cursor-pointer  overflow-hidden shadow-md transition-transform space-y-4 duration-500 hover:shadow-xl px-14 py-12 bg-white rounded-3xl border border-gray-200 '>
<li><span className='font-bold'>Top 1% Engineers</span> —  Candidates pass live coding, system design, and reference checks before joining.

</li>
<li><span className='font-bold'>Product-Driven Startups</span> —   We’re built for modern startup teams with 25 or fewer active employees.
</li>
<li><span className='font-bold'>Modern Stacks </span> —  Vue, Nuxt, Django, FastAPI, Spring, Laravel, AWS & GCP—no outdated tech here.

</li>
          </div>
        </div>

        <div className='flex items-center justify-center mt-12'>
          <Link to='contact-us'  className='btn rounded-full flex items-center gap-3'>Let's Talk 
            <span><BiRightArrowAlt className="text-xl" /></span>
          </Link>
        </div>
    </div>
  )
}

export default JoinUs
