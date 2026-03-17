import { CartItem } from './cart-item.model';

export interface CheckoutOrder {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  paymentMethod: 'Efectivo' | 'Transferencia' | 'Tarjeta dummy';
  deliveryMethod: 'Recoger en sucursal' | 'Entrega local';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}
