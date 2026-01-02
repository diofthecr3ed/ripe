import React, { useState } from "react";
import ezeLogo from "../assets/eze-logo.png";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6e6db] bg-white/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src={ezeLogo}
            alt="Ripe Logo"
            className="h-10 w-auto object-contain rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight text-text-dark">
            Ripe
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#problem"
            className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
          >
            Problem
          </a>
          <a
            href="#solution"
            className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
          >
            Solution
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#offer"
            className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
          >
            The Offer
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="hidden sm:flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Apply Now
          </button>

          <button
            className="md:hidden p-2 text-text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#e6e6db] bg-white absolute w-full left-0 animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 space-y-4">
            <a
              href="#problem"
              className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </a>
            <a
              href="#solution"
              className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#offer"
              className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Offer
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenModal();
              }}
              className="flex h-10 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-orange-400 transition-colors"
            >
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
