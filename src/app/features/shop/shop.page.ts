import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsDataService } from '../../core/services/products-data.service';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { FilterBarComponent } from '../../shared/components/filter-bar.component';
import { ProductCardComponent } from '../../shared/components/product-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';

@Component({
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, FormsModule, FilterBarComponent, ProductCardComponent, EmptyStateComponent],
  template: `
    <section class="shop-page">
      <app-section-title title="Tienda" subtitle="Productos de barbería profesional"></app-section-title>

      <div class="controls ui-card">
        <label class="search-wrap" for="shop-search">
          <span>🔎</span>
          <input id="shop-search" class="form-control" [(ngModel)]="search" placeholder="Buscar producto por nombre" />
        </label>
        <app-filter-bar [filters]="categories" [active]="selected" (selected)="selected = $event"></app-filter-bar>
      </div>

      <div class="grid products-grid" *ngIf="filtered.length; else empty">
        <app-product-card *ngFor="let item of filtered" [item]="item"></app-product-card>
      </div>

      <ng-template #empty>
        <app-empty-state title="Productos no encontrados" message="Prueba con otro filtro o término de búsqueda"></app-empty-state>
      </ng-template>
    </section>
  `,
  styleUrl: './shop.page.scss'
})
export class ShopPage {
  private readonly data = inject(ProductsDataService);
  readonly all = this.data.getAll();
  selected = 'Todos';
  search = '';
  categories = ['Todos', 'Pomadas', 'Shampoo', 'Aceites', 'Herramientas', 'Skincare'];

  get filtered() {
    return this.all.filter(
      (product) =>
        (this.selected === 'Todos' || product.category === this.selected)
        && product.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
