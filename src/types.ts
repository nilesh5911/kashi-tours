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
  baseFare: number;
  perKmRate: number;
  includedDistanceKm: number;
  extraKmRate: number;
  maxPassengers: number;
  quoteOnly?: boolean;
  image: string;
  popular?: boolean;
  description: string;
}

export interface Excursion {
  id: string;
  destination: string;
  distanceKm: number;
  durationHrs: number;
  description: string;
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
