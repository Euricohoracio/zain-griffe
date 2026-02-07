
import React from 'react';
import { Section } from '../types';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background with multiple layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop" 
          alt="Zayn Griffe Boutique & Salon" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-amber-400/20 backdrop-blur-md border border-amber-400/30 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-amber-200">
            Moda & Beleza • Maputo
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 serif">
            Onde o Estilo encontra a <span className="italic">Exclusividade</span>.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed font-light">
            E-commerce de moda premium e salão de beleza de alta gama. Zayn Griffe traz para Maputo o que há de mais sofisticado em vestuário e autocuidado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onExplore}
              className="bg-white text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-200 transition-all flex items-center justify-center gap-2 group"
            >
              Comprar Agora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <a 
              href="#contact" 
              className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-center"
            >
              Ver Localização
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
