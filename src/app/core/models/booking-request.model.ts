export interface BookingRequest {
  customerName: string;
  phone: string;
  email?: string;
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  notes: string;
}
