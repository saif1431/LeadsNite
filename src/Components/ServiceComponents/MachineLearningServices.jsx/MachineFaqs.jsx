import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MachineFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:" What makes your AI agents service stand out?",
      answer: "Our AI agents service stands out due to our hybrid approach, offering both no-code solutions for quick setups using tools like n8n, Zapier, and Make.com, as well as fully coded custom agents for complex, tailored needs. This flexibility allows businesses of any size to automate workflows without compromising on customization or scalability."
    },
    {
      question: "How do you ensure the reliability of AI agents in your service?",
      answer: "We ensure reliability through rigorous testing, including unit tests for coded agents and workflow simulations for no-code setups. We also incorporate error-handling mechanisms, monitoring tools, and iterative refinements based on real-world performance data to minimize downtime and maximize uptime."
    },
    {
      question: "Can you integrate AI agents into existing business processes?",
      answer: "Yes, we specialize in seamless integration. For no-code agents, we connect them directly to your existing tools via APIs in platforms like Zapier or n8n. For coded agents, we use custom scripts and frameworks to embed them into your software stack, ensuring minimal disruption and smooth operation."
    },
    {
      question: "How do you address privacy and security concerns?",
      answer: "We prioritize privacy and security by adhering to standards like GDPR and using encrypted data flows. In no-code setups, we leverage secure platforms with built-in compliance features. For coded agents, we implement authentication, access controls, and regular audits to protect sensitive information and prevent unauthorized access."
    },
    {
      question: "Do you offer support post-implementation of AI agents solutions?",
      answer: "Absolutely, we provide ongoing support including maintenance updates, performance monitoring, and troubleshooting. This can be through dedicated plans that cover both no-code and coded agents, ensuring your systems evolve with your business needs and any emerging technologies."
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

export default MachineFaqs;