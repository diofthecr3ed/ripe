import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-light" id="solution">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2 block">The Solution</span>
            <h2 className="text-4xl font-black tracking-tight text-text-dark sm:text-5xl">
              We are your <span className="bg-primary px-2 text-white">GTM Engine</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              AI-driven outreach, automated sales funnels, and tailored positioning. We act as your shadow operator.
            </p>
          </div>
          <button className="hidden md:flex h-12 items-center justify-center rounded-full border-2 border-text-dark px-8 text-sm font-bold text-text-dark hover:bg-text-dark hover:text-white transition-colors">
            See How It Works
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Automation */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-gray-100">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-text-dark">
                <span className="material-symbols-outlined text-3xl">smart_toy</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-text-dark">AI Automation</h3>
              <p className="text-gray-600">Seamless integration of Zapier, backend systems, and automated billing to handle your customer flows effortlessly.</p>
            </div>
          </div>

          {/* Tailored Infra */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-gray-100">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="material-symbols-outlined text-3xl">dns</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-text-dark">Tailored Infra</h3>
              <p className="text-gray-600">We build high-converting landing pages, manage checkout systems, and ensure automatic product delivery.</p>
            </div>
          </div>

          {/* Community */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-gray-100">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-green-500/10 blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-text-dark">Community Ops</h3>
              <p className="text-gray-600">Nurturing your superfans into customers. We manage your DMs, comments, and private communities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;