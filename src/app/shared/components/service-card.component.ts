import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../core/models/service-item.model';

@Component({selector:'app-service-card',standalone:true,imports:[CurrencyPipe,RouterLink],template:`<article class="card"><h3>{{item.name}}</h3><p>{{item.shortDescription}}</p><strong>{{item.price|currency:'MXN'}}</strong><a routerLink="/reservar">Reservar</a></article>`,styleUrl:'./cards.scss'})
export class ServiceCardComponent{ @Input({required:true}) item!: ServiceItem; }
