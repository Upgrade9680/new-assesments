import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = {
  'Joining Process': [
    {
      question: 'How do I enroll in the course?',
      answer:
        'You can enroll online through our website or by visiting the nearest center.',
    },
    {
      question: 'Is there any entrance exam?',
      answer: "No, there's no entrance test. Anyone interested can join.",
    },
  ],
  'About the Course': [
    {
      question: 'What is the duration of the course?',
      answer: 'The course duration is 6 months, including practicals.',
    },
    {
      question: 'Do I need prior knowledge?',
      answer:
        'No, our course starts from basics and builds up to advanced topics.',
    },
  ],
  'Centre Info': [
    {
      question: 'Where are your training centers located?',
      answer:
        'We have centers in major cities like Pune, Delhi, Mumbai, and Bangalore.',
    },
    {
      question: 'Are classes available on weekends?',
      answer:
        'Yes, we have flexible weekend batches for working professionals.',
    },
  ],
  Placements: [
    {
      question: 'Will I get a job after completing this course?',
      answer:
        'Yes, we offer placement assistance and tie-ups with top companies.',
    },
    {
      question: 'What kind of jobs can I get after this course?',
      answer:
        'You can apply for roles like Cybersecurity Analyst, Ethical Hacker, etc.',
    },
  ],
};

const Section11 = () => {
  const [activeTab, setActiveTab] = useState('Placements');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-20 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setOpenIndex(null); // Reset open index on tab switch
              }}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r bg-[#ff2056] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQs for active tab */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqData[activeTab].map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 bg-white px-4 py-3 text-left"
              >
                <span className="text-sm font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section11;
