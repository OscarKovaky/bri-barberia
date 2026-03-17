import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Barber } from '../../core/models/barber.model';

@Component({selector:'app-barber-card',standalone:true,imports:[RouterLink],template:`<article class="card"><h3>{{item.name}}</h3><p>{{item.specialty}}</p><p>{{item.experienceYears}} años • ⭐ {{item.rating}}</p><a routerLink="/reservar" [queryParams]="{barber:item.id}">Reservar con este barbero</a></article>`,styleUrl:'./cards.scss'})
export class BarberCardComponent{ @Input({required:true}) item!: Barber; }
