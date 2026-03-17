import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsDataService } from '../../core/services/products-data.service';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { FilterBarComponent } from '../../shared/components/filter-bar.component';
import { ProductCardComponent } from '../../shared/components/product-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';

@Component({standalone:true,imports:[CommonModule,SectionTitleComponent,FormsModule,FilterBarComponent,ProductCardComponent,EmptyStateComponent],template:`<app-section-title title="Tienda" subtitle="Productos de barbería profesional"></app-section-title><input [(ngModel)]="search" placeholder="Buscar producto"/><app-filter-bar [filters]="categories" [active]="selected" (selected)="selected=$event"></app-filter-bar><div class="grid" *ngIf="filtered.length; else empty"><app-product-card *ngFor="let item of filtered" [item]="item"></app-product-card></div><ng-template #empty><app-empty-state title="Productos no encontrados" message="Prueba con otro filtro o búsqueda"></app-empty-state></ng-template>`})
export class ShopPage{ private readonly data=inject(ProductsDataService); readonly all=this.data.getAll(); selected='Todos'; search=''; categories=['Todos','Pomadas','Shampoo','Aceites','Herramientas','Skincare']; get filtered(){return this.all.filter(p=>(this.selected==='Todos'||p.category===this.selected)&&p.name.toLowerCase().includes(this.search.toLowerCase()));} }
