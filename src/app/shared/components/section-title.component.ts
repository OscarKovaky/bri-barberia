import { Component, Input } from '@angular/core';

@Component({selector:'app-section-title',standalone:true,template:`<div class="section-head"><h2>{{title}}</h2><p>{{subtitle}}</p></div>`,styleUrl:'./section-title.component.scss'})
export class SectionTitleComponent{ @Input() title=''; @Input() subtitle=''; }
