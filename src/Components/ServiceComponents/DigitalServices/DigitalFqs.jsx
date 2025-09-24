import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DigitalFqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your MVP development service unique?",
      answer: "We prioritize speed and efficiency while ensuring quality. Our approach combines strategy, design, and development so you can launch a market-ready MVP faster than traditional methods."
    },
    {
      question: "How do you decide which features go into the MVP?",
      answer: "We work closely with you to identify your product’s core value and only include features that are essential for testing and validation."
    },
    {
      question: "Can you help us scale the MVP into a full product later?",
      answer: "Yes! Once your MVP is validated, we assist in expanding it into a full-featured product with advanced functionalities."
    },
    {
      question: "Do you provide prototyping before development?",
      answer: "Absolutely. We create wireframes and clickable prototypes so you can visualize the product and make adjustments before coding begins."
    },
    {
      question: "How do you ensure the MVP aligns with our business goals?",
      answer: "We start with strategy sessions to understand your vision, target audience, and goals, ensuring every step of the MVP aligns with your long-term objectives."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Questions about service</h1>
      
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

export default DigitalFqs;