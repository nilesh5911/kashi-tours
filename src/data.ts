import { Car, Excursion, Testimonial } from "./types";

export const CARS: Car[] = [
  {
    id: "dzire",
    name: "Swift Dzire",
    tagline: "The Reliable Classic",
    type: "Sedan / Swift Dzire",
    capacity: "4+1",
    ac: true,
    baseFare: 2500,
    perKmRate: 21,
    includedDistanceKm: 120,
    extraKmRate: 12,
    maxPassengers: 4,
    image: "https://www.savitoursandtravels.in/assets/vehicles/maruti-dzire/dezire.jpeg",
    description: "Punctual, spotless and comfortable choice for transfers to VNS Airport and local city travel with professional chauffeur assistance."
  },
  {
    id: "innova",
    name: "Innova Crysta",
    tagline: "The Golden Standard of Comfort",
    type: "Premium SUV / Innova Crysta",
    capacity: "6+1",
    ac: true,
    baseFare: 3800,
    perKmRate: 32,
    includedDistanceKm: 120,
    extraKmRate: 15,
    maxPassengers: 6,
    popular: true,
    image: "https://images.unsplash.com/photo-1748215210950-536c6621629a?auto=format&fit=crop&fm=jpg&q=85&w=1200",
    description: "Robust yet luxurious, perfectly suited for family travel, long-distance excursions and group tours. Offers supreme ride comfort."
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    tagline: "Elite Spiritual Carrier",
    type: "Luxury Coach / Premium",
    capacity: "12-26",
    ac: true,
    baseFare: 0,
    perKmRate: 0,
    includedDistanceKm: 0,
    extraKmRate: 0,
    maxPassengers: 26,
    quoteOnly: true,
    image: "https://www.tempotravellerhire.in/jap/media/uploads/12-seater-deluxe2.jpg",
    description: "Premium, customized mini-coach with tinted screens and extra luggage space. Built for comfortable collective pilgrimages and celebrations."
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: "ayodhya",
    destination: "Ayodhya",
    distanceKm: 220,
    durationHrs: 4.5,
    description: "Visit the revered birthplace of Lord Ram and the sacred banks of the Saryu River."
  },
  {
    id: "prayagraj",
    destination: "Prayagraj",
    distanceKm: 120,
    durationHrs: 2.5,
    description: "Visit the Triveni Sangam, the meeting point of the Ganga, Yamuna, and Saraswati."
  },
  {
    id: "bodhgaya",
    destination: "Bodh Gaya",
    distanceKm: 250,
    durationHrs: 5.5,
    description: "Explore the Mahabodhi Temple and the site associated with the Buddha’s enlightenment."
  },
  {
    id: "vindhyachal",
    destination: "Vindhyachal",
    distanceKm: 65,
    durationHrs: 1.5,
    description: "Explore the Vindhyavasini, Kali Khoh, and Ashtabhuja temples."
  },
  {
    id: "gorakhpur",
    destination: "Gorakhpur",
    distanceKm: 230,
    durationHrs: 4.5,
    description: "Visit Gorakhnath Temple and experience the city’s Nath spiritual heritage."
  },
  {
    id: "lucknow",
    destination: "Lucknow",
    distanceKm: 320,
    durationHrs: 6.0,
    description: "Discover historic architecture, Awadhi cuisine, and Sufi heritage in the City of Nawabs."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rajesh",
    name: "Rajesh Sharma",
    location: "New Delhi",
    rating: 5,
    quote: "Exceptional service! The driver was very knowledgeable about Sarnath and the Ghats. The car was spotless, and the journey was highly peaceful.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWjG7Hb5RDdMHMK0W9N21FCoVNWG7L1Mh80w4EMi_K7kfACsnXzxXiKiQyPchXDA1QvBoICJyn7f9KIpZ7Z3J4hXT-ZJcpK5LSVmUG2Fq2BtXEb2eiGT84FK3rEyl2PdDw-udusNQNxkybqC-TO2I29s6LNlddO6z_IfSu6Z-3Y8ZcMuHV5OPYH1a-AP4QF7kmfpZaw1f1fi2LaeJejFTU1imi8H9gTHGLu6LQNHhvQ3T8Cp0Q-aWeOXRgCQV1zENBziq8g6k_q6o"
  },
  {
    id: "ananya",
    name: "Ananya Verma",
    location: "Mumbai",
    rating: 5,
    quote: "Best outstation trip to Ayodhya. Punctual pickup and very smooth driving. Highly recommended for spiritual tours across India.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuArLSCd3OGuzMt6KeOO2LTOhmzmzZmenEYr2UVWuYYPaunhXhtLYEkDahX6KCWsS0NBS_Ub7x7AMbvYUnye0QxIiH7p7QOiCb1ou4LdndfCrQ4zfMKOXqw5WC1RxyzrqHFpwrIN68_5qPXGysKYdzt3sj4HGjKD3RraWv9V2JbW71vy9h320hwStQdvvfRlWdiIzCQipTalUOTx-Xt_aQkZmm1dywSCI_L4klMT_tPtPU5popNeS7pRZr6k0Fm-tJTgaFURRWhkbzM"
  },
  {
    id: "sandeep",
    name: "Sandeep Iyer",
    location: "Chennai",
    rating: 5,
    quote: "Our wedding guests were handled very professionally. The decorated Innova looked fantastic. Thank you Kasi Tour!",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwC2e2OYsoK_ptVJ-thPOTRb6aOeN7Iy5DBDs7LreRNAq3ALn5Nu_wW9VeZCEa25S0RyGpYsFWmpgTSxihp8ajiLjtThlX_mk8wMqZvCtNjfq71evhF5gDD_Q2zhD6pOO99MIDMkjmvAi8BBSMjcFaJ83bxgmUcCv5DiV9J0I203opIKPE4ZkBYI3dC3KbZxkfzDxz0z08tvbY30Ue4s2KmPDLhvKtS7m5qXQrLGS1sQDVRQrvQ71Ci9ISLf0W8jWVBXuQWblFltc"
  },
  {
    id: "emma",
    name: "Emma Wilson",
    location: "London",
    rating: 5,
    quote: "Experience of a lifetime. The morning boat ride followed by the city tour was perfectly coordinated and executed. 10/10 service.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHT1A8M8tmJAAYAlt7awofreiNXxkqkbNfJelu_HrsBXjt6T9J66fZ7Z1Hf0_STVKGSTs4T13zojEmfH0SiKkNJy-JPzcIRxvQpehIZ2OnfhkD6jRmyIZ5rkirFtrCI6CXaWLfUGUrBP41Lti2mKr0kUCAMJm3e3pbB2GLDtLwNbS2ByPXw9qnDDeDiBZxcKNi6lKSA14BpSL-F3e4sV4lNc7n6Latao6ncy7ph7ycQqkOgXz_oYgmh5HBK6a2qfgY1-A81Y6IOw"
  }
];

export const COMPARISONS = [
  { amenity: "Leather Interiors", executive: true, luxury: true, premium: true },
  { amenity: "Complimentary Water/Newspaper", executive: true, luxury: true, premium: true },
  { amenity: "Uniformed Chauffeur", executive: true, luxury: true, premium: true },
  { amenity: "On-board Premium Wi-Fi", executive: false, luxury: true, premium: true },
  { amenity: "Certified Spiritual Guide Service", executive: false, luxury: "+", premium: true },
  { amenity: "Airport Meet & Greet Service", executive: false, luxury: true, premium: true }
];

export interface FareBreakdown {
  pricingOption: "perKm" | "package";
  distanceKm: number;
  baseFare: number;
  includedDistanceKm: number;
  perKmRate: number;
  perKmCharge: number;
  extraDistanceKm: number;
  extraDistanceCharge: number;
  totalFare: number;
}

export type PricingOption = "perKm" | "package";

export function calculateVehicleFare(
  car: Car,
  distanceKm: number,
  pricingOption: PricingOption = "package",
): FareBreakdown | null {
  if (car.quoteOnly || !Number.isFinite(distanceKm) || distanceKm < 0) return null;

  const extraDistanceKm = pricingOption === "package"
    ? Math.max(0, distanceKm - car.includedDistanceKm)
    : 0;
  const perKmCharge = pricingOption === "perKm" ? distanceKm * car.perKmRate : 0;
  const extraDistanceCharge = pricingOption === "package"
    ? extraDistanceKm * car.extraKmRate
    : 0;

  return {
    pricingOption,
    distanceKm,
    baseFare: pricingOption === "package" ? car.baseFare : 0,
    includedDistanceKm: car.includedDistanceKm,
    perKmRate: car.perKmRate,
    perKmCharge,
    extraDistanceKm,
    extraDistanceCharge,
    totalFare: pricingOption === "perKm"
      ? Math.round(perKmCharge * 100) / 100
      : car.baseFare + extraDistanceCharge,
  };
}
