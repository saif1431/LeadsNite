import React from 'react';
import { 
  Search, 
  Target, 
  Palette, 
  Code, 
  TestTube, 
  Rocket 
} from "lucide-react";
import { BiRightArrowAlt, BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "We carefully analyze your goals, audience, and requirements through detailed research and interviews, then create a strategic roadmap designed to achieve measurable, long-term success.",
    icon: Search,
  },
  {
    id: 2,
    title: "Design",
    description: "Our creative team transforms ideas into user-friendly, visually striking designs that prioritize seamless experiences, ensuring your digital presence resonates strongly with users and enhances engagement effectively.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "We develop high-performance solutions with modern technologies, then conduct rigorous testing to guarantee flawless functionality, reliability, and compatibility across multiple platforms, devices, and web browsers.",
    icon: Code,
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We manage deployment smoothly, monitor performance closely, and provide continuous support to maintain stability, security, and growth while ensuring your project consistently delivers successful outcomes.",
    icon: BiSupport,
  },
];

const HowWeWork = () => {
  return (
<div>
      <section className="py-20 md:px-6 px-4 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="title2">
            How We Work
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven process ensures exceptional results through strategic planning, 
            creative excellence, and technical expertise. Every project follows our 
            time-tested methodology for guaranteed success.
          </p>
        </div>

        {/* Creative Process Flow */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 transform -translate-x-1/2 hidden lg:block opacity-30"></div>
          
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={step.id} 
                className={`relative mb-16 lg:mb-24 ${isEven ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}
              >
                {/* Large Step Number Background */}
                <div className={`absolute top-0 ${isEven ? 'right-0 lg:right-1/2 lg:mr-8' : 'left-0 lg:left-1/2 lg:ml-8'} text-[6rem] lg:text-[10rem] font-black text-blue-600/5 leading-none pointer-events-none select-none`}>
                  {step.id}
                </div>
                
                {/* Central Connection Point */}
                <div className="absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full transform -translate-x-1/2 hidden lg:block shadow-lg border-4 border-white z-10"></div>
                
                {/* Content Container */}
                <div className={`relative z-20 ${isEven ? 'lg:text-right lg:pr-4  xl:pr-16 lg:mb-[-100px]' : 'lg:text-left lg:pl-4  xl:pl-16 lg:mb-[-100px]'}`}>
                  <div className={`inline-block max-w-lg ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    
                    {/* Icon and Title */}
                    <div className={`flex items-center gap-4 mb-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <IconComponent size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <div className={`w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 ${isEven ? 'lg:ml-auto' : ''}`}></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-md line-clamp-3 lg:w-[90%] text-gray-600 leading-relaxed mb-8 ${isEven ? 'lg:ml-auto' : ''}`}>
                      {step.description}
                    </p>

                    {/* Step Indicator */}
                    <div className={`flex mt-4   items-center gap-3 ${isEven ? 'lg:justify-end' : ''}`}>
                      <span className="text-sm  font-semibold text-blue-600 uppercase tracking-wider">
                        Step {step.id} of {processSteps.length}
                      </span>
                      <div className="flex gap-1">
                        {Array.from({ length: processSteps.length }).map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${i <= index ? 'bg-blue-600' : 'bg-gray-300'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-1/2 ${isEven ? 'right-0 lg:right-1/2' : 'left-0 lg:left-1/2'} w-32 h-32 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-full blur-3xl transform -translate-y-1/2 ${isEven ? 'lg:translate-x-16' : 'lg:-translate-x-16'}`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
     
      </div>

    </section>
   
</div> 
);
};

export default HowWeWork;