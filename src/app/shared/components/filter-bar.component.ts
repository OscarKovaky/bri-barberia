import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="filters-wrap">
      <button
        *ngFor="let filter of filters"
        type="button"
        class="chip"
        (click)="selected.emit(filter)"
        [class.active]="active === filter"
      >
        {{ filter }}
      </button>
    </div>
  `,
  styles: [
    `.filters-wrap{display:flex;gap:.55rem;flex-wrap:wrap}`,
    `.chip{padding:.52rem .95rem;background:#1a1b1d;border:1px solid var(--border);color:var(--text);border-radius:999px;cursor:pointer;transition:.2s ease}`,
    `.chip:hover{border-color:#80715a}`,
    `.chip.active{border-color:var(--accent);color:var(--accent);background:rgba(214,174,98,.08)}`
  ]
})
export class FilterBarComponent {
  @Input() filters: string[] = [];
  @Input() active = '';
  @Output() selected = new EventEmitter<string>();
}
