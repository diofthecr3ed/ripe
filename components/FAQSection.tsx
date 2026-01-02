import React, { useState } from 'react';

const FAQs = [
  {
    question: "What exactly is an AI Shadow Operator?",
    answer: "An AI Shadow Operator acts as your invisible COO. We use advanced AI automation and human expertise to build and manage your entire business backend—sales funnels, email marketing, and product delivery—so you can focus 100% on creating content."
  },
  {
    question: "How does Ripe Agency help creators monetize their audience?",
    answer: "We turn passive followers into paying customers by launching high-value digital products (courses, coaching, templates). We handle the strategy, positioning, and technical infrastructure to maximize revenue without you needing to sell aggressively."
  },
  {
    question: "What is your pricing model?",
    answer: "We operate on a partnership basis. We charge a flexible base setup fee (determined case-by-case) to cover initial infrastructure, followed by a 30-70% revenue share on sales. We don't get paid unless you do."
  },
  {
    question: "Do I need a massive following to partner with you?",
    answer: "Not necessarily. We look for creators with high engagement and authority in their niche (typically the top 5%). Quality of audience matters more than quantity when selling premium digital products."
  },
  {
    question: "What types of digital products do you build?",
    answer: "We specialize in high-margin assets like cohort-based courses, video guides, exclusive communities, paid newsletters, and digital templates tailored to your specific expertise and audience needs."
  },
  {
    question: "Do you handle customer support and DMs?",
    answer: "Yes. Our Community Ops team and AI systems manage your DMs, comments, and customer support tickets to ensure your superfans are nurtured and issues are resolved instantly."
  },
  {
    question: "How is Ripe different from a traditional talent management agency?",
    answer: "Talent agencies focus on brand deals and sponsorships. We focus on building *your* owned assets and recurring revenue streams. We build a business that you own, rather than renting your audience to other brands."
  },
  {
    question: "How long does it take to launch?",
    answer: "Our go-to-market engine is designed for speed. Typically, we can structure, build, and launch a pilot offer within 14-30 days of partnership, depending on the complexity of the product."
  },
  {
    question: "What tech stack do you use?",
    answer: "We integrate best-in-class tools like Zapier, Carrd, Webflow, Stripe, and proprietary AI workflows to create a seamless, automated experience for your customers."
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