import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar.component';
import { FooterComponent } from '../shared/components/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `<app-navbar></app-navbar><main class="container"><router-outlet></router-outlet></main><app-footer></app-footer>`,
  styles: [`.container{max-width:1120px;margin:0 auto;padding:0 1rem 2rem}`]
})
export class MainLayoutComponent {}
