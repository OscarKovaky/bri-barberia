import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage), title: 'Inicio | Black Steel Barber Studio' },
      { path: 'servicios', loadComponent: () => import('./features/services/services.page').then((m) => m.ServicesPage), title: 'Servicios | Black Steel Barber Studio' },
      { path: 'equipo', loadComponent: () => import('./features/team/team.page').then((m) => m.TeamPage), title: 'Equipo | Black Steel Barber Studio' },
      { path: 'reservar', loadComponent: () => import('./features/booking/booking.page').then((m) => m.BookingPage), title: 'Reservar | Black Steel Barber Studio' },
      { path: 'tienda', loadComponent: () => import('./features/shop/shop.page').then((m) => m.ShopPage), title: 'Tienda | Black Steel Barber Studio' },
      { path: 'tienda/:id', loadComponent: () => import('./features/shop/product-detail.page').then((m) => m.ProductDetailPage), title: 'Detalle de producto | Black Steel Barber Studio' },
      { path: 'carrito', loadComponent: () => import('./features/cart/cart.page').then((m) => m.CartPage), title: 'Carrito | Black Steel Barber Studio' },
      { path: 'checkout', loadComponent: () => import('./features/checkout/checkout.page').then((m) => m.CheckoutPage), title: 'Checkout | Black Steel Barber Studio' },
      { path: 'contacto', loadComponent: () => import('./features/contact/contact.page').then((m) => m.ContactPage), title: 'Contacto | Black Steel Barber Studio' },
      { path: 'faq', loadComponent: () => import('./features/faq/faq.page').then((m) => m.FaqPage), title: 'FAQ | Black Steel Barber Studio' },
      { path: 'politicas', loadComponent: () => import('./features/policies/policies.page').then((m) => m.PoliciesPage), title: 'Políticas | Black Steel Barber Studio' },
      { path: '**', redirectTo: '' }
    ]
  }
];
