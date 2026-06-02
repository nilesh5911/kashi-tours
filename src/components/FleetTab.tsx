import React, { useState } from "react";
import { 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Clock, 
  UserCheck, 
  CreditCard, 
  Star, 
  BadgeCheck, 
  Car as CarIcon, 
  Volume2, 
  SlidersHorizontal,
  Navigation,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { CARS, TESTIMONIALS } from "../data";
import { Car } from "../types";

interface FleetTabProps {
  onBookCar: (carId: string) => void;
  onOpenConsultDetails: (pickup: string, drop: string) => void;
}

export default function FleetTab({ onBookCar, onOpenConsultDetails }: FleetTabProps) {
  // Live fare lookups
  const [pickupInput, setPickupInput] = useState("Varanasi Cantt Railway Station");
  const [dropInput, setDropInput] = useState("Lal Bahadur Shastri Airport (VNS)");
  const [selectedTripType, setSelectedTripType] = useState("One Way");
  const [selectedDateTime, setSelectedDateTime] = useState("2026-06-02T12:00");

  const handleCheckFare = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenConsultDetails(pickupInput, dropInput);
  };

  return (
    <div className="space-y-16">
      {/* Immersive Hero Header Section */}
      <section className="relative z-0 min-h-[92vh] flex flex-col justify-center items-center pt-24 overflow-hidden">
        {/* Cinematic Background with Sunset Varanasi image */}
        <div className="absolute inset-0 -z-10 bg-[#0a0a0a]">
          <img 
            className="w-full h-full object-cover opacity-55"
            alt="Cinematic shot of Varanasi Ghats"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy5Obq-T3k7u6i_drywdMG9AJGGy_-UdeaRfG3vN5BZXhrBETjcg3TEXe9Ceq2pHT7h8WQt-gWuvz83o2VZsfhfrH6TPEDjbWcGMSifYH03ACdHxlkP1g80cxA5Iuac3I_Gbvnnu2R-lKhyycLSXhAoqHOg27qMBzmcqn19s_dkD_sykTFuXeM2x7i_mOCfKlcsbF8w_FqYoYmejPXP7R3V1IdCwU9ty6kYV2GdLg94aiF1NVMh1yxeewHSkc5XkE19TYltLgy6I4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#f9f9fb]"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center relative z-10 space-y-8 mt-10">
          <div className="inline-flex items-center gap-4 text-[#c5a880] mb-4">
            <span className="w-8 h-px bg-[#c5a880]/60"></span>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold">Connect with Sacred India</span>
            <span className="w-8 h-px bg-[#c5a880]/60"></span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight drop-shadow-xl text-white">
            Explore Varanasi with <br /> <span className="text-gold-gradient italic font-normal tracking-wide">Comfort &amp; Trust</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-loose tracking-wide font-light">
            Premium Fleet Taxi Services, Secure Long-Distance Outstation Treks &amp; Hand-Tailored Spiritual Concierges. Journey safely through Kashi in peerless luxury.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onBookCar("innova")}
              className="w-full sm:w-auto bg-gradient-to-r from-[#c5a880] to-[#8c7355] text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(197,168,128,0.2)] hover:shadow-[0_15px_30px_rgba(197,168,128,0.4)] transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              Reserve Ride Now
            </button>
            <a
              href="https://wa.me/918577900710"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-white/30 text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#c5a880]" /> WhatsApp Booking
            </a>
          </div>
        </div>

        {/* Floating cards + 3D Luxury Car display */}
        <div className="relative w-full max-w-4xl h-56 sm:h-72 md:h-96 mt-6 mx-auto">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-24 bg-[#7a5900]/15 blur-3xl rounded-[100%]"></div>
          <img 
            className="relative z-20 w-full h-full object-contain gold-glow"
            alt="3D Pristine white Luxury Car"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmI424y0k-kJbEhEApPpFvNH4ZjEZWpFaK0Oq33QmgIlXjLaP3BlBlyn5Foxz6sdvQDJxqySoF7_hfQGOizOFJD5o4XJN2b1adjBmhKvXZbUFi6s5zEt25_0s8Wm4H7AAoXVr1S57SHPV8VcjiFzbw8zpOnG79UQGPHzaknyrt8avmAiWNS8jgv8PS21EMDzU0HxhIzqj3xoQSLa2bs5ELq2J6TaJbNtZeooAKCU8WaDazqM3ZfANCOxFD-Xex6skz6c9ol6BEgk"
          />

          {/* Floating badge 1 */}
          <div className="absolute top-4 left-4 md:left-2 glass-panel p-3.5 rounded-xl flex items-center gap-3 animate-float z-30" style={{ animationDuration: "6s" }}>
            <div className="bg-gradient-to-br from-[#c5a880] to-[#8c7355] p-2 rounded-full text-white shadow-md">
              <Clock className="w-4 h-4" />
            </div>
            <span className="font-sans text-xs font-bold tracking-wide text-[#141416]">24/7 Premium Support</span>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute bottom-8 right-4 md:right-2 glass-panel p-3.5 rounded-xl flex items-center gap-3 animate-float z-30" style={{ animationDuration: "7s", animationDelay: "1s" }}>
            <div className="bg-gradient-to-br from-[#1c1d21] to-[#0d0d0f] p-2 rounded-full text-[#c5a880] shadow-md border border-[#c5a880]/30">
              <UserCheck className="w-4 h-4" />
            </div>
            <span className="font-sans text-xs font-bold tracking-wide text-[#141416]">Professional Drivers Only</span>
          </div>
        </div>
      </section>

      {/* Embedded Live Booking Calculator Widget */}
      <section className="relative z-30 -mt-16 px-6 max-w-[1280px] mx-auto">
        <div className="glass-panel p-8 md:p-10 rounded-2xl luxury-shadow border border-white">
          <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8c7355] mb-6 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#c5a880]" /> Check Estimated Fare
          </h4>
          <form onSubmit={handleCheckFare} className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#4a4a4a] block">Pickup Location</label>
              <div className="flex items-center border-b border-gray-200 pb-2 focus-within:border-[#c5a880] transition-colors">
                <MapPin className="w-4 h-4 text-[#c5a880] mr-3 shrink-0" />
                <input 
                  type="text"
                  value={pickupInput}
                  onChange={(e) => setPickupInput(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full text-sm font-semibold outline-none text-[#141416]"
                  placeholder="Varanasi Cantt"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#4a4a4a] block">Drop Location</label>
              <div className="flex items-center border-b border-gray-200 pb-2 focus-within:border-[#c5a880] transition-colors">
                <Navigation className="w-4 h-4 text-[#c5a880] mr-3 shrink-0" />
                <input 
                  type="text"
                  value={dropInput}
                  onChange={(e) => setDropInput(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full text-sm font-semibold outline-none text-[#141416]"
                  placeholder="Airport (VNS)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#4a4a4a] block">Trip Class</label>
              <select 
                value={selectedTripType}
                onChange={(e) => setSelectedTripType(e.target.value)}
                className="bg-transparent border-none border-b border-gray-200 focus:border-[#c5a880] w-full text-sm font-semibold py-1 outline-none text-[#141416] cursor-pointer transition-colors"
              >
                <option value="One Way">One Way Trip</option>
                <option value="Round Trip">Round Trip Excursion</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#4a4a4a] block">Date &amp; Time</label>
              <div className="flex items-center border-b border-gray-200 pb-2 focus-within:border-[#c5a880] transition-colors">
                <Calendar className="w-4 h-4 text-[#c5a880] mr-3 shrink-0" />
                <input 
                  type="datetime-local"
                  value={selectedDateTime}
                  onChange={(e) => setSelectedDateTime(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full text-sm font-semibold outline-none text-[#141416]"
                />
              </div>
            </div>

            <div className="flex items-end pb-1">
              <button 
                type="submit"
                className="w-full bg-[#1c1d21] hover:bg-[#8c7355] text-white font-sans font-bold text-[11px] uppercase tracking-widest py-3.5 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Calculate Fare
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 mt-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#141416]">Tailored Spiritual Journeys</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 luxury-shadow hover:-translate-y-1 transition-all duration-300 group">
            <div className="aspect-square rounded-xl overflow-hidden mb-4 relative bg-gray-100">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXI2o4pNo_mUZ5s4dnMQrR3Wp2Wgs58TYuTZ1Dsep36D1-ciLNmZo-7VszndbMsiX-GpOzjUmw-5pgq_RNaAyoyDF4GVwyipWmgD-eB6JV_vDX1uDIt0BATdb96Dqb0DZdA3CQQ-xRl5Ie3-04nFuDrYvkjfYExZG9hLrqgxx_pNjlaJkQA3ZN6O8yHEF02yhrYjE4cemDoUaLQAjZo1qJ-etpgfsldDvuIZuVzCqgzfQmpusUyVByvABTPzyrtuJxTZZDFfR2OkY" 
                alt="Airport drop service" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1a1c1d] mb-1">Airport Transfer</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Punctual and comfortable luxury transfers to and from VNS Airport with dedicated luggage assembly.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 luxury-shadow hover:-translate-y-1 transition-all duration-300 group">
            <div className="aspect-square rounded-xl overflow-hidden mb-4 relative bg-gray-100">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwNfOHk6HOqopMoJF1AplmqEWcV3drm0a2J22YKgsiZ7vVpuwjHsa0CZigpJu9Tny8EgpYflOKPRXw5ekG_OMt99t0--929czwcycD8YWjxv-HGshD6eMndbtMZX-kxFWAtqIpbbsZ1XJs0QbPiTVdylSp6W4uhS1RINyBTTcBzs-qPspxm2xfP8RH2WxOsw3DGZhe3KjzlM_uYl22PWk-ChxghXpOaWI-AltOhaLrbx5TtMjsIZNBN7M34HTt0NRC2bTEFh4yPjo" 
                alt="Kashi Darshan sacred tour" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1a1c1d] mb-1">Kashi Darshan</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Guided Varanasi tours including Kashi Vishwanath, Sarnath Temple Complex, and sunset Ganga Aarti seats.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 luxury-shadow hover:-translate-y-1 transition-all duration-300 group">
            <div className="aspect-square rounded-xl overflow-hidden mb-4 relative bg-gray-100">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhe0cv5M9yr7xU7THE3rnq0UUT8quDEFaMYKP8I2tcv-SVABJSJzrEiNo7lDdZ1v54Xj1xtWvCOyeZ-K4CWbYuXH7siVT_seVwrA0oWdWaQHAAyv_l_L7yBPoTQwt9e-KBAiZvVdOvFdcUng9atetGzqkbTXA7gJAEZ5oRL84Wen14uwfX_baIy6Hjf2l48iqpA-dpLeEf6WIZqcZtZoTRPXhO1_lePw7y_xDtOr6AQTQvSKLGn0262LO3oObKPsd4eCbVyBLcWik" 
                alt="Outstation private travel" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1a1c1d] mb-1">Outstation Excursions</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Explore Ayodhya, Prayagraj Sangam, and Bodhgaya with safe long-distance luxury packages.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 luxury-shadow hover:-translate-y-1 transition-all duration-300 group">
            <div className="aspect-square rounded-xl overflow-hidden mb-4 relative bg-gray-100">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3vMrthrFyM-2Wl0XzzaPVV9dd3O51hzcpP9EMEaBvmJR-hbq5lK0r2G8QR7t4FmF-PSqwVyoyHdxBgrMUqMp9_tXRUsGEHiTOMCd83Etil4yZOiwyUvFGQ8U4mttFL7aG3qN90DQjHFJDClpezqp_N72c68UpvF5nHBVo1yr5uLwgZ8OFbxu7alePW-9mHFh3CC77zZGkZqrdDQ8d7d95dTeuixs0KGfcei8bAzmJJZBNEps40zn6rE_WMbeAND3qzEl7LCwbncI" 
                alt="Wedding luxury vehicles" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1a1c1d] mb-1">Auspicious Events</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Make wedding and ritual transport seamless with a premium coordinated fleet of flower-adorned cars.</p>
          </div>
        </div>
      </section>

      {/* Premium Fleet Pricing Grid Section */}
      <section className="bg-[#f5f2eb] py-20 px-6 md:px-12 mt-16">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#c5a880]/20 pb-8">
            <div>
              <span className="text-[#8c7355] font-sans text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">The Collection</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#141416]">Our Premium Fleet</h2>
            </div>
            <p className="text-[#4a4a4a] text-sm max-w-sm leading-relaxed">Meticulously maintained and detailed luxury vehicles configured to serve your specific entourage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARS.map((car) => (
              <div 
                key={car.id}
                className={`bg-white rounded-3xl overflow-hidden luxury-shadow border ${
                  car.popular ? "border-[#f4b400] ring-2 ring-[#ffdea3]/40" : "border-gray-100"
                } group flex flex-col justify-between`}
              >
                <div className="p-6 pb-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-display text-xl font-bold text-[#1a1c1d]">{car.name}</h3>
                    {car.popular && (
                      <span className="bg-[#f4b400]/20 text-[#654800] text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                        Popular Selection
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">{car.type}</p>
                  
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      👤 {car.capacity} Seats
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      ❄️ Silent AC
                    </span>
                  </div>
                </div>

                <div className="h-44 flex items-center justify-center p-4">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{car.description}</p>
                  
                  <div className="flex justify-between items-center bg-[#f9f9fb] p-3 rounded-xl border border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Starts at</p>
                      <p className="font-display text-lg font-bold text-[#7a5900]">₹{car.ratePerKm}/km</p>
                    </div>
                    <button 
                      onClick={() => onBookCar(car.id)}
                      className="bg-[#0a0a0a] text-white hover:bg-[#7a5900] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition cursor-pointer"
                    >
                      Book 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us & Driver Portrait Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8c7355]">Sanctity on Wheels</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#141416] leading-tight">Why KASI TOUR is Your Trusted Partner</h2>
            </div>

            <div className="space-y-6 relative border-l-2 border-[#ffdea3] pl-6 ml-4">
              <div className="space-y-1 relative">
                <div className="absolute -left-[32px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#f4b400] border-2 border-white"></div>
                <h4 className="font-sans font-bold text-base text-[#1a1c1d]">Safety First Always</h4>
                <p className="text-xs text-gray-500">Every luxury vehicle undergoes an intensive 20-point mechanical and sanitation checklist before every single dispatch.</p>
              </div>

              <div className="space-y-1 relative">
                <div className="absolute -left-[32px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#f4b400] border-2 border-white"></div>
                <h4 className="font-sans font-bold text-base text-[#1a1c1d]">Expert Local Chauffeurs</h4>
                <p className="text-xs text-gray-500">Our drivers are carefully certified local narrators who carry inside knowledge of ancient history, temples and river ghats.</p>
              </div>

              <div className="space-y-1 relative">
                <div className="absolute -left-[32px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#f4b400] border-2 border-white"></div>
                <h4 className="font-sans font-bold text-base text-[#1a1c1d]">Transparent Guaranteed Pricing</h4>
                <p className="text-xs text-gray-500">Zero hidden surcharges, zero peak-hour spikes. The quote computed is exactly what you pay. Honest terms for premium travel.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden luxury-shadow border border-[#d4c4ac]/30">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtP-QTX9IlceJGHecfmwtafVHgkkJZKR6GsTRyK6MymCFHdjIulLiQnknY9-qRmTmJesURND4tTVGKGCr0RbIyjOqh5qM02lv4f8RlmEa2b3XNBaXrBwOzn_d5Lwnq9N-13_nS0nieg8bC35eT7n6EQGZ-V1Vx2J2fJJBpQoQG68HLdYNyReHkiqDqKmdRFb7q7Q1uqPlHVPZhXntalUIopQiUKhpsNqUkxgWT3W7q3ujj-tqR8Axbj6CZhmOec2ibEsea-BcuVIk" 
                alt="Certified chauffeur standing next to luxury vehicle" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 15+ years experience badge overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl border border-[#d4c4ac]/40 luxury-shadow tracking-wide max-w-[200px]">
              <p className="font-display font-bold text-4xl text-[#7a5900] leading-none mb-1">15+</p>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-500">Years of Elite Varanasi Travel Service</p>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Scrolling Testimonials slider segment */}
      <section className="bg-[#0d0d0f] py-20 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#c5a880] font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Shared Experiences</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Voices of Our Travelers</h2>
            <p className="text-gray-400 text-sm tracking-wide">Meticulously gathered reviews from discerning pilgrims worldwide.</p>
          </div>

          {/* Scrolling Marquee Container */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap py-4">
              
              {/* Double mapping of testmonials for infinite carousel effect */}
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`}
                  className="inline-block w-80 md:w-96 glass-panel-dark p-8 rounded-2xl whitespace-normal shrink-0 transition-all hover:bg-white/5 text-left"
                >
                  <div className="flex text-[#c5a880] gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#c5a880]" />
                    ))}
                  </div>
                  <p className="text-xs italic text-gray-200 leading-relaxed mb-4">"{t.quote}"</p>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-10 h-10 rounded-full object-cover bg-neutral-800"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">{t.name}</p>
                      <p className="text-[10px] text-gray-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
