import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BRAND, WEEK_SCHEDULE } from '../../core/constants/mock-data';

@Component({standalone:true,imports:[CommonModule],template:`<h1>Contacto</h1><div class="grid"><article class="card"><p>📍 {{brand.location}}</p><p>📱 WhatsApp: {{brand.whatsapp}}</p><p>📷 Instagram: {{brand.instagram}}</p><p>☎️ {{brand.phone}}</p><p>✉️ {{brand.email}}</p></article><article class="card"><h3>Horario</h3><p *ngFor="let h of schedule">{{h.day}}: {{h.hours}}</p><div class="map">Mapa / ubicación</div></article></div>`,styles:[`.map{margin-top:1rem;min-height:180px;background:#202020;border:1px solid #333;border-radius:10px;display:grid;place-items:center}`]})
export class ContactPage{ readonly brand=BRAND; readonly schedule=WEEK_SCHEDULE; }
