import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import OfferSection from './components/OfferSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background-light text-text-dark transition-colors duration-200">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <OfferSection onOpenModal={openModal} />
        <FAQSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;