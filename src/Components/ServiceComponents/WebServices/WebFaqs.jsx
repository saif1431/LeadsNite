import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const WebFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your website development service stand out from the rest?",
      answer: "Our website development service is special because we make websites that fit exactly what you need. We make websites that look great and are easy for people to use. This helps your business get more customers and grow."
    },
    {
      question: "How long does it take to develop a website with your service?",
      answer: "Making a website takes different amounts of time depending on how big and complicated it is. But we always try to make it as fast as we can without making any mistakes. And we'll keep you updated on how it's going."
    },
    {
      question: "Do you offer website maintenance services after the development phase?",
      answer: "Yes, we do! We know it's important to keep your website working well even after it's made. So we offer services to keep it updated and safe. We'll take care of everything, like fixing problems and making sure everything's working smoothly."
    },
    {
      question: "Can you help with website content creation and optimization?",
      answer: "Of course! We can help you write and organize the words and pictures on your website so they're interesting and easy to understand. We'll also make sure your website shows up when people search for things related to your business."
    },
    {
      question: "What sets your website development team apart from others?",
      answer: "Our team is really good at making websites because we've been doing it for a long time. We know all the latest things in website-development and we're always learning more. You can trust us to make your website awesome."
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

export default WebFaqs;