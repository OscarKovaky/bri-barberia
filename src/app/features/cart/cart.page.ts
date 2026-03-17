import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsDataService } from '../../core/services/products-data.service';
import { CartSummaryComponent } from '../../shared/components/cart-summary.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { CartService } from '../../core/services/cart.service';

@Component({
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink, CartSummaryComponent, EmptyStateComponent],
  template: `
    <section class="cart-page">
      <header class="page-header">
        <h1 class="page-title">Carrito</h1>
        <p class="page-subtitle">Revisa tus productos antes de confirmar tu compra.</p>
      </header>

      <ng-container *ngIf="details().length; else empty">
        <div class="cart-layout">
          <section class="items-list">
            <article class="cart-item ui-card" *ngFor="let item of details()">
              <div class="row-top">
                <div>
                  <h3>{{ item.product?.name }}</h3>
                  <p class="meta">Precio unitario: {{ item.unitPrice | currency:'MXN' }}</p>
                </div>
                <button class="btn-danger" type="button" (click)="cart.removeProduct(item.productId)">Eliminar</button>
              </div>

              <div class="row-bottom">
                <div class="qty-control" aria-label="Cantidad">
                  <button type="button" (click)="cart.updateQuantity(item.productId, item.quantity - 1)">−</button>
                  <span>{{ item.quantity }}</span>
                  <button type="button" (click)="cart.updateQuantity(item.productId, item.quantity + 1)">+</button>
                </div>
                <strong class="line-subtotal">{{ item.subtotal | currency:'MXN' }}</strong>
              </div>
            </article>
          </section>

          <aside class="summary-panel">
            <app-cart-summary [subtotal]="cart.subtotal()" [shipping]="cart.shipping()" [total]="cart.total()"></app-cart-summary>
            <a class="btn-primary checkout-btn" routerLink="/checkout">Ir a checkout</a>
          </aside>
        </div>
      </ng-container>

      <ng-template #empty>
        <app-empty-state title="Carrito vacío" message="Agrega productos desde la tienda para comenzar tu compra."></app-empty-state>
      </ng-template>
    </section>
  `,
  styleUrl: './cart.page.scss'
})
export class CartPage {
  readonly cart = inject(CartService);
  private readonly products = inject(ProductsDataService);
  readonly details = computed(() => this.cart.items().map((item) => ({ ...item, product: this.products.getById(item.productId) })));
}
