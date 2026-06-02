/**
 * Types and interfaces for the Kasi Tour luxury applet
 */

export interface Car {
  id: string;
  name: string;
  tagline?: string;
  type: string;
  capacity: string;
  ac: boolean;
  ratePerKm: number;
  image: string;
  popular?: boolean;
  description: string;
}

export interface Excursion {
  id: string;
  destination: string;
  distanceKm: number;
  durationHrs: number;
  theme: string;
  typeTag: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface Inquiry {
  name: string;
  phone: string;
  serviceType: string;
  message: string;
  dateCreated: string;
}

export interface Booking {
  pickupLocation: string;
  dropLocation: string;
  tripType: string;
  dateTime: string;
  carId?: string;
  calculatedPrice?: number;
}
