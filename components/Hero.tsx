import React from "react";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-10 lg:pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-800 shadow-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Accepting New Partners for Q4
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-text-dark sm:text-6xl xl:text-7xl">
              Turn Your Influence into{" "}
              <span className="bg-primary px-2 pt-1 pb-1 text-white transform -rotate-1 inline-block underline decoration-wavy decoration-4 underline-offset-[14px] decoration-primary">
                Money.
              </span>
            </h1>
            <p className="max-w-xl text-lg text-gray-600 sm:text-xl">
              The AI Shadow Operator for the Top 5% of Creators. We build your
              sales engine so you can focus on creating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <button
                onClick={onOpenModal}
                className="h-12 px-8 rounded-full bg-text-dark text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Partner with Ripe
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
              <a
                href="https://www.linkedin.com/posts/aadijain48_recently-ran-another-digital-product-launch-activity-7405314807492509696-hupW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcUfu0B3sMBSxTDMwFIp8sZLNkuYyBs8UA"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 rounded-full border border-gray-300 hover:bg-gray-50 text-text-dark font-medium transition-colors flex items-center justify-center"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Visual Content (Dashboard Card) */}
          <div className="relative lg:h-full flex items-center justify-center lg:justify-end">
            <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>

            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Main Revenue Card */}
              <div className="absolute top-0 right-0 w-4/5 rounded-xl border border-gray-200 bg-white shadow-2xl p-4 z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-sm text-gray-500">
                    Total Revenue
                  </h3>
                  <span className="material-symbols-outlined text-green-500 text-sm">
                    trending_up
                  </span>
                </div>
                <div className="text-3xl font-black text-text-dark mb-2">
                  $124,500
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded w-fit mb-4">
                  <span>+42%</span> vs last month
                </div>

                {/* Bar Chart Visualization */}
                <div className="h-24 w-full flex items-end gap-1 justify-between">
                  {/* Bars with differing heights */}
                  {[30, 50, 40, 70, 60, 85].map((height, i) => (
                    <div
                      key={i}
                      className="w-full bg-gray-100 rounded-sm relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute bottom-0 w-full bg-primary rounded-sm h-full group-hover:bg-orange-300 transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Notifications Card */}
              <div className="absolute bottom-10 left-0 w-3/5 rounded-xl border border-gray-200 bg-white/95 backdrop-blur shadow-xl p-4 z-20 animate-[bounce_4s_infinite]">
                <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined text-sm">
                      handshake
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-dark">
                      Adi bought your course
                    </p>
                    <p className="text-[10px] text-gray-500">Just now</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined text-sm">
                      payments
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-dark">
                      Payment Received
                    </p>
                    <p className="text-[10px] text-gray-500">2 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;