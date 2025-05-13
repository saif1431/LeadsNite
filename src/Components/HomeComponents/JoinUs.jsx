import React from 'react'
import img from '/joinUsImg.jpg'


function JoinUs() {
  return (
    <div className='bg-secondary lg:h-[500px] h-fit py-12 flex items-center justify-center l px-6'>
          <div className=' max-w-7xl mx-auto flex items-center justify-center lg:flex-row flex-col lg:gap-32 gap-12'>
      <div className='lg:w-1/2 w-full rounded-lg '>
            <img className='rounded-lg' src={img} alt="" />
      </div>
      <div className='lg:w-1/2 w-full space-y-6'>
            <h1 className='lg:text-4xl text-3xl font-bold'>Ready to Write Your Own Success Story?</h1>
            <p className='text-primary text-md font-medium'>Join us on a remarkable journey of growth and achievement, where we'll be there every step of the way, right from the initial stages of planning your business to implementing strategic digital marketing techniques.

</p>
<p className='text-primary text-md font-medium'>With intuitive design and expert services, we'll help you write your own story about how you reached unimaginable heights. Together, we'll navigate through challenges and celebrate milestones.</p>
      </div>
    </div>
    </div>
  )
}

export default JoinUs
