import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({selector:'app-cart-summary',standalone:true,imports:[CurrencyPipe],template:`<aside class="summary"><p>Subtotal: {{subtotal|currency:'MXN'}}</p><p>Envío: {{shipping|currency:'MXN'}}</p><h3>Total: {{total|currency:'MXN'}}</h3></aside>`,styles:[`.summary{padding:1rem;border:1px solid #333;border-radius:8px}`]})
export class CartSummaryComponent{ @Input() subtotal=0; @Input() shipping=0; @Input() total=0; }
