import React from 'react';

interface OfferSectionProps {
  onOpenModal: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-background-light relative overflow-hidden" id="offer">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl font-black tracking-tight text-text-dark sm:text-5xl mb-6 leading-normal">
          We don't get paid <br /> <span className="text-primary bg-text-dark px-2 inline-block mt-2">unless you do.</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Our model is simple. We partner with you for the long haul. A partnership designed for scale.
        </p>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12 hover:shadow-2xl transition-shadow duration-300">
          
          {/* SVG Chart */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
            <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f1f1f1" strokeWidth="20"></circle>
              <circle 
                cx="50" 
                cy="50" 
                fill="transparent" 
                r="40" 
                stroke="#ff751f" 
                strokeDasharray="180 251.2" 
                strokeDashoffset="0" 
                strokeWidth="20"
                className="drop-shadow-lg"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-text-dark">Variable</span>
              <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Rev Share</span>
            </div>
          </div>

          {/* List */}
          <div className="text-left flex-1">
            <h3 className="text-2xl font-bold text-text-dark mb-4">The Partnership Model</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                <span className="text-gray-600">Flexible Base Setup Fee <span className="text-xs text-gray-400 block">(Case-by-case basis)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                <span className="text-gray-600"><strong>30% - 70%</strong> Revenue Share Model</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                <span className="text-gray-600">Full transparency dashboard access</span>
              </li>
            </ul>
            <button 
              onClick={onOpenModal}
              className="flex items-center justify-center w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-white font-bold hover:bg-orange-400 transition-colors shadow-lg shadow-primary/20 transform hover:-translate-y-1"
            >
              Apply for Partnership
            </button>
            <div className="mt-4">
              <p className="text-xs text-gray-500">Limited spots available for Q4 cohort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;