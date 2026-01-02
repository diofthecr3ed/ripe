import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-black py-20 text-white" id="problem">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            You're posting content, but <span className="text-primary underline decoration-wavy underline-offset-4">leaving money</span> on the table.
          </h2>
          <p className="text-gray-400 text-lg">No funnels. No backend. No recurring revenue. Just content and burnout.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl bg-[#111] p-8 border border-[#222] hover:border-primary/50 transition-colors">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <span className="material-symbols-outlined">group_off</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Backend System</h3>
            <p className="text-4xl font-black text-white mb-1">$0</p>
            <p className="text-sm text-gray-400">You're creating content daily but have no funnel, no community, and no payment infrastructure to capture revenue.</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-[#111] p-8 border border-[#222] hover:border-primary/50 transition-colors">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <span className="material-symbols-outlined">trending_down</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">High-Ticket Blocked</h3>
            <p className="text-4xl font-black text-white mb-1">$5K+</p>
            <p className="text-sm text-gray-400">You could be selling high-ticket coaching but lack VSL funnels and financing options to make it accessible.</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-[#111] p-8 border border-[#222] hover:border-primary/50 transition-colors">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">hourglass_empty</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Tech Paralysis</h3>
            <p className="text-4xl font-black text-white mb-1">Stuck</p>
            <p className="text-sm text-gray-400">You know you need funnels, payment gateways, and community platforms but don't know where to start.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;