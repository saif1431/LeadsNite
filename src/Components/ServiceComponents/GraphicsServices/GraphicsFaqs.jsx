import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GraphicsFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to complete a logo design?",
      answer: "The time taken to complete a logo design varies depending on the complexity of the project and the number of revisions needed. Typically, we aim to deliver initial concepts within 3-5 business days and finalize the design within 1-2 weeks, ensuring meticulous attention to detail and client satisfaction."
    },
    {
      question: "Can I request changes to the designs?",
      answer: "Yes, absolutely! We understand that revisions may be necessary to achieve the perfect design for your needs. We provide multiple rounds of revisions to ensure that the final design meets your expectations and aligns with your brand identity."
    },
    {
      question: "Do I own the rights to the designs once they're completed?",
      answer: "Yes, upon completion of the project and full payment, you will have full ownership rights to the designs we create for you. We transfer all rights to you, allowing you to use the designs freely for your business or personal use without any limitations."
    },
    {
      question: "Can you create designs for social media platforms?",
      answer: "Absolutely! We specialize in creating graphics tailored for various social media platforms, including Facebook, Instagram, Twitter, and LinkedIn. Whether you need eye-catching posts, cover images, or ads, we'll ensure that your social media presence stands out and engages your audience effectively."
    },
    {
      question: "What if I'm not sure what design I need?",
      answer: "No worries! Our experienced team is here to guide you through the design process. We'll start by understanding your goals, target audience, and brand identity. Then, we'll provide suggestions and recommendations to help you choose the perfect design solution that aligns with your objectives and vision."
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

export default GraphicsFaqs;