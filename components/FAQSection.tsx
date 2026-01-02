import React, { useState } from 'react';

const FAQs = [
  {
    question: "Do I need to be technical to use this?",
    answer: "No. We act as your \"Shadow Operator.\" We handle 100% of the tech, funnels, and payment processing. You focus strictly on being the face of the brand."
  },
  {
    question: "Which platform do you use for communities?",
    answer: "We analyze your specific offer. For course-heavy offers, we use Skool. For high-engagement chat communities, we utilize Discord. We handle the full migration and setup."
  },
  {
    question: "How do you handle high-ticket sales?",
    answer: "We integrate financing partners (Klarna, Affirm) into your checkout. This allows your customers to split payments over months while you receive the full cash collected upfront."
  },
  {
    question: "What exactly do you build?",
    answer: "We build two revenue systems: (1) High-Ticket Backend - VSL funnels for coaching with BNPL financing, and (2) Low-Ticket Engine - Discord/Skool communities with automated recurring payments."
  },
  {
    question: "What is the investment?",
    answer: "Setup starts at $997+ depending on complexity. This covers complete funnel infrastructure, community platform setup, payment gateway integration, and offer structuring."
  },
  {
    question: "Who is this for?",
    answer: "Creators with an existing audience who want a \"Done-For-You\" ecosystem. We build the tech, the funnels, and the payment processing. You just create."
  },
  {
    question: "What tools and platforms do you use?",
    answer: "We build funnels on Carrd or Webflow, integrate Stripe for payments, set up Klarna/Affirm for financing, and configure Discord or Skool for communities based on your needs."
  },
  {
    question: "How long does setup take?",
    answer: "Typically 14-30 days depending on complexity. We handle everything from VSL funnel design to payment integration and community platform configuration."
  },
  {
    question: "Do you guarantee results?",
    answer: "We build the infrastructure and \"No-Brainer\" offer structure, but results depend on your audience engagement and content. We set you up for success with proven conversion frameworks."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">Common Questions</span>
          <h2 className="text-4xl font-black tracking-tight text-text-dark sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about partnering with Ripe.
          </p>
        </div>

        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/50 bg-gray-50/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-text-dark pr-8">{faq.question}</span>
                <span className={`material-symbols-outlined transform transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;