import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const VideoFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your UI/UX design service unique?",
      answer: "Our designs are not just visually attractive — they are based on real user research and behavior analysis. This ensures every interface we create is functional, user-friendly, and tailored to your target audience."
    },
    {
      question: "How do you ensure your designs are user-friendly and effective?",
      answer: "We conduct detailed user research, usability testing, and feedback sessions. This helps us refine the design until it meets both business goals and user expectations."
    },
    {
      question: "Can you redesign or improve existing apps/websites?",
      answer: "Yes! We specialize in revamping outdated designs to modern, responsive, and intuitive interfaces that boost engagement and customer satisfaction."
    },
    {
      question: "Do you conduct user testing before finalizing designs?",
      answer: "Absolutely. We test prototypes with real users to identify pain points and improve usability before final delivery."
    },
    {
      question: "Do you provide ongoing design updates as technology evolves?",
      answer: "Yes, we offer continuous support to keep your digital platforms updated with the latest trends, ensuring your business stays ahead in the market."
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

export default VideoFaqs;