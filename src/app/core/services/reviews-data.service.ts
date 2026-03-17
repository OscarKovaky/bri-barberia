import { Injectable } from '@angular/core';
import { REVIEWS } from '../constants/mock-data';

@Injectable({ providedIn: 'root' })
export class ReviewsDataService {
  getAll() { return REVIEWS; }
}
