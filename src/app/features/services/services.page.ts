import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ServicesDataService } from '../../core/services/services-data.service';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { FilterBarComponent } from '../../shared/components/filter-bar.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { ServiceCardComponent } from '../../shared/components/service-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, FilterBarComponent, ServiceCardComponent, EmptyStateComponent],
  template: `
    <section class="services-page">
      <app-section-title title="Servicios" subtitle="Selecciona por categoría"></app-section-title>

      <div class="controls ui-card">
        <app-filter-bar [filters]="categories" [active]="selected" (selected)="selected = $event"></app-filter-bar>
      </div>

      <div class="grid services-grid" *ngIf="filtered.length; else empty">
        <app-service-card *ngFor="let item of filtered" [item]="item"></app-service-card>
      </div>

      <ng-template #empty>
        <app-empty-state title="Sin servicios" message="No hay servicios para esa categoría."></app-empty-state>
      </ng-template>
    </section>
  `,
  styleUrl: './services.page.scss'
})
export class ServicesPage {
  private readonly data = inject(ServicesDataService);
  readonly all = this.data.getAll();
  selected = 'Todos';
  categories = ['Todos', 'Cabello', 'Barba', 'Rituales', 'Paquetes'];

  get filtered() {
    return this.selected === 'Todos' ? this.all : this.all.filter((service) => service.category === this.selected);
  }
}
