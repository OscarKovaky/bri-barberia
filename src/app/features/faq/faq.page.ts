import { Component } from '@angular/core';
import { FAQS } from '../../core/constants/mock-data';
import { FaqComponent } from '../../shared/components/faq.component';
@Component({standalone:true,imports:[FaqComponent],template:`<h1>Preguntas frecuentes</h1><app-faq [items]="faqs"></app-faq>`})
export class FaqPage{ readonly faqs=FAQS; }
