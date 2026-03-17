import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `<section class="hero"><div><h1>{{title}}</h1><p>{{subtitle}}</p><div class="actions"><a routerLink="/reservar" class="btn">Reservar ahora</a><a routerLink="/servicios" class="btn btn-outline">Ver servicios</a></div></div></section>`,
  styleUrl: './hero.component.scss'
})
export class HeroComponent { @Input() title=''; @Input() subtitle=''; }
