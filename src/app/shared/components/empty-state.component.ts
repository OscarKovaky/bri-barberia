import { Component, Input } from '@angular/core';
@Component({selector:'app-empty-state',standalone:true,template:`<div class="empty"><h3>{{title}}</h3><p>{{message}}</p></div>`,styles:[`.empty{border:1px dashed #444;padding:1.2rem;border-radius:10px;text-align:center;color:#b8b8b8}`]})
export class EmptyStateComponent{ @Input() title='Sin resultados'; @Input() message='Intenta cambiar filtros.'; }
