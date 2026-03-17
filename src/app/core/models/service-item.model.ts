export interface ServiceItem {
  id: string;
  name: string;
  category: 'Cabello' | 'Barba' | 'Rituales' | 'Paquetes';
  durationMin: number;
  price: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  featured: boolean;
  tags: string[];
}
