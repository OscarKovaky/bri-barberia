import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { CartSummaryComponent } from '../../shared/components/cart-summary.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CartSummaryComponent, EmptyStateComponent],
  template: `
    <section class="checkout-page">
      <header class="page-header">
        <h1 class="page-title">Checkout</h1>
        <p class="page-subtitle">Completa tus datos y confirma tu pedido de forma rápida y clara.</p>
      </header>

      <div class="success" *ngIf="success">Pedido confirmado ✅ Gracias por tu compra.</div>

      <ng-container *ngIf="cart.items().length; else empty">
        <div class="checkout-layout">
          <form class="checkout-form ui-card" [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <section class="form-block">
              <h2>Datos del cliente</h2>
              <div class="fields two-cols">
                <label>Nombre
                  <input class="form-control" placeholder="Tu nombre completo" formControlName="customerName" />
                </label>
                <label>Teléfono
                  <input class="form-control" placeholder="10 dígitos" formControlName="phone" />
                </label>
              </div>
              <label>Email
                <input class="form-control" placeholder="correo@ejemplo.com" formControlName="email" />
              </label>
              <small class="field-error" *ngIf="form.controls.email.touched && form.controls.email.invalid">Ingresa un email válido.</small>
            </section>

            <section class="form-block">
              <h2>Dirección y entrega</h2>
              <label>Dirección
                <input class="form-control" placeholder="Calle, número, colonia" formControlName="address" />
              </label>
              <div class="fields two-cols">
                <label>Ciudad
                  <input class="form-control" placeholder="Ciudad" formControlName="city" />
                </label>
                <label>Método de entrega
                  <select class="form-control" formControlName="deliveryMethod">
                    <option>Recoger en sucursal</option>
                    <option>Entrega local</option>
                  </select>
                </label>
              </div>
            </section>

            <section class="form-block">
              <h2>Método de pago</h2>
              <select class="form-control" formControlName="paymentMethod">
                <option>Efectivo</option>
                <option>Transferencia</option>
                <option>Tarjeta dummy</option>
              </select>
            </section>

            <button class="btn-primary cta" [disabled]="form.invalid || loading">
              {{ loading ? 'Procesando...' : 'Confirmar pedido' }}
            </button>

          </form>

          <aside class="checkout-summary">
            <app-cart-summary [subtotal]="cart.subtotal()" [shipping]="cart.shipping()" [total]="cart.total()"></app-cart-summary>
          </aside>
        </div>
      </ng-container>

      <ng-template #empty>
        <app-empty-state title="No hay productos" message="Tu carrito está vacío, agrega productos antes de hacer checkout."></app-empty-state>
      </ng-template>
    </section>
  `,
  styleUrl: './checkout.page.scss'
})
export class CheckoutPage {
  readonly cart = inject(CartService);
  private readonly fb = inject(FormBuilder);

  loading = false;
  success = false;

  readonly form = this.fb.nonNullable.group({
    customerName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    city: ['', Validators.required],
    paymentMethod: ['Efectivo', Validators.required],
    deliveryMethod: ['Recoger en sucursal', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.success = true;
      this.loading = false;
      this.cart.clearCart();
      this.form.reset({
        customerName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        paymentMethod: 'Efectivo',
        deliveryMethod: 'Recoger en sucursal'
      });
    }, 700);
  }
}
