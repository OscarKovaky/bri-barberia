import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsDataService } from '../../core/services/products-data.service';
import { CartSummaryComponent } from '../../shared/components/cart-summary.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { CartService } from '../../core/services/cart.service';

@Component({standalone:true,imports:[NgIf,NgFor,CurrencyPipe,RouterLink,CartSummaryComponent,EmptyStateComponent],template:`<h1>Carrito</h1><ng-container *ngIf="details().length; else empty"><article *ngFor="let item of details()"><h3>{{item.product?.name}}</h3><p>{{item.subtotal|currency:'MXN'}}</p><button (click)="cart.updateQuantity(item.productId,item.quantity-1)">-</button><span>{{item.quantity}}</span><button (click)="cart.updateQuantity(item.productId,item.quantity+1)">+</button><button (click)="cart.removeProduct(item.productId)">Eliminar</button></article><app-cart-summary [subtotal]="cart.subtotal()" [shipping]="cart.shipping()" [total]="cart.total()"></app-cart-summary><a routerLink="/checkout">Ir a checkout</a></ng-container><ng-template #empty><app-empty-state title="Carrito vacío" message="Agrega productos desde la tienda."></app-empty-state></ng-template>`})
export class CartPage{ readonly cart=inject(CartService); private readonly products=inject(ProductsDataService); readonly details=computed(()=>this.cart.items().map(i=>({...i,product:this.products.getById(i.productId)}))); }
