import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GraphicsFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your SaaS service stand out?",
      answer: "We focus on building scalable, secure, and user-friendly SaaS products that are customized for your business, not just generic templates."
    },
    {
      question: "How do you ensure data security in your SaaS solutions?",
      answer: "We implement best practices such as encryption, secure authentication, and compliance with industry standards to keep your data safe."
    },
    {
      question: "Can you integrate SaaS with our existing business systems?",
      answer: "Yes, we specialize in smooth API integration and cloud migration, ensuring your SaaS works seamlessly with your current tools."
    },
    {
      question: "How do you handle scalability as our business grows?",
      answer: "Our SaaS solutions are built on cloud infrastructure, which allows easy scaling of resources based on demand without performance issues."
    },
    {
      question: "Do you provide support after the SaaS product is launched?",
      answer: "Absolutely. We offer ongoing maintenance, updates, and technical support to ensure your SaaS product continues to perform optimally."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-satochi font-bold mb-6">Questions about service</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="pb-4 last:border-0">
            <div 
              className="flex items-center border-b-2 justify-between cursor-pointer transition duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start mb-6">
                <h3 className="lg:text-xl text-md font-bold">{faq.question}</h3>
              </div>
              <div className="transition-transform duration-300">
                {activeIndex === index ? (
                  <FaChevronUp className="font-thin ml-2 transition-all duration-300" />
                ) : (
                  <FaChevronDown className="ml-2 transition-all duration-300" />
                )}
              </div>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-96' : 'max-h-0'
            }`}>
              {activeIndex === index && (
                <p className="mt-4 text-primary font-semibold">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicsFaqs;