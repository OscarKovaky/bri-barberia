import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BarbersDataService } from '../../core/services/barbers-data.service';
import { BarberCardComponent } from '../../shared/components/barber-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';

@Component({standalone:true,imports:[CommonModule,SectionTitleComponent,BarberCardComponent],template:`<app-section-title title="Equipo" subtitle="Conoce a nuestros barberos"></app-section-title><div class="grid"><app-barber-card *ngFor="let b of barbers" [item]="b"></app-barber-card></div>`})
export class TeamPage{ private readonly data=inject(BarbersDataService); readonly barbers=this.data.getAll(); }
