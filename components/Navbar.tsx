
import React, { useState } from 'react';
import { Section } from '../types';
import { BUSINESS_INFO } from '../constants';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', value: Section.Home },
    { label: 'Sobre', value: Section.About },
    { label: 'E-commerce', value: Section.Shop },
    { label: 'Visagista AI', value: Section.AIStylist },
    { label: 'Contacto', value: Section.Contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex flex-col cursor-pointer" 
            onClick={() => onNavigate(Section.Home)}
          >
            <span className="text-2xl font-bold tracking-tighter text-stone-900 serif">ZAYN GRIFFE</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-medium -mt-1 ml-0.5">Maputo • Boutique & Salão</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-colors hover:text-stone-900 ${
                  activeSection === item.value ? 'text-stone-900 border-b-2 border-stone-900' : 'text-stone-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-stone-900 hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            
            <div className="hidden sm:block">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all"
              >
                Suporte WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-stone-500 hover:text-stone-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 text-base font-medium ${
                  activeSection === item.value ? 'bg-stone-50 text-stone-900' : 'text-stone-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
