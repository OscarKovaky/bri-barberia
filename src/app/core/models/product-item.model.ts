export interface ProductItem {
  id: string;
  name: string;
  category: 'Pomadas' | 'Shampoo' | 'Aceites' | 'Herramientas' | 'Skincare';
  price: number;
  oldPrice?: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  stock: number;
  featured: boolean;
  badge?: 'Nuevo' | 'Oferta' | 'Top';
  benefits: string[];
  usageMode: string;
}
