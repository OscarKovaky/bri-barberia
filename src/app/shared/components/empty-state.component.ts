import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `
    <div class="empty">
      <div class="icon">✂️</div>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  `,
  styles: [
    `.empty{border:1px dashed #3a3d43;padding:2rem 1.2rem;border-radius:14px;text-align:center;color:#c2bdb4;background:rgba(255,255,255,.01)}`,
    `.icon{font-size:1.35rem;margin-bottom:.45rem}`,
    `.empty h3{margin-bottom:.35rem}`
  ]
})
export class EmptyStateComponent {
  @Input() title = 'Sin resultados';
  @Input() message = 'Intenta cambiar filtros.';
}
