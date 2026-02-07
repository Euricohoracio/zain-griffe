
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-100 py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold serif mb-6">Zayn Griffe</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              O seu salão de beleza de confiança em Maputo. Estilo, conforto e profissionalismo em um só lugar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-6">Localização</h4>
            <ul className="text-stone-500 text-sm space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-stone-900 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{BUSINESS_INFO.address}<br/>Maputo, Moçambique</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-stone-900 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{BUSINESS_INFO.hours}</span>
              </li>
              <li className="flex items-start gap-3 font-bold text-stone-900">
                <svg className="w-5 h-5 text-stone-900 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>84 270 3205</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-6">Nossos Serviços</h4>
            <ul className="text-stone-500 text-sm space-y-4">
              <li><a href="#" className="hover:text-stone-900">Corte & Barba</a></li>
              <li><a href="#" className="hover:text-stone-900">Estética Facial</a></li>
              <li><a href="#" className="hover:text-stone-900">Manicure e Pedicure</a></li>
              <li><a href="#" className="hover:text-stone-900">Penteados Especiais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-6">Newsletter</h4>
            <p className="text-stone-500 text-xs mb-4 uppercase tracking-tighter">Receba dicas de beleza</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu email" className="bg-white border-stone-200 border rounded-full px-4 py-2 text-xs flex-1 outline-none focus:border-stone-900" />
              <button className="bg-stone-900 text-white rounded-full p-2 hover:bg-stone-800 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} Zayn Griffe. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
