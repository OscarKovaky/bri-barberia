import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="navbar">
      <a routerLink="/" class="brand">Black Steel</a>
      <button class="menu-btn" (click)="open.set(!open())">☰</button>
      <nav [class.open]="open()">
        <a routerLink="/servicios" routerLinkActive="active">Servicios</a>
        <a routerLink="/equipo" routerLinkActive="active">Equipo</a>
        <a routerLink="/reservar" routerLinkActive="active">Reservar</a>
        <a routerLink="/tienda" routerLinkActive="active">Tienda</a>
        <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
        <a routerLink="/carrito" routerLinkActive="active">Carrito ({{ cartCount() }})</a>
      </nav>
    </header>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly cartService = inject(CartService);
  readonly cartCount = computed(() => this.cartService.totalItems());
  readonly open = signal(false);
}
