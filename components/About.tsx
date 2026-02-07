
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&h=1000&q=80" 
                alt="Interior sofisticado Zayn Griffe" 
                className="w-full object-cover h-[600px]"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">Especialistas em Visagismo</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed font-light">
              <p className="text-lg">
                Bem-vindo ao <span className="font-semibold text-stone-900">Zayn Griffe</span>, onde a arte de cuidar da sua imagem é levada a sério. Somos referência em Maputo para quem busca um atendimento personalizado e técnicas de vanguarda.
              </p>
              <p>
                Localizados na Rua Da Soveste, nosso salão oferece um refúgio de bem-estar. Nossa equipe é composta por profissionais apaixonados por estética, preparados para entender e realçar os seus melhores traços.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-stone-200">
                <div>
                  <h4 className="text-3xl font-bold text-stone-900 mb-1">84+</h4>
                  <p className="text-xs uppercase tracking-widest text-stone-400">Suporte WhatsApp</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-stone-900 mb-1">19:30</h4>
                  <p className="text-xs uppercase tracking-widest text-stone-400">Horário de Fecho</p>
                </div>
              </div>
              <p>
                Seja para uma mudança radical de visual ou para a manutenção do seu estilo diário, a Zayn Griffe garante uma experiência relaxante e resultados que superam expectativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
