import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({selector:'app-faq',standalone:true,imports:[CommonModule],template:`<div class="faq"><details *ngFor="let item of items"><summary>{{item.question}}</summary><p>{{item.answer}}</p></details></div>`,styles:[`.faq{display:grid;gap:.5rem}details{border:1px solid #333;padding:.8rem;border-radius:8px}`]})
export class FaqComponent{ @Input() items: Array<{question:string;answer:string}>=[]; }
