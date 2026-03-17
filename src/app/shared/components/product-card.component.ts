import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductItem } from '../../core/models/product-item.model';
import { CartService } from '../../core/services/cart.service';
import { BadgeComponent } from '../ui/badge.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink, BadgeComponent],
  template: `
    <article class="card">
      <app-badge *ngIf="item.badge" [text]="item.badge"></app-badge>
      <h3>{{ item.name }}</h3>
      <p>{{ item.shortDescription }}</p>
      <strong class="price">{{ item.price | currency:'MXN' }}</strong>
      <div class="actions">
        <button (click)="add()">Agregar al carrito</button>
        <a [routerLink]="['/tienda', item.id]">Ver detalle</a>
      </div>
    </article>
  `,
  styleUrl: './cards.scss'
})
export class ProductCardComponent {
  private readonly cart = inject(CartService);
  @Input({ required: true }) item!: ProductItem;

  add(): void {
    this.cart.addProduct(this.item);
  }
}
