import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MachineFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your machine learning service stand out?",
      answer: "Our machine learning service is special because we make things just for you. We look at what you need and then make something that fits you perfectly. We're really good at using smart computer programs to find important things in your information that help your business do better."
    },
    {
      question: "How do you ensure the accuracy of predictive models in your service?",
      answer: "We ensure the accuracy by checking them lots of times. We use smart tools and numbers to make sure we're right. We keep watching how things change and make our guesses even better."
    },
    {
      question: "Can you integrate machine learning into existing business processes?",
      answer: "Yes, we can put our smart ideas into your work without making it hard. We learn how you do things and then fit our ideas into what you already do. This way, your work gets better without causing you any trouble."
    },
    {
      question: "How do you address privacy and security concerns?",
      answer: "We're really careful with your secrets. We use special locks and rules to keep them safe. We tell you exactly how we keep your secrets safe, so you can trust us."
    },
    {
      question: "Do you offer support post-implementation of machine learning solutions?",
      answer: "After we finish making things better, we don't just leave you alone. We teach you how to use our ideas and make sure they keep working right. We're here to help you anytime you need us."
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
          <div key={index} className=" pb-4 last:border-0">
            <div 
              className="flex items-center border-b-2  justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start mb-6">
                <h3 className="lg:text-xl text-md font-bold  ">{faq.question}</h3>
              
              </div>
              {activeIndex === index ? (
                <FaChevronUp className="font-thin ml-2" />
              ) : (
                <FaChevronDown className=" ml-2" />
              )}
            </div>
            
            {activeIndex === index && (
              <p className="mt-4 text-primary font-semibold animate-fadeIn">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineFaqs; 
