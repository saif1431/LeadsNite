import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const VideoFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of videos do you edit?",
      answer: "We edit a wide range of videos, including corporate videos, social media content, vlogs, event highlights, and more. Whether it's a promotional video for your business or a personal project, we've got you covered with our versatile editing services."
    },
    {
      question: "How long does it take to edit a video?",
      answer: "The time taken to edit a video depends on various factors such as the length of the footage, complexity of editing required, and any specific client requests. Generally, we aim to deliver high-quality edits within a reasonable timeframe, ensuring timely delivery without compromising on quality."
    },
    {
      question: "Can you add special effects and graphics to my video?",
      answer: "Absolutely! We specialize in adding special effects, graphics, text overlays, transitions, and other visual elements to enhance the overall appeal and impact of your video. Whether you're looking for subtle enhancements or eye-catching animations, we have the expertise to make your video stand out."
    },
    {
      question: "Do you offer revisions if I'm not satisfied with the editing?",
      answer: "Yes, customer satisfaction is our top priority. We provide revision rounds to ensure that the final edited video meets your expectations. We welcome your feedback and strive to incorporate any necessary changes to achieve the desired result, ensuring that you're completely satisfied with the end product."
    },
    {
      question: "How do I send my footage for editing?",
      answer: "Sending your footage for editing is simple and convenient. You can upload your files securely to any online platform, or you can share them via cloud storage services such as Google Drive or Dropbox. Rest assured, your files will be handled with the utmost confidentiality and professionalism throughout the editing process."
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

export default VideoFaqs; 
 
