import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DigitalFqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What specific digital marketing strategies do you offer?",
      answer: "We do lots of different digital marketing things, like making sure your website shows up on Google, putting ads on social media, sending emails to people, and making cool stuff for your website.  "
    },
    {
      question: "How can digital marketing benefit my business?",
      answer: "Digital marketing can make more people know about your business online, get more people to visit your website, get more people interested in what you're selling, and make more money for your business. We help you do all that stuff!"
    },
    {
      question: "What sets your digital marketing service apart from others?",
      answer: "Our digital marketing is special because we use cool ideas, look at numbers to see what's working, and always try to make things better. We're really good at making fun ads, finding the right people to see them, and making sure your business gets noticed."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We look at important numbers to see if our digital marketing is doing a good job. We check things like how many people visit your website, how many people buy something, and how much money you make from the ads we put out."
    },
    {
      question: "Can you help my business with ongoing digital marketing support?",
      answer: "Of course! We're here to help your business for a long time. We keep checking on how things are going, making sure everything's working well, and keeping up with new ideas and changes. We're always here to help your business do great online!"
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

export default DigitalFqs; 
 
