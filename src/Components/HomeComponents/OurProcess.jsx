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
    description: "We dive deep into understanding your business goals, target audience, and project requirements through research and stakeholder interviews. Based on our findings, we develop a strategic roadmap that aligns with your objectives and creates a clear path to success.",
    icon: Search,
  },
  {
    id: 2,
    title: "Design",
    description: "Our creative team crafts user-centered designs that are visually stunning and deliver exceptional user experiences.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "We bring designs to life using cutting-edge technologies and best practices. Rigorous quality assurance ensures flawless performance across all devices and browsers.",
    icon: Code,
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We handle deployment smoothly and provide ongoing support to ensure your project continues to succeed",
    icon: BiSupport,
  },
];

const HowWeWork = () => {
  return (
<div>
      <section className="py-20 px-4 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="lg:text-4xl text-3xl  font-bold text-gray-900 mb-6 tracking-tight">
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
                <div className={`absolute top-0 ${isEven ? 'right-0 lg:right-1/2 lg:mr-8' : 'left-0 lg:left-1/2 lg:ml-8'} text-[12rem] lg:text-[16rem] font-black text-blue-600/5 leading-none pointer-events-none select-none`}>
                  {step.id}
                </div>
                
                {/* Central Connection Point */}
                <div className="absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full transform -translate-x-1/2 hidden lg:block shadow-lg border-4 border-white z-10"></div>
                
                {/* Content Container */}
                <div className={`relative z-20 ${isEven ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
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
                    <p className="text-md text-gray-600 leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* Step Indicator */}
                    <div className={`flex items-center gap-3 ${isEven ? 'lg:justify-end' : ''}`}>
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
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
   <div className="text-center bg-white  pt-16 px-4">
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
</div> 
);
};

export default HowWeWork;