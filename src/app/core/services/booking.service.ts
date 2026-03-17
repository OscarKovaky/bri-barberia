import { Injectable, signal } from '@angular/core';
import { BookingRequest } from '../models/booking-request.model';

const BOOKING_KEY = 'black-steel-bookings';

@Injectable({ providedIn: 'root' })
export class BookingService {
  readonly lastBookingFolio = signal<string | null>(null);

  createBooking(request: BookingRequest): string {
    const folio = `BS-${Date.now().toString().slice(-6)}`;
    const current = this.getAll();
    localStorage.setItem(BOOKING_KEY, JSON.stringify([{ ...request, folio }, ...current]));
    this.lastBookingFolio.set(folio);
    return folio;
  }

  getAll(): Array<BookingRequest & { folio: string }> {
    const raw = localStorage.getItem(BOOKING_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as Array<BookingRequest & { folio: string }>;
    } catch {
      return [];
    }
  }
}
