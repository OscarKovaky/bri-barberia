import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BRAND, WEEK_SCHEDULE } from '../../core/constants/mock-data';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-page">
      <header class="page-header">
        <h1 class="page-title">Contacto</h1>
        <p class="page-subtitle">Estamos listos para atenderte y ayudarte a reservar tu próximo look.</p>
      </header>

      <div class="contact-grid">
        <article class="ui-card info-card">
          <h3>Datos de contacto</h3>
          <ul>
            <li><span>📍</span> {{ brand.location }}</li>
            <li><span>📱</span> WhatsApp: {{ brand.whatsapp }}</li>
            <li><span>📷</span> Instagram: {{ brand.instagram }}</li>
            <li><span>☎️</span> {{ brand.phone }}</li>
            <li><span>✉️</span> {{ brand.email }}</li>
          </ul>
        </article>

        <article class="ui-card hours-card">
          <h3>Horario</h3>
          <div class="schedule">
            <p *ngFor="let item of schedule"><strong>{{ item.day }}:</strong> {{ item.hours }}</p>
          </div>

          <div class="map-placeholder" aria-label="Contenedor de mapa pendiente de integración"></div>
        </article>
      </div>
    </section>
  `,
  styleUrl: './contact.page.scss'
})
export class ContactPage {
  readonly brand = BRAND;
  readonly schedule = WEEK_SCHEDULE;
}
