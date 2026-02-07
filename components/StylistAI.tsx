
import React, { useState, useRef, useEffect } from 'react';
import { getFashionAdvice } from '../services/geminiService';
import { BUSINESS_INFO } from '../constants';

const StylistAI: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    const advice = await getFashionAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'ai', content: advice }]);
    setLoading(false);
  };

  return (
    <section id="aistylist" className="py-24 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 block">Inovação</span>
          <h2 className="text-3xl md:text-5xl font-bold serif mb-4">Visagista Digital Zayn</h2>
          <p className="text-stone-400 max-w-lg mx-auto">Dúvidas sobre qual corte ou tratamento escolher? Pergunte ao nosso consultor inteligente.</p>
        </div>

        <div className="bg-stone-800 rounded-3xl overflow-hidden shadow-2xl border border-stone-700 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-stone-800 p-4 border-b border-stone-700 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-stone-900 font-bold">ZG</div>
            <div>
              <p className="font-bold text-sm">Consultor de Beleza</p>
              <p className="text-[10px] text-green-400 uppercase tracking-tighter flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.length === 0 && (
              <div className="text-center py-20 opacity-50 space-y-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p>Experimente perguntar:<br/>"Que tipo de barba combina com rosto oval?" ou "Como cuidar de cabelos cacheados?"</p>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                  m.role === 'user' 
                    ? 'bg-amber-400 text-stone-900 rounded-tr-none' 
                    : 'bg-stone-700 text-stone-100 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-stone-700 rounded-2xl p-4 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-stone-800 border-t border-stone-700">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Diga olá ao consultor..."
                className="flex-1 bg-stone-900 border-none rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-amber-400 transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="w-12 h-12 rounded-full bg-amber-400 text-stone-900 flex items-center justify-center hover:bg-amber-300 transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylistAI;
