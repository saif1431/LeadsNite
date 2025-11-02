import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const ContactFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What is LeadsNite?",
      answer:
        "LeadsNite is a digital solutions company specializing in web development, app development, SAAS, machine learning, and UI/UX design. We help businesses grow by combining technology with creative strategies.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with a wide range of industries, including startups, e-commerce, real estate, healthcare, education, and technology. Our solutions are tailored to the unique needs of each client.",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Yes. Every project is handled with a personalized approach. We take time to understand your goals and deliver solutions that align with your business objectives.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Pricing depends on the scope and complexity of your project. We offer flexible plans ranging from hourly rates to monthly packages, ensuring affordability without compromising quality.",
    },
    {
      question: "Do you offer support after project delivery?",
      answer:
        "Absolutely. We provide ongoing maintenance, updates, and technical support to ensure your website, app, or marketing campaign continues to perform at its best.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Timelines vary depending on project size and requirements. A basic website can be completed within a few weeks, while more complex applications or campaigns may take longer. We provide clear timelines before starting any project.",
    },
    {
      question: "Can you help market my product or startup?",
      answer:
        "Yes. We specialize in SAAS and growth strategies. In fact, we offer discounted or even free marketing support for startups, charging only for ad spend to help them grow faster.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. We collaborate with businesses globally, delivering services remotely through clear communication and structured workflows.",
    },
    {
      question: "What makes LeadsNite different from other agencies?",
      answer:
        "Our strength lies in combining technical expertise with business understanding. With over five years of experience, we focus on delivering measurable results, not just services.",
    },
    {
      question: "How can I get started with LeadsNite?",
      answer:
        "Simply reach out via our Contact Page or email us at contact@leadsnite.com. Share your requirements, and we’ll provide a free consultation along with a tailored proposal.",
    },
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 mt-12'>
      <h2 className="lg:text-4xl font-satochi text-center text-3xl font-bold mb-12"><span className='text-[#03ABE4] font-satochi'>Questions?</span> We've Got Answers</h2>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" w-full bg-[#e9f1fa] px-6 py-4 rounded-4xl"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="flex w-full  items-center justify-between cursor-pointer transition duration-300 ease-in-out"
              aria-expanded={activeIndex === index}
            >
              <h3 className="text-lg text-left font-semibold">{faq.question}</h3>
              <span className="ml-4 mt-1">
                {activeIndex === index ? (
                  < Minus className="text-gray-600" />
                ) : (
                  <Plus className="text-gray-600" />
                )}
              </span>
            </button>

            {/* Reserve space and animate visibility (no layout shift) */}
             <div className={`overflow-hidden  transition-all duration-300 ease-in-out ${
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
  )
}

export default ContactFaqs