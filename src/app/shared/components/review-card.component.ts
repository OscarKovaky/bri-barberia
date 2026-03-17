import { Component, Input } from '@angular/core';
import { Review } from '../../core/models/review.model';

@Component({selector:'app-review-card',standalone:true,template:`<article class="card"><strong>{{item.customerName}}</strong><p>⭐ {{item.rating}}/5</p><p>“{{item.comment}}”</p></article>`,styleUrl:'./cards.scss'})
export class ReviewCardComponent{ @Input({required:true}) item!: Review; }
