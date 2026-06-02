import { Car, Excursion, Testimonial } from "./types";

export const CARS: Car[] = [
  {
    id: "dzire",
    name: "Swift Dzire",
    tagline: "The Reliable Classic",
    type: "Sedan / Executive",
    capacity: "4+1",
    ac: true,
    ratePerKm: 12,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKOo9JlgGDPERMf4fPYDd1Hihpx0AuxvgxFD11CcmNMGRVvXHEaKdNaGMMAkZz6VTg3Ck0TfQu3iOASI5hCIUlowbHqK2cmNGbtFQU1aE5ghGZ6gSQfQ6iBjiqzZfvOUUFylcO9SazT7lv-Xe3idzXxi6oyyYSU4LFhkqFyhkSEqu9a3O3cssRIQlp09fogae8R0YBTQmYIU8GFzxeFmnO-M03gfvdz9amBdmFAZkvDCVHrRxKukLltufVITt6dPSM2NBnZfmVIwo",
    description: "Punctual, spotless and comfortable choice for transfers to VNS Airport and local city travel with professional chauffeur assistance."
  },
  {
    id: "innova",
    name: "Innova Crysta",
    tagline: "The Golden Standard of Comfort",
    type: "Premium MPV / Luxury",
    capacity: "6+1",
    ac: true,
    ratePerKm: 18,
    popular: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQerpjgI8eX4UGeBTsx_kZFV2pZjOy-VxNmOI2q988WlImXNjggq7zsr5BqhQVm1O7HjYY2-5UkoOnNPzTc5k7bS_XdzwNeFmzoYLbDiNdhyM6Zw4fF_e5JPQusdtei1JYCnwfaImWnuNIaByg94sZt2P0guludo57yNQNlbKamYKCZzeAxhtW64KhHvfS-2B-YRovR2mMT9up3_HJCqRcKMXVmaquwsKeanZRpOJrkoxOj36OdomWGv38BhUmM1lMb1gPzbH5W5c",
    description: "Robust yet luxurious, perfectly suited for family travel, long-distance excursions and group tours. Offers supreme ride comfort."
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    tagline: "Elite Spiritual Carrier",
    type: "Luxury Coach / Premium",
    capacity: "12-26",
    ac: true,
    ratePerKm: 25,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALAk961sPgJbO4PN3epQotMHe8I_hr8Oq8O5oVT9lYjnfmtQWu6yanKyzfwxbiUYOYMsvMiJvI83Ly6lOQWJgXcBo-MuALym2ctGJBx_nVWMvouqcaHLcLDhu_-MCxq6uz6BLbKt-1z2x33Zx0ktlCu6wCQd8M36_6dicBfXfuavQWJjW_n6_h3OK7XpHI4ObxQGQCnh40t08Ek9sFAm1zg8seMaMsxFUQ0vN03DYwzKqp3LsmWZ2Dwr7k13CaZ2_LIWH0myqICIE",
    description: "Premium, customized mini-coach with tinted screens and extra luggage space. Built for comfortable collective pilgrimages and celebrations."
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: "ayodhya",
    destination: "Ayodhya",
    distanceKm: 220,
    durationHrs: 4.5,
    theme: "Divine Heritage",
    typeTag: "Lord Ram's Birthplace",
    description: "The birthplace of Lord Ram. A journey of faith and spiritual surrender to the holy banks of the Saryu River.",
    image: "https://images.unsplash.com/photo-1608976451630-f655ae8bccc0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "prayagraj",
    destination: "Prayagraj",
    distanceKm: 120,
    durationHrs: 2.5,
    theme: "Holy Bath",
    typeTag: "The sacred Triveni Sangam",
    description: "The divine confluence of Ganga, Yamuna, and Saraswati. Experience spiritual rituals and sacred bathing pools.",
    image: "https://images.unsplash.com/photo-1545638136-1e96a4a60f9e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bodhgaya",
    destination: "Bodh Gaya",
    distanceKm: 250,
    durationHrs: 5.5,
    theme: "Zen Bliss",
    typeTag: "Enlightenment Site",
    description: "The place of ultimate cosmic peace. Walk near the sacred Bodhi Tree where Buddha attained supreme enlightenment.",
    image: "https://images.unsplash.com/photo-1609137144814-7cf6bdfb295f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "vindhyachal",
    destination: "Vindhyachal",
    distanceKm: 65,
    durationHrs: 1.5,
    theme: "Divine Energy",
    typeTag: "Shakti Peeth Triangle",
    description: "Revered center of power. Explore the mystical triangle of Vindhyavasini, Kali Khoh, and Ashtabhuja temples.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abad?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gorakhpur",
    destination: "Gorakhpur",
    distanceKm: 230,
    durationHrs: 4.5,
    theme: "Ancient Sect",
    typeTag: "Nath Monastic Center",
    description: "Explore the historic Gorakhnath Temple, featuring dynamic spiritual heritage and peaceful monastic settings.",
    image: "https://images.unsplash.com/photo-1602616693717-de7457ef45aa?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "lucknow",
    destination: "Lucknow",
    distanceKm: 320,
    durationHrs: 6.0,
    theme: "Cultural Grace",
    typeTag: "City of Nawabs",
    description: "Traverse the historic paths of fine culinary, majestic architectures, and mystical Sufi spiritual shrines.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600"
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
