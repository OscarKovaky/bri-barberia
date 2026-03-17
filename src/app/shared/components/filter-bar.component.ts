import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({selector:'app-filter-bar',standalone:true,imports:[CommonModule],template:`<div class="filters"><button *ngFor="let f of filters" (click)="selected.emit(f)" [class.active]="active===f">{{f}}</button></div>`,styles:[`.filters{display:flex;gap:.5rem;flex-wrap:wrap}.filters button{padding:.5rem .9rem;background:#202020;border:1px solid #333;color:#f6f1e9;border-radius:999px}.active{border-color:#d6ae62;color:#d6ae62}`]})
export class FilterBarComponent{ @Input() filters: string[]=[]; @Input() active=''; @Output() selected = new EventEmitter<string>(); }
