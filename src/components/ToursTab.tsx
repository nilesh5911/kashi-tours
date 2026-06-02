import React, { useState } from "react";
import { 
  Compass, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle,
  Gem,
  BookOpen
} from "lucide-react";
import { EXCURSIONS } from "../data";

interface ToursTabProps {
  onPlanTrip: (pickup: string, drop: string) => void;
}

export default function ToursTab({ onPlanTrip }: ToursTabProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes("@")) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 4000);
    }
  };

  return (
    <div className="space-y-16">
      
      {/* Divine Horizons Hero Banner Segment */}
      <section className="relative z-0 h-[65vh] flex flex-col justify-center items-center pt-24 text-center text-white bg-[#0a0a0a]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1561361513-2d000a45f0d2?auto=format&fit=crop&q=80&w=1200" 
            alt="Evening Ghat glowing ceremonies in Varanasi" 
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0a0a]/30 to-[#f9f9fb]"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 space-y-6 z-10">
          <div className="inline-flex items-center gap-4 mb-2">
            <span className="w-8 h-px bg-[#c5a880]/60"></span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#c5a880]">Sacred Roadtrips &amp; Journeys</span>
            <span className="w-8 h-px bg-[#c5a880]/60"></span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none drop-shadow-xl">
            Divine Horizons Await
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-loose tracking-wide font-light">
            Experience the exquisite spiritual soul of India with KASI TOUR's exclusive luxury outstation packages. Travel with supreme peace of mind.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => onPlanTrip("Chetganj, Kasi Tour HQ", "Ayodhya (Divine Ram Janmabhoomi)")}
              className="w-full sm:w-auto bg-gradient-to-r from-[#c5a880] to-[#8c7355] text-white font-sans font-bold text-[11px] uppercase tracking-widest px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(197,168,128,0.2)] hover:shadow-[0_15px_30px_rgba(197,168,128,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              Explore Ayodhya Route
            </button>
            <button 
              onClick={() => onPlanTrip("Chetganj, Kasi Tour HQ", "Prayagraj (Triveni Sangam)")}
              className="w-full sm:w-auto border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white text-white font-sans font-bold text-[11px] uppercase tracking-widest px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              Our Packages
            </button>
          </div>
        </div>
      </section>

      {/* Excursions from Kasi Section matching Screen 4 */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-12 text-center space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#141416]">Excursions from Kashi</h2>
          <p className="text-[#4a4a4a] text-sm tracking-wide">Seamless premium day tours &amp; overnight voyages to India's most mystical holy sites.</p>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXCURSIONS.map((ex) => (
            <div key={ex.id} className="bg-white rounded-3xl overflow-hidden luxury-shadow-hover border border-gray-100 flex flex-col justify-between group transition-all duration-300">
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img 
                  src={ex.image} 
                  alt={ex.destination} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 glass-panel text-[#8c7355] text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  📍 {ex.distanceKm} KM
                </span>
                <span className="absolute bottom-4 left-4 glass-panel-dark text-[#e5c299] text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  {ex.theme}
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-display text-2xl font-bold text-[#141416] leading-tight">{ex.destination}</h3>
                    <span className="text-[10px] text-[#4a4a4a] font-sans tracking-wide whitespace-nowrap pt-1">Approx {ex.durationHrs} hrs trip</span>
                  </div>
                  <p className="text-[#8c7355] font-sans text-[10px] font-bold uppercase tracking-[0.2em]">{ex.typeTag}</p>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{ex.description}</p>
                </div>

                <button 
                  onClick={() => onPlanTrip("Chetganj, Kasi Tour HQ", ex.destination)}
                  className="w-full border border-[#e5c299]/50 hover:border-[#c5a880] bg-[#fdfdfd] hover:bg-[#c5a880]/5 text-[#141416] hover:text-[#8c7355] font-sans font-bold text-[10px] uppercase tracking-[0.2em] py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  Plan Pilgrimage <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Kashi Experiences Section matching Bento-Grid */}
      <section className="bg-[#0d0d0f] py-24 text-white px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c5a880]/5 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c5a880]/10 via-transparent to-transparent"></div>
        <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
          
          <div className="text-center space-y-4">
            <span className="text-[#c5a880] font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Curated Packages</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Signature Kashi Experiences</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto"></div>
          </div>

          {/* Bento Style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Box (Tall) */}
            <div className="md:col-span-1 relative min-h-[400px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80&w=600" 
                alt="Kashi golden structures template" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <h3 className="font-display text-2xl font-bold tracking-tight">Kashi Darshan</h3>
                <p className="text-xs text-gray-300 leading-relaxed">Full temple circuits, early morning boat ritual, and local culinary expeditions perfectly organized.</p>
                <button 
                  onClick={() => onPlanTrip("Chetganj, Kasi Tour HQ", "Kashi Vishwanath Temple Gateway")}
                  className="font-sans text-xs font-bold text-[#f4b400] uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right stack (2 Rows) */}
            <div className="md:col-span-2 grid grid-rows-2 gap-6">
              
              {/* Row 1 (Evening Ganga Aarti) */}
              <div className="relative min-h-[190px] rounded-3xl overflow-hidden group flex items-end">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwNfOHk6HOqopMoJF1AplmqEWcV3drm0a2J22YKgsiZ7vVpuwjHsa0CZigpJu9Tny8EgpYflOKPRXw5ekG_OMt99t0--929czwcycD8YWjxv-HGshD6eMndbtMZX-kxFWAtqIpbbsZ1XJs0QbPiTVdylSp6W4uhS1RINyBTTcBzs-qPspxm2xfP8RH2WxOsw3DGZhe3KjzlM_uYl22PWk-ChxghXpOaWI-AltOhaLrbx5TtMjsIZNBN7M34HTt0NRC2bTEFh4yPjo" 
                  alt="Evening Ganga Aarti ceremony" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="relative z-10 p-6">
                  <h4 className="font-display text-xl font-bold">Evening Ganga Aarti Seats</h4>
                  <p className="text-xs text-gray-300 max-w-sm mt-1">Pre-reserved prime ghat balcony seating tickets for the spectacular oil lamp light ritual.</p>
                </div>
              </div>

              {/* Row 2 (Grid of 2 blocks) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="relative min-h-[180px] rounded-3xl overflow-hidden group flex items-end bg-black/40 border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1605371924599-2c03b1ebd1ad?auto=format&fit=crop&q=80&w=500" 
                    alt="Authentic Temple architecture doors" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-750"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="relative z-10 p-5">
                    <h5 className="font-display text-base font-bold text-[#f4b400]">Temple Circuits</h5>
                    <p className="text-[11px] text-gray-300 mt-0.5">Explore Sarnath, Kal Bhairav, and Durga Mandir with priority guide pass.</p>
                  </div>
                </div>

                <div className="relative min-h-[180px] rounded-3xl overflow-hidden group flex items-end bg-black/40 border border-white/5">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmI424y0k-kJbEhEApPpFvNH4ZjEZWpFaK0Oq33QmgIlXjLaP3BlBlyn5Foxz6sdvQDJxqySoF7_hfQGOizOFJD5o4XJN2b1adjBmhKvXZbUFi6s5zEt25_0s8Wm4H7AAoXVr1S57SHPV8VcjiFzbw8zpOnG79UQGPHzaknyrt8avmAiWNS8jgv8PS21EMDzU0HxhIzqj3xoQSLa2bs5ELq2J6TaJbNtZeooAKCU8WaDazqM3ZfANCOxFD-Xex6skz6c9ol6BEgk" 
                    alt="Chauffeur Car" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-750"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="relative z-10 p-5">
                    <h5 className="font-display text-base font-bold text-[#f4b400]">Premium Chauffeur</h5>
                    <p className="text-[11px] text-gray-300 mt-0.5">Comfortable travel with professional concierge, complimentary snacks &amp; Wi-Fi.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Divine Fragments - Aesthetic Image Gallery with Twain Quote screen layout */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        <div className="text-center mb-16">
          <span className="text-[#8c7355] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-[#e5c299]/20 px-4 py-1.5 rounded-full border border-[#e5c299]/30">Divine Fragments</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-6 text-[#141416]">Spiritual Stillness Captured</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden luxury-shadow bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=500" 
                alt="Sadhu sitting at the ghat with holy marks on face" 
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden luxury-shadow bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1561361513-2d000a45f0d2?auto=format&fit=crop&q=80&w=500" 
                alt="Golden sunrise reflecting on Ganges river" 
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* Golden Center Column with Twain Quote */}
          <div className="bg-gradient-to-br from-[#c5a880] to-[#8c7355] text-white p-10 rounded-2xl flex flex-col justify-center text-center space-y-6 luxury-shadow aspect-[4/5] md:aspect-auto">
            <span className="text-6xl text-white/30 font-display leading-none drop-shadow-sm">“</span>
            <p className="font-display text-xl md:text-2xl font-bold leading-relaxed italic drop-shadow-md">
              "Varanasi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together."
            </p>
            <div className="h-px w-16 bg-white/40 mx-auto"></div>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-white/90 drop-shadow-sm">— Mark Twain</p>
          </div>

          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=500" 
                alt="Luxury SUV cruising Varanasi highway during twilight" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&q=80&w=500" 
                alt="Ganga river flow ritual lights floating" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plan your pilgrimage newsletter registration */}
      <section className="bg-[#f5f2eb] border-t border-[#c5a880]/20 py-24 px-6 md:px-12 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#c5a880] to-[#8c7355] rounded-full flex items-center justify-center mx-auto shadow-md">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-4xl font-bold text-[#141416]">Plan Your Pilgrimage</h3>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">Receive certified travel guides, auspicious river timings and exclusive spiritual packages from Varanasi's premier concierge.</p>
          </div>

          {subscribed ? (
            <div className="bg-white/80 border border-[#c5a880] text-[#8c7355] p-5 rounded-xl flex items-center justify-center gap-3 max-w-sm mx-auto animate-pulse luxury-shadow">
              <CheckCircle className="w-5 h-5 text-[#8c7355]" />
              <span className="text-[11px] font-bold font-sans tracking-wide uppercase">Subscribed to Spiritual Guides</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto items-center">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your preferred email address"
                className="w-full bg-white border border-gray-200 focus:border-[#c5a880] outline-none rounded-full px-6 py-4 text-sm font-semibold transition-colors shadow-sm"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#1c1d21] hover:bg-[#8c7355] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shrink-0 cursor-pointer shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
