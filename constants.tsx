
import { Product, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: "Zayn Griffe",
  whatsapp: "+258842703205",
  whatsappLink: "https://wa.me/258842703205",
  address: "Rua Da Soveste, Maputo",
  hours: "Aberto • Fecha às 19:30",
  email: "contato@zayngriffe.com"
};

export const PRODUCTS: Product[] = [
  // SERVIÇOS
  {
    id: 1,
    name: "Corte & Estilo Premium",
    category: "Serviços",
    type: 'Serviço',
    price: 500,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    description: "Corte artístico personalizado com lavagem e finalização."
  },
  {
    id: 2,
    name: "Barboterapia Completa",
    category: "Serviços",
    type: 'Serviço',
    price: 400,
    image: "https://images.unsplash.com/photo-1590540179852-2110a54f813a?q=80&w=800&auto=format&fit=crop",
    description: "Ritual de barba com toalhas quentes e hidratação profunda."
  },
  {
    id: 3,
    name: "Penteado Noiva / Gala",
    category: "Serviços",
    type: 'Serviço',
    price: 1500,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    description: "Criações exclusivas para momentos inesquecíveis."
  },
  // ROUPAS MASCULINAS
  {
    id: 101,
    name: "Terno Slim Fit Charcoal",
    category: "Masculino",
    type: 'Produto',
    price: 12500,
    image: "https://images.unsplash.com/photo-1594932224828-b4b059b6f6f1?q=80&w=800&auto=format&fit=crop",
    description: "Lã fria italiana, corte impecável para o homem moderno."
  },
  {
    id: 102,
    name: "Camisa Oxford Branca",
    category: "Masculino",
    type: 'Produto',
    price: 3200,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=800&auto=format&fit=crop",
    description: "Algodão egípcio, versatilidade e conforto absoluto."
  },
  // ROUPAS FEMININAS
  {
    id: 201,
    name: "Vestido Midi Seda",
    category: "Feminino",
    type: 'Produto',
    price: 8900,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
    description: "Elegância fluida para eventos diurnos ou coquetéis."
  },
  {
    id: 202,
    name: "Blazer Estruturado Bege",
    category: "Feminino",
    type: 'Produto',
    price: 5400,
    image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=800&auto=format&fit=crop",
    description: "Peça chave para um guarda-roupa corporativo sofisticado."
  },
  // ACESSÓRIOS
  {
    id: 301,
    name: "Bolsa Couro Croco",
    category: "Acessórios",
    type: 'Produto',
    price: 7200,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    description: "Acabamento premium com detalhes em dourado."
  },
  {
    id: 302,
    name: "Relógio Chrono Gold Edition",
    category: "Acessórios",
    type: 'Produto',
    price: 18000,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop",
    description: "Precisão suíça envolta em luxo atemporal."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Idélio Ofiço",
    role: "Guia Local",
    comment: "Excelente atendimento e profissionais qualificados. O melhor salão da zona.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];
