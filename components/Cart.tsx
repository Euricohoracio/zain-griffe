
import React from 'react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    const message = items.map(item => 
      `• ${item.quantity}x ${item.product.name} (${item.product.type}) - ${item.product.price * item.quantity} MT`
    ).join('\n');
    
    const whatsappMessage = `Olá Zayn Griffe! Gostaria de finalizar o seguinte pedido:\n\n${message}\n\n*Total: ${total} MT*`;
    window.open(`${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center">
          <h2 className="text-2xl font-bold serif">Seu Carrinho</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-400 mb-4">Seu carrinho está vazio.</p>
              <button onClick={onClose} className="text-stone-900 font-bold underline">Continuar Comprando</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 border-b border-stone-50 pb-4">
                <img src={item.product.image} className="w-20 h-24 object-cover rounded-lg" alt={item.product.name} />
                <div className="flex-1">
                  <h4 className="font-bold text-stone-900">{item.product.name}</h4>
                  <p className="text-xs text-stone-400 uppercase tracking-tighter mb-2">{item.product.type}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 border border-stone-200 rounded-full px-3 py-1">
                      <button onClick={() => onUpdateQuantity(item.product.id, -1)} className="text-lg font-bold">-</button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.product.id, 1)} className="text-lg font-bold">+</button>
                    </div>
                    <p className="font-bold text-stone-900">{item.product.price * item.quantity} MT</p>
                  </div>
                  <button onClick={() => onRemove(item.product.id)} className="text-[10px] text-red-500 uppercase font-bold mt-2">Remover</button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 bg-stone-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-stone-500">Subtotal</span>
              <span className="text-2xl font-bold text-stone-900">{total} MT</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={onClose}
                className="bg-stone-200 text-stone-900 py-4 rounded-xl font-bold hover:bg-stone-300 transition-all"
              >
                Continuar
              </button>
              <button 
                onClick={handleCheckout}
                className="bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-all flex items-center justify-center gap-2"
              >
                Finalizar
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.892a11.826 11.826 0 00-3.48-8.413z"/></svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Cart;
