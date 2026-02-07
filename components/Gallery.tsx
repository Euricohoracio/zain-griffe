
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface GalleryProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState<'Tudo' | 'Masculino' | 'Feminino' | 'Acessórios' | 'Serviços'>('Tudo');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);

  const filteredItems = filter === 'Tudo' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setQty(1);
  };

  const handleAdd = () => {
    if (selectedProduct) {
      onAddToCart(selectedProduct, qty);
      setSelectedProduct(null);
    }
  };

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 serif">Boutique & Serviços Zayn</h2>
          <div className="w-20 h-1 bg-stone-900 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Tudo', 'Masculino', 'Feminino', 'Acessórios', 'Serviços'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-stone-900 text-white shadow-lg' 
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100 mb-4 shadow-sm border border-stone-50">
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    item.type === 'Serviço' ? 'bg-amber-100 text-amber-800' : 'bg-stone-800 text-white'
                  }`}>
                    {item.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(item)}
                    className="bg-white text-stone-900 px-8 py-3 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    {item.type === 'Serviço' ? 'Agendar' : 'Comprar'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-stone-900">{item.name}</h3>
                <span className="font-bold text-stone-900">{item.price} MT</span>
              </div>
              <p className="text-stone-500 text-sm line-clamp-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Add Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl animate-scale-in">
            <img src={selectedProduct.image} className="w-full md:w-1/2 h-64 md:h-auto object-cover" alt={selectedProduct.name} />
            <div className="p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold serif mb-2">{selectedProduct.name}</h3>
              <p className="text-stone-500 text-sm mb-6">{selectedProduct.description}</p>
              
              <div className="mb-8">
                <label className="text-xs font-bold uppercase text-stone-400 mb-2 block">Quantidade</label>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 border border-stone-200 rounded-full px-4 py-2">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-xl font-bold">-</button>
                    <span className="text-lg font-medium w-6 text-center">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="text-xl font-bold">+</button>
                  </div>
                  <span className="text-xl font-bold text-stone-900">{selectedProduct.price * qty} MT</span>
                </div>
              </div>

              <button 
                onClick={handleAdd}
                className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all mb-4"
              >
                Adicionar ao Carrinho
              </button>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="w-full text-stone-400 text-sm font-medium"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
