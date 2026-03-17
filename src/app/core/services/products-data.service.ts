import { Injectable } from '@angular/core';
import { PRODUCTS } from '../constants/mock-data';

@Injectable({ providedIn: 'root' })
export class ProductsDataService {
  getAll() { return PRODUCTS; }
  getFeatured() { return PRODUCTS.filter((product) => product.featured); }
  getById(id: string) { return PRODUCTS.find((product) => product.id === id); }
}
