import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function MachineDescription() {
  return (
 <div className='space-y-12'>
       <div className='space-y-4'>
             <h1 className='text-4xl font-bold'>AI Agents</h1>
             <p className='text-primary font-semibold'>Our AI agents service empowers your business to make smarter decisions and automate workflows based on intelligent automation. By utilizing advanced AI technologies, we build custom agents that handle tasks efficiently, integrate with your systems, and enhance productivity.</p>
       </div>
       <div className='flex items-start justify-between flex-col lg:flex-row gap-4'>
             <div className='lg:w-[50%] w-full'>
                   <h2 className='text-3xl font-bold'>Included Services</h2>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                         No-Code AI Agent 

                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                         Coded Custom AI Agents
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                        Data Integration and Automation
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                       Chat Bots and Conversational AI

 
                   </p>
                   <p className='flex items-center gap-3 mt-4 font-semibold text-primary'>
                         <IoMdCheckmark className='text-blue-600' />
                      OpenAI API Integration

 
                   </p>
             </div>
             <div className='lg:w-[50%] w-full space-y-4'>
                   <h1 className='text-3xl font-bold'>The Challange
 </h1>
 <p className='font-medium leading-relaxed'>In the world of AI agents, there are many hurdles to overcome. We often face problems with integration compatibility, ensuring agent reliability, and deciding which tools or frameworks to use. Plus, setting up and keeping AI agent systems running smoothly can be tricky with technology always changing.</p>
             </div>
       </div>
 
       <div className='space-y-4'>
             <h1 className='text-3xl font-bold'>
 What we do?</h1>
 <p className='font-medium text-primary'>We address these challenges head-on by leveraging our expertise in AI development and automation. Our tailored solutions ensure that your AI agents are robust and scalable, maximizing the effectiveness of automated processes. Furthermore, we optimize performance to ensure seamless integration and operation of AI agents within your business infrastructure. With our assistance, you can overcome obstacles and achieve your objectives with confidence.</p>
       </div>
     </div>
  )
}

export default MachineDescription
