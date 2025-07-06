import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AppFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What platforms do you develop apps for?",
      answer: "We develop apps for both iOS and Android platforms, ensuring that your app reaches the widest possible audience. Our team is proficient in utilizing the latest technologies and tools for seamless app development across different platforms."
    },
    {
      question: "How long does it take to develop an app?",
      answer: "The time to develop an app can vary depending on the complexity and features required. Typically, we work closely with our clients to establish timelines and milestones, ensuring timely delivery without compromising quality."
    },
    {
      question: "Can you help with app design?",
      answer: "Yes, we offer comprehensive app design services to ensure that your app not only functions flawlessly but also has a visually appealing and user-friendly interface. Our designers collaborate with you to create custom designs that align with your brand identity and user preferences."
    },
    {
      question: "Do you provide ongoing support and maintenance for app?",
      answer: "Absolutely, we offer ongoing support and maintenance services to ensure that your app remains up-to-date, secure, and fully functional. From fixing bugs to implementing updates and enhancements, our team is dedicated to keeping your app running smoothly."
    },
    {
      question: "How do I get started with app development?",
      answer: "Getting started is easy! Simply reach out to us through our website or contact information, and one of our friendly team members will assist you in discussing your app ideas, requirements, and the next steps in the development process."
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

export default AppFaqs;