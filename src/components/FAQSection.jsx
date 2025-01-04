import React, { useState } from 'react';
import "../styles/FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Bowbonish Ltd?",
      answer: "Bowbonish Ltd is a leading advertising agency that offers cutting-edge branding solutions such as billboard advertising, digital billboards, and graphic design services to enhance brand visibility."
    },
    {
      question: "What services do you offer?",
      answer: "We offer billboard branding, digital billboard services, TV branding, and graphic design services that help businesses stand out in a competitive market."
    },
    {
      question: "How can I get started with Bowbonish?",
      answer: "You can contact us via the contact form on our website or call our office to discuss your branding needs, and we'll guide you through the process."
    },
    {
      question: "Do you offer customized solutions?",
      answer: "Yes, we work with clients to develop custom branding strategies and advertising campaigns tailored to their unique business goals."
    },
    {
      question: "Where are you located?",
      answer: "Our office is located at 77, Awolowo Road, Ikoyi, Lagos, Nigeria."
    }
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if it's already open
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <h3>{faq.question}</h3>
              <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>+</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
