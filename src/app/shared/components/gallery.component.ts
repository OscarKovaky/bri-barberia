import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({selector:'app-gallery',standalone:true,imports:[CommonModule],template:`<div class="gallery"><div *ngFor="let i of [1,2,3,4,5,6]" class="ph">Galería {{i}}</div></div>`,styles:[`.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:.6rem}.ph{aspect-ratio:1/1;background:#202020;border:1px solid #333;border-radius:8px;display:grid;place-items:center;color:#8f8f8f}`]})
export class GalleryComponent{}
