import { Component, Input } from '@angular/core';
@Component({selector:'app-badge',standalone:true,template:`<span class="badge">{{text}}</span>`,styles:[`.badge{background:#d6ae62;color:#111;padding:.2rem .5rem;border-radius:999px;font-weight:700;font-size:.75rem}`]})
export class BadgeComponent{ @Input() text=''; }
