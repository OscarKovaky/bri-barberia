import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage), title: 'Inicio | AZTRO BARBER ESTUDIO' },
      { path: 'servicios', loadComponent: () => import('./features/services/services.page').then((m) => m.ServicesPage), title: 'Servicios | AZTRO BARBER ESTUDIO' },
      { path: 'equipo', loadComponent: () => import('./features/team/team.page').then((m) => m.TeamPage), title: 'Equipo | AZTRO BARBER ESTUDIO' },
      { path: 'reservar', loadComponent: () => import('./features/booking/booking.page').then((m) => m.BookingPage), title: 'Reservar | AZTRO BARBER ESTUDIO' },
      { path: 'tienda', loadComponent: () => import('./features/shop/shop.page').then((m) => m.ShopPage), title: 'Tienda | AZTRO BARBER ESTUDIO' },
      { path: 'tienda/:id', loadComponent: () => import('./features/shop/product-detail.page').then((m) => m.ProductDetailPage), title: 'Detalle de producto | AZTRO BARBER ESTUDIO' },
      { path: 'carrito', loadComponent: () => import('./features/cart/cart.page').then((m) => m.CartPage), title: 'Carrito | AZTRO BARBER ESTUDIO' },
      { path: 'checkout', loadComponent: () => import('./features/checkout/checkout.page').then((m) => m.CheckoutPage), title: 'Checkout | AZTRO BARBER ESTUDIO' },
      { path: 'contacto', loadComponent: () => import('./features/contact/contact.page').then((m) => m.ContactPage), title: 'Contacto | AZTRO BARBER ESTUDIO' },
      { path: 'faq', loadComponent: () => import('./features/faq/faq.page').then((m) => m.FaqPage), title: 'FAQ | AZTRO BARBER ESTUDIO' },
      { path: 'politicas', loadComponent: () => import('./features/policies/policies.page').then((m) => m.PoliciesPage), title: 'Políticas | AZTRO BARBER ESTUDIO' },
      { path: '**', redirectTo: '' }
    ]
  }
];
