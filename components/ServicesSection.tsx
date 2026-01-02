import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Image */}
          <div 
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-lg" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqacn53v8gynclTqQ3fgdZWpUHmsAQXY3ZdveHiRE7a-G1SQRCbtobCw2t492Z3ZAoiP-AqtSx_v70fyolFQEoFXIuB1680I3GdVey6aFDs_ddNKy-0C6QwZfNrSyQ09Ve_qD10QIp2sx8oMPdVlvE1LvFfajtAuXmXY4nbNcWJ4aJjAuwsm12gc0x5MsoQ_Mc99DUI9hG0rrrFJiY-Fz--C9XIFrLUZ6H_XICyLLR76TTki0I0ffyDoLTtNgBadflh5GD1ggTplDH')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur rounded-xl max-w-xs shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase text-gray-500">Live Status</span>
              </div>
              <p className="font-bold text-text-dark">Digital Product Sales</p>
              <p className="text-sm text-gray-600 mt-1">Last 24h: $4,500</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl mb-4">
                What We Build <span className="text-primary">For You</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We handle 100% of the tech, funnels, and payment processing. You focus strictly on being the face of the brand.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: 'campaign',
                  title: 'VSL Funnel Infrastructure',
                  desc: 'High-converting video sales letter funnels built on Carrd or Webflow, tailored to your demographic with "No-Brainer" guarantee structures.'
                },
                {
                  icon: 'account_balance',
                  title: 'Financing Integration',
                  desc: 'We set up Buy Now, Pay Later options (Klarna, Affirm) so you get paid upfront while clients pay monthly.'
                },
                {
                  icon: 'forum',
                  title: 'Discord/Skool Setup',
                  desc: 'Full community architecture with roles, bots, permissions, and automated recurring payment gateways for seamless MRR.'
                }
              ].map((service, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-text-dark group-hover:text-primary transition-colors">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-text-dark">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;