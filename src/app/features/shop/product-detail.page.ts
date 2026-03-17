import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ProductsDataService } from '../../core/services/products-data.service';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';

@Component({standalone:true,imports:[NgIf,NgFor,CurrencyPipe,RouterLink,EmptyStateComponent],template:`<ng-container *ngIf="product() as p; else missing"><a routerLink="/tienda">← Volver</a><h1>{{p.name}}</h1><p>{{p.longDescription}}</p><ul><li *ngFor="let b of p.benefits">{{b}}</li></ul><p><strong>{{p.price|currency:'MXN'}}</strong> · Stock: {{p.stock}}</p><p>Modo de uso: {{p.usageMode}}</p><button (click)="add()">Agregar al carrito</button></ng-container><ng-template #missing><app-empty-state title="Producto no encontrado" message="No localizamos ese producto."></app-empty-state></ng-template>`})
export class ProductDetailPage{ private readonly route=inject(ActivatedRoute); private readonly data=inject(ProductsDataService); private readonly cart=inject(CartService); readonly product = computed(()=>this.data.getById(this.route.snapshot.paramMap.get('id') ?? '')); add(){const p=this.product(); if(p){this.cart.addProduct(p);} } }
