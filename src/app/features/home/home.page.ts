import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BARBERS, BRAND, FAQS, PROMOS, WEEK_SCHEDULE } from '../../core/constants/mock-data';
import { ProductsDataService } from '../../core/services/products-data.service';
import { ReviewsDataService } from '../../core/services/reviews-data.service';
import { ServicesDataService } from '../../core/services/services-data.service';
import { BarberCardComponent } from '../../shared/components/barber-card.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner.component';
import { FaqComponent } from '../../shared/components/faq.component';
import { GalleryComponent } from '../../shared/components/gallery.component';
import { HeroComponent } from '../../shared/components/hero.component';
import { ProductCardComponent } from '../../shared/components/product-card.component';
import { ReviewCardComponent } from '../../shared/components/review-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { ServiceCardComponent } from '../../shared/components/service-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeroComponent, SectionTitleComponent, ServiceCardComponent, BarberCardComponent, ReviewCardComponent, ProductCardComponent, GalleryComponent, FaqComponent, CtaBannerComponent],
  template: `
    <app-hero [title]="brand.name" [subtitle]="brand.slogan"></app-hero>
    <section class="quick"><div>⭐ 4.9</div><div>📍 {{brand.location}}</div><div>🕒 Lun-Sáb 10:00-20:00</div></section>
    <app-section-title title="Servicios destacados" subtitle="Experiencias premium para tu imagen"></app-section-title>
    <div class="grid"> <app-service-card *ngFor="let s of featuredServices" [item]="s"></app-service-card> </div>
    <app-section-title title="Promociones" subtitle="Aprovecha beneficios de temporada"></app-section-title>
    <div class="grid"> <article class="card" *ngFor="let p of promos"><h3>{{p.title}}</h3><p>{{p.description}}</p><strong>{{p.code}}</strong></article> </div>
    <app-section-title title="Productos top" subtitle="Calidad profesional en casa"></app-section-title>
    <div class="grid"> <app-product-card *ngFor="let p of featuredProducts" [item]="p"></app-product-card> </div>
    <app-section-title title="Nuestro equipo" subtitle="Barberos especialistas"></app-section-title>
    <div class="grid"> <app-barber-card *ngFor="let b of barbers" [item]="b"></app-barber-card> </div>
    <app-section-title title="Reseñas" subtitle="Clientes que confían en nosotros"></app-section-title>
    <div class="grid"> <app-review-card *ngFor="let r of reviews" [item]="r"></app-review-card> </div>
    <app-section-title title="Galería" subtitle="Inspiración de estilos"></app-section-title>
    <app-gallery></app-gallery>
    <app-section-title title="Ubicación y contacto" subtitle="Estamos listos para atenderte"></app-section-title>
    <div class="grid"><article class="card"><p>📍 {{brand.location}}</p><p>📱 {{brand.whatsapp}}</p><p>📷 {{brand.instagram}}</p></article><article class="card"><h3>Horarios</h3><p *ngFor="let h of schedule">{{h.day}}: {{h.hours}}</p></article></div>
    <app-section-title title="FAQ" subtitle="Dudas frecuentes"></app-section-title>
    <app-faq [items]="faqs"></app-faq>
    <app-cta-banner></app-cta-banner>
  `
})
export class HomePage {
  private readonly servicesData = inject(ServicesDataService);
  private readonly productsData = inject(ProductsDataService);
  private readonly reviewsData = inject(ReviewsDataService);

  readonly brand = BRAND;
  readonly featuredServices = this.servicesData.getFeatured();
  readonly featuredProducts = this.productsData.getFeatured().slice(0, 4);
  readonly barbers = BARBERS;
  readonly reviews = this.reviewsData.getAll();
  readonly schedule = WEEK_SCHEDULE;
  readonly faqs = FAQS;
  readonly promos = PROMOS;
}
