import { Injectable } from '@angular/core';
import { BARBERS } from '../constants/mock-data';

@Injectable({ providedIn: 'root' })
export class BarbersDataService {
  getAll() { return BARBERS; }
  getAvailable() { return BARBERS.filter((barber) => barber.available); }
}
