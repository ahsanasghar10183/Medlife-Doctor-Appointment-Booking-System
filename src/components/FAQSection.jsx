import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the purpose of this system?",
      answer: "This system allows users to book doctor appointments easily and manage their health-related queries."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by selecting a doctor, choosing a suitable time, and confirming your details."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment through your account dashboard."
    },
    // Add more FAQs as needed
  ];
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className='w-full md:w-3/4 py-12 px-12 lg:py-12 lg:px-36 box-border'>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <h2 className="text-gray-500 mb-4">Answers to Your Most Common Questions and Concerns</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg">
                <button
                  className="w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 float-right transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ${activeIndex === index ? 'max-h-screen p-4' : 'max-h-0 p-0'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>


  );
};

export default FAQSection;
