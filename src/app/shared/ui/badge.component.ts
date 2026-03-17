import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<span class="badge" [attr.data-kind]="text.toLowerCase()">{{ text }}</span>`,
  styles: [
    `.badge{display:inline-flex;align-items:center;justify-content:center;width:max-content;padding:.26rem .62rem;border-radius:999px;font-weight:700;font-size:.74rem;letter-spacing:.2px;background:#d6ae62;color:#111}`,
    `.badge[data-kind="nuevo"]{background:#8ad4ff;color:#07243a}`,
    `.badge[data-kind="oferta"]{background:#ffad6e;color:#2f1600}`,
    `.badge[data-kind="top"]{background:#d6ae62;color:#111}`
  ]
})
export class BadgeComponent {
  @Input() text = '';
}
