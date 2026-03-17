import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <aside class="summary">
      <h3>Resumen</h3>
      <div class="row"><span>Subtotal</span><strong>{{ subtotal | currency:'MXN' }}</strong></div>
      <div class="row"><span>Envío</span><strong>{{ shipping | currency:'MXN' }}</strong></div>
      <hr />
      <div class="row total"><span>Total</span><strong>{{ total | currency:'MXN' }}</strong></div>
    </aside>
  `,
  styles: [
    `.summary{padding:1.2rem;border:1px solid var(--border);border-radius:14px;background:linear-gradient(160deg,rgba(255,255,255,.02),rgba(255,255,255,.005));display:grid;gap:.75rem;box-shadow:var(--shadow)}`,
    `h3{font-size:1.05rem}`,
    `.row{display:flex;justify-content:space-between;gap:.8rem;color:#d4d0c9}`,
    `.row.total{font-size:1.15rem;color:var(--text)}`,
    `hr{width:100%;border:none;border-top:1px solid var(--border)}`
  ]
})
export class CartSummaryComponent {
  @Input() subtotal = 0;
  @Input() shipping = 0;
  @Input() total = 0;
}
