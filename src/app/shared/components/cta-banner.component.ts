import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-cta-banner',standalone:true,imports:[RouterLink],template:`<section class="cta"><h3>Listo para tu nuevo look?</h3><a routerLink="/reservar">Agenda hoy</a></section>`,styles:[`.cta{background:#d6ae62;color:#111;padding:1.4rem;border-radius:10px;display:flex;justify-content:space-between;gap:1rem;align-items:center}.cta a{font-weight:700}`]})
export class CtaBannerComponent{}
