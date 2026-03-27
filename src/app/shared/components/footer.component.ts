import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({selector:'app-footer',standalone:true,imports:[RouterLink],template:`<footer><p>© 2026 AZTRO BARBER ESTUDIO</p><a routerLink="/politicas">Políticas</a></footer>`,styles:[`footer{margin-top:2rem;padding:1rem;border-top:1px solid #2e2e2e;display:flex;justify-content:space-between;color:#9f9f9f}`]})
export class FooterComponent{}
