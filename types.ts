
export type ItemType = 'Serviço' | 'Produto';

export interface Product {
  id: number;
  name: string;
  category: 'Masculino' | 'Feminino' | 'Acessórios' | 'Serviços';
  type: ItemType;
  price: number;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
}

export enum Section {
  Home = 'home',
  About = 'about',
  Shop = 'shop',
  Contact = 'contact',
  AIStylist = 'aistylist'
}
