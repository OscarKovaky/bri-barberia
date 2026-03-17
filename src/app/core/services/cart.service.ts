import { Injectable, computed, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { ProductItem } from '../models/product-item.model';

const CART_KEY = 'black-steel-cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cartItemsSignal = signal<CartItem[]>(this.getInitialState());

  readonly items = this.cartItemsSignal.asReadonly();
  readonly totalItems = computed(() => this.items().reduce((acc, item) => acc + item.quantity, 0));
  readonly subtotal = computed(() => this.items().reduce((acc, item) => acc + item.subtotal, 0));
  readonly shipping = computed(() => (this.subtotal() > 899 || this.subtotal() === 0 ? 0 : 99));
  readonly total = computed(() => this.subtotal() + this.shipping());

  addProduct(product: ProductItem): void {
    const current = this.items();
    const found = current.find((item) => item.productId === product.id);

    if (found) {
      this.updateQuantity(product.id, found.quantity + 1);
      return;
    }

    const next: CartItem = {
      productId: product.id,
      quantity: 1,
      unitPrice: product.price,
      subtotal: product.price
    };

    this.updateState([...current, next]);
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeProduct(productId);
      return;
    }

    const updated = this.items().map((item) =>
      item.productId === productId ? { ...item, quantity, subtotal: quantity * item.unitPrice } : item
    );

    this.updateState(updated);
  }

  removeProduct(productId: string): void {
    this.updateState(this.items().filter((item) => item.productId !== productId));
  }

  clearCart(): void {
    this.updateState([]);
  }

  private getInitialState(): CartItem[] {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw) as CartItem[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private updateState(items: CartItem[]): void {
    this.cartItemsSignal.set(items);
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }
}
