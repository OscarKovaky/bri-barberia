import { Injectable } from '@angular/core';
import { SERVICES } from '../constants/mock-data';

@Injectable({ providedIn: 'root' })
export class ServicesDataService {
  getAll() { return SERVICES; }
  getFeatured() { return SERVICES.filter((service) => service.featured); }
}
